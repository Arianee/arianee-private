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
var cert_1 = require("@0xcert/cert");
var tsyringe_1 = require("tsyringe");
var arianeeHttpClient_1 = require("../../../libs/arianeeHttpClient/arianeeHttpClient");
var configurationService_1 = require("../configurationService/configurationService");
var gasStationService_1 = require("../gasStationService/gasStationService");
var walletService_1 = require("../walletService/walletService");
var web3Service_1 = require("../web3Service/web3Service");
var randomCharacter_1 = require("../../../libs/random/randomCharacter");
var UtilsService = /** @class */ (function () {
    function UtilsService(web3Service, configurationService, walletService, httpService, gasStationService) {
        var _this = this;
        this.web3Service = web3Service;
        this.configurationService = configurationService;
        this.walletService = walletService;
        this.httpService = httpService;
        this.gasStationService = gasStationService;
        /**
         * Calculate imprint from JSON (identity, certificate...etc)
         * @param {{$schema: string; [p: string]: any}} content
         * @returns {Promise<string>}
         */
        this.calculateImprint = function (content) { return __awaiter(_this, void 0, void 0, function () {
            var $schema;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.fetch(content.$schema)];
                    case 1:
                        $schema = _a.sent();
                        return [2 /*return*/, this.cert($schema, content)];
                }
            });
        }); };
        this.timestampIsMoreRecentThan = UtilsService_1.timestampIsMoreRecentThan;
    }
    UtilsService_1 = UtilsService;
    Object.defineProperty(UtilsService.prototype, "web3", {
        get: function () {
            return this.web3Service.web3;
        },
        enumerable: true,
        configurable: true
    });
    UtilsService.prototype.signProofForRequestToken = function (certificateId, addressNextOwner, privateKeyPreviousOwner) {
        var data = this.web3.utils.keccak256(this.web3.eth.abi.encodeParameters(['uint', 'address'], [certificateId, addressNextOwner]));
        return this.walletService.signProof(data, privateKeyPreviousOwner);
    };
    UtilsService.prototype.signProofForRpc = function (certificateId, privateKey) {
        var message = {
            certificateId: certificateId,
            timestamp: new Date()
        };
        return this.walletService.signProof(JSON.stringify(message), privateKey);
    };
    UtilsService.prototype.simplifiedParsedURL = function (url) {
        var m = url.match(/^(([^:/?#]+:)?(?:\/\/((?:([^/?#:]*):([^/?#:]*)@)?([^/?#:]*)(?::([^/?#:]*))?)))?([^?#]*)(\?[^#]*)?(#.*)?$/);
        var r = {
            hash: m[10] || '',
            hostname: m[6] || '',
            pathname: m[8] || (m[1] ? '/' : ''),
            port: m[7] || '',
            protocol: m[2] || '',
            search: m[9] || '',
            username: m[4] || '',
            password: m[5] || ''
        };
        return m && r;
    };
    UtilsService.prototype.createUID = function () {
        return Math.ceil(Math.random() * 1000000000);
    };
    UtilsService.prototype.createPassphrase = function () {
        var result = '';
        for (var i = 0; i < 11; i++) {
            result += randomCharacter_1.getRandomCharacter();
        }
        var position = randomCharacter_1.getRandomInt(0, 11);
        var extraCharacter = randomCharacter_1.getRandomCharacter();
        return result.substring(0, position) + extraCharacter + result.substring(position);
    };
    UtilsService.prototype.recover = function (data, signature) {
        return this.web3.eth.accounts.recover(data, signature);
    };
    UtilsService.prototype.cert = function (schema, data) {
        return __awaiter(this, void 0, void 0, function () {
            var cert, cleanData, certif;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cert = new cert_1.Cert({
                            schema: schema
                        });
                        cleanData = this.cleanObject(data);
                        return [4 /*yield*/, cert.imprint(cleanData)];
                    case 1:
                        certif = _a.sent();
                        return [2 /*return*/, '0x' + certif];
                }
            });
        });
    };
    UtilsService.prototype.cleanObject = function (obj) {
        for (var propName in obj) {
            if (obj[propName] &&
                obj[propName].constructor === Array &&
                obj[propName].length === 0) {
                delete obj[propName];
            }
        }
        return obj;
    };
    /**
     * Function to find if hostname match deeplink or alternative deeplink of an ArianeeConfiguration
     * @param hostname
     * @param arianeeConfig
     */
    UtilsService.prototype.findHostNameInConfig = function (hostname, arianeeConfig) {
        var isCurrentConfigDeeplink = arianeeConfig.deepLink.split(':')[0] === hostname.split(':')[0];
        var isCurrentConfigAlternativeDeeplinks = arianeeConfig
            .alternativeDeeplink
            .find(function (theDeepLink) { return theDeepLink === hostname; });
        var isCurrentConfig = isCurrentConfigDeeplink || isCurrentConfigAlternativeDeeplinks;
        if (isCurrentConfig) {
            return arianeeConfig.networkName;
        }
    };
    /**
     * Function. Pass a deeplink hostname, and find the right network according to configuration
     * @param hostname
     * @returns {NETWORK} network name of this deeplink hostname. If no network associated with this hostname, it returns
     * undefined
     */
    UtilsService.prototype.findChainFromHostname = function (hostname) {
        var _this = this;
        var networkConfigurations = this.configurationService.supportedConfigurations;
        var networks = Object.keys(this.configurationService.supportedConfigurations);
        // check if it matches any of current configuration
        var isCurrentConfigurationNetwork = this.findHostNameInConfig(hostname, this
            .configurationService
            .arianeeConfiguration);
        if (isCurrentConfigurationNetwork) {
            return this.configurationService.arianeeConfiguration.networkName;
        }
        // check if it match any of supported configuration
        return networks.find(function (key) {
            var config = networkConfigurations[key];
            var network = _this.findHostNameInConfig(hostname, config);
            if (network) {
                return true;
            }
            else {
                return false;
            }
        });
    };
    /**
     * Function. Pass a deeplink hostname.
     * @param hostname
     * @returns {true} it return true if arianeejs is initiated on the right network otherwise it thrown an error
     * with the most likely chainName
     */
    UtilsService.prototype.isRightChain = function (hostname) {
        var rightChain = this.findChainFromHostname(hostname);
        if (rightChain) {
            var currentNetworkName = this.configurationService.arianeeConfiguration.networkName;
            if (rightChain === currentNetworkName) {
                return true;
            }
        }
        var error = new Error('You are not in the right chain');
        error.message = 'You are not in the right chain';
        error.chain = rightChain;
        throw error;
    };
    UtilsService.prototype.createLink = function (certificateId, passphrase, customDeepLink, suffix) {
        var link = this.configurationService.arianeeConfiguration.deepLink;
        if (customDeepLink) {
            link = customDeepLink;
        }
        if (link.indexOf('://') === -1) {
            link = "https://" + link;
        }
        if (!link.endsWith('/')) {
            link = link + "/";
        }
        if (suffix) {
            link = link + suffix + '/';
        }
        link = link + (certificateId + "," + passphrase);
        return {
            certificateId: certificateId,
            passphrase: passphrase,
            link: link
        };
    };
    /**
     * Read link and decompose it.
      * @param link
     * @param {boolean} checkChain, true by default. If you don't need to check that arianee is on the right chain
     * @returns {{method: string; certificateId: number; passphrase: string}}
     */
    UtilsService.prototype.readLink = function (link, checkChain) {
        if (checkChain === void 0) { checkChain = true; }
        var url = this.simplifiedParsedURL(link);
        if (checkChain) {
            this.isRightChain(url.hostname);
        }
        var methodUrl = url.pathname.split('/');
        var pathName = methodUrl[methodUrl.length - 1];
        var certificateId = parseInt(pathName.split(',')[0]);
        var passphrase = pathName.split(',')[1];
        var method = 'requestOwnership';
        if (methodUrl.length > 2)
            method = methodUrl[1];
        return {
            method: method,
            certificateId: certificateId,
            passphrase: passphrase
        };
    };
    UtilsService.timestampIsMoreRecentThan = function (timestamp, seconds) {
        var date = new Date().valueOf();
        var minTime = date - seconds * 1000;
        return timestamp > minTime / 1000;
    };
    UtilsService.prototype.getTimestampFromBlock = function (blockNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var block;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.web3Service.web3.eth.getBlock(blockNumber)];
                    case 1:
                        block = _a.sent();
                        return [2 /*return*/, block.timestamp];
                }
            });
        });
    };
    UtilsService.prototype.prepareTransaction = function (encodeABI, contractAddress, overrideNonce, transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var nonce, _a, gasPrice, defaultTransaction, mergedTransaction;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = overrideNonce;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.web3.eth.getTransactionCount(this.walletService.address, 'pending')];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        nonce = _a;
                        return [4 /*yield*/, this.gasStationService.fetchGas()];
                    case 3:
                        gasPrice = _b.sent();
                        defaultTransaction = {
                            nonce: nonce,
                            chainId: this.configurationService.arianeeConfiguration.chainId,
                            from: this.walletService.address,
                            data: encodeABI,
                            to: contractAddress,
                            gasLimit: this.configurationService.arianeeConfiguration.transactionOptions.gas,
                            gasPrice: gasPrice,
                            value: '0x00'
                        };
                        mergedTransaction = __assign(__assign({}, defaultTransaction), transaction);
                        return [2 /*return*/, mergedTransaction];
                }
            });
        });
    };
    var UtilsService_1;
    UtilsService = UtilsService_1 = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [web3Service_1.Web3Service,
            configurationService_1.ConfigurationService,
            walletService_1.WalletService,
            arianeeHttpClient_1.ArianeeHttpClient,
            gasStationService_1.GasStationService])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;
//# sourceMappingURL=utilsService.js.map