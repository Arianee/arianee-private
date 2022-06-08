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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
var fs = __importStar(require("fs"));
var axios_1 = __importDefault(require("axios"));
var rpcurl = ''; // JSON RPC URL
var privateKey = ''; // Private key with enough POA and Aria
var parseCsv = function (csvPath) {
    var originFile = fs.readFileSync(csvPath, { encoding: 'utf8' });
    var data = originFile.split('\n');
    data.shift();
    return data.map(function (row) {
        var data = row.replace('\r', '').split(';');
        if (data.length === 3) {
            return {
                uri: '',
                certificateId: data[0],
                passphrase: data[1],
                content: JSON.parse(data[2])
            };
        }
    });
};
var storeJsonContent = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var arianee, wallet, datamapped, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new src_1.Arianee().init(src_1.NETWORK.testnet)];
            case 1:
                arianee = _a.sent();
                wallet = arianee.fromRandomKey();
                datamapped = parseCsv(__dirname + '/../../../example/batchExample/cert-origin.csv');
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < datamapped.length)) return [3 /*break*/, 6];
                if (!datamapped[i]) return [3 /*break*/, 5];
                return [4 /*yield*/, wallet.methods.storeContentInRPCServer(datamapped[i].certificateId, datamapped[i].content, url + '/rpc')];
            case 3:
                _a.sent();
                return [4 /*yield*/, axios_1.default.post(url + '/wallet/certificate/' + datamapped[i].certificateId + '/passphrase', { passphrase: datamapped[i].passphrase })];
            case 4:
                _a.sent();
                _a.label = 5;
            case 5:
                i++;
                return [3 /*break*/, 2];
            case 6:
                console.log('STORED');
                return [2 /*return*/];
        }
    });
}); };
var checkIdsAvailablity = function (ids) { return __awaiter(void 0, void 0, void 0, function () {
    var arianee, wallet;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, new src_1.Arianee().init(src_1.NETWORK.testnet)];
            case 1:
                arianee = _a.sent();
                wallet = arianee.fromRandomKey();
                return [2 /*return*/, Promise.all(ids.map(function (id) {
                        return new Promise(function (resolve, reject) {
                            wallet.contracts.smartAssetContract.methods.ownerOf(id).call()
                                .then(function () { reject('ID ' + id + ' is not available'); })
                                .catch(function (err) { resolve(); });
                        });
                    }))];
        }
    });
}); };
var createCertificateInBatch = function (datamapped) { return __awaiter(void 0, void 0, void 0, function () {
    var nbtx, txPerBatch, batchNb, batchParam, i, splicedParam, arianee, wallet, i, batch;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nbtx = datamapped.length;
                txPerBatch = 8;
                batchNb = Math.ceil(datamapped.length / txPerBatch);
                batchParam = [];
                for (i = 0; i < batchNb; i++) {
                    if (i + 1 !== batchNb) {
                        splicedParam = datamapped.splice(0, txPerBatch);
                        batchParam.push(splicedParam);
                    }
                    else {
                        batchParam.push(datamapped);
                    }
                }
                return [4 /*yield*/, new src_1.Arianee().init(src_1.NETWORK.testnet)];
            case 1:
                arianee = _a.sent();
                wallet = arianee.fromPrivateKey(privateKey);
                return [4 /*yield*/, wallet.requestAria()];
            case 2:
                _a.sent();
                return [4 /*yield*/, wallet.methods.approveStore()];
            case 3:
                _a.sent();
                return [4 /*yield*/, wallet.methods.buyCredits('certificate', nbtx, wallet.address)];
            case 4:
                _a.sent();
                i = 0;
                _a.label = 5;
            case 5:
                if (!(i < batchParam.length)) return [3 /*break*/, 9];
                return [4 /*yield*/, wallet.methods.createCertificatesBatch(batchParam[i])
                        .catch(function (err) {
                        console.log('FAILED TRANSACTION');
                        console.log(err);
                    })];
            case 6:
                batch = _a.sent();
                console.log(batch);
                if (!(i === batchParam.length - 1)) return [3 /*break*/, 8];
                return [4 /*yield*/, storeJsonContent(rpcurl)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 5];
            case 9: return [2 /*return*/];
        }
    });
}); };
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var datamapped, ids, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    datamapped = parseCsv(__dirname + '/../../../example/batchExample/cert-origin.csv');
                    ids = datamapped.map(function (value) { if (value) {
                        return value.certificateId;
                    } });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, checkIdsAvailablity(ids)];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, createCertificateInBatch(datamapped)];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    console.log('one or more ids are not available');
                    return [3 /*break*/, 5];
                case 5:
                    console.log('END');
                    return [2 /*return*/];
            }
        });
    });
})();
//# sourceMappingURL=batchFromCsv.js.map