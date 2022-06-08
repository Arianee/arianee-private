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
var js_base64_1 = require("js-base64");
var JWTGeneric = /** @class */ (function () {
    function JWTGeneric(signer, decoder) {
        var _this = this;
        this.signer = signer;
        this.decoder = decoder;
        this.header = { typ: 'JWT', alg: 'ETH' };
        /**
         * Set payload to be signed
         * @param payload
         */
        this.setPayload = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.payload = payload;
                        _a = {};
                        return [4 /*yield*/, this.sign.bind(this)];
                    case 1: return [2 /*return*/, (_a.sign = _b.sent(),
                            _a.setHeader = this.setHeader.bind(this),
                            _a)];
                }
            });
        }); };
        /**
         * Set payload to be signed
         * @param payload
         */
        this.setHeader = function (payload) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.header = payload;
                        _a = {};
                        return [4 /*yield*/, this.sign.bind(this)];
                    case 1: return [2 /*return*/, (_a.sign = _b.sent(),
                            _a.setPayload = this.setPayload.bind(this),
                            _a)];
                }
            });
        }); };
        this.arePropertiesValid = function (payload) {
            if (payload.exp) {
                var isExpired = new Date(payload.exp).getTime() < Date.now();
                if (isExpired) {
                    return false;
                }
            }
            if (payload.nbf) {
                var isBefore = new Date(payload.nbf).getTime() > Date.now();
                if (isBefore) {
                    return false;
                }
            }
            return true;
        };
    }
    /**
     * Set token to be verified or decoded
     * @param encodedToken
     */
    JWTGeneric.prototype.setToken = function (encodedToken) {
        this.encodedToken = encodedToken;
        return {
            decode: this.decode.bind(this),
            verify: this.verify.bind(this)
        };
    };
    JWTGeneric.base64Stringified = function (data) {
        return js_base64_1.Base64.encode(JSON.stringify(data));
    };
    JWTGeneric.fromBase64JSONParse = function (data) {
        return JSON.parse(js_base64_1.Base64.fromBase64(data));
    };
    JWTGeneric.prototype.sign = function () {
        return __awaiter(this, void 0, void 0, function () {
            var header, payload, signature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = JWTGeneric.base64Stringified(this.header);
                        payload = JWTGeneric.base64Stringified(this.payload);
                        return [4 /*yield*/, this.signature()];
                    case 1:
                        signature = _a.sent();
                        return [2 /*return*/, header + "." + payload + "." + signature];
                }
            });
        });
    };
    /**
     * Verify if signature was signed by pubKey and return true/false
     * @param pubKey
     */
    JWTGeneric.prototype.verify = function (pubKey) {
        var _a = this.decode(), header = _a.header, signature = _a.signature, payload = _a.payload;
        var joinedHeaderPayload = JWTGeneric.base64Stringified(header) + '.' + JWTGeneric.base64Stringified(payload);
        var decode = this.decoder(joinedHeaderPayload, signature);
        var arePropertyValid = this.arePropertiesValid(payload);
        if (!arePropertyValid) {
            return false;
        }
        return pubKey.toLowerCase() === decode.toLowerCase();
    };
    JWTGeneric.prototype.decode = function () {
        var _a = this.encodedToken.split('.'), header = _a[0], payload = _a[1], signature = _a[2];
        return {
            header: JWTGeneric.fromBase64JSONParse(header),
            payload: JWTGeneric.fromBase64JSONParse(payload),
            signature: signature
        };
    };
    JWTGeneric.prototype.signature = function () {
        return this.signer(JWTGeneric.base64Stringified(this.header) + '.' + JWTGeneric.base64Stringified(this.payload));
    };
    return JWTGeneric;
}());
exports.JWTGeneric = JWTGeneric;
//# sourceMappingURL=JWTGeneric.js.map