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
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var web3_eth_contract_1 = require("web3-eth-contract");
var POAAndAriaService_1 = require("../wallet/services/POAAndAriaFaucet/POAAndAriaService");
var utilsService_1 = require("../wallet/services/utilService/utilsService");
var walletService_1 = require("../wallet/services/walletService/walletService");
var web3Service_1 = require("../wallet/services/web3Service/web3Service");
var flat_promise_1 = require("./flat-promise");
var TransactionMapper_1 = require("../etherjsWeb3Transaction/TransactionMapper");
var ArianeeContract = /** @class */ (function () {
    function ArianeeContract(contract, walletService, web3Service, poaAndAriaService, utilsService) {
        var _this = this;
        this.contract = contract;
        this.walletService = walletService;
        this.web3Service = web3Service;
        this.poaAndAriaService = poaAndAriaService;
        this.utilsService = utilsService;
        this.overideCall = function (transaction, data) { return __awaiter(_this, void 0, void 0, function () {
            var defaultTransaction, mergedTransaction;
            return __generator(this, function (_a) {
                if (this.walletService.isCustomCall()) {
                    return [2 /*return*/, this.walletService.userCustomCall(transaction, data)];
                }
                else {
                    defaultTransaction = {
                        from: this.walletService.address
                    };
                    mergedTransaction = __assign(__assign({}, defaultTransaction), transaction);
                    return [2 /*return*/, data.call(mergedTransaction)];
                }
                return [2 /*return*/];
            });
        }); };
        this.overideSend = function (transaction, data) { return __awaiter(_this, void 0, void 0, function () {
            var encodeABI, preparedTransaction, metamaskTransaction, txHash_1, watchReceipt_1, receipt, signTransaction, rawTransaction_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encodeABI = data.encodeABI();
                        return [4 /*yield*/, this.utilsService.prepareTransaction(encodeABI, this.contract.options.address, false, transaction)];
                    case 1:
                        preparedTransaction = _a.sent();
                        if (!this.walletService.isCustomSendTransaction()) return [3 /*break*/, 2];
                        return [2 /*return*/, this.walletService
                                .customSendTransaction(preparedTransaction)];
                    case 2:
                        if (this.walletService.isRemoteAccount()) {
                            return [2 /*return*/, this.web3Service.web3.eth.sendTransaction(preparedTransaction)
                                    .then(function (txHash) {
                                    _this.web3Service.web3.eth.getTransactionReceipt(txHash)
                                        .then(function (receipt) {
                                        return {
                                            undefined: undefined,
                                            receipt: receipt
                                        };
                                    });
                                })
                                    .catch(function (e) {
                                    return {
                                        receipt: e.message,
                                        error: e
                                    };
                                })];
                        }
                        if (!this.walletService.metamask) return [3 /*break*/, 5];
                        metamaskTransaction = new TransactionMapper_1.TransactionMapper(preparedTransaction).toMetamaskTransaction();
                        return [4 /*yield*/, window.ethereum.request({
                                method: 'eth_sendTransaction',
                                params: [metamaskTransaction]
                            })];
                    case 3:
                        txHash_1 = _a.sent();
                        if (txHash_1 === '0x0000000000000000000000000000000000000000000000000000000000000000') {
                            throw new Error('An error occurred while sending the transaction');
                        }
                        watchReceipt_1 = function () { return __awaiter(_this, void 0, void 0, function () {
                            var receipt;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, window.ethereum.request({
                                            method: 'eth_getTransactionReceipt',
                                            params: [txHash_1]
                                        })];
                                    case 1:
                                        receipt = _a.sent();
                                        if (receipt === null) {
                                            return [2 /*return*/, watchReceipt_1()];
                                        }
                                        else {
                                            return [2 /*return*/, receipt];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, watchReceipt_1()];
                    case 4:
                        receipt = _a.sent();
                        return [2 /*return*/, { receipt: receipt }];
                    case 5:
                        signTransaction = this.walletService.signTransaction(preparedTransaction);
                        return [4 /*yield*/, Promise.all([
                                signTransaction,
                                this.poaAndAriaService.requestPoa().catch()
                            ])];
                    case 6:
                        rawTransaction_1 = (_a.sent())[0].rawTransaction;
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.web3Service.web3.eth
                                    .sendSignedTransaction(rawTransaction_1)
                                    .once('error', function (error, receipt) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        console.error(error);
                                        reject({
                                            receipt: receipt,
                                            error: error
                                        });
                                        return [2 /*return*/];
                                    });
                                }); })
                                    .once('receipt', function (receipt) {
                                    resolve({
                                        receipt: receipt
                                    });
                                });
                            })];
                }
            });
        }); };
        if (contract === undefined) {
            throw new Error('contract is undefined');
        }
        this.key = contract;
        Object.keys(this.key.methods).forEach(function (method) {
            var b = contract.methods[method];
            if (!method.startsWith('0')) {
                _this.key.methods[method] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __assign(__assign({}, b.bind(b).apply(void 0, args)), { send: function (transaction) {
                            return _this.overideSend(transaction, b.bind(b).apply(void 0, args));
                        }, call: function (transaction) {
                            return _this.overideCall(transaction, b.bind(b).apply(void 0, args));
                        } });
                };
            }
        });
    }
    ArianeeContract.prototype.makeArianee = function () {
        return this.key;
    };
    /**
     * arianeeSignMetamask
     * @param nonce
     * @param contractAddress
     * @param data
     */
    ArianeeContract.prototype.arianeeSignMetamask = function (transaction) {
        var _a = flat_promise_1.flatPromise(), resolve = _a.resolve, promise = _a.promise, reject = _a.reject;
        this.web3Service.web3.eth.sendTransaction(transaction, function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve();
            }
        });
        return promise;
    };
    ArianeeContract = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [web3_eth_contract_1.Contract,
            walletService_1.WalletService,
            web3Service_1.Web3Service,
            POAAndAriaService_1.POAAndAriaService,
            utilsService_1.UtilsService])
    ], ArianeeContract);
    return ArianeeContract;
}());
exports.ArianeeContract = ArianeeContract;
//# sourceMappingURL=arianeeContract.js.map