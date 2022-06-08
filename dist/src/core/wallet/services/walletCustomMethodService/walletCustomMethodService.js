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
var creditTypesEnum_1 = require("../../../../models/creditTypesEnum");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var balanceService_1 = require("../balanceService/balanceService");
var blockchainUtilsService_1 = require("../blockChainUtilsService/blockchainUtilsService");
var certificateAuthorizationService_1 = require("../certificateAuthorizationService/certificateAuthorizationService");
var certificateProofService_1 = require("../certificateProofService/certificateProofService");
var certificateService_1 = require("../certificateService/certificateService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var diagnosisService_1 = require("../diagnosisService/diagnosisService");
var eventsService_1 = require("../eventService/eventsService");
var identityService_1 = require("../identityService/identityService");
var arianeeAccessTokenValidatorService_1 = require("../ArianeeAccessToken/arianeeAccessTokenValidatorService");
var lostAndStolenService_1 = require("../lostAndStolenService/lostAndStolenService");
var messageService_1 = require("../messageService/messageService");
var POAAndAriaService_1 = require("../POAAndAriaFaucet/POAAndAriaService");
var walletService_1 = require("../walletService/walletService");
var web3Service_1 = require("../web3Service/web3Service");
var gasStationService_1 = require("../gasStationService/gasStationService");
var arianeeAccessTokenCreatorService_1 = require("../ArianeeAccessToken/arianeeAccessTokenCreatorService");
var WalletCustomMethodService = /** @class */ (function () {
    function WalletCustomMethodService(httpClient, configurationService, web3Service, contractService, eventService, messageService, walletService, certificateService, poaAndAriaService, identityService, certificateAuthorizationService, balanceService, diagnosisService, arianeeAccessTokenValidatorService, arianeeAccessTokenCreatorService, certificateProofService, gasStationService, blockchainUtilsService, lostAndStolenService) {
        var _this = this;
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.web3Service = web3Service;
        this.contractService = contractService;
        this.eventService = eventService;
        this.messageService = messageService;
        this.walletService = walletService;
        this.certificateService = certificateService;
        this.poaAndAriaService = poaAndAriaService;
        this.identityService = identityService;
        this.certificateAuthorizationService = certificateAuthorizationService;
        this.balanceService = balanceService;
        this.diagnosisService = diagnosisService;
        this.arianeeAccessTokenValidatorService = arianeeAccessTokenValidatorService;
        this.arianeeAccessTokenCreatorService = arianeeAccessTokenCreatorService;
        this.certificateProofService = certificateProofService;
        this.gasStationService = gasStationService;
        this.blockchainUtilsService = blockchainUtilsService;
        this.lostAndStolenService = lostAndStolenService;
        this.approveStore = function () {
            return _this.contractService.ariaContract.methods
                .approve(_this.configurationService.arianeeConfiguration.store.address, '10000000000000000000000000000')
                .send();
        };
        this.getCreditTypes = function () { return Object.values(creditTypesEnum_1.creditTypeEnum); };
        this.buyCredits = function (creditType, quantity, receiver) { return __awaiter(_this, void 0, void 0, function () {
            var result, e_1, diagnosis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Object.prototype.hasOwnProperty.call(creditTypesEnum_1.creditTypeEnum, creditType)) {
                            throw new Error('this credit type does not exist !!! ' + creditType);
                        }
                        receiver = receiver || this.walletService.address;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, this.contractService.storeContract.methods
                                .buyCredit(creditTypesEnum_1.creditNameToType[creditType], quantity, receiver)
                                .send()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.diagnosisService.diagnosis([
                                this.diagnosisService.isStoreApprove(),
                                this.diagnosisService.isAriaCredit()
                            ], e_1)];
                    case 4:
                        diagnosis = _a.sent();
                        return [2 /*return*/, Promise.reject(diagnosis)];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
    }
    WalletCustomMethodService.prototype.arianeeMethods = function () {
        var _this = this;
        // eslint-disable-next-line no-console
        console.info('arianee Methods is a beta feature. It will evolve in future');
        return {
            aria: {
                faucet: this.poaAndAriaService.requestAria,
                balance: function (objParams) { return _this.balanceService.balanceOfAria(objParams.address); }
            },
            poa: {
                balance: this.poaAndAriaService.requestPoa,
                faucet: function (objParams) { return _this.balanceService.balanceOfPoa(objParams.address); }
            },
            credit: {
                buy: function (objParams) {
                    return _this.buyCredits(objParams.creditType, objParams.quantity, objParams.receiver);
                },
                balance: function (objParams) {
                    return _this.balanceService.balanceOfCredit(objParams.creditType, objParams.address);
                },
                types: this.getCreditTypes
            },
            identity: {
                fetch: function (objParams) {
                    return _this.identityService.getSimpleIdentity(objParams.address, objParams.query);
                },
                // ICI
                getByShortId: function (objParams) { return _this.identityService.getIdentityByShortId(objParams.shortId); }
            },
            certificate: {
                fetch: {
                    one: function (objParams) {
                        return _this.certificateService
                            .getCertificate(objParams.certificateId, objParams.passphrase, objParams.query);
                    },
                    oneFromLink: function (objParams) {
                        return _this.certificateService.getCertificateFromLink(objParams.link, objParams.query);
                    },
                    oneFromArianeeAccessToken: function (objParams) {
                        return _this.certificateService.getCertificateFromArianeeAccessToken(objParams.arianeeAccessToken, objParams.query);
                    },
                    mine: {
                        all: function (objParams) {
                            return _this.certificateService.getMyCertificates(objParams.query, objParams.verifyOwnership);
                        },
                        groupByIssuer: function (objParams) {
                            return _this.certificateService.getMyCertificatesGroupByIssuer(objParams.query);
                        }
                    }
                },
                creation: {
                    create: this.certificateService.customHydrateToken,
                    reserveId: function (objParams) { return _this.certificateService.reserveCertificateId(objParams.certificateId); },
                    createAndStore: function (objParams) {
                        return _this.certificateService.createAndStoreCertificate(objParams.data, objParams.urlOfRPCServer);
                    },
                    storeContent: function (objParams) { return _this.certificateService.storeContentInRPCServer(objParams.certificateId, objParams.content, objParams.url); },
                    batch: function (objParams) { return _this.certificateService.customHydrateTokenBatch(objParams.datas); }
                },
                arianeeAccessToken: {
                    create: function (objParams) {
                        return _this.arianeeAccessTokenCreatorService.createActionArianeeAccessTokenLink(objParams.url, objParams.certificateId);
                    },
                    decode: function (objParams) {
                        return _this.arianeeAccessTokenValidatorService.decodeArianeeAccessToken(objParams.arianeeAccessToken);
                    },
                    isArianeeAccessTokenValid: function (objParams) {
                        return _this.arianeeAccessTokenValidatorService.isCertificateArianeeAccessTokenValid(objParams.arianeeAccessToken);
                    },
                    isCertificateProofValid: function (objParams) { return _this.certificateProofService.isCertificateProofValid(objParams.certificateId, objParams.passphrase, objParams.arianeeAccessToken); },
                    isCertificateProofValidFromLink: function (objParams) {
                        return _this.certificateProofService.isCertificateProofValidFromLink(objParams.proofLink);
                    },
                    isCertificateProofValidFromActionProofLink: function (objParams) {
                        return _this.certificateProofService.isAuthURL(objParams.actionProofLink);
                    }
                },
                proof: {
                    createCertificateProofLink: function (objParams) {
                        return _this.certificateProofService.createCertificateProofLink(objParams.certificateId, objParams.passphrase);
                    },
                    createActionProofLink: function (objParams) {
                        return _this.certificateProofService.createActionProofLink(objParams.url, objParams.certificateId, objParams.passphrase);
                    },
                    isCertificateProofValid: function (objParams) { return _this.certificateProofService.isCertificateProofValid(objParams.certificateId, objParams.passphrase, objParams.arianeeAccessToken); },
                    isCertificateProofValidFromLink: function (objParams) {
                        return _this.certificateProofService.isCertificateProofValidFromLink(objParams.proofLink);
                    },
                    isCertificateProofValidFromActionProofLink: function (objParams) {
                        return _this.certificateProofService.isAuthURL(objParams.actionProofLink);
                    }
                },
                ownership: {
                    destroy: function (objParams) {
                        return _this.certificateService.destroyCertificate(objParams.certificateId);
                    },
                    recover: function (objParams) {
                        return _this.certificateService.recoverCertificate(objParams.certificateId);
                    },
                    request: function (objParams) {
                        return _this.certificateService.requestCertificateOwnershipWithPassphrase(objParams.certificateId, objParams.passphrase);
                    },
                    isRequestable: function (objParams) {
                        return _this.certificateService.isCertificateOwnershipRequestable(objParams.certificateId, objParams.passphrase);
                    },
                    createRequestLink: function (objParams) {
                        return _this.certificateService.createCertificateRequestOwnershipLink(objParams.certificateId, objParams.passphrase);
                    }
                }
            },
            arianeeEvent: {
                accept: function (objParams) { return _this.eventService.acceptArianeeEvent(objParams.eventId); },
                refuse: function (objParams) { return _this.eventService.refuseArianeeEvent(objParams.eventId); },
                setMessageAuthorization: function (objParams) { return _this.certificateAuthorizationService
                    .setMessageAuthorizationFor(objParams.certificateId, objParams.senderAddress, objParams.isAuthorized); },
                senders: this.certificateAuthorizationService.getMessageSenders,
                creation: {
                    create: this.eventService.createArianeeEvent,
                    storeContent: function (objParams) { return _this.eventService
                        .storeArianeeEventContentInRPCServer(objParams.certificateId, objParams.arianeeEventId, objParams.content, objParams.url); },
                    createAndStore: function (objParams) { return _this.eventService.createAndStoreArianeeEvent(objParams.data, objParams.urlOfRPC); }
                }
            },
            store: {
                approve: this.approveStore
            },
            advanced: {
                diagnosis: this.diagnosisService.diagnosis
            },
            dMessage: {
                fetch: {
                    mine: this.messageService.getMyMessages,
                    one: this.messageService.getMessage
                },
                creation: {
                    send: function (objParams) { return _this.messageService.createAndStoreMessage(objParams.data, objParams.url); },
                    storeContent: function (objParams) { return _this.messageService.storeMessageContentInRPCServer(objParams.messageId, objParams.messageId, objParams.url); },
                    create: this.messageService.createMessage,
                    createAndStore: function (objParams) { return _this.messageService.createAndStoreMessage(objParams.data, objParams.url); }
                },
                markAsRead: function (objParams) { return _this.messageService.markAsRead(objParams.certificateId); }
            }
        };
    };
    WalletCustomMethodService.prototype.getMethods = function () {
        return {
            requestAria: this.poaAndAriaService.requestAria,
            requestPoa: this.poaAndAriaService.requestPoa,
            cancelTransactions: this.blockchainUtilsService.cancelTransactions,
            reserveCertificateId: this.certificateService.reserveCertificateId,
            createCertificate: this.certificateService.customHydrateToken,
            createCertificatesBatch: this.certificateService.customHydrateTokenBatch,
            createAndStoreCertificate: this.certificateService.createAndStoreCertificate,
            getCertificate: this.certificateService.getCertificate,
            getCertificateFromArianeeAccessToken: this.certificateService.getCertificateFromArianeeAccessToken,
            destroyCertificate: this.certificateService.destroyCertificate,
            recoverCertificate: this.certificateService.recoverCertificate,
            getMyCertificates: this.certificateService.getMyCertificates,
            getCertificatesId: this.certificateService.getMyCertificateIds,
            getMyCertificatesGroupByIssuer: this.certificateService.getMyCertificatesGroupByIssuer,
            getIdentity: this.identityService.getSimpleIdentity,
            getIdentityByShortId: this.identityService.getIdentityByShortId,
            createCertificateRequestOwnershipLink: this.certificateService
                .createCertificateRequestOwnershipLink,
            createCertificateProofLink: this.certificateProofService.createCertificateProofLink,
            createActionProofLink: this.certificateProofService.createActionProofLink,
            getCertificateFromLink: this.certificateService.getCertificateFromLink,
            isCertificateProofValid: this.certificateProofService.isCertificateProofValid,
            isCertificateProofValidFromLink: this.certificateProofService.isCertificateProofValidFromLink,
            isCertificateProofValidFromActionProofLink: this.certificateProofService.isAuthURL,
            isCertificateOwnershipRequestable: this.certificateService.isCertificateOwnershipRequestable,
            requestCertificateOwnership: this.certificateService.requestCertificateOwnershipWithPassphrase,
            balanceOfAria: this.balanceService.balanceOfAria,
            balanceOfRia: this.balanceService.balanceOfRia,
            balanceOfPoa: this.balanceService.balanceOfPoa,
            balanceOfAriaReadable: this.balanceService.balanceOfAriaReadable,
            getCreditPrice: this.balanceService.getCreditPrice,
            approveStore: this.approveStore,
            buyCredits: this.buyCredits,
            balanceOfCredit: this.balanceService.balanceOfCredit,
            ownerOf: this.certificateService.ownerOf,
            transfer: this.certificateService.transfer,
            acceptArianeeEvent: this.eventService.acceptArianeeEvent,
            refuseArianeeEvent: this.eventService.refuseArianeeEvent,
            setMessageAuthorizationFor: this.certificateAuthorizationService.setMessageAuthorizationFor,
            getMessageSenders: this.certificateAuthorizationService.getMessageSenders,
            storeContentInRPCServer: this.certificateService.storeContentInRPCServer,
            createArianeeEvent: this.eventService.createArianeeEvent,
            storeArianeeEvent: this.eventService.storeArianeeEventContentInRPCServer,
            createAndStoreArianeeEvent: this.eventService.createAndStoreArianeeEvent,
            getMyMessages: this.messageService.getMyMessages,
            getAllMyMessageIds: this.messageService.getAllMyMessageIds,
            getMessage: this.messageService.getMessage,
            isMessageRead: this.messageService.isMessageRead,
            createMessage: this.messageService.createMessage,
            storeMessage: this.messageService.storeMessageContentInRPCServer,
            createAndStoreMessage: this.messageService.createAndStoreMessage,
            markAsRead: this.messageService.markAsRead,
            diagnosis: this.diagnosisService.diagnosis,
            createActionArianeeAccessTokenLink: this.arianeeAccessTokenCreatorService.createActionArianeeAccessTokenLink,
            decodeArianeeAccessToken: this.arianeeAccessTokenValidatorService.decodeArianeeAccessToken,
            createCertificateArianeeAccessToken: this.arianeeAccessTokenCreatorService.createCertificateArianeeAccessToken,
            isCertificateArianeeAccessTokenValid: this.arianeeAccessTokenValidatorService.isCertificateArianeeAccessTokenValid,
            isArianeeAccessTokenValid: this.arianeeAccessTokenValidatorService.isArianeeAccessTokenValid,
            getArianeeAccessTokenJWT: this.arianeeAccessTokenValidatorService.getArianeeAccessTokenJWT,
            createWalletAccessToken: this.arianeeAccessTokenCreatorService.createWalletAccessToken,
            createAuthURL: this.certificateProofService.createAuthURL,
            isAuthURL: this.certificateProofService.isAuthURL,
            updateAndStoreCertificate: this.certificateService.updateAndStoreCertificateContent,
            storeUpdateContentInRPCServer: this.certificateService.storeUpdateContentInRPCServer,
            updateCertificate: this.certificateService.updateCertificate,
            setMissingStatus: this.lostAndStolenService.setMissingStatus,
            unsetMissingStatus: this.lostAndStolenService.unsetMissingStatus,
            setStolenStatus: this.lostAndStolenService.setStolenStatus,
            unsetStolenStatus: this.lostAndStolenService.unsetStolenStatus,
            isMissing: this.lostAndStolenService.isMissing,
            isStolen: this.lostAndStolenService.isStolen,
            fetchGasPrice: this.gasStationService.fetchGas
        };
    };
    WalletCustomMethodService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [arianeeHttpClient_1.ArianeeHttpClient,
            configurationService_1.ConfigurationService,
            web3Service_1.Web3Service,
            contractsService_1.ContractService,
            eventsService_1.EventService,
            messageService_1.MessageService,
            walletService_1.WalletService,
            certificateService_1.CertificateService,
            POAAndAriaService_1.POAAndAriaService,
            identityService_1.IdentityService,
            certificateAuthorizationService_1.CertificateAuthorizationService,
            balanceService_1.BalanceService,
            diagnosisService_1.DiagnosisService,
            arianeeAccessTokenValidatorService_1.ArianeeAccessTokenValidatorService,
            arianeeAccessTokenCreatorService_1.ArianeeAccessTokenCreatorService,
            certificateProofService_1.CertificateProofService,
            gasStationService_1.GasStationService,
            blockchainUtilsService_1.BlockchainUtilsService,
            lostAndStolenService_1.LostAndStolenService])
    ], WalletCustomMethodService);
    return WalletCustomMethodService;
}());
exports.WalletCustomMethodService = WalletCustomMethodService;
//# sourceMappingURL=walletCustomMethodService.js.map