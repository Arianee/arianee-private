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
var lodash_1 = require("lodash");
var tsyringe_1 = require("tsyringe");
var storeNamespace_1 = require("../../../../models/storeNamespace");
var libs_1 = require("../../../libs");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var i18nSchemaLanguageManager_1 = require("../../../libs/i18nSchemaLanguageManager/i18nSchemaLanguageManager");
var simpleStore_1 = require("../../../libs/simpleStore/simpleStore");
var contractsService_1 = require("../contractService/contractsService");
var globalConfigurationService_1 = require("../globalConfigurationService/globalConfigurationService");
var utilsService_1 = require("../utilService/utilsService");
var IdentityService = /** @class */ (function () {
    function IdentityService(httpClient, utils, contractService, globalConfigurationService, store) {
        var _this = this;
        this.httpClient = httpClient;
        this.utils = utils;
        this.contractService = contractService;
        this.globalConfigurationService = globalConfigurationService;
        this.store = store;
        this.getIdentityByShortId = function (shortId) { return __awaiter(_this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.contractService.identityContract.methods.addressFromId(shortId).call()];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, this.getIdentity({ address: address })];
                }
            });
        }); };
        this.getSimpleIdentity = function (address, issuerQuery) { return __awaiter(_this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                if (issuerQuery) {
                    query = this.globalConfigurationService.getMergedQuery({ issuer: issuerQuery });
                }
                else {
                    query = this.globalConfigurationService.getMergedQuery();
                }
                return [2 /*return*/, this.getIdentity({ address: address, query: query })];
            });
        }); };
        this.getIdentity = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var query, address, _a, issuer, advanced, identitySummary, _b, forceRefresh, waitingIdentity, identityContent;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        query = parameters.query, address = parameters.address;
                        _a = this.globalConfigurationService.getMergedQuery(query), issuer = _a.issuer, advanced = _a.advanced;
                        _b = issuer, forceRefresh = _b.forceRefresh, waitingIdentity = _b.waitingIdentity;
                        if (!!waitingIdentity) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.store.get(storeNamespace_1.StoreNamespace.identity, address, function () { return _this.fetchIdentity(address); }, forceRefresh)
                                .catch(function (d) { return d; })];
                    case 1:
                        identitySummary = _c.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        console.warn('you are fetching waiting identity');
                        return [4 /*yield*/, this.store.get(storeNamespace_1.StoreNamespace.identityWaiting, address, function () { return _this.fetchWaitingIdentity(address); }, forceRefresh)
                                .catch(function (d) { return d; })];
                    case 3:
                        identitySummary = _c.sent();
                        _c.label = 4;
                    case 4:
                        identityContent = identitySummary.data;
                        if (lodash_1.get(advanced, 'languages') &&
                            lodash_1.get(identitySummary, 'data') &&
                            libs_1.isIdentitySchemai18n(identityContent)) {
                            identitySummary.data = i18nSchemaLanguageManager_1.replaceLanguageIdentityContentWithFavUserLanguage(identityContent, advanced.languages);
                        }
                        return [2 /*return*/, identitySummary];
                }
            });
        }); };
        /**
           * fetchWaitingIdentity
           * Get waiting identity from an address and Fallback to approved identity if no waiting identity
           * @param address address of the contract
           * @return Promise{IdentitySummary}
           */
        this.fetchWaitingIdentity = function (address) { return __awaiter(_this, void 0, void 0, function () {
            var identityURI, identityContentData, identityContentSchema, hash, imprint, isAuthentic, isApproved, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.contractService.identityContract.methods
                                .waitingURI(address)
                                .call()];
                    case 1:
                        identityURI = _b.sent();
                        if (!identityURI) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.httpClient.fetch(identityURI)];
                    case 2:
                        identityContentData = _b.sent();
                        return [4 /*yield*/, this.httpClient.fetch(identityContentData.$schema)];
                    case 3:
                        identityContentSchema = _b.sent();
                        return [4 /*yield*/, this.utils.cert(identityContentSchema, identityContentData)];
                    case 4:
                        hash = _b.sent();
                        return [4 /*yield*/, this.contractService.identityContract.methods
                                .waitingImprint(address)
                                .call()];
                    case 5:
                        imprint = _b.sent();
                        isAuthentic = imprint === hash;
                        return [4 /*yield*/, this.contractService.identityContract.methods
                                .addressIsApproved(address)
                                .call()];
                    case 6:
                        isApproved = _b.sent();
                        return [2 /*return*/, Promise.resolve({
                                data: identityContentData,
                                isAuthentic: isAuthentic,
                                isApproved: isApproved,
                                imprint: imprint,
                                address: address
                            })];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        _a = _b.sent();
                        console.warn("# " + address + " # does not have waiting identity uri or identity");
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, this.fetchIdentity(address)];
                }
            });
        }); };
        /**
         * fetchIdentity
         * Get approved identity from an address
         * @param address address of the contract
         * @return Promise{IdentitySummary}
         */
        this.fetchIdentity = function (address) { return __awaiter(_this, void 0, void 0, function () {
            var identityURI, identityContentData, identityContentSchema, hash, imprint, isAuthentic, isApproved, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, this.contractService.identityContract.methods
                                .addressURI(address)
                                .call()];
                    case 1:
                        identityURI = _a.sent();
                        if (!identityURI) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.httpClient.fetch(identityURI)];
                    case 2:
                        identityContentData = _a.sent();
                        return [4 /*yield*/, this.httpClient.fetch(identityContentData.$schema)];
                    case 3:
                        identityContentSchema = _a.sent();
                        return [4 /*yield*/, this.utils.cert(identityContentSchema, identityContentData)];
                    case 4:
                        hash = _a.sent();
                        return [4 /*yield*/, this.contractService.identityContract.methods
                                .addressImprint(address)
                                .call()];
                    case 5:
                        imprint = _a.sent();
                        isAuthentic = imprint === hash;
                        return [4 /*yield*/, this.contractService.identityContract.methods
                                .addressIsApproved(address)
                                .call()];
                    case 6:
                        isApproved = _a.sent();
                        return [2 /*return*/, Promise.resolve({
                                data: identityContentData,
                                isAuthentic: isAuthentic,
                                isApproved: isApproved,
                                imprint: imprint,
                                address: address
                            })];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        e_1 = _a.sent();
                        console.warn("# " + address + " # does not have identity uri or identity");
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, Promise.reject({
                            data: undefined,
                            isAuthentic: false,
                            isApproved: false,
                            imprint: undefined,
                            address: address
                        })];
                }
            });
        }); };
    }
    IdentityService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [arianeeHttpClient_1.ArianeeHttpClient,
            utilsService_1.UtilsService,
            contractsService_1.ContractService,
            globalConfigurationService_1.GlobalConfigurationService,
            simpleStore_1.SimpleStore])
    ], IdentityService);
    return IdentityService;
}());
exports.IdentityService = IdentityService;
//# sourceMappingURL=identityService.js.map