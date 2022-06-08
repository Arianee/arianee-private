"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var web3_1 = __importDefault(require("web3"));
var conf = __importStar(require("../../configurations"));
var networkConfiguration_1 = require("../../models/networkConfiguration");
var arianeeHttpClient_1 = require("../libs/arianeeHttpClient/arianeeHttpClient");
var store_1 = require("../libs/simpleStore/store");
var globalConfigurationService_1 = require("../wallet/services/globalConfigurationService/globalConfigurationService");
var walletBuilder_1 = require("../wallet/walletBuilder");
var lodash_1 = require("lodash");
var Arianee = /** @class */ (function () {
    function Arianee() {
        var _this = this;
        /**
         * @deprecated this method has been renamed init.
         */
        this.connectToProtocol = function (args) { return _this.init(args); };
        this.globalConfigurationService = tsyringe_1.container.resolve(globalConfigurationService_1.GlobalConfigurationService);
    }
    Arianee.prototype.fromCustomConfiguration = function () {
    };
    Arianee.prototype.init = function (networkName, arianeeCustomConfiguration) {
        if (networkName === void 0) { networkName = networkConfiguration_1.NETWORK.testnet; }
        if (arianeeCustomConfiguration === void 0) { arianeeCustomConfiguration = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var arianeeConfiguration, addressesResult, url_1, _a, deepLink, faucetUrl, alternativeDeeplink, currentNetworkName, protocolVersion;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        arianeeConfiguration = {};
                        arianeeConfiguration.arianeeHttpClient = new arianeeHttpClient_1.ArianeeHttpClient();
                        if (arianeeCustomConfiguration.httpInterceptor) {
                            arianeeConfiguration
                                .arianeeHttpClient
                                .setRequestInterceptor(arianeeCustomConfiguration.httpInterceptor.httpRequestInterceptor);
                        }
                        if (arianeeCustomConfiguration.httpFetch) {
                            arianeeConfiguration
                                .arianeeHttpClient
                                .setHttpFetch(arianeeCustomConfiguration.httpFetch);
                        }
                        if (!lodash_1.get(arianeeCustomConfiguration, 'protocolConfiguration')) return [3 /*break*/, 1];
                        addressesResult = lodash_1.get(arianeeCustomConfiguration, 'protocolConfiguration');
                        return [3 /*break*/, 3];
                    case 1:
                        url_1 = networkConfiguration_1.networkURL[networkName];
                        return [4 /*yield*/, arianeeConfiguration.arianeeHttpClient.fetch(url_1).catch(function (err) { return console.error(url_1 + " not working"); })];
                    case 2:
                        addressesResult = _b.sent();
                        _b.label = 3;
                    case 3:
                        _a = conf.appConfig[networkName], deepLink = _a.deepLink, faucetUrl = _a.faucetUrl, alternativeDeeplink = _a.alternativeDeeplink, currentNetworkName = _a.networkName, protocolVersion = _a.protocolVersion;
                        arianeeConfiguration.faucetUrl = faucetUrl;
                        arianeeConfiguration.alternativeDeeplink = alternativeDeeplink;
                        arianeeConfiguration.networkName = currentNetworkName;
                        arianeeConfiguration.protocolVersion = protocolVersion;
                        arianeeConfiguration.defaultArianeePrivacyGateway = arianeeCustomConfiguration.defaultArianeePrivacyGateway;
                        Object.keys(addressesResult.contractAdresses).forEach(function (contractName) {
                            var contractAddress = addressesResult.contractAdresses[contractName];
                            try {
                                arianeeConfiguration[contractName] = { abi: conf.contracts[arianeeConfiguration.protocolVersion][contractName], address: contractAddress };
                            }
                            catch (e) {
                                console.warn("this contract is not working " + contractName);
                            }
                        });
                        arianeeConfiguration.gasStationURL = arianeeCustomConfiguration.gasStation || addressesResult.gasStation;
                        arianeeConfiguration.web3Provider = (function () {
                            if (arianeeCustomConfiguration.httpProvider) {
                                return arianeeCustomConfiguration.httpProvider;
                            }
                            else {
                                if (typeof addressesResult.httpProvider === 'string') {
                                    return addressesResult.httpProvider;
                                }
                                else {
                                    var HttpProviderConstructor = web3_1.default.providers.HttpProvider;
                                    return new (HttpProviderConstructor.bind.apply(HttpProviderConstructor, __spreadArrays([void 0], addressesResult.httpProvider)))();
                                }
                            }
                        })();
                        if (lodash_1.get(arianeeCustomConfiguration, 'transactionOptions')) {
                            arianeeConfiguration.transactionOptions = lodash_1.get(arianeeCustomConfiguration, 'transactionOptions');
                        }
                        arianeeConfiguration.chainId = addressesResult.chainId;
                        if (lodash_1.get(arianeeCustomConfiguration, 'deepLink')) {
                            arianeeConfiguration.deepLink = lodash_1.get(arianeeCustomConfiguration, 'deepLink');
                        }
                        else {
                            arianeeConfiguration.deepLink = deepLink;
                        }
                        if (lodash_1.get(arianeeCustomConfiguration, 'walletReward.address')) {
                            arianeeConfiguration.walletReward = arianeeCustomConfiguration.walletReward;
                        }
                        if (lodash_1.get(arianeeCustomConfiguration, 'brandDataHubReward.address')) {
                            arianeeConfiguration.brandDataHubReward = arianeeCustomConfiguration.brandDataHubReward;
                        }
                        arianeeConfiguration.blockchainProxy = arianeeCustomConfiguration.blockchainProxy;
                        return [2 /*return*/, new walletBuilder_1.ArianeeWalletBuilder(arianeeConfiguration)];
                }
            });
        });
    };
    /**
     * @deprecated this method has been renamed setStore.
     */
    Arianee.prototype.setCache = function (storageObject) {
        console.error('setCache method does not exist anymore. Please use setStore');
        return this;
    };
    /**
       * @deprecated this method is available in ArianeeWallet class
       */
    Arianee.prototype.setDefaultQuery = function (value) {
        throw new Error('this method has been deprecated: this method is available in ArianeeWallet class (wallet.setDefaultQuery)');
    };
    Arianee.prototype.setStore = function (storageObject) {
        tsyringe_1.container.register(store_1.Store, { useValue: storageObject });
        return this;
    };
    return Arianee;
}());
exports.Arianee = Arianee;
//# sourceMappingURL=arianee.js.map