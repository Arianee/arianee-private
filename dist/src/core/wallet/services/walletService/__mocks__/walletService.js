"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WalletService = /** @class */ (function () {
    function WalletService() {
        this.account = {
            address: '0x23456789',
            privateKey: 'azokdnazoidfjn'
        };
    }
    Object.defineProperty(WalletService.prototype, "address", {
        get: function () {
            return this.account.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalletService.prototype, "publicKey", {
        get: function () {
            return this.account.address;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WalletService.prototype, "privateKey", {
        get: function () {
            return this.account.privateKey;
        },
        enumerable: true,
        configurable: true
    });
    return WalletService;
}());
exports.WalletService = WalletService;
//# sourceMappingURL=walletService.js.map