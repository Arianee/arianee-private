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
var lodash_1 = require("lodash");
var tsyringe_1 = require("tsyringe");
var storeNamespace_1 = require("../../../../models/storeNamespace");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var certificateVersion_1 = require("../../../libs/is18n/certificateVersion");
var i18nSchemaLanguageManager_1 = require("../../../libs/i18nSchemaLanguageManager/i18nSchemaLanguageManager");
var isNullOrUndefined_1 = require("../../../libs/isNullOrUndefined/isNullOrUndefined");
var simpleStore_1 = require("../../../libs/simpleStore/simpleStore");
var arianeePrivacyGatewayService_1 = require("../arianeePrivacyGatewayService/arianeePrivacyGatewayService");
var certificateService_1 = require("../certificateService/certificateService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var diagnosisService_1 = require("../diagnosisService/diagnosisService");
var identityService_1 = require("../identityService/identityService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var getPastEventService_1 = require("../getPastEventService/getPastEventService");
var arianeeBlockchainProxyService_1 = require("../arianeeBlockchainProxyService/arianeeBlockchainProxyService");
var MessageService = /** @class */ (function () {
    function MessageService(identityService, contractService, walletService, configurationService, httpClient, utils, diagnosisService, store, certificateService, arianeePrivacyGateWayService, getPastEvent, arianeeProxyService) {
        var _this = this;
        this.identityService = identityService;
        this.contractService = contractService;
        this.walletService = walletService;
        this.configurationService = configurationService;
        this.httpClient = httpClient;
        this.utils = utils;
        this.diagnosisService = diagnosisService;
        this.store = store;
        this.certificateService = certificateService;
        this.arianeePrivacyGateWayService = arianeePrivacyGateWayService;
        this.getPastEvent = getPastEvent;
        this.arianeeProxyService = arianeeProxyService;
        this.getMessage = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var forceRefresh;
            var _this = this;
            return __generator(this, function (_a) {
                forceRefresh = parameters.forceRefresh || false;
                return [2 /*return*/, this.store.get(storeNamespace_1.StoreNamespace.messages, parameters.messageId, function () { return _this.fetchMessage(parameters); }, forceRefresh)];
            });
        }); };
        /**
         * Fetch message and apply i18n
         * @param {{messageId: number; query?: ConsolidatedCertificateRequest; url?: string}} parameters
         * @returns {Promise<Message>}
         */
        this.fetchMessage = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var query, messageSummary;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = parameters.query;
                        return [4 /*yield*/, this.fetchRawMessage(parameters)];
                    case 1:
                        messageSummary = _a.sent();
                        if (lodash_1.get(query, 'advanced.languages') &&
                            lodash_1.get(messageSummary.content, 'data') &&
                            certificateVersion_1.isSchemai18n(messageSummary.content.data)) {
                            messageSummary = i18nSchemaLanguageManager_1.replaceLanguage(messageSummary, query.advanced.languages);
                        }
                        return [2 /*return*/, messageSummary];
                }
            });
        }); };
        /**
         * Fetch message
         * @param {{messageId: number; query?: ConsolidatedCertificateRequest; url?: string}} parameters
         * @returns {Promise<Message>}
         */
        this.fetchRawMessage = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var messageId, query, result, certificateIdentityIssuer, certificateIssuer, messageIdentityIssuer, content, rpcURL, proof, messageRPCResult, messageContent, messageSchema, hash, isMessageAuthentic, messageSentEvents, messageCreationEvent, creationDate, isRead, messageSummary;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageId = parameters.messageId, query = parameters.query;
                        return [4 /*yield*/, this.contractService.messageContract.methods.messages(messageId).call()];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.certificateService.getCertificate(result.tokenId, '', {
                                issuer: true,
                                content: false
                            })];
                    case 2:
                        certificateIdentityIssuer = _a.sent();
                        certificateIssuer = certificateIdentityIssuer.issuer.identity;
                        return [4 /*yield*/, this.identityService.getIdentity({ address: result.sender })];
                    case 3:
                        messageIdentityIssuer = _a.sent();
                        rpcURL = lodash_1.get(certificateIssuer, 'data.rpcEndpoint') || parameters.url;
                        if (!rpcURL) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.walletService.signProof(JSON.stringify({
                                messageId: messageId,
                                timestamp: new Date()
                            }), this.walletService.privateKey)];
                    case 4:
                        proof = _a.sent();
                        return [4 /*yield*/, this.httpClient.RPCCall(rpcURL, 'message.read', {
                                messageId: messageId,
                                authentification: {
                                    hash: proof.messageHash,
                                    signature: proof.signature,
                                    message: proof.message
                                }
                            })];
                    case 5:
                        messageRPCResult = _a.sent();
                        messageContent = messageRPCResult.result;
                        if (!messageContent) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.httpClient.fetch(messageContent.$schema)];
                    case 6:
                        messageSchema = _a.sent();
                        return [4 /*yield*/, this.utils.cert(messageSchema, messageContent)];
                    case 7:
                        hash = _a.sent();
                        isMessageAuthentic = hash === result.imprint;
                        content = {
                            data: messageContent,
                            imprint: result.imprint,
                            isAuthentic: isMessageAuthentic
                        };
                        _a.label = 8;
                    case 8: return [4 /*yield*/, this.getPastEvent.getPastEvents(contractsService_1.ContractName.messageContract, 'MessageSent', { fromBlock: 0, toBlock: 'latest', filter: { _tokenId: result.tokenId.toString() } })];
                    case 9:
                        messageSentEvents = _a.sent();
                        messageCreationEvent = messageSentEvents.find(function (event) { return event.returnValues._messageId === messageId.toString(); });
                        return [4 /*yield*/, this.utils.getTimestampFromBlock(messageCreationEvent.blockNumber)];
                    case 10:
                        creationDate = _a.sent();
                        creationDate = parseInt(creationDate) * 1000;
                        return [4 /*yield*/, this.isMessageRead(messageId)];
                    case 11:
                        isRead = _a.sent();
                        messageSummary = {
                            certificateId: result.tokenId,
                            to: result.to,
                            from: result.sender,
                            messageId: messageId,
                            issuer: {
                                isIdentityVerified: messageIdentityIssuer.isApproved,
                                isIdentityAuthentic: messageIdentityIssuer.isAuthentic,
                                imprint: messageIdentityIssuer.imprint,
                                identity: messageIdentityIssuer
                            },
                            content: content,
                            timestamp: creationDate,
                            isRead: isRead
                        };
                        if (lodash_1.get(query, 'advanced.languages') &&
                            lodash_1.get(content, 'data') &&
                            certificateVersion_1.isSchemai18n(content.data)) {
                            messageSummary = i18nSchemaLanguageManager_1.replaceLanguage(messageSummary, query.advanced.languages);
                        }
                        return [2 /*return*/, messageSummary];
                }
            });
        }); };
        this.getAllMyMessageIds = this.arianeeProxyService.getAllMyMessageIds;
        this.getMyMessages = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var messageIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAllMyMessageIds()];
                    case 1:
                        messageIds = _a.sent();
                        return [2 /*return*/, Promise.all(messageIds.map(function (messageId) {
                                return _this.getMessage(__assign({ messageId: messageId }, parameters))
                                    .catch(function (d) { return undefined; });
                            }))];
                }
            });
        }); };
        this.markAsRead = function (messageId) { return __awaiter(_this, void 0, void 0, function () {
            var walletReward, isAlreadyRead;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        walletReward = this.configurationService.arianeeConfiguration.walletReward.address;
                        return [4 /*yield*/, this.isMessageRead(messageId)];
                    case 1:
                        isAlreadyRead = _a.sent();
                        if (!isAlreadyRead) return [3 /*break*/, 2];
                        return [2 /*return*/, {
                                isTrue: false,
                                code: 'message.markasread',
                                message: 'message was already mark as read or cant be mark as read'
                            }];
                    case 2: return [4 /*yield*/, this.contractService.storeContract.methods.readMessage(messageId, walletReward).send()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.getMessage({ messageId: messageId, forceRefresh: true })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, {
                                isTrue: true,
                                code: 'message.markasread',
                                message: 'message was mark as read'
                            }];
                }
            });
        }); };
        this.isMessageRead = function (messageId) { return __awaiter(_this, void 0, void 0, function () {
            var messageReadEvents;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPastEvent.getPastEvents(contractsService_1.ContractName.messageContract, 'MessageRead', { fromBlock: 0, toBlock: 'latest', filter: { _messageId: messageId } })];
                    case 1:
                        messageReadEvents = _a.sent();
                        return [2 /*return*/, messageReadEvents.length > 0];
                }
            });
        }); };
        this.storeMessageContentInRPCServer = function (messageId, content, url) { return __awaiter(_this, void 0, void 0, function () {
            var arianeePrivacyGatewayURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .arianeePrivacyGateWayService
                            .getArianeePrivacyURLORFallback(url)];
                    case 1:
                        arianeePrivacyGatewayURL = _a.sent();
                        return [2 /*return*/, this.httpClient.RPCCall(arianeePrivacyGatewayURL, 'message.create', {
                                messageId: messageId,
                                json: content
                            })];
                }
            });
        }); };
        this.createAndStoreMessage = function (data, url) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createMessage(data)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.storeMessageContentInRPCServer(result.messageId, data.content, url)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        this.generateAvailableMessageId = function () { return __awaiter(_this, void 0, void 0, function () {
            var messageId, isFree;
            return __generator(this, function (_a) {
                messageId = this.utils.createUID();
                isFree = this.isMessageIdFree(messageId);
                if (isFree) {
                    return [2 /*return*/, messageId];
                }
                else {
                    return [2 /*return*/, this.generateAvailableMessageId()];
                }
                return [2 /*return*/];
            });
        }); };
        this.isMessageIdFree = function (arianeeEventId) { return __awaiter(_this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.messageContract.methods.messages(arianeeEventId).call()];
                    case 1:
                        message = _a.sent();
                        return [2 /*return*/, message.sender === '0x0000000000000000000000000000000000000000'];
                }
            });
        }); };
        this.createMessage = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var messageId, certificateId, contentImprint, content, brandReward, arianeeEventIdIsAvailable, messageSchema, result, e_1, diagnosis;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        messageId = data.messageId, certificateId = data.certificateId, contentImprint = data.contentImprint, content = data.content;
                        brandReward = this.configurationService.arianeeConfiguration.brandDataHubReward.address;
                        if (!data.messageId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.isMessageIdFree(messageId)];
                    case 1:
                        arianeeEventIdIsAvailable = _a.sent();
                        if (!arianeeEventIdIsAvailable) {
                            throw new Error("Message id (" + messageId + ") is not available");
                        }
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.generateAvailableMessageId()];
                    case 3:
                        messageId = _a.sent();
                        _a.label = 4;
                    case 4:
                        console.assert(!(contentImprint && content), 'you should choose between contentImprint parameter and content contentImprint');
                        console.assert(!(isNullOrUndefined_1.isNullOrUndefined(contentImprint) && isNullOrUndefined_1.isNullOrUndefined(content)), 'you should pass at least on parameter');
                        if (!content) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.httpClient.fetch(content.$schema)];
                    case 5:
                        messageSchema = _a.sent();
                        return [4 /*yield*/, this.utils.cert(messageSchema, content)];
                    case 6:
                        contentImprint = _a.sent();
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 9, , 11]);
                        return [4 /*yield*/, this.contractService.storeContract.methods.createMessage(messageId, certificateId, contentImprint, brandReward).send()];
                    case 8:
                        result = _a.sent();
                        return [2 /*return*/, __assign(__assign({ store: this.storeMessageContentInRPCServer }, result), { contentImprint: contentImprint,
                                messageId: messageId })];
                    case 9:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.diagnosisService.diagnosis([
                                this.diagnosisService.isStoreApprove(),
                                this.diagnosisService.isMessageCredit(),
                                this.diagnosisService.isWhiteListed(certificateId)
                            ], e_1)];
                    case 10:
                        diagnosis = _a.sent();
                        return [2 /*return*/, Promise.reject(diagnosis)];
                    case 11: return [2 /*return*/];
                }
            });
        }); };
    }
    MessageService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [identityService_1.IdentityService,
            contractsService_1.ContractService,
            walletService_1.WalletService,
            configurationService_1.ConfigurationService,
            arianeeHttpClient_1.ArianeeHttpClient,
            utilsService_1.UtilsService,
            diagnosisService_1.DiagnosisService,
            simpleStore_1.SimpleStore,
            certificateService_1.CertificateService,
            arianeePrivacyGatewayService_1.ArianeePrivacyGatewayService,
            getPastEventService_1.GetPastEventService,
            arianeeBlockchainProxyService_1.ArianeeBlockchainProxyService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=messageService.js.map