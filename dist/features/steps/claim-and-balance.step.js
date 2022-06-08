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
var cucumber_1 = require("@cucumber/cucumber");
var chai_1 = require("chai");
var walletCreator_1 = require("./helpers/walletCreator");
cucumber_1.When('user{int} claims faucet', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.requestPoa()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} with valid wallet and aria and faucet', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.walletFactory().fromRandomKey();
                    return [4 /*yield*/, walletCreator_1.makeWalletReady(wallet)];
                case 1:
                    _a.sent();
                    this.store.storeWallet(userIndex, wallet);
                    return [2 /*return*/, Promise.resolve()];
            }
        });
    });
});
cucumber_1.When('user{int} claims Aria', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.requestAria()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} buys {int} credit of type {word}', function (userIndex, quantity, creditType) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.buyCredits(creditType, quantity, wallet.address)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} has credit of type {word} balance of {int}', function (userIndex, creditType, quantity) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.balanceOfCredit(creditType, wallet.address)];
                case 1:
                    balance = _a.sent();
                    chai_1.expect(balance).equals(quantity.toString());
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} has postive Aria balance', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.balanceOfAria()];
                case 1:
                    balance = _a.sent();
                    chai_1.expect(+balance > 0).equals(true, "actual aria balance " + balance + " and should be positive");
                    return [2 /*return*/, Promise.resolve()];
            }
        });
    });
});
cucumber_1.Given('user{int} with POA positive balance', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet;
        return __generator(this, function (_a) {
            wallet = this.store.getUserWallet(userIndex);
            wallet.requestPoa();
            return [2 /*return*/];
        });
    });
});
cucumber_1.Then('user{int} has postive poa balance', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.balanceOfPoa()];
                case 1:
                    balance = _a.sent();
                    chai_1.expect(parseInt(balance) > 0).equals(true, "actual value of POA balance " + balance);
                    return [2 /*return*/, Promise.resolve()];
            }
        });
    });
});
//# sourceMappingURL=claim-and-balance.step.js.map