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
var storeNamespace_1 = require("../../../../models/storeNamespace");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var isNullOrUndefined_1 = require("../../../libs/isNullOrUndefined/isNullOrUndefined");
var simpleStore_1 = require("../../../libs/simpleStore/simpleStore");
var certificateSummary_1 = require("../../certificateSummary");
var arianeeAccessTokenValidatorService_1 = require("../ArianeeAccessToken/arianeeAccessTokenValidatorService");
var arianeeAuthentificationService_1 = require("../arianeeAuthentificationService/arianeeAuthentificationService");
var batchService_1 = require("../batchService/batchService");
var certificateAuthorizationService_1 = require("../certificateAuthorizationService/certificateAuthorizationService");
var certificatesDetailsService_1 = require("../certificateDetailsService/certificatesDetailsService");
var certificateUtilsService_1 = require("../certificateUtilsService/certificateUtilsService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var diagnosisService_1 = require("../diagnosisService/diagnosisService");
var eventsService_1 = require("../eventService/eventsService");
var globalConfigurationService_1 = require("../globalConfigurationService/globalConfigurationService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var web3Service_1 = require("../web3Service/web3Service");
var arianeeBlockchainProxyService_1 = require("../arianeeBlockchainProxyService/arianeeBlockchainProxyService");
var CertificateService = /** @class */ (function () {
    function CertificateService(utils, httpClient, configurationService, contractService, certificateDetails, walletService, eventService, web3Service, certificateAuthorizationService, globalConfiguration, store, batchService, diagnosisService, jwtProofService, certificateUtilsService, arianeeAuthentificationService, arianeeProxyService) {
        var _this = this;
        this.utils = utils;
        this.httpClient = httpClient;
        this.configurationService = configurationService;
        this.contractService = contractService;
        this.certificateDetails = certificateDetails;
        this.walletService = walletService;
        this.eventService = eventService;
        this.web3Service = web3Service;
        this.certificateAuthorizationService = certificateAuthorizationService;
        this.globalConfiguration = globalConfiguration;
        this.store = store;
        this.batchService = batchService;
        this.diagnosisService = diagnosisService;
        this.jwtProofService = jwtProofService;
        this.certificateUtilsService = certificateUtilsService;
        this.arianeeAuthentificationService = arianeeAuthentificationService;
        this.arianeeProxyService = arianeeProxyService;
        this.isCertificateOwnershipRequestable = this.certificateUtilsService.isCertificateOwnershipRequestable;
        this.reserveCertificateId = function (certificateId, receiver) { return __awaiter(_this, void 0, void 0, function () {
            var certificateIdIsAvailable, targetAddress, transcationObject, result, e_1, diagnosis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!certificateId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.isCertificateIdFree(certificateId)];
                    case 1:
                        certificateIdIsAvailable = _a.sent();
                        if (!certificateIdIsAvailable) {
                            throw new Error("Certificate id (" + certificateId + ") is not available");
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getAvailableCertificateId()];
                    case 3:
                        certificateId = _a.sent();
                        _a.label = 4;
                    case 4:
                        targetAddress = receiver || this.walletService.address;
                        transcationObject = this.contractService
                            .storeContract
                            .methods
                            .reserveToken(certificateId, targetAddress);
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 9]);
                        return [4 /*yield*/, transcationObject.send()
                                .then(function (i) { return (__assign(__assign({}, i), { certificateId: certificateId })); })];
                    case 6:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 7:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.diagnosisService.diagnosis([
                                this.diagnosisService.isStoreApprove(),
                                this.diagnosisService.isPOACredit(),
                                this.diagnosisService.isCertificateCredit()
                            ], e_1)];
                    case 8:
                        diagnosis = _a.sent();
                        return [2 /*return*/, Promise.reject(diagnosis)];
                    case 9: return [2 /*return*/];
                }
            });
        }); };
        this.getAvailableCertificateId = function () { return __awaiter(_this, void 0, void 0, function () {
            var certificateId, isFree;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        certificateId = this.utils.createUID();
                        return [4 /*yield*/, this.isCertificateIdFree(certificateId)];
                    case 1:
                        isFree = _a.sent();
                        if (isFree) {
                            return [2 /*return*/, certificateId];
                        }
                        else {
                            return [2 /*return*/, this.getAvailableCertificateId()];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.isCertificateIdFree = function (certificateId) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.arianeeProxyService.ownerOf(certificateId)];
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
        this.hydrateTokenTransaction = function (data) {
            var uri = data.uri, hash = data.hash, certificateId = data.certificateId, encryptedInitialKey = data.encryptedInitialKey, tokenRecoveryTimestamp = data.tokenRecoveryTimestamp, sameRequestOwnershipPassphrase = data.sameRequestOwnershipPassphrase;
            return _this.contractService.storeContract.methods
                .hydrateToken(certificateId, hash, uri, encryptedInitialKey, tokenRecoveryTimestamp, sameRequestOwnershipPassphrase, _this.configurationService.arianeeConfiguration.brandDataHubReward.address);
        };
        this.createAndStoreCertificate = function (data, urlOfRPCServer) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.customHydrateToken(data)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.storeContentInRPCServer(result.certificateId, data.content, urlOfRPCServer)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        this.customHydrateToken = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var preparedData, preparedData_1, transcationObject, result, e_2, diagnosis;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data.uri = data.uri || '';
                        preparedData = data;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        return [4 /*yield*/, this.prepareHydrateToken(data)];
                    case 2:
                        preparedData_1 = _a.sent();
                        transcationObject = this.hydrateTokenTransaction(preparedData_1);
                        return [4 /*yield*/, transcationObject.send()
                                .then(function (i) { return (__assign(__assign({}, i), { passphrase: preparedData_1.passphrase, certificateId: preparedData_1.certificateId, deepLink: _this.utils.createLink(preparedData_1.certificateId, preparedData_1.passphrase) })); })];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 4:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.diagnosisService.diagnosis([
                                this.diagnosisService.isStoreApprove(),
                                this.diagnosisService.isPOACredit(),
                                this.diagnosisService.isCertificateCredit(),
                                this.diagnosisService.isCertificateIdExist(preparedData.certificateId)
                            ], e_2)];
                    case 5:
                        diagnosis = _a.sent();
                        return [2 /*return*/, Promise.reject(diagnosis)];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Update certificate imprint of a certificate
         * @param {{certificateId: ArianeeTokenId; content?: any; imprint?: string}} parameters
         * @returns {Promise<never>}
         */
        this.updateCertificate = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var certificateId, content, imprint, contentImprint, _a, result, e_3, diagnosis;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        certificateId = parameters.certificateId, content = parameters.content, imprint = parameters.imprint;
                        _a = imprint;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.utils.calculateImprint(content)];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        contentImprint = _a;
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 7]);
                        return [4 /*yield*/, this.contractService.storeContract.methods
                                .updateSmartAsset(certificateId, contentImprint, this.configurationService.arianeeConfiguration.brandDataHubReward.address)
                                .send()];
                    case 4:
                        result = _b.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        e_3 = _b.sent();
                        return [4 /*yield*/, this.diagnosisService.diagnosis([
                                this.diagnosisService.isStoreApprove(),
                                this.diagnosisService.isPOACredit(),
                                this.diagnosisService.isUpdateCertificateCredit()
                            ], e_3)];
                    case 6:
                        diagnosis = _b.sent();
                        return [2 /*return*/, Promise.reject(diagnosis)];
                    case 7: return [2 /*return*/, result];
                }
            });
        }); };
        /**
         * Update imprint and content of certificate
         * @param {{certificateId: ArianeeTokenId; content: any}} parameters
         * @param {string} urlOfRPCServer
         * @returns {Promise<never>}
         */
        this.updateAndStoreCertificateContent = function (parameters, urlOfRPCServer) { return __awaiter(_this, void 0, void 0, function () {
            var content, certificateId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = parameters.content, certificateId = parameters.certificateId;
                        return [4 /*yield*/, this.updateCertificate({
                                certificateId: certificateId,
                                content: content
                            })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.storeUpdateContentInRPCServer(certificateId, content, urlOfRPCServer)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        /**
         * Store update content of a certificate to Arianee Privacy Gateway
         * @param {ArianeeTokenId} certificateId
         * @param content
         * @param {string} arianeePrivacyGatewayURL
         * @returns {Promise<{jsonrpc: number; id: string; result?: any}>}
         */
        this.storeUpdateContentInRPCServer = function (certificateId, content, arianeePrivacyGatewayURL) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                arianeePrivacyGatewayURL = arianeePrivacyGatewayURL || this.configurationService.arianeeConfiguration.defaultArianeePrivacyGateway;
                if (!arianeePrivacyGatewayURL) {
                    throw new Error('You need to specify an Arianee Privacy Gateway URL');
                }
                return [2 /*return*/, this.httpClient.RPCCall(arianeePrivacyGatewayURL, 'update.create', {
                        certificateId: certificateId,
                        json: content
                    })];
            });
        }); };
        this.customHydrateTokenBatch = function (datas) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                datas.forEach(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var preparedData, transactionObject;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!data) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.prepareHydrateToken(data)];
                            case 1:
                                preparedData = _a.sent();
                                return [4 /*yield*/, this.hydrateTokenTransaction(preparedData)];
                            case 2:
                                transactionObject = _a.sent();
                                this.batchService.addToBatch(transactionObject);
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, this.batchService.executeBatch()];
            });
        }); };
        this.storeContentInRPCServer = function (certificateId, content, arianeePrivacyGatewayURL) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                arianeePrivacyGatewayURL = arianeePrivacyGatewayURL || this.configurationService.arianeeConfiguration.defaultArianeePrivacyGateway;
                if (!arianeePrivacyGatewayURL) {
                    throw new Error('You need to specify an Arianee Privacy Gateway URL');
                }
                return [2 /*return*/, this.httpClient.RPCCall(arianeePrivacyGatewayURL, 'certificate.create', {
                        certificateId: certificateId,
                        json: content
                    })];
            });
        }); };
        /**
         *
         * @param {number} certificateId
         * @param {string} passphrase
         * @returns {Promise<never>}
         */
        this.requestCertificateOwnershipWithPassphrase = function (certificateId, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            var isRequestable, requestTokenPromise, e_4, diagnosis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.diagnosisService.isRequestable(certificateId, passphrase)];
                    case 1:
                        isRequestable = _a.sent();
                        if (isRequestable.isTrue === false) {
                            return [2 /*return*/, Promise.reject([isRequestable])];
                        }
                        return [4 /*yield*/, this.certificateUtilsService.customRequestTokenFactory(certificateId, passphrase)];
                    case 2:
                        requestTokenPromise = _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 7]);
                        return [4 /*yield*/, requestTokenPromise.send()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5:
                        e_4 = _a.sent();
                        return [4 /*yield*/, this.diagnosisService.diagnosis([
                                Promise.resolve(isRequestable),
                                this.diagnosisService.isPOACredit()
                            ], e_4)];
                    case 6:
                        diagnosis = _a.sent();
                        return [2 /*return*/, Promise.reject(diagnosis)];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        /**
         * Get certificate from Arianee Access Token
         * example: getCertificateFromArianeeAccessToken(eyJ0eXAiOiJK...restOfYourJWT)
         * @param Arianee Access Token
         * @param query
         */
        this.getCertificateFromArianeeAccessToken = function (arianeeAccessToken, query) {
            var subId = _this.jwtProofService.decodeArianeeAccessToken(arianeeAccessToken).payload.subId;
            var queryWithJWT = __assign({}, query);
            queryWithJWT.advanced = __assign(__assign({}, queryWithJWT.advanced), { arianeeProofToken: arianeeAccessToken });
            return _this.getCertificate(subId, undefined, queryWithJWT);
        };
        /**
         * Get certificate from certificateId and passphrase.
         * @param certificateId
         * @param passphrase
         * @param query
         */
        this.getCertificate = function (certificateId, passphrase, query) { return __awaiter(_this, void 0, void 0, function () {
            var response, requestQueue, contentDetails, issuerDetails, messageSenders, isRequestable, eventsDetails, arianeeEvents, recoverCertificate, err_1, summary;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.globalConfiguration.getMergedQuery(query);
                        response = new certificateSummary_1.CertificateSummaryBuilder();
                        response.setCertificateId(certificateId);
                        requestQueue = [];
                        if (query.content) {
                            contentDetails = this.certificateDetails.getCertificateContent({
                                certificateId: certificateId,
                                passphrase: passphrase,
                                query: query
                            }).then(function (certificateContent) {
                                response.setContent(certificateContent);
                            });
                            requestQueue.push(contentDetails);
                        }
                        if (query.owner) {
                            requestQueue.push(this.certificateDetails.getCertificateOwner(certificateId)
                                .then(function (owner) {
                                return response.setOwner(owner, _this.walletService.address);
                            }));
                        }
                        if (query.issuer) {
                            issuerDetails = this.certificateDetails.getCertificateIssuer({
                                certificateId: certificateId,
                                query: query
                            })
                                .then(function (identityDetails) {
                                response.setIssuer(identityDetails.isAuthentic, identityDetails.isApproved, identityDetails.imprint, identityDetails);
                            });
                            requestQueue.push(issuerDetails);
                        }
                        if (query.messageSenders) {
                            messageSenders = this.certificateAuthorizationService.getMessageSenders({ certificateId: certificateId, query: query })
                                .then(function (messageSenders) { return response.setMessageSenders(messageSenders); });
                            requestQueue.push(messageSenders);
                        }
                        if (query.isRequestable) {
                            isRequestable = this.isCertificateOwnershipRequestable(certificateId, passphrase).then(function (isRequestable) { return response.setIsRequestable(isRequestable.isTrue); });
                            requestQueue.push(isRequestable);
                        }
                        if (query.events) {
                            eventsDetails = this.eventService.getCertificateTransferEvents({
                                certificateId: certificateId,
                                query: query
                            }).then(function (events) {
                                response.setEvents(events);
                            });
                            requestQueue.push(eventsDetails);
                        }
                        if (query.arianeeEvents) {
                            arianeeEvents = this.eventService.getCertificateArianeeEvents({
                                certificateId: certificateId, passphrase: passphrase, query: query
                            }).then(function (events) {
                                response.setArianeeEvents(events);
                            });
                            requestQueue.push(arianeeEvents);
                        }
                        if (query.recover) {
                            recoverCertificate = function () { return __awaiter(_this, void 0, void 0, function () {
                                var result, isRecoverable;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.contractService.smartAssetContract.methods.tokenRecoveryDate(certificateId).call()];
                                        case 1:
                                            result = _a.sent();
                                            isRecoverable = Date.now() / 1000 < +result;
                                            response.setRecover({
                                                isRecoverable: isRecoverable,
                                                timestamp: +result * 1000
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); };
                            requestQueue.push(recoverCertificate());
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all(requestQueue)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        return [3 /*break*/, 4];
                    case 4:
                        summary = response.build();
                        return [2 /*return*/, summary];
                }
            });
        }); };
        /**
         * Get all certificate ids owned by this wallet
         */
        this.getMyCertificateIds = function (verifyOwnership) {
            if (verifyOwnership === void 0) { verifyOwnership = false; }
            return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (this.walletService.address === '0x0000000000000000000000000000000000000000') {
                        return [2 /*return*/, []];
                    }
                    return [2 /*return*/, this.store.get(storeNamespace_1.StoreNamespace.certificateIds, this.walletService.address, function () { return _this.arianeeProxyService.getAllMyCertificateIds(); }, verifyOwnership)];
                });
            });
        };
        this.getMyCertificates = function (query, verifyOwnership) { return __awaiter(_this, void 0, void 0, function () {
            var certificateIds, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMyCertificateIds(verifyOwnership)];
                    case 1:
                        certificateIds = _a.sent();
                        return [4 /*yield*/, Promise.all(certificateIds.map(function (certificateId) {
                                return _this.getCertificate(certificateId, undefined, query);
                            }))];
                    case 2:
                        results = _a.sent();
                        return [2 /*return*/, results.reverse()];
                }
            });
        }); };
        this.getMyCertificatesGroupByIssuer = function (query) { return __awaiter(_this, void 0, void 0, function () {
            var certificates, groupByIssuerCertificates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getMyCertificates(query)];
                    case 1:
                        certificates = _a.sent();
                        groupByIssuerCertificates = certificates
                            .reduce(function (accumulator, currentValue) {
                            var issuerAddress = currentValue.issuer.identity.address;
                            if (!Object.prototype.hasOwnProperty.call(accumulator, issuerAddress)) {
                                accumulator[issuerAddress] = [];
                            }
                            accumulator[issuerAddress].push(currentValue);
                            return accumulator;
                        }, {});
                        return [2 /*return*/, groupByIssuerCertificates];
                }
            });
        }); };
        this.createCertificateRequestOwnershipLink = function (certificateId, passphrase, customDeeplink) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!passphrase) {
                            passphrase = this.utils.createPassphrase();
                        }
                        return [4 /*yield*/, this.setPassphrase(certificateId, passphrase, 1)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.utils.createLink(certificateId, passphrase, customDeeplink)];
                }
            });
        }); };
        // Ajouter une passphrase à un token
        //  this.smartAssetContract.methods.addTokenAccess()
        /**
         *
         * @param arianeeLink can be both "https://arianee.net/4567,fgheziufez" or a Arianee Access Token
         * @param query
         */
        this.getCertificateFromLink = function (arianeeLink, query) {
            var _a = _this.arianeeAuthentificationService.extractParametersFromArianeeLink(arianeeLink), certificateId = _a.certificateId, authentification = _a.authentification;
            return _this.getCertificate(certificateId, authentification, query);
        };
        this.prepareHydrateToken = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var uri, hash, certificateId, passphrase, tokenRecoveryTimestamp, sameRequestOwnershipPassphrase, content, certificateIdIsAvailable, fiveYears, now, temporaryWallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = data.uri, hash = data.hash, certificateId = data.certificateId, passphrase = data.passphrase, tokenRecoveryTimestamp = data.tokenRecoveryTimestamp, sameRequestOwnershipPassphrase = data.sameRequestOwnershipPassphrase, content = data.content;
                        if (!certificateId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.certificateUtilsService.canCreateCertificateWithCertificateId(certificateId)];
                    case 1:
                        certificateIdIsAvailable = _a.sent();
                        if (!certificateIdIsAvailable) {
                            throw new Error("Certificate id (" + certificateId + ") is not available");
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getAvailableCertificateId()];
                    case 3:
                        certificateId = _a.sent();
                        _a.label = 4;
                    case 4:
                        fiveYears = 60 * 60 * 24 * 365 * 5;
                        now = new Date();
                        tokenRecoveryTimestamp =
                            tokenRecoveryTimestamp ||
                                Math.round(now.setDate(now.getDate()) / 1000) + fiveYears;
                        sameRequestOwnershipPassphrase =
                            sameRequestOwnershipPassphrase !== undefined
                                ? sameRequestOwnershipPassphrase
                                : true;
                        passphrase = passphrase || this.utils.createPassphrase();
                        temporaryWallet = this.configurationService
                            .walletFactory()
                            .fromPassPhrase(passphrase);
                        console.assert(!(hash && content), 'you should choose between hash and certificate');
                        console.assert(!(isNullOrUndefined_1.isNullOrUndefined(hash) && isNullOrUndefined_1.isNullOrUndefined(content)), 'you should pass at least on parameter');
                        if (!content) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.utils.calculateImprint(content)];
                    case 5:
                        hash = _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, {
                            uri: uri,
                            hash: hash,
                            certificateId: certificateId,
                            encryptedInitialKey: temporaryWallet.address,
                            passphrase: passphrase,
                            tokenRecoveryTimestamp: tokenRecoveryTimestamp,
                            sameRequestOwnershipPassphrase: sameRequestOwnershipPassphrase,
                            content: content
                        }];
                }
            });
        }); };
        /**
         * Get information about owner compared to this wallet.
         * It does not throw if certificateId does not exist
         * @param {ArianeeTokenId} certificateId
         * @returns {Promise<IOwnerOf>}
         */
        this.ownerOf = function (certificateId) { return __awaiter(_this, void 0, void 0, function () {
            var address, addressLowerCase, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.arianeeProxyService.ownerOf(certificateId)];
                    case 1:
                        address = _a.sent();
                        addressLowerCase = address.toLowerCase();
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        address = undefined;
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, {
                            address: address,
                            hasOwner: address !== undefined,
                            isOwner: addressLowerCase === this.walletService.address.toLowerCase()
                        }];
                }
            });
        }); };
        /**
         * Transfer a certificate from this wallet to another wallet
         * @param {ArianeeTokenId} certificateId
         * @param {string} toAddress
         * @returns {Promise<void>}
         */
        this.transfer = function (certificateId, toAddress) { return __awaiter(_this, void 0, void 0, function () {
            var isOwner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ownerOf(certificateId)];
                    case 1:
                        isOwner = (_a.sent()).isOwner;
                        if (!isOwner) {
                            throw new Error("This wallet is not the owner of " + certificateId);
                        }
                        else {
                            return [2 /*return*/, this.contractService
                                    .smartAssetContract
                                    .methods
                                    .safeTransferFrom(this.walletService.address, toAddress, certificateId).send()];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Transfer certificate to dead address if this wallet is owner
         * @param {ArianeeTokenId} certificateId
         * @returns {Promise<any>}
         */
        this.destroyCertificate = function (certificateId) {
            return _this.transfer(certificateId, '0x000000000000000000000000000000000000dead');
        };
        this.recoverCertificate = function (certificateId) {
            return _this.contractService.smartAssetContract.methods
                .recoverTokenToIssuer(certificateId)
                .send();
        };
    }
    CertificateService.prototype.setPassphrase = function (certificateId, passphrase, type) {
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
    CertificateService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [utilsService_1.UtilsService,
            arianeeHttpClient_1.ArianeeHttpClient,
            configurationService_1.ConfigurationService,
            contractsService_1.ContractService,
            certificatesDetailsService_1.CertificateDetails,
            walletService_1.WalletService,
            eventsService_1.EventService,
            web3Service_1.Web3Service,
            certificateAuthorizationService_1.CertificateAuthorizationService,
            globalConfigurationService_1.GlobalConfigurationService,
            simpleStore_1.SimpleStore,
            batchService_1.BatchService,
            diagnosisService_1.DiagnosisService,
            arianeeAccessTokenValidatorService_1.ArianeeAccessTokenValidatorService,
            certificateUtilsService_1.CertificateUtilsService,
            arianeeAuthentificationService_1.ArianeeAuthentificationService,
            arianeeBlockchainProxyService_1.ArianeeBlockchainProxyService])
    ], CertificateService);
    return CertificateService;
}());
exports.CertificateService = CertificateService;
//# sourceMappingURL=certificateService.js.map