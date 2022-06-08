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
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var certificatesDetailsService_1 = require("../certificateDetailsService/certificatesDetailsService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var arianeeBlockchainProxyService_1 = require("../arianeeBlockchainProxyService/arianeeBlockchainProxyService");
var CertificateUtilsService = /** @class */ (function () {
    function CertificateUtilsService(utils, httpClient, configurationService, contractService, certificateDetails, walletService, arianeeProxyService) {
        var _this = this;
        this.utils = utils;
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.contractService = contractService;
        this.certificateDetails = certificateDetails;
        this.walletService = walletService;
        this.arianeeProxyService = arianeeProxyService;
        this.isCertificateIdFree = function (certificateId) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.arianeeProxyService.ownerOf(certificateId.toString())];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, false];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.canCreateCertificateWithCertificateId = function (certificateId) { return __awaiter(_this, void 0, void 0, function () {
            var owner, imprint, imprintIsEmpty, isOwner, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.arianeeProxyService.ownerOf(certificateId)];
                    case 1:
                        owner = _b.sent();
                        return [4 /*yield*/, this.contractService.smartAssetContract.methods.tokenImprint(certificateId).call()];
                    case 2:
                        imprint = _b.sent();
                        imprintIsEmpty = !imprint || imprint === '0x0000000000000000000000000000000000000000000000000000000000000000';
                        isOwner = owner.toLowerCase() === this.walletService.address.toLowerCase();
                        return [2 /*return*/, imprintIsEmpty && isOwner];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, true];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.customRequestTokenFactory = function (certificateId, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            var temporaryWallet, proof;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        temporaryWallet = this.configurationService
                            .walletFactory()
                            .fromPassPhrase(passphrase);
                        return [4 /*yield*/, this.utils.signProofForRequestToken(certificateId, this.walletService.address, temporaryWallet.privateKey)];
                    case 1:
                        proof = _a.sent();
                        return [2 /*return*/, this.contractService.storeContract.methods.requestToken(certificateId, proof.messageHash, false, this.configurationService.arianeeConfiguration.brandDataHubReward.address, proof.signature)];
                }
            });
        }); };
        this.isCertificateOwnershipRequestable = function (certificateId, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            var temporaryWallet, tokenHashedAccess, isRequestable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!passphrase) return [3 /*break*/, 2];
                        temporaryWallet = this.configurationService
                            .walletFactory()
                            .fromPassPhrase(passphrase);
                        return [4 /*yield*/, temporaryWallet.contracts.smartAssetContract.methods.tokenHashedAccess(certificateId, 1).call().catch(function (e) { return false; })];
                    case 1:
                        tokenHashedAccess = _a.sent();
                        isRequestable = tokenHashedAccess === temporaryWallet.address;
                        if (isRequestable) {
                            return [2 /*return*/, {
                                    isTrue: isRequestable,
                                    code: "token.requestable" /* isRequestable */,
                                    message: 'certificate is requestable'
                                }];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, {
                            isTrue: false,
                            code: "token.requestable" /* isRequestable */,
                            message: 'certificate is not requestable'
                        }];
                }
            });
        }); };
    }
    CertificateUtilsService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [utilsService_1.UtilsService,
            arianeeHttpClient_1.ArianeeHttpClient,
            configurationService_1.ConfigurationService,
            contractsService_1.ContractService,
            certificatesDetailsService_1.CertificateDetails,
            walletService_1.WalletService,
            arianeeBlockchainProxyService_1.ArianeeBlockchainProxyService])
    ], CertificateUtilsService);
    return CertificateUtilsService;
}());
exports.CertificateUtilsService = CertificateUtilsService;
//# sourceMappingURL=certificateUtilsService.js.map