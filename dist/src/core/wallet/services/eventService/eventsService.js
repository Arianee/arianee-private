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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var tsyringe_1 = require("tsyringe");
var blockchainEventsName_1 = require("../../../../models/blockchainEventsName");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var certificateVersion_1 = require("../../../libs/is18n/certificateVersion");
var i18nSchemaLanguageManager_1 = require("../../../libs/i18nSchemaLanguageManager/i18nSchemaLanguageManager");
var isNullOrUndefined_1 = require("../../../libs/isNullOrUndefined/isNullOrUndefined");
var sortEvents_1 = require("../../../libs/sort/sortEvents");
var arianeePrivacyGatewayService_1 = require("../arianeePrivacyGatewayService/arianeePrivacyGatewayService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var diagnosisService_1 = require("../diagnosisService/diagnosisService");
var identityService_1 = require("../identityService/identityService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var getPastEventService_1 = require("../getPastEventService/getPastEventService");
var EventService = /** @class */ (function () {
    function EventService(identityService, contractService, walletService, configurationService, httpClient, utils, diagnosisService, arianeePrivacyGateWayService, getPastEventService) {
        var _this = this;
        this.identityService = identityService;
        this.contractService = contractService;
        this.walletService = walletService;
        this.configurationService = configurationService;
        this.httpClient = httpClient;
        this.utils = utils;
        this.diagnosisService = diagnosisService;
        this.arianeePrivacyGateWayService = arianeePrivacyGateWayService;
        this.getPastEventService = getPastEventService;
        this.getCertificateTransferEvents = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var certificateId, sortedEvents, consolidatedEvent;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        certificateId = parameters.certificateId;
                        return [4 /*yield*/, this.getPastEventService.getPastEvents(contractsService_1.ContractName.smartAssetContract, 'Transfer', {
                                filter: { _tokenId: certificateId },
                                fromBlock: 0,
                                toBlock: 'latest'
                            })
                                .then(function (events) { return events.sort(sortEvents_1.sortEvents); })];
                    case 1:
                        sortedEvents = _a.sent();
                        consolidatedEvent = function (event) { return __awaiter(_this, void 0, void 0, function () {
                            var identity;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.identityService
                                            .getIdentity(__assign(__assign({}, parameters), { address: event.returnValues._to }))];
                                    case 1:
                                        identity = _a.sent();
                                        return [2 /*return*/, __assign({ identity: identity }, event)];
                                }
                            });
                        }); };
                        return [2 /*return*/, Promise.all(sortedEvents.map(consolidatedEvent))];
                }
            });
        }); };
        this.getCertificateArianeeEvents = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var certificateId, query, passphrase, issuer, rpcEndPoint, issuerIdentity, _a, validateEvents, pendingEvents, allEvents, orderedArianeeEvents;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        certificateId = parameters.certificateId, query = parameters.query, passphrase = parameters.passphrase;
                        return [4 /*yield*/, this.contractService.smartAssetContract.methods
                                .issuerOf(certificateId)
                                .call()];
                    case 1:
                        issuer = _b.sent();
                        rpcEndPoint = lodash_1.get(query, 'issuer.rpcURI');
                        if (!!rpcEndPoint) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.identityService.getIdentity({ address: issuer, query: query })];
                    case 2:
                        issuerIdentity = _b.sent();
                        rpcEndPoint = (issuerIdentity.data && issuerIdentity.data.rpcEndpoint) ? issuerIdentity.data.rpcEndpoint : undefined;
                        _b.label = 3;
                    case 3:
                        if (!rpcEndPoint) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, Promise.all([
                                this.getValidateEvents(certificateId, rpcEndPoint, passphrase),
                                this.getPendingEvents(certificateId, rpcEndPoint, passphrase)
                            ])];
                    case 4:
                        _a = _b.sent(), validateEvents = _a[0], pendingEvents = _a[1];
                        allEvents = __spreadArrays(validateEvents, pendingEvents);
                        orderedArianeeEvents = allEvents.sort(EventService_1.orderArianeeEvents);
                        if (lodash_1.get(query, 'advanced.languages')) {
                            return [2 /*return*/, orderedArianeeEvents
                                    .map(function (arianeeEvent) {
                                    if (certificateVersion_1.isSchemai18n(arianeeEvent.content.data)) {
                                        return i18nSchemaLanguageManager_1.replaceLanguage(arianeeEvent, query.advanced.languages);
                                    }
                                    else {
                                        return arianeeEvent;
                                    }
                                })];
                        }
                        else {
                            return [2 /*return*/, orderedArianeeEvents];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.getValidateEvents = function (certificateId, rpcEndpoint, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            var eventLenth, eventRangeOfIndex, i, eventIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.eventContract.methods.eventsLength(certificateId).call()];
                    case 1:
                        eventLenth = _a.sent();
                        eventRangeOfIndex = [];
                        for (i = 0; i < eventLenth; i++) {
                            eventRangeOfIndex.push(i);
                        }
                        return [4 /*yield*/, Promise.all(eventRangeOfIndex.map(function (index) {
                                return _this.contractService.eventContract.methods
                                    .tokenEventsList(certificateId, index).call()
                                    .then(function (eventIdBn) { return eventIdBn; });
                            }))];
                    case 2:
                        eventIds = _a.sent();
                        return [2 /*return*/, Promise.all(eventIds.map(function (eventId) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.getArianeeEvent(eventId, certificateId, rpcEndpoint, false, passphrase)];
                                });
                            }); }))];
                }
            });
        }); };
        this.getPendingEvents = function (certificateId, rpcEndpoint, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            var pendingEventLenth, eventRangeOfIndex, i, pendingEventIds;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.eventContract.methods.pendingEventsLength(certificateId)
                            .call()];
                    case 1:
                        pendingEventLenth = _a.sent();
                        eventRangeOfIndex = [];
                        for (i = 0; i < pendingEventLenth; i++) {
                            eventRangeOfIndex.push(i);
                        }
                        return [4 /*yield*/, Promise.all(eventRangeOfIndex.map(function (index) {
                                return _this.contractService.eventContract.methods
                                    .pendingEvents(certificateId, index).call()
                                    .then(function (eventIdBn) { return eventIdBn; });
                            }))];
                    case 2:
                        pendingEventIds = _a.sent();
                        return [2 /*return*/, Promise.all(pendingEventIds.map(function (eventId) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, this.getArianeeEvent(eventId, certificateId, rpcEndpoint, true, passphrase)];
                                });
                            }); }))];
                }
            });
        }); };
        this.getArianeeEvent = function (arianeeEventId, certificateId, rpcEndpoint, isPending, passphrase) { return __awaiter(_this, void 0, void 0, function () {
            var eventBc, getTimestamp, getEventContent, _a, issuer, timestamp, content;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.contractService.eventContract.methods.getEvent(arianeeEventId).call()];
                    case 1:
                        eventBc = _b.sent();
                        getTimestamp = function () { return __awaiter(_this, void 0, void 0, function () {
                            var creationEvent;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.getPastEventService.getPastEvents(contractsService_1.ContractName.eventContract, blockchainEventsName_1.blockchainEventsName.arianeeEvent.eventCreated, { fromBlock: 0, toBlock: 'latest', filter: { _eventId: arianeeEventId } })];
                                    case 1:
                                        creationEvent = _a.sent();
                                        return [2 /*return*/, this.utils.getTimestampFromBlock(creationEvent[0].blockNumber)];
                                }
                            });
                        }); };
                        getEventContent = function () { return __awaiter(_this, void 0, void 0, function () {
                            var requestBody, privateKey, _a, _b, eventContent, RPCEvent, err_1, $schema, hash, tokenImprint, isCertificateContentValid;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        requestBody = {
                                            eventId: arianeeEventId,
                                            certificateId: certificateId
                                        };
                                        if (!passphrase) return [3 /*break*/, 2];
                                        privateKey = this.configurationService
                                            .walletFactory()
                                            .fromPassPhrase(passphrase).privateKey;
                                        _a = requestBody;
                                        return [4 /*yield*/, this.utils.signProofForRpc(certificateId, privateKey)];
                                    case 1:
                                        _a.authentification = _c.sent();
                                        return [3 /*break*/, 4];
                                    case 2:
                                        privateKey = this.walletService.privateKey;
                                        _b = requestBody;
                                        return [4 /*yield*/, this.utils.signProofForRpc(certificateId, privateKey)];
                                    case 3:
                                        _b.authentification = _c.sent();
                                        _c.label = 4;
                                    case 4:
                                        _c.trys.push([4, 6, , 7]);
                                        return [4 /*yield*/, this.httpClient.RPCCall(rpcEndpoint, 'event.read', requestBody)];
                                    case 5:
                                        RPCEvent = _c.sent();
                                        eventContent = RPCEvent.result;
                                        return [3 /*break*/, 7];
                                    case 6:
                                        err_1 = _c.sent();
                                        eventContent = undefined;
                                        return [3 /*break*/, 7];
                                    case 7:
                                        if (!eventContent) return [3 /*break*/, 11];
                                        return [4 /*yield*/, this.httpClient.fetch(eventContent.$schema)];
                                    case 8:
                                        $schema = _c.sent();
                                        return [4 /*yield*/, this.utils.cert($schema, eventContent)];
                                    case 9:
                                        hash = _c.sent();
                                        return [4 /*yield*/, this.contractService.eventContract.methods.getEvent(arianeeEventId).call()];
                                    case 10:
                                        tokenImprint = _c.sent();
                                        isCertificateContentValid = hash === tokenImprint[1];
                                        return [2 /*return*/, {
                                                data: eventContent,
                                                imprint: tokenImprint[1],
                                                isAuthentic: isCertificateContentValid,
                                                raw: eventContent
                                            }];
                                    case 11: return [2 /*return*/, {
                                            data: eventContent,
                                            imprint: undefined,
                                            isAuthentic: false,
                                            raw: eventContent
                                        }];
                                }
                            });
                        }); };
                        return [4 /*yield*/, Promise.all([
                                this.identityService.getIdentity({ address: eventBc['2'], query: { issuer: true } }),
                                getTimestamp(),
                                getEventContent()
                            ])];
                    case 2:
                        _a = _b.sent(), issuer = _a[0], timestamp = _a[1], content = _a[2];
                        return [2 /*return*/, {
                                certificateId: certificateId,
                                timestamp: timestamp,
                                issuer: {
                                    isIdentityVerified: issuer.isApproved,
                                    isIdentityAuthentic: issuer.isAuthentic,
                                    imprint: issuer.imprint,
                                    identity: issuer
                                },
                                arianeeEventId: arianeeEventId,
                                content: content,
                                pending: isPending
                            }];
                }
            });
        }); };
        this.acceptArianeeEvent = function (eventId) {
            return _this.contractService.storeContract.methods
                .acceptEvent(eventId, _this.configurationService.arianeeConfiguration.walletReward.address).send();
        };
        this.refuseArianeeEvent = function (eventId) {
            return _this.contractService.storeContract.methods
                .refuseEvent(eventId, _this.configurationService.arianeeConfiguration.walletReward.address).send();
        };
        /**
         * Sotre content to Arianee Privacy Gateway
         * @param {ArianeeTokenId} certificateId
         * @param {number} arianeeEventId
         * @param content
         * @param {string} url: if not url is specified, fallback to default rpc, if not fallback to rpc of issuer
         * @returns {Promise<{jsonrpc: number; id: string; result?: any}>}
         */
        this.storeArianeeEventContentInRPCServer = function (certificateId, arianeeEventId, content, url) { return __awaiter(_this, void 0, void 0, function () {
            var arianeePrivacyGatewayURL;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this
                            .arianeePrivacyGateWayService
                            .getArianeePrivacyURLORFallback(url, certificateId)];
                    case 1:
                        arianeePrivacyGatewayURL = _a.sent();
                        return [2 /*return*/, this.httpClient.RPCCall(arianeePrivacyGatewayURL, 'event.create', {
                                certificateId: certificateId,
                                eventId: arianeeEventId,
                                json: content
                            })];
                }
            });
        }); };
        this.createAndStoreArianeeEvent = function (data, url) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createArianeeEvent(data)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.storeArianeeEventContentInRPCServer(data.certificateId, result.arianeeEventId, data.content, url)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        }); };
        this.generateAvailableArianeeEventId = function () { return __awaiter(_this, void 0, void 0, function () {
            var arianeeEventId, isFree;
            return __generator(this, function (_a) {
                arianeeEventId = this.utils.createUID();
                isFree = this.isArianeeEventIdFree(arianeeEventId);
                if (isFree) {
                    return [2 /*return*/, arianeeEventId];
                }
                else {
                    return [2 /*return*/, this.generateAvailableArianeeEventId()];
                }
                return [2 /*return*/];
            });
        }); };
        this.isArianeeEventIdFree = function (arianeeEventId) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.contractService.eventContract.methods.getEvent(arianeeEventId).call()];
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
        this.createArianeeEvent = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var arianeeEventIdIsAvailable, _a, arianeeEventId, certificateId, contentImprint, uri, content, brandReward, certificateSchema, result, e_1, diagnosis;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!data.arianeeEventId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.isArianeeEventIdFree(data.arianeeEventId)];
                    case 1:
                        arianeeEventIdIsAvailable = _b.sent();
                        if (!arianeeEventIdIsAvailable) {
                            throw new Error("Arianee Event id (" + data.arianeeEventId + ") is not available");
                        }
                        return [3 /*break*/, 4];
                    case 2:
                        _a = data;
                        return [4 /*yield*/, this.generateAvailableArianeeEventId()];
                    case 3:
                        _a.arianeeEventId = _b.sent();
                        _b.label = 4;
                    case 4:
                        data.uri = data.uri || '';
                        arianeeEventId = data.arianeeEventId, certificateId = data.certificateId, contentImprint = data.contentImprint, uri = data.uri, content = data.content;
                        brandReward = this.configurationService.arianeeConfiguration.brandDataHubReward.address;
                        console.assert(!(contentImprint && content), 'you should choose between contentImprint parameter and content contentImprint');
                        console.assert(!(isNullOrUndefined_1.isNullOrUndefined(contentImprint) && isNullOrUndefined_1.isNullOrUndefined(content)), 'you should pass at least on parameter');
                        if (!content) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.httpClient.fetch(content.$schema)];
                    case 5:
                        certificateSchema = _b.sent();
                        return [4 /*yield*/, this.utils.cert(certificateSchema, content)];
                    case 6:
                        contentImprint = _b.sent();
                        _b.label = 7;
                    case 7:
                        _b.trys.push([7, 9, , 11]);
                        return [4 /*yield*/, this.contractService.storeContract.methods.createEvent(arianeeEventId, certificateId, contentImprint, uri, brandReward).send()];
                    case 8:
                        result = _b.sent();
                        return [2 /*return*/, __assign(__assign({ store: this.storeArianeeEventContentInRPCServer }, result), { contentImprint: contentImprint, arianeeEventId: arianeeEventId })];
                    case 9:
                        e_1 = _b.sent();
                        return [4 /*yield*/, this.diagnosisService.diagnosis([
                                this.diagnosisService.isStoreApprove(),
                                this.diagnosisService.isEventCredit()
                            ])];
                    case 10:
                        diagnosis = _b.sent();
                        return [2 /*return*/, Promise.reject(diagnosis)];
                    case 11: return [2 /*return*/];
                }
            });
        }); };
    }
    EventService_1 = EventService;
    var EventService_1;
    EventService.orderArianeeEvents = function (leftEvent, rightEvent) { return leftEvent.timestamp - leftEvent.timestamp; };
    EventService = EventService_1 = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [identityService_1.IdentityService,
            contractsService_1.ContractService,
            walletService_1.WalletService,
            configurationService_1.ConfigurationService,
            arianeeHttpClient_1.ArianeeHttpClient,
            utilsService_1.UtilsService,
            diagnosisService_1.DiagnosisService,
            arianeePrivacyGatewayService_1.ArianeePrivacyGatewayService,
            getPastEventService_1.GetPastEventService])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=eventsService.js.map