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
var contractsService_1 = require("../contractService/contractsService");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var configurationService_1 = require("../configurationService/configurationService");
var walletService_1 = require("../walletService/walletService");
var arianeeAccessTokenCreatorService_1 = require("../ArianeeAccessToken/arianeeAccessTokenCreatorService");
var lodash_1 = require("lodash");
var getPastEventService_1 = require("../getPastEventService/getPastEventService");
var ArianeeBlockchainProxyService = /** @class */ (function () {
    function ArianeeBlockchainProxyService(contractService, arianeeHttpClient, configurationService, walletService, arianeeAccessTokenCreatorService, getPastEvent) {
        var _this = this;
        this.contractService = contractService;
        this.arianeeHttpClient = arianeeHttpClient;
        this.configurationService = configurationService;
        this.walletService = walletService;
        this.arianeeAccessTokenCreatorService = arianeeAccessTokenCreatorService;
        this.getPastEvent = getPastEvent;
        this.getAllMyMessageIds = function () { return __awaiter(_this, void 0, void 0, function () {
            var messagesEvent, nbMessages, rangeOfMessage;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.configurationService.isProxyEnable()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getPastEvent.getPastEvents(contractsService_1.ContractName.messageContract, 'MessageSent', {
                                fromBlock: 0,
                                toBlock: 'latest',
                                filter: {
                                    _receiver: this.walletService.address
                                }
                            })];
                    case 1:
                        messagesEvent = _a.sent();
                        return [2 /*return*/, messagesEvent.map(function (d) { return parseInt(d.returnValues._messageId, 10); })];
                    case 2: return [4 /*yield*/, this.contractService.messageContract.methods.messageLengthByReceiver(this.walletService.address).call()];
                    case 3:
                        nbMessages = _a.sent();
                        rangeOfMessage = lodash_1.range(0, +nbMessages);
                        return [2 /*return*/, Promise.all(rangeOfMessage
                                .map(function (index) { return _this.contractService.messageContract.methods.receiverToMessageIds(_this.walletService.address, index)
                                .call(); }))];
                }
            });
        }); };
        /**
         * Return all tokenIds from proxy or blockchain depending on configuration
         */
        this.getAllMyCertificateIds = function () { return __awaiter(_this, void 0, void 0, function () {
            var authorization, headers, chainId, url, data, numberOfCertificates, rangeOfIndex, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.configurationService.isProxyEnable()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.arianeeAccessTokenCreatorService.createWalletAccessToken()];
                    case 1:
                        authorization = _a.sent();
                        headers = {
                            authorization: "Bearer " + authorization
                        };
                        chainId = this.configurationService.arianeeConfiguration.chainId;
                        url = this.configurationService.getBlockChainProxyEndpoint() + "/nft/me/list?network=" + this.configurationService.arianeeConfiguration.networkName;
                        return [4 /*yield*/, this.arianeeHttpClient.fetch(url, { headers: headers })];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, data.map(function (d) { return d.tokenId; })];
                    case 3: return [4 /*yield*/, this.contractService.smartAssetContract.methods
                            .balanceOf(this.walletService.address)
                            .call()];
                    case 4:
                        numberOfCertificates = _a.sent();
                        rangeOfIndex = [];
                        for (i = 0; i < numberOfCertificates; i++) {
                            rangeOfIndex.push(i);
                        }
                        // Fetch certificateIds of certificate with index
                        return [2 /*return*/, Promise.all(rangeOfIndex.map(function (index) {
                                return _this.contractService.smartAssetContract.methods
                                    .tokenOfOwnerByIndex(_this.walletService.address, index)
                                    .call();
                            }))];
                }
            });
        }); };
        /**
         * Get owner of a token for current network from blockchain or proxy depending on configuration
         * If no owner (meaning nft is not minted) it throws
         * @param tokenId
         */
        this.ownerOf = function (tokenId) { return __awaiter(_this, void 0, void 0, function () {
            var network, url, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.configurationService.isProxyEnable()) return [3 /*break*/, 1];
                        network = this.configurationService.arianeeConfiguration.networkName;
                        url = this.configurationService.getBlockChainProxyEndpoint() + "/nft/" + network + "/ownerOf/" + tokenId;
                        return [2 /*return*/, this.arianeeHttpClient.fetch(url)];
                    case 1: return [4 /*yield*/, this.contractService
                            .smartAssetContract
                            .methods
                            .ownerOf(tokenId)
                            .call()];
                    case 2:
                        address = _a.sent();
                        return [2 /*return*/, address.toLowerCase()];
                }
            });
        }); };
    }
    ArianeeBlockchainProxyService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [contractsService_1.ContractService,
            arianeeHttpClient_1.ArianeeHttpClient,
            configurationService_1.ConfigurationService,
            walletService_1.WalletService,
            arianeeAccessTokenCreatorService_1.ArianeeAccessTokenCreatorService,
            getPastEventService_1.GetPastEventService])
    ], ArianeeBlockchainProxyService);
    return ArianeeBlockchainProxyService;
}());
exports.ArianeeBlockchainProxyService = ArianeeBlockchainProxyService;
//# sourceMappingURL=arianeeBlockchainProxyService.js.map