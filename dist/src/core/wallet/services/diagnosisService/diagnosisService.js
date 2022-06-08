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
var balanceService_1 = require("../balanceService/balanceService");
var certificateUtilsService_1 = require("../certificateUtilsService/certificateUtilsService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var walletService_1 = require("../walletService/walletService");
var errorhelper_1 = require("./helpers/errorhelper");
var DiagnosisService = /** @class */ (function () {
    function DiagnosisService(contractService, configurationService, balanceService, walletService, certificateUtilsService) {
        var _this = this;
        this.contractService = contractService;
        this.configurationService = configurationService;
        this.balanceService = balanceService;
        this.walletService = walletService;
        this.certificateUtilsService = certificateUtilsService;
        this.diagnosis = function (diagnosisList, rawErrors) { return __awaiter(_this, void 0, void 0, function () {
            var foundInError, diagnosis, errors, rawValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        foundInError = this.tryFindErrorFromErrorPayload(rawErrors);
                        if (foundInError) {
                            return [2 /*return*/, [foundInError]];
                        }
                        if (diagnosisList === undefined) {
                            diagnosisList = [
                                this.isStoreApprove(),
                                this.isAriaCredit(),
                                this.isPOACredit(),
                                this.isEventCredit(),
                                this.isCertificateCredit()
                            ];
                        }
                        return [4 /*yield*/, Promise.all(diagnosisList)];
                    case 1:
                        diagnosis = _a.sent();
                        errors = diagnosis.filter(function (diagnosis) { return !diagnosis.isTrue; });
                        if (errors.length === 0) {
                            rawValue = typeof rawErrors === 'string' ? rawErrors : JSON.stringify(rawErrors);
                            errors.push({
                                isTrue: false,
                                rawValue: rawValue,
                                message: 'An unknown error occured. Please try again later',
                                code: 'error.unknown'
                            });
                        }
                        ;
                        return [2 /*return*/, errors];
                }
            });
        }); };
        this.isRequestable = function (tokenId, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.certificateUtilsService.isCertificateOwnershipRequestable(tokenId, passphrase);
                return [2 /*return*/, this.certificateUtilsService.isCertificateOwnershipRequestable(tokenId, passphrase)];
            });
        }); };
        this.isStoreApprove = function () { return __awaiter(_this, void 0, void 0, function () {
            var smartAssetContractAddress, isApproved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        smartAssetContractAddress = this.configurationService.arianeeConfiguration.store.address;
                        return [4 /*yield*/, this.contractService.ariaContract.methods
                                .allowance(this.walletService.address, smartAssetContractAddress)
                                .call()];
                    case 1:
                        isApproved = _a.sent();
                        return [2 /*return*/, {
                                isTrue: isApproved.toString() !== '0',
                                rawValue: isApproved,
                                message: 'You should approveStore on aria smart contract',
                                code: "approve.store" /* approveStore */
                            }];
                }
            });
        }); };
        this.isUpdateCertificateCredit = function () { return __awaiter(_this, void 0, void 0, function () {
            var balance, isTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balanceService.balanceOfCredit('update')];
                    case 1:
                        balance = _a.sent();
                        isTrue = parseInt(balance.toString()) > 0;
                        return [2 /*return*/, {
                                isTrue: isTrue,
                                rawValue: balance,
                                message: 'update credit should be higher than 0',
                                code: "credit.update" /* creditUpdate */
                            }];
                }
            });
        }); };
        this.isCertificateCredit = function () { return __awaiter(_this, void 0, void 0, function () {
            var balance, isTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balanceService.balanceOfCredit('certificate')];
                    case 1:
                        balance = _a.sent();
                        isTrue = parseInt(balance.toString()) > 0;
                        return [2 /*return*/, {
                                isTrue: isTrue,
                                rawValue: balance,
                                message: 'certificate credit should be higher than 0',
                                code: "credit.certificate" /* creditCertificate */
                            }];
                }
            });
        }); };
        this.isEventCredit = function () { return __awaiter(_this, void 0, void 0, function () {
            var balance, isTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balanceService.balanceOfCredit('event')];
                    case 1:
                        balance = _a.sent();
                        isTrue = parseInt(balance.toString()) > 0;
                        return [2 /*return*/, {
                                isTrue: isTrue,
                                rawValue: balance,
                                message: 'event credit should be higher than 0',
                                code: "credit.event" /* creditEvent */
                            }];
                }
            });
        }); };
        this.isMessageCredit = function () { return __awaiter(_this, void 0, void 0, function () {
            var balance, isTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balanceService.balanceOfCredit('message')];
                    case 1:
                        balance = _a.sent();
                        isTrue = parseInt(balance.toString()) > 0;
                        return [2 /*return*/, {
                                isTrue: isTrue,
                                rawValue: balance,
                                message: 'message credit should be higher than 0',
                                code: "credit.message" /* creditMessage */
                            }];
                }
            });
        }); };
        this.isAriaCredit = function () { return __awaiter(_this, void 0, void 0, function () {
            var balance, isTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balanceService.balanceOfAria()];
                    case 1:
                        balance = _a.sent();
                        isTrue = parseInt(balance.toString()) > 0;
                        return [2 /*return*/, {
                                isTrue: isTrue,
                                rawValue: balance,
                                message: 'Your aria credit credit should be higher than 0',
                                code: "credit.aria" /* creditAria */
                            }];
                }
            });
        }); };
        this.isPOACredit = function () { return __awaiter(_this, void 0, void 0, function () {
            var balance, isTrue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.balanceService.balanceOfPoa()];
                    case 1:
                        balance = _a.sent();
                        isTrue = (+balance.toString()) > 0;
                        return [2 /*return*/, {
                                isTrue: isTrue,
                                rawValue: balance,
                                message: 'You poa credit credit should be higher than 0',
                                code: "credit.POA" /* creditPOA */
                            }];
                }
            });
        }); };
        this.isCertificateIdExist = function (tokenId) { return __awaiter(_this, void 0, void 0, function () {
            var isCertifIdAvailableOrReserved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.certificateUtilsService.canCreateCertificateWithCertificateId(tokenId)];
                    case 1:
                        isCertifIdAvailableOrReserved = _a.sent();
                        return [2 /*return*/, {
                                isTrue: isCertifIdAvailableOrReserved,
                                rawValue: isCertifIdAvailableOrReserved,
                                message: 'This certificate id already exist and you have not reserved it',
                                code: "certificate.id" /* certificateIdAlreadyExist */
                            }];
                }
            });
        }); };
        this.isWhiteListed = function (tokenId) { return __awaiter(_this, void 0, void 0, function () {
            var isWhitelisted, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.contractService.whitelistContract.methods.isWhitelisted(tokenId, this.walletService.address).call()];
                    case 1:
                        _a.sent();
                        isWhitelisted = false;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        isWhitelisted = true;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, {
                            isTrue: isWhitelisted,
                            rawValue: isWhitelisted,
                            message: 'This address is not whitelisted',
                            code: "message.whitelist" /* messagWhitelist */
                        }];
                }
            });
        }); };
        /**
         * Try to extract from payload error the error. It may differs from rpc to another rpc.
         * @param errPayload
         */
        this.tryFindErrorFromErrorPayload = function (errPayload) {
            if (errorhelper_1.isErrorInstance(errPayload)) {
                if (errorhelper_1.isAlreadyKnown(errPayload)) {
                    return {
                        isTrue: true,
                        rawValue: errPayload,
                        message: 'This transaction has already been sent.',
                        code: "transaction.alreadyKnown" /* alreadyKnown */
                    };
                }
                else if (errorhelper_1.isAlreadyTxWithSameNonce(errPayload)) {
                    return {
                        isTrue: true,
                        rawValue: errPayload,
                        message: 'A transaction with same nonce has already been sent and is pending. To Cancel use cancel method',
                        code: "transaction.tooLowToCompete" /* tooLowToCompete */
                    };
                }
                else if (errorhelper_1.isNonceTooLow(errPayload)) {
                    return {
                        isTrue: true,
                        rawValue: errPayload,
                        message: 'The nonce is too low.',
                        code: "transaction.nonceTooLow" /* nonceTooLow */
                    };
                }
            }
        };
    }
    DiagnosisService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [contractsService_1.ContractService,
            configurationService_1.ConfigurationService,
            balanceService_1.BalanceService,
            walletService_1.WalletService,
            certificateUtilsService_1.CertificateUtilsService])
    ], DiagnosisService);
    return DiagnosisService;
}());
exports.DiagnosisService = DiagnosisService;
//# sourceMappingURL=diagnosisService.js.map