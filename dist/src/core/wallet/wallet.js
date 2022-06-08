"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var arianeeHttpClient_1 = require("../libs/arianeeHttpClient/arianeeHttpClient");
var simpleStore_1 = require("../libs/simpleStore/simpleStore");
var JWTService_1 = require("./services/ArianeeAccessToken/JWTService");
var ArianeeEventEmitter_1 = require("./services/arianeeEventEmitterService/ArianeeEventEmitter");
var arianeePrivacyGatewayService_1 = require("./services/arianeePrivacyGatewayService/arianeePrivacyGatewayService");
var balanceService_1 = require("./services/balanceService/balanceService");
var batchService_1 = require("./services/batchService/batchService");
var blochainEventWatcherService_1 = require("./services/blockchainEventWatcherService/blochainEventWatcherService");
var blockchainUtilsService_1 = require("./services/blockChainUtilsService/blockchainUtilsService");
var certificateAuthorizationService_1 = require("./services/certificateAuthorizationService/certificateAuthorizationService");
var certificatesDetailsService_1 = require("./services/certificateDetailsService/certificatesDetailsService");
var certificateService_1 = require("./services/certificateService/certificateService");
var certificateUtilsService_1 = require("./services/certificateUtilsService/certificateUtilsService");
var configurationService_1 = require("./services/configurationService/configurationService");
var contractsService_1 = require("./services/contractService/contractsService");
var diagnosisService_1 = require("./services/diagnosisService/diagnosisService");
var eventsService_1 = require("./services/eventService/eventsService");
var gasStationService_1 = require("./services/gasStationService/gasStationService");
var globalConfigurationService_1 = require("./services/globalConfigurationService/globalConfigurationService");
var identityService_1 = require("./services/identityService/identityService");
var lostAndStolenService_1 = require("./services/lostAndStolenService/lostAndStolenService");
var messageService_1 = require("./services/messageService/messageService");
var POAAndAriaService_1 = require("./services/POAAndAriaFaucet/POAAndAriaService");
var utilsService_1 = require("./services/utilService/utilsService");
var walletCustomMethodService_1 = require("./services/walletCustomMethodService/walletCustomMethodService");
var walletService_1 = require("./services/walletService/walletService");
var web3Service_1 = require("./services/web3Service/web3Service");
var getPastEventService_1 = require("./services/getPastEventService/getPastEventService");
var arianeeBlockchainProxyService_1 = require("./services/arianeeBlockchainProxyService/arianeeBlockchainProxyService");
var arianeeAccessTokenValidatorService_1 = require("./services/ArianeeAccessToken/arianeeAccessTokenValidatorService");
var arianeeAccessTokenCreatorService_1 = require("./services/ArianeeAccessToken/arianeeAccessTokenCreatorService");
var ArianeeWallet = /** @class */ (function () {
    function ArianeeWallet(configuration, arianeeConfig) {
        var _this = this;
        this.customWatch = function (watchParameters) {
            var blockchainEventWatcherService = _this.container.resolve(blochainEventWatcherService_1.BlockchainEventWatcherService);
            blockchainEventWatcherService.addWatchParameter(watchParameters);
            return _this.watch;
        };
        this.container = tsyringe_1.container.createChildContainer();
        this.registerSingletons(ArianeeEventEmitter_1.ArianeeEventEmitter, batchService_1.BatchService, balanceService_1.BalanceService, blochainEventWatcherService_1.BlockchainEventWatcherService, certificateAuthorizationService_1.CertificateAuthorizationService, certificatesDetailsService_1.CertificateDetails, certificateService_1.CertificateService, configurationService_1.ConfigurationService, gasStationService_1.GasStationService, contractsService_1.ContractService, diagnosisService_1.DiagnosisService, eventsService_1.EventService, identityService_1.IdentityService, messageService_1.MessageService, globalConfigurationService_1.GlobalConfigurationService, POAAndAriaService_1.POAAndAriaService, simpleStore_1.SimpleStore, utilsService_1.UtilsService, walletService_1.WalletService, web3Service_1.Web3Service, JWTService_1.JWTService, certificateUtilsService_1.CertificateUtilsService, arianeeAccessTokenValidatorService_1.ArianeeAccessTokenValidatorService, arianeeAccessTokenCreatorService_1.ArianeeAccessTokenCreatorService, arianeePrivacyGatewayService_1.ArianeePrivacyGatewayService, blockchainUtilsService_1.BlockchainUtilsService, lostAndStolenService_1.LostAndStolenService, gasStationService_1.GasStationService, getPastEventService_1.GetPastEventService, arianeeBlockchainProxyService_1.ArianeeBlockchainProxyService);
        if (configuration.web3) {
            this.container.resolve(web3Service_1.Web3Service).web3 = configuration.web3;
        }
        this.container.register(arianeeHttpClient_1.ArianeeHttpClient, { useValue: arianeeConfig.arianeeHttpClient });
        this.container.resolve(configurationService_1.ConfigurationService).arianeeConfiguration = arianeeConfig;
        var walletService = this.container.resolve(walletService_1.WalletService);
        walletService.account = configuration.account;
        this._account = configuration.account;
        this._mnemonic = configuration.mnemonic;
        this.container.resolve(blochainEventWatcherService_1.BlockchainEventWatcherService);
    }
    ArianeeWallet.prototype.registerSingletons = function () {
        var _this = this;
        var classNames = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            classNames[_i] = arguments[_i];
        }
        classNames.forEach(function (className) {
            _this.container.registerSingleton(className);
        });
    };
    Object.defineProperty(ArianeeWallet.prototype, "globalConfiguration", {
        get: function () {
            return this.container.resolve(globalConfigurationService_1.GlobalConfigurationService);
        },
        enumerable: true,
        configurable: true
    });
    ArianeeWallet.prototype.setCustomSendTransaction = function (send) {
        var walletService = this.container.resolve(walletService_1.WalletService);
        walletService.userCustomSendTransaction = send;
        return this;
    };
    ArianeeWallet.prototype.setCustomCall = function (call) {
        var walletService = this.container.resolve(walletService_1.WalletService);
        walletService.userCustomCall = call;
        return this;
    };
    ArianeeWallet.prototype.setCustomSign = function (sign) {
        var walletService = this.container.resolve(walletService_1.WalletService);
        walletService.userCustomSign = sign;
        return this;
    };
    Object.defineProperty(ArianeeWallet.prototype, "publicKey", {
        /**
         * @deprecated use address instead
         */
        get: function () {
            console.warn('publicKey is deprecated use address instead. It will be removed in a next version');
            return this.account.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "address", {
        get: function () {
            return this.account.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "privateKey", {
        get: function () {
            return this.account.privateKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "mnemnonic", {
        get: function () {
            return this._mnemonic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "web3", {
        get: function () {
            return this.container.resolve(web3Service_1.Web3Service).web3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "configuration", {
        get: function () {
            var configurationService = this.container.resolve(configurationService_1.ConfigurationService);
            return configurationService.arianeeConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "methods", {
        get: function () {
            var walletCustomMethods = this.container.resolve(walletCustomMethodService_1.WalletCustomMethodService);
            return walletCustomMethods.getMethods();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "arianeeMethods", {
        get: function () {
            var walletCustomMethods = this.container.resolve(walletCustomMethodService_1.WalletCustomMethodService);
            return walletCustomMethods.arianeeMethods();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "utils", {
        get: function () {
            var utilsService = this.container.resolve(utilsService_1.UtilsService);
            return utilsService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "requestPoa", {
        get: function () {
            return this.methods.requestPoa;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "requestAria", {
        get: function () {
            return this.methods.requestAria;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "walletservice", {
        get: function () {
            return this.container.resolve(walletService_1.WalletService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "contracts", {
        get: function () {
            return this.container.resolve(contractsService_1.ContractService);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArianeeWallet.prototype, "watch", {
        get: function () {
            return this.container.resolve(ArianeeEventEmitter_1.ArianeeEventEmitter).EE;
        },
        enumerable: true,
        configurable: true
    });
    ArianeeWallet.prototype.setDefaultQuery = function (value) {
        this.container.resolve(globalConfigurationService_1.GlobalConfigurationService).setDefaultQuery(value);
        return this;
    };
    return ArianeeWallet;
}());
exports.ArianeeWallet = ArianeeWallet;
//# sourceMappingURL=wallet.js.map