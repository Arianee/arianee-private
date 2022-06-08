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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var walletCreator_1 = require("../features/steps/helpers/walletCreator");
var src_1 = require("../src");
var arianee_1 = require("../src/core/arianee");
exports.createASimpleCertificate = function () { return __awaiter(void 0, void 0, void 0, function () {
    var arianee, wallet, result, certificateId, passphrase, rest;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new arianee_1.Arianee().init(src_1.NETWORK.arianeeTestnet)];
            case 1:
                arianee = _a.sent();
                wallet = arianee.fromRandomKey();
                return [4 /*yield*/, walletCreator_1.makeWalletReady(wallet)];
            case 2:
                _a.sent();
                return [4 /*yield*/, wallet.contracts.storeContract.methods.buyCredit(0, 5, wallet.address).send()];
            case 3:
                _a.sent();
                return [4 /*yield*/, wallet.methods.createCertificate({
                        uri: 'http://localhost:3000/mycertificate.json',
                        content: {
                            $schema: 'https://cert.arianee.org/version1/ArianeeAsset.json',
                            name: 'Arianee',
                            v: '0.1',
                            serialnumber: [{ type: 'serialnumber', value: 'SAMPLE' }],
                            brand: 'Arianee',
                            model: 'Token goody',
                            description: 'Here is the digital passport of your Arianee token goody, giving you a glimpse of an augmented ownership experience. This Smart-Asset has a unique ID. It is transferable and enables future groundbreaking features. \n Connect with the arianee team to learn more.',
                            type: 'SmartAsset',
                            picture: 'https://www.arianee.org/wp-content/uploads/2019/02/Screen-Shot-2019-02-27-at-12.12.53-PM.png',
                            pictures: [
                                {
                                    src: 'https://www.arianee.org/wp-content/uploads/2019/02/Screen-Shot-2019-02-27-at-12.14.36-PM.png'
                                }
                            ],
                            socialmedia: { instagram: 'arianee_project', twitter: 'ArianeeProject' },
                            externalContents: [
                                {
                                    title: 'About Arianee',
                                    url: 'https://www.arianee.org',
                                    backgroundColor: '#000',
                                    color: '#FFF'
                                }
                            ],
                            jsonSurcharger: 'url'
                        }
                    })];
            case 4:
                result = _a.sent();
                certificateId = result.certificateId, passphrase = result.passphrase, rest = __rest(result, ["certificateId", "passphrase"]);
                console.log(certificateId, passphrase);
                console.log('success');
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=createASimpleCertificate.js.map