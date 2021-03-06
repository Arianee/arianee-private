"use strict";
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
var web3Service_1 = require("../web3Service/web3Service");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var BatchService = /** @class */ (function () {
    function BatchService(web3Service, utilsService, walletService) {
        this.web3Service = web3Service;
        this.utilsService = utilsService;
        this.walletService = walletService;
        this.batchTransactions = [];
    }
    BatchService.prototype.addToBatch = function (transaction) {
        var contractAddress = transaction._parent._address;
        this.batchTransactions.push([contractAddress, transaction.encodeABI()]);
        return this;
    };
    BatchService.prototype.executeBatch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var initialNonce, transactionsPromise, transactions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web3Service.web3.eth.getTransactionCount(this.walletService.address, 'pending')];
                    case 1:
                        initialNonce = _a.sent();
                        transactionsPromise = this.batchTransactions.map(function (value, index) { return __awaiter(_this, void 0, void 0, function () {
                            var prepareTransaction, transaction;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.utilsService.prepareTransaction(value[1], value[0], initialNonce + index)];
                                    case 1:
                                        prepareTransaction = _a.sent();
                                        return [4 /*yield*/, this.walletService.signTransaction(prepareTransaction)];
                                    case 2:
                                        transaction = _a.sent();
                                        this.web3Service.web3.eth.sendSignedTransaction(transaction.rawTransaction);
                                        return [2 /*return*/, {
                                                txHash: transaction.transactionHash,
                                                txRow: transaction.rawTransaction,
                                                creationDate: new Date()
                                            }];
                                }
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(transactionsPromise)];
                    case 2:
                        transactions = _a.sent();
                        this.batchTransactions = [];
                        return [2 /*return*/, this.watchPendingTransaction(transactions)];
                }
            });
        });
    };
    BatchService.prototype.watchPendingTransaction = function (transactionInProgress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var rejectTransaction = [];
            var delay = 10000 + (transactionInProgress.length / 20) * 5000;
            var interval = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (transactionInProgress.length > 0) {
                        transactionInProgress.forEach(function (value, index) { return __awaiter(_this, void 0, void 0, function () {
                            var transaction;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.web3Service.web3.eth.getTransactionReceipt(value.txHash)];
                                    case 1:
                                        transaction = _a.sent();
                                        if (transaction) {
                                            if (transaction.status === true) {
                                                transactionInProgress.splice(index, 1);
                                            }
                                            else if (transaction.status === false) {
                                                rejectTransaction.push(value);
                                                transactionInProgress.splice(index, 1);
                                            }
                                        }
                                        else {
                                            if ((new Date().valueOf() - value.creationDate.valueOf()) > delay) {
                                                rejectTransaction.push(value);
                                                transactionInProgress.splice(index, 1);
                                            }
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    else {
                        clearInterval(interval);
                        if (rejectTransaction.length === 0) {
                            resolve('Everything is awesome');
                        }
                        else {
                            reject(rejectTransaction);
                        }
                    }
                    return [2 /*return*/];
                });
            }); }, 1000);
        });
    };
    BatchService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [web3Service_1.Web3Service,
            utilsService_1.UtilsService,
            walletService_1.WalletService])
    ], BatchService);
    return BatchService;
}());
exports.BatchService = BatchService;
//# sourceMappingURL=batchService.js.map