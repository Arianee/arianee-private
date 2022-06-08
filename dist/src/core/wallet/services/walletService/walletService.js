"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __importDefault(require("@ethereumjs/common"));
var tx_1 = require("@ethereumjs/tx");
var tsyringe_1 = require("tsyringe");
var TransactionMapper_1 = require("../../../etherjsWeb3Transaction/TransactionMapper");
var configurationService_1 = require("../configurationService/configurationService");
var web3Service_1 = require("../web3Service/web3Service");
var WalletService = /** @class */ (function () {
    function WalletService(web3Service, configurationService) {
        var _this = this;
        this.web3Service = web3Service;
        this.configurationService = configurationService;
        this.isRemoteAccount = function () {
            return _this.privateKey === undefined && _this.address && _this.userCustomSign === undefined && !_this.metamask;
        };
        this.customCommon = common_1.default.forCustomChain('mainnet', {
            networkId: this.configurationService.arianeeConfiguration.chainId,
            name: this.configurationService.arianeeConfiguration.networkName,
            chainId: this.configurationService.arianeeConfiguration.chainId
        }, 'istanbul');
        this.signTransaction = function (transaction) { return __awaiter(_this, void 0, void 0, function () {
            var transactionMapped, tx, _a, signature, messageHash;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionMapped = new TransactionMapper_1.TransactionMapper(transaction).toEthereumjs();
                        tx = tx_1.Transaction.fromTxData(transactionMapped, { common: this.customCommon })
                            .serialize().toString('hex');
                        return [4 /*yield*/, this.sign(tx)];
                    case 1:
                        _a = _b.sent(), signature = _a.signature, messageHash = _a.messageHash;
                        return [2 /*return*/, { rawTransaction: signature, transactionHash: messageHash }];
                }
            });
        }); };
        this.signProof = function (data, privateKey) {
            if (privateKey === void 0) { privateKey = _this.privateKey; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.sign(data, privateKey)];
                });
            });
        };
        this.sign = function (data, privateKey) {
            if (privateKey === void 0) { privateKey = _this.privateKey; }
            return __awaiter(_this, void 0, void 0, function () {
                var signature, messageHash, message, decodedTx, signObject;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            message = data;
                            if (!privateKey) return [3 /*break*/, 1];
                            decodedTx = void 0;
                            try {
                                decodedTx = tx_1.Transaction.fromSerializedTx(Buffer.from(data, 'hex'), { common: this.customCommon });
                            }
                            catch (e) {
                            }
                            signObject = void 0;
                            if (decodedTx) {
                                message = JSON.stringify(decodedTx.toJSON());
                                signature = '0x' + decodedTx.sign(Buffer.from(privateKey.substring(2), 'hex')).serialize().toString('hex');
                                messageHash = this.web3Service.web3.utils.keccak256(signature);
                            }
                            else {
                                signObject = this.web3Service.web3.eth.accounts.sign(data, privateKey);
                                signature = signObject.signature;
                                messageHash = signObject.messageHash;
                            }
                            return [3 /*break*/, 7];
                        case 1:
                            if (!this.isRemoteAccount()) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.web3Service.web3.eth.personal.sign(data, this.address)];
                        case 2:
                            signature = _a.sent();
                            messageHash = this.web3Service.web3.eth.accounts.hashMessage(data);
                            return [3 /*break*/, 7];
                        case 3:
                            if (!this.userCustomSign) return [3 /*break*/, 4];
                            return [2 /*return*/, this.userCustomSign(data)];
                        case 4:
                            if (!this.metamask) return [3 /*break*/, 6];
                            return [4 /*yield*/, window.ethereum.request({
                                    method: 'personal_sign',
                                    params: [data, this.address]
                                })];
                        case 5:
                            signature = _a.sent();
                            messageHash = this.web3Service.web3.eth.accounts.hashMessage(data);
                            return [3 /*break*/, 7];
                        case 6: throw new Error('There is no signing account');
                        case 7: return [2 /*return*/, { message: message, signature: signature, messageHash: messageHash }];
                    }
                });
            });
        };
        this.isCustomSendTransaction = function () {
            return _this.userCustomSendTransaction !== undefined;
        };
        this.isCustomCall = function () {
            return _this.userCustomCall !== undefined;
        };
    }
    Object.defineProperty(WalletService.prototype, "customSendTransaction", {
        get: function () {
            var _this = this;
            return function (transaction) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.userCustomSendTransaction(transaction)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, __assign(__assign({ message: 'message sent through custom send transaction method' }, result), transaction)];
                    }
                });
            }); };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalletService.prototype, "address", {
        get: function () {
            return this.account.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalletService.prototype, "privateKey", {
        get: function () {
            return this.account.privateKey;
        },
        enumerable: true,
        configurable: true
    });
    WalletService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [web3Service_1.Web3Service,
            configurationService_1.ConfigurationService])
    ], WalletService);
    return WalletService;
}());
exports.WalletService = WalletService;
//# sourceMappingURL=walletService.js.map