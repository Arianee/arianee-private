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
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var JWTService_1 = require("../ArianeeAccessToken/JWTService");
var configurationService_1 = require("../configurationService/configurationService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var ArianeeAuthentificationService = /** @class */ (function () {
    function ArianeeAuthentificationService(jwtService, utils, walletService, configurationService) {
        var _this = this;
        this.jwtService = jwtService;
        this.utils = utils;
        this.walletService = walletService;
        this.configurationService = configurationService;
        this.generateAuthentificationHeader = function (certificateId, arianeeAuthenticator) {
            if (arianeeAuthenticator) {
                if (_this.isArianeeAccessToken(arianeeAuthenticator)) {
                    return Promise.resolve({
                        bearer: arianeeAuthenticator,
                        jwt: arianeeAuthenticator
                    });
                }
                else {
                    var temporaryWallet = _this.configurationService.walletFactory()
                        .fromPassPhrase(arianeeAuthenticator);
                    return _this.walletService.signProof(JSON.stringify({
                        certificateId: certificateId,
                        timestamp: new Date()
                    }), temporaryWallet.privateKey);
                }
            }
            else {
                // sign with current wallet
                return _this.walletService.signProof(JSON.stringify({
                    certificateId: certificateId,
                    timestamp: new Date()
                }), _this.walletService.privateKey);
            }
        };
        this.extractParametersFromArianeeLink = function (arianeeLink, checkChain) {
            if (checkChain === void 0) { checkChain = true; }
            try {
                var decoded = _this.jwtService.decode(arianeeLink);
                return {
                    certificateId: decoded.payload.subId,
                    authentification: arianeeLink,
                    type: 'arianeeAccessToken'
                };
            }
            catch (e) {
                var result = _this.utils.readLink(arianeeLink, checkChain);
                if (result && result.certificateId) {
                    var certificateId = result.certificateId, passphrase = result.passphrase, method = result.method;
                    return {
                        certificateId: certificateId,
                        authentification: passphrase,
                        type: 'passphrase'
                    };
                }
                else {
                    throw new Error('This is not an arianeeLink');
                }
            }
        };
        this.isArianeeAccessToken = function (arianeeLink) {
            try {
                // if it can be decoded an verify, it means it is a jwt
                _this.jwtService.isValidJWT(arianeeLink, 'randomAddress');
                return true;
            }
            catch (_a) {
                return false;
            }
        };
        this.isBlockchainPassphrase = function (arianeeLink) {
            return !_this.isArianeeAccessToken(arianeeLink);
        };
    }
    ArianeeAuthentificationService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [JWTService_1.JWTService,
            utilsService_1.UtilsService,
            walletService_1.WalletService,
            configurationService_1.ConfigurationService])
    ], ArianeeAuthentificationService);
    return ArianeeAuthentificationService;
}());
exports.ArianeeAuthentificationService = ArianeeAuthentificationService;
//# sourceMappingURL=arianeeAuthentificationService.js.map