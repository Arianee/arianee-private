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
var storeNamespace_1 = require("../../../../models/storeNamespace");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var certificateParentMerger_1 = require("../../../libs/certificateParentMerger/certificateParentMerger");
var certificateVersion_1 = require("../../../libs/is18n/certificateVersion");
var libs_1 = require("../../../libs");
var hasParentCertificates_1 = require("../../../libs/hasParentCertificate/hasParentCertificates");
var simpleStore_1 = require("../../../libs/simpleStore/simpleStore");
var arianeeAuthentificationService_1 = require("../arianeeAuthentificationService/arianeeAuthentificationService");
var configurationService_1 = require("../configurationService/configurationService");
var contractsService_1 = require("../contractService/contractsService");
var globalConfigurationService_1 = require("../globalConfigurationService/globalConfigurationService");
var identityService_1 = require("../identityService/identityService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var arianeeBlockchainProxyService_1 = require("../arianeeBlockchainProxyService/arianeeBlockchainProxyService");
var CertificateDetails = /** @class */ (function () {
    function CertificateDetails(identityService, httpClient, contractService, configurationService, walletService, utils, store, arianeeAuthentificationService, globalConfigurationService, arianeeProxyService) {
        var _this = this;
        this.identityService = identityService;
        this.httpClient = httpClient;
        this.contractService = contractService;
        this.configurationService = configurationService;
        this.walletService = walletService;
        this.utils = utils;
        this.store = store;
        this.arianeeAuthentificationService = arianeeAuthentificationService;
        this.globalConfigurationService = globalConfigurationService;
        this.arianeeProxyService = arianeeProxyService;
        this.getCertificateIssuer = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetchCertificateIssuer(parameters)];
            });
        }); };
        this.fetchCertificateIssuer = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var certificateId, issuerOf, address;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        certificateId = parameters.certificateId;
                        issuerOf = function () { return _this.contractService.smartAssetContract.methods
                            .issuerOf(certificateId.toString())
                            .call(); };
                        return [4 /*yield*/, this.store.get(storeNamespace_1.StoreNamespace.certificateIssuer, certificateId, issuerOf)];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, this.identityService.getIdentity(__assign(__assign({}, parameters), { address: address }))];
                }
            });
        }); };
        this.getCertificateOwner = function (certificateId, certificateBuilder) { return __awaiter(_this, void 0, void 0, function () {
            var owner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.arianeeProxyService.ownerOf(certificateId.toString())];
                    case 1:
                        owner = _a.sent();
                        if (certificateBuilder)
                            certificateBuilder.setOwner(owner, this.walletService.address);
                        return [2 /*return*/, owner];
                }
            });
        }); };
        this.getCertificateContentFromHttp = function (certificateURI) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.fetch(certificateURI)];
            });
        }); };
        this.updateCertificateContentReadRPC = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var rpcEndPoint, arianeeRPCAuthentification, certificateId;
            return __generator(this, function (_a) {
                rpcEndPoint = parameters.rpcEndPoint, arianeeRPCAuthentification = parameters.arianeeRPCAuthentification, certificateId = parameters.certificateId;
                return [2 /*return*/, this.httpClient.RPCCall(rpcEndPoint, 'update.read', {
                        certificateId: certificateId,
                        authentification: arianeeRPCAuthentification
                    })];
            });
        }); };
        this.originalCertificateContentReadRPC = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var rpcEndPoint, arianeeRPCAuthentification, certificateId;
            return __generator(this, function (_a) {
                rpcEndPoint = parameters.rpcEndPoint, arianeeRPCAuthentification = parameters.arianeeRPCAuthentification, certificateId = parameters.certificateId;
                return [2 /*return*/, this.httpClient.RPCCall(rpcEndPoint, 'certificate.read', {
                        certificateId: certificateId,
                        authentification: arianeeRPCAuthentification
                    })];
            });
        }); };
        this.getCertificateContentFromRPC = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var certificateId, query, arianeeRPCAuthentification, issuer, rpcEndPoint, address, identity, rpcConfig, certificateRPCResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        certificateId = parameters.certificateId, query = parameters.query, arianeeRPCAuthentification = parameters.arianeeRPCAuthentification;
                        issuer = query.issuer;
                        if (!issuer.rpcURI) return [3 /*break*/, 1];
                        rpcEndPoint = issuer.rpcURI;
                        return [3 /*break*/, 4];
                    case 1: return [4 /*yield*/, this.contractService.smartAssetContract.methods
                            .issuerOf(certificateId)
                            .call()];
                    case 2:
                        address = _a.sent();
                        return [4 /*yield*/, this.identityService.getIdentity(__assign(__assign({}, parameters), { address: address }))
                                .then(function (d) {
                                if (d.data === undefined) {
                                    console.warn("# " + parameters.certificateURI + " # failing to retrieve identity");
                                }
                                ;
                                return d;
                            })];
                    case 3:
                        identity = _a.sent();
                        rpcEndPoint = identity.data.rpcEndpoint;
                        _a.label = 4;
                    case 4:
                        rpcConfig = {
                            certificateId: certificateId,
                            arianeeRPCAuthentification: arianeeRPCAuthentification,
                            rpcEndPoint: rpcEndPoint
                        };
                        return [4 /*yield*/, this.updateCertificateContentReadRPC(rpcConfig)
                                .catch(function (error) {
                                return _this.originalCertificateContentReadRPC(rpcConfig);
                            })];
                    case 5:
                        certificateRPCResult = _a.sent();
                        return [2 /*return*/, certificateRPCResult.result];
                }
            });
        }); };
        this.getContent = function (parameters) {
            var certificateURI = parameters.certificateURI, certificateId = parameters.certificateId;
            return _this.getCertificateContentFromRPC(parameters)
                .catch(function (err) {
                console.warn("# " + certificateId + " # Impossible to fetch content from RPC server");
                console.warn("# " + certificateId + " # Fallback to simple http call " + certificateURI);
                return _this.getCertificateContentFromHttp(parameters.certificateURI);
            })
                .catch(function (d) { return console.warn("# " + certificateId + " # Impossible to fetch content of this certificate " + parameters.certificateId); });
        };
        this.getCertificateContent = function (parameters) {
            var certificateId = parameters.certificateId, query = parameters.query;
            var content = _this.globalConfigurationService.getMergedQuery(query).content;
            var forceRefresh = content.forceRefresh;
            return _this.store.get(storeNamespace_1.StoreNamespace.certificateContent, certificateId, function () { return _this.getCertificateAndParentCertificate(parameters); }, forceRefresh);
        };
        this.getCertificateAndParentCertificate = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var query, certificateContentSummary, certificateContentSummaryWithParents, parentCertificates, sortedParentLinks, parentLinks, $fetchingParents, parentCertificateSummary, parentCertificateContent, parentAuthenticity, isAuthentic;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = parameters.query;
                        return [4 /*yield*/, this.fetchCertificateContent(parameters)];
                    case 1:
                        certificateContentSummary = _a.sent();
                        if (!(certificateContentSummary.raw && hasParentCertificates_1.hasParentCertificate(certificateContentSummary.raw))) return [3 /*break*/, 3];
                        certificateContentSummaryWithParents = certificateContentSummary.raw;
                        parentCertificates = certificateContentSummaryWithParents.parentCertificates;
                        sortedParentLinks = lodash_1.orderBy(parentCertificates, ['type'], ['asc']);
                        parentLinks = sortedParentLinks.map(function (d) { return d.arianeeLink; })
                            .map(function (arianeeLink) { return _this.arianeeAuthentificationService.extractParametersFromArianeeLink(arianeeLink, false); });
                        $fetchingParents = parentLinks.map(function (link) {
                            return _this.getCertificateContent({
                                certificateId: link.certificateId,
                                passphrase: link.authentification,
                                query: query
                            });
                        });
                        return [4 /*yield*/, Promise.all($fetchingParents)];
                    case 2:
                        parentCertificateSummary = _a.sent();
                        parentCertificateContent = parentCertificateSummary.map(function (summary) { return summary.data; });
                        parentAuthenticity = parentCertificateSummary.map(function (d) { return d.isAuthentic; });
                        isAuthentic = !__spreadArrays([certificateContentSummary.isAuthentic], parentAuthenticity).includes(false);
                        return [2 /*return*/, __assign(__assign({}, certificateContentSummary), { isAuthentic: isAuthentic, parents: parentCertificateSummary, isRawAuthentic: certificateContentSummary.isAuthentic, data: certificateParentMerger_1.certificateParentMerger(__spreadArrays(parentCertificateContent, [certificateContentSummary.data])) })];
                    case 3: return [2 /*return*/, certificateContentSummary];
                }
            });
        }); };
        this.fetchCertificateContent = function (parameters) { return __awaiter(_this, void 0, void 0, function () {
            var certificateId, passphrase, query, tokenURI, certificateContentData, _a, _b, _c, certificateSchema, hash, tokenImprint, isCertificateContentValid, certificateSummary, externalContents, medias;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (parameters.passphrase === undefined &&
                            lodash_1.get(parameters, 'query.advanced.arianeeProofToken')) {
                            parameters.passphrase = parameters.query.advanced.arianeeProofToken;
                        }
                        certificateId = parameters.certificateId, passphrase = parameters.passphrase, query = parameters.query;
                        return [4 /*yield*/, this.contractService.smartAssetContract.methods
                                .tokenURI(certificateId.toString())
                                .call()];
                    case 1:
                        tokenURI = _d.sent();
                        _a = this.getContent;
                        _b = [__assign({}, parameters)];
                        _c = {};
                        return [4 /*yield*/, this.arianeeAuthentificationService
                                .generateAuthentificationHeader(certificateId, passphrase)];
                    case 2: return [4 /*yield*/, _a.apply(this, [__assign.apply(void 0, _b.concat([(_c.arianeeRPCAuthentification = _d.sent(), _c.certificateURI = tokenURI, _c)]))])];
                    case 3:
                        certificateContentData = _d.sent();
                        if (!certificateContentData) {
                            return [2 /*return*/, {
                                    imprint: undefined,
                                    data: undefined,
                                    isRawAuthentic: false,
                                    isAuthentic: false,
                                    raw: undefined
                                }];
                        }
                        return [4 /*yield*/, this.httpClient.fetch(certificateContentData.$schema)];
                    case 4:
                        certificateSchema = _d.sent();
                        return [4 /*yield*/, this.utils.cert(certificateSchema, certificateContentData)];
                    case 5:
                        hash = _d.sent();
                        if (!this.contractService.updateSmartAssetContract) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.contractService.updateSmartAssetContract.methods
                                .getImprint(certificateId.toString())
                                .call()];
                    case 6:
                        tokenImprint = _d.sent();
                        return [3 /*break*/, 9];
                    case 7: return [4 /*yield*/, this.contractService.smartAssetContract
                            .methods
                            .tokenImprint(certificateId.toString())
                            .call()];
                    case 8:
                        tokenImprint = _d.sent();
                        _d.label = 9;
                    case 9:
                        isCertificateContentValid = hash === tokenImprint;
                        certificateSummary = {
                            imprint: tokenImprint,
                            data: certificateContentData,
                            isRawAuthentic: isCertificateContentValid,
                            isAuthentic: isCertificateContentValid,
                            raw: libs_1.deepFreeze(lodash_1.cloneDeep(certificateContentData))
                        };
                        if (lodash_1.get(query, 'advanced.languages') &&
                            lodash_1.get(certificateSummary, 'data') &&
                            certificateVersion_1.isSchemai18n(certificateContentData)) {
                            certificateSummary.data = libs_1.replaceLanguageContentWithFavUserLanguage(certificateContentData, query.advanced.languages);
                        }
                        if (lodash_1.get(certificateSummary, 'data') && lodash_1.get(certificateSummary, 'data.externalContents')) {
                            externalContents = lodash_1.get(certificateSummary, 'data.externalContents');
                            externalContents.sort(function (a, b) {
                                return a.order - b.order;
                            });
                            certificateSummary.data.externalContents = externalContents;
                        }
                        if (lodash_1.get(certificateSummary, 'data') && lodash_1.get(certificateSummary, 'data.medias')) {
                            medias = lodash_1.get(certificateSummary, 'data.medias');
                            medias.sort(function (a, b) {
                                return a.order - b.order;
                            });
                            certificateSummary.data.medias = medias;
                        }
                        return [2 /*return*/, certificateSummary];
                }
            });
        }); };
    }
    CertificateDetails = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [identityService_1.IdentityService,
            arianeeHttpClient_1.ArianeeHttpClient,
            contractsService_1.ContractService,
            configurationService_1.ConfigurationService,
            walletService_1.WalletService,
            utilsService_1.UtilsService,
            simpleStore_1.SimpleStore,
            arianeeAuthentificationService_1.ArianeeAuthentificationService,
            globalConfigurationService_1.GlobalConfigurationService,
            arianeeBlockchainProxyService_1.ArianeeBlockchainProxyService])
    ], CertificateDetails);
    return CertificateDetails;
}());
exports.CertificateDetails = CertificateDetails;
//# sourceMappingURL=certificatesDetailsService.js.map