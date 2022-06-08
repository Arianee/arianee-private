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
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var isPrivateKeyValid_1 = require("../isPrivateKeyValid/isPrivateKeyValid");
var wallet_1 = require("./wallet");
var Web3 = require('web3');
var ArianeeWalletBuilder = /** @class */ (function () {
    function ArianeeWalletBuilder(arianeeConfig) {
        var _this = this;
        this.arianeeConfig = arianeeConfig;
        this.web3 = new Web3();
        this.fromExternalWallet = function (data) {
            var wallet = new wallet_1.ArianeeWallet({
                account: {
                    address: data.address
                }
            }, _this.arianeeConfig);
            wallet.setCustomSign(data.customSign);
            return wallet;
        };
    }
    ArianeeWalletBuilder.prototype.buildAriaWalletFrom = function (configuration) {
        if (this.web3.utils.isAddress(configuration.account.address)) {
            return new wallet_1.ArianeeWallet(configuration, this.arianeeConfig);
        }
        throw new Error('invalid address');
    };
    ArianeeWalletBuilder.prototype.fromPassPhrase = function (passphrase) {
        var privateKeyFromPassphrase;
        if (isNaN(+passphrase)) {
            privateKeyFromPassphrase = this.web3.utils.padLeft(this.web3.utils.asciiToHex(passphrase), 64);
        }
        else {
            privateKeyFromPassphrase = this.web3.utils.padLeft(this.web3.utils.numberToHex(passphrase), 64);
        }
        return this.fromPrivateKey(privateKeyFromPassphrase);
    };
    /**
     * From a randomKey and return ArianeeProtocol
     */
    ArianeeWalletBuilder.prototype.fromRandomKey = function () {
        var randomWallet = ethers_1.Wallet.createRandom();
        var mnemonic = randomWallet.mnemonic;
        var account = this.web3.eth.accounts.privateKeyToAccount(randomWallet.privateKey);
        return this.buildAriaWalletFrom({ account: account, mnemonic: mnemonic.phrase });
    };
    /**
     * Generate a mnemonic and return ArianeeProtocol
     * @param data
     */
    ArianeeWalletBuilder.prototype.fromRandomMnemonic = function () {
        return this.fromRandomKey();
    };
    ArianeeWalletBuilder.prototype.readOnlyWallet = function () {
        return new wallet_1.ArianeeWallet({
            account: {
                address: '0x0000000000000000000000000000000000000000'
            }
        }, this.arianeeConfig);
    };
    /**
     *  From a mnemonic and return ArianeeProtocol
     * @param mnemonic
     */
    ArianeeWalletBuilder.prototype.fromMnemonic = function (mnemonic) {
        var isValidMnemonic = ethers_1.ethers.utils.isValidMnemonic(mnemonic);
        if (isValidMnemonic) {
            var privateKey = ethers_1.Wallet.fromMnemonic(mnemonic).privateKey;
            var account = this.web3.eth.accounts.privateKeyToAccount(privateKey);
            return this.buildAriaWalletFrom({ account: account, mnemonic: mnemonic });
        }
        else {
            throw new Error('invalid mnemonic');
        }
    };
    /**
     *  From privatekey and return ArianeeProtocol
     * @param privateKey
     * @param bdHVaultURL
     */
    ArianeeWalletBuilder.prototype.fromPrivateKey = function (privateKey) {
        if (!isPrivateKeyValid_1.isPrivateKeyValid(privateKey)) {
            throw new Error('privateKey should start with 0x and should be 0x+64 characters');
        }
        var account = this.web3.eth.accounts.privateKeyToAccount(privateKey);
        return this.buildAriaWalletFrom({ account: account });
    };
    ArianeeWalletBuilder.prototype.fromCustomWeb3 = function (web3) {
        return __awaiter(this, void 0, void 0, function () {
            var account, remoteWallet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.web3 = web3;
                        if (!web3.eth.accounts.wallet[0]) return [3 /*break*/, 1];
                        account = {
                            address: web3.eth.accounts.wallet[0].address,
                            privateKey: web3.eth.accounts.wallet[0].privateKey
                        };
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, web3.eth.getAccounts()];
                    case 2:
                        remoteWallet = _a.sent();
                        if (remoteWallet[0]) {
                            account = { address: remoteWallet[0] };
                        }
                        else {
                            throw new Error('Their is no account in the custom web3 instance');
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.buildAriaWalletFrom({ account: account, web3: web3 })];
                }
            });
        });
    };
    ArianeeWalletBuilder.prototype.fromMetamask = function (address) {
        var account = {
            address: address
        };
        var wallet = this.buildAriaWalletFrom({ account: account });
        wallet.walletservice.metamask = true;
        return wallet;
    };
    return ArianeeWalletBuilder;
}());
exports.ArianeeWalletBuilder = ArianeeWalletBuilder;
//# sourceMappingURL=walletBuilder.js.map