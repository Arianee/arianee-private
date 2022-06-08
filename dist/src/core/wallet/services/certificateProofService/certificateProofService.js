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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var append_query_1 = __importDefault(require("append-query"));
var tsyringe_1 = require("tsyringe");
var blockchainEventsName_1 = require("../../../../models/blockchainEventsName");
var sortEvents_1 = require("../../../libs/sort/sortEvents");
var arianeeAccessTokenValidatorService_1 = require("../ArianeeAccessToken/arianeeAccessTokenValidatorService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var web3Service_1 = require("../web3Service/web3Service");
var lodash_1 = require("lodash");
var getPastEventService_1 = require("../getPastEventService/getPastEventService");
var arianeeBlockchainProxyService_1 = require("../arianeeBlockchainProxyService/arianeeBlockchainProxyService");
var arianeeAccessTokenCreatorService_1 = require("../ArianeeAccessToken/arianeeAccessTokenCreatorService");
var CertificateProofService = /** @class */ (function () {
    function CertificateProofService(contractService, configurationService, arianeeAccessTokenService, walletService, web3Service, utils, getPastEventService, arianeeBlockchainProxyService, arianeeAccessTokenCreatorService) {
        var _this = this;
        this.contractService = contractService;
        this.configurationService = configurationService;
        this.arianeeAccessTokenService = arianeeAccessTokenService;
        this.walletService = walletService;
        this.web3Service = web3Service;
        this.utils = utils;
        this.getPastEventService = getPastEventService;
        this.arianeeBlockchainProxyService = arianeeBlockchainProxyService;
        this.arianeeAccessTokenCreatorService = arianeeAccessTokenCreatorService;
        this.createCertificateProofLink = function (certificateId, passphrase, customDeeplink) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!passphrase) {
                            passphrase = this.utils.createPassphrase();
                        }
                        return [4 /*yield*/, this.setPassphrase(certificateId, passphrase, 2)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.utils.createLink(certificateId, passphrase, customDeeplink, 'proof')];
                }
            });
        }); };
        /**
         * Create an actionProofLink. It appends encode RFC 3986 query param proof link to provided url
         * @param url
         * @param certificateId
         * @param passphrase
         * @return url
         */
        this.createActionProofLink = function (url, certificateId, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            var link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!passphrase) {
                            passphrase = this.utils.createPassphrase();
                        }
                        return [4 /*yield*/, this.createCertificateProofLink(certificateId, passphrase)];
                    case 1:
                        link = (_a.sent()).link;
                        return [2 /*return*/, append_query_1.default(url, { proofLink: link })];
                }
            });
        }); };
        this.createAuthURL = function (data) {
            var type = data.type, certificateId = data.certificateId, url = data.url;
            if (type === 'proof') {
                return _this.createActionProofLink(url, certificateId);
            }
            else if (type === 'arianeeAccessToken') {
                return Promise.resolve(_this.arianeeAccessTokenCreatorService.createActionArianeeAccessTokenLink(url, certificateId));
            }
            else {
                throw new Error("this type " + type + " is not supported");
            }
        };
        this.isAuthURL = function (url) { return __awaiter(_this, void 0, void 0, function () {
            var d, regex, matches, arianeeJWT, link, jwt, certificateId;
            return __generator(this, function (_a) {
                d = this.utils.simplifiedParsedURL(url);
                regex = "proofLink" /* proofLink */ + "=([^&]*)";
                matches = d.search.match(regex);
                arianeeJWT = new URL(url).searchParams.get("arianeeAccessToken" /* arianeeAccessToken */);
                if (matches) {
                    link = matches[1];
                    return [2 /*return*/, this.isCertificateProofValidFromLink(link)];
                }
                if (arianeeJWT) {
                    jwt = this.arianeeAccessTokenService.decodeArianeeAccessToken(arianeeJWT);
                    certificateId = lodash_1.get(jwt, 'payload.subId');
                    return [2 /*return*/, this.isJwtProofValid(certificateId, arianeeJWT)];
                }
                throw new Error("this is not a AuthUrl " + url);
            });
        }); };
        this.isCertificateProofValidFromLink = function (proofLink) { return __awaiter(_this, void 0, void 0, function () {
            var decodedURI, _a, passphrase, certificateId;
            return __generator(this, function (_b) {
                decodedURI = decodeURIComponent(proofLink);
                _a = this.utils.readLink(decodedURI), passphrase = _a.passphrase, certificateId = _a.certificateId;
                return [2 /*return*/, this.isCertificateProofValid(certificateId, passphrase)];
            });
        }); };
        this.isCertificateProofValid = function (certificateId, passphrase, jwt) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (passphrase) {
                    return [2 /*return*/, this.isProofValidSince(certificateId, passphrase, 2)];
                }
                if (jwt) {
                    return [2 /*return*/, this.isJwtProofValid(certificateId, jwt)];
                }
                return [2 /*return*/];
            });
        }); };
        this.isJwtProofValid = function (certificateId, jwt) { return __awaiter(_this, void 0, void 0, function () {
            var isJWTValid, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.arianeeAccessTokenService.isCertificateArianeeAccessTokenValid(jwt)];
                    case 1:
                        isJWTValid = _a.sent();
                        payload = this.arianeeAccessTokenService.decodeArianeeAccessToken(jwt).payload;
                        if (isJWTValid && (payload.subId === certificateId)) {
                            return [2 /*return*/, {
                                    isTrue: true,
                                    code: 'proof.token.valid',
                                    message: 'proof is valid',
                                    timestamp: payload.iat,
                                    certificateId: certificateId
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    isTrue: false,
                                    code: 'proof.token.dontmatch',
                                    message: 'token proof does not match or is expired',
                                    timestamp: payload.iat,
                                    certificateId: certificateId
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.isProofValid = function (certificateId, passphrase, tokenType) { return __awaiter(_this, void 0, void 0, function () {
            var tokenHashedAccess, proof;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.smartAssetContract.methods
                            .tokenHashedAccess(certificateId, tokenType)
                            .call()];
                    case 1:
                        tokenHashedAccess = _a.sent();
                        proof = this.configurationService.walletFactory().fromPassPhrase(passphrase)
                            .address;
                        if (/^0x0+$/.test(tokenHashedAccess)) {
                            return [2 /*return*/, false];
                        }
                        else {
                            return [2 /*return*/, proof === tokenHashedAccess];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.isProofValidSince = function (certificateId, passphrase, tokenType) { return __awaiter(_this, void 0, void 0, function () {
            var tokenHashedAccess, proofValid, currentBlock, events, lastEvent, blockTimestamp, lastEventTransaction, actualOwner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.smartAssetContract.methods
                            .tokenHashedAccess(certificateId, tokenType)
                            .call()];
                    case 1:
                        tokenHashedAccess = _a.sent();
                        return [4 /*yield*/, this.isProofValid(certificateId, passphrase, tokenType)];
                    case 2:
                        proofValid = _a.sent();
                        if (!proofValid) {
                            return [2 /*return*/, {
                                    isTrue: false,
                                    code: 'proof.token.dontmatch',
                                    message: 'token proof does not match'
                                }];
                        }
                        return [4 /*yield*/, this.web3Service.web3.eth.getBlockNumber()];
                    case 3:
                        currentBlock = _a.sent();
                        return [4 /*yield*/, this.getPastEventService.getPastEvents(contractsService_1.ContractName.smartAssetContract, blockchainEventsName_1.blockchainEventsName.smartAsset.tokenAccessAdded, {
                                fromBlock: currentBlock - Math.round(259200 / 5 + 30),
                                toBlock: currentBlock
                            })];
                    case 4:
                        events = _a.sent();
                        events = events.filter(function (event) {
                            return event.returnValues._tokenId === certificateId.toString() &&
                                event.returnValues._tokenType === tokenType.toString() &&
                                event.returnValues._encryptedTokenKey === tokenHashedAccess &&
                                event.returnValues._enable === true;
                        }).sort(sortEvents_1.sortEvents).reverse();
                        lastEvent = events[0];
                        if (!lastEvent) {
                            return [2 /*return*/, {
                                    isTrue: false,
                                    code: 'proof.token.tooold',
                                    message: 'token proof is too old',
                                    timestamp: 0
                                }];
                        }
                        return [4 /*yield*/, this.utils.getTimestampFromBlock(lastEvent.blockNumber)];
                    case 5:
                        blockTimestamp = _a.sent();
                        return [4 /*yield*/, this.web3Service.web3.eth.getTransaction(lastEvent.transactionHash)];
                    case 6:
                        lastEventTransaction = _a.sent();
                        return [4 /*yield*/, this.arianeeBlockchainProxyService.ownerOf(certificateId)];
                    case 7:
                        actualOwner = _a.sent();
                        if (lastEventTransaction && lastEventTransaction.from.toLowerCase() !== actualOwner.toLowerCase()) {
                            return [2 /*return*/, {
                                    isTrue: false,
                                    code: 'proof.token.notowner',
                                    message: 'token proof is not the owner',
                                    timestamp: blockTimestamp * 1000
                                }];
                        }
                        return [2 /*return*/, {
                                isTrue: true,
                                code: 'proof.token.valid',
                                message: 'proof is valid',
                                timestamp: blockTimestamp * 1000
                            }];
                }
            });
        }); };
    }
    CertificateProofService.prototype.setPassphrase = function (certificateId, passphrase, type) {
        return __awaiter(this, void 0, void 0, function () {
            var temporaryWallet;
            return __generator(this, function (_a) {
                temporaryWallet = this.configurationService
                    .walletFactory()
                    .fromPassPhrase(passphrase);
                return [2 /*return*/, this.contractService.smartAssetContract.methods
                        .addTokenAccess(certificateId, temporaryWallet.address, true, type)
                        .send()];
            });
        });
    };
    CertificateProofService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [contractsService_1.ContractService,
            configurationService_1.ConfigurationService,
            arianeeAccessTokenValidatorService_1.ArianeeAccessTokenValidatorService,
            walletService_1.WalletService,
            web3Service_1.Web3Service,
            utilsService_1.UtilsService,
            getPastEventService_1.GetPastEventService,
            arianeeBlockchainProxyService_1.ArianeeBlockchainProxyService,
            arianeeAccessTokenCreatorService_1.ArianeeAccessTokenCreatorService])
    ], CertificateProofService);
    return CertificateProofService;
}());
exports.CertificateProofService = CertificateProofService;
//# sourceMappingURL=certificateProofService.js.map