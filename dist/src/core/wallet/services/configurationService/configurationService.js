"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var tsyringe_1 = require("tsyringe");
var web3_1 = __importDefault(require("web3"));
var appConfigurations_1 = __importDefault(require("../../../../configurations/appConfigurations"));
var walletBuilder_1 = require("../../walletBuilder");
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
        this.defaultArianeeConfiguration = {
            walletReward: { address: '0x39da7e30d2D5F2168AE3B8599066ab122680e1ef' },
            brandDataHubReward: { address: '0xA79B29AD7e0196C95B87f4663ded82Fbf2E3ADD8' },
            transactionOptions: {
                gas: 500000,
                gasPrice: -1 // use gas station
            }
        };
        this.supportedConfigurations = appConfigurations_1.default;
    }
    Object.defineProperty(ConfigurationService.prototype, "arianeeConfiguration", {
        get: function () {
            return lodash_1.assignIn({}, this.defaultArianeeConfiguration, this._arianeeConfiguration);
        },
        set: function (value) {
            this._arianeeConfiguration = value;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService.prototype.getBlockChainProxyEndpoint = function () {
        return this.arianeeConfiguration.blockchainProxy.host || 'http://api.arianee.net';
    };
    ConfigurationService.prototype.isProxyEnable = function () {
        return lodash_1.get(this.arianeeConfiguration, 'blockchainProxy.enable') || false;
    };
    ;
    ConfigurationService.prototype.walletFactory = function () {
        return new walletBuilder_1.ArianeeWalletBuilder(this.arianeeConfiguration);
    };
    Object.defineProperty(ConfigurationService, "web3", {
        get: function () {
            return web3_1.default;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService = __decorate([
        tsyringe_1.injectable()
    ], ConfigurationService);
    return ConfigurationService;
}());
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configurationService.js.map