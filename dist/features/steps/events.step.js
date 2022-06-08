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
cucumber_1.Given('user{int} creates an event{int} with title {string} on certificate{int} with proper errors', function (userIndex, eventIndex, title, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, arianeeEventId, err_1, isCertificateCreditError, isApproveStoreError, isCreditPoaError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wallet.methods.createArianeeEvent({
                            certificateId: certificateId,
                            content: {
                                title: title,
                                $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
                            }
                        })];
                case 2:
                    arianeeEventId = (_a.sent()).arianeeEventId;
                    chai_1.expect(false).to.be.true;
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    isCertificateCreditError = err_1.find(function (d) { return d.code === 'credit.event'; }) !== undefined;
                    isApproveStoreError = err_1.find(function (d) { return d.code === 'approve.store'; }) !== undefined;
                    isCreditPoaError = err_1.find(function (d) { return d.code === 'credit.POA'; }) !== undefined;
                    chai_1.expect(isApproveStoreError).to.be.false;
                    chai_1.expect(isCertificateCreditError).to.be.true;
                    chai_1.expect(isCreditPoaError).to.be.false;
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} creates an event{int} on certificate{int} as:', function (userIndex, eventIndex, certificateIndex, eventContentSTR) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, eventContent, arianeeEventId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    eventContent = JSON.parse(eventContentSTR);
                    return [4 /*yield*/, wallet.methods.createAndStoreArianeeEvent({
                            certificateId: certificateId,
                            content: eventContent
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 1:
                    arianeeEventId = (_a.sent()).arianeeEventId;
                    this.store.storeEvent(eventIndex, arianeeEventId);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} createsAndStores an event{int} on certificate{int} as:', function (userIndex, eventIndex, certificateIndex, eventContentSTR) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, eventContent, arianeeEventId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    eventContent = JSON.parse(eventContentSTR);
                    return [4 /*yield*/, wallet.methods.createAndStoreArianeeEvent({
                            certificateId: certificateId,
                            content: eventContent
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 1:
                    arianeeEventId = (_a.sent()).arianeeEventId;
                    this.store.storeEvent(eventIndex, arianeeEventId);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} createsAndStores an event{int} with title {string} on certificate{int}', function (userIndex, eventIndex, title, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, arianeeEventId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    return [4 /*yield*/, wallet.methods.createAndStoreArianeeEvent({
                            certificateId: certificateId,
                            content: {
                                title: title,
                                $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
                            }
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 1:
                    arianeeEventId = (_a.sent()).arianeeEventId;
                    this.store.storeEvent(eventIndex, arianeeEventId);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} accepts event{int}', function (userIndex, eventIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, arianeeEventId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    arianeeEventId = this.store.getEvent(eventIndex);
                    return [4 /*yield*/, wallet.methods.acceptArianeeEvent(arianeeEventId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} refuses event{int}', function (userIndex, eventIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, arianeeEventId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    arianeeEventId = this.store.getEvent(eventIndex);
                    return [4 /*yield*/, wallet.methods.refuseArianeeEvent(arianeeEventId)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} checks event{int} status is {string} on certificate{int}', function (userIndex, eventIndex, status, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, arianeeEventId, eventsLength, isIncluded, index, event_1, err_2, eventsLength, isIncluded, index, event_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    arianeeEventId = this.store.getEvent(eventIndex);
                    if (!(status === 'accepted')) return [3 /*break*/, 6];
                    return [4 /*yield*/, wallet.contracts.eventContract.methods.eventsLength(certificateId).call()];
                case 1:
                    eventsLength = _a.sent();
                    isIncluded = false;
                    index = 0;
                    _a.label = 2;
                case 2:
                    if (!(index < eventsLength)) return [3 /*break*/, 5];
                    return [4 /*yield*/, wallet.contracts.eventContract.methods
                            .tokenEventsList(certificateId, index).call()];
                case 3:
                    event_1 = _a.sent();
                    if (event_1.toString() === arianeeEventId.toString()) {
                        isIncluded = true;
                        return [3 /*break*/, 5];
                    }
                    _a.label = 4;
                case 4:
                    index++;
                    return [3 /*break*/, 2];
                case 5:
                    chai_1.expect(isIncluded === true).to.be.true;
                    return [3 /*break*/, 18];
                case 6:
                    if (!(status === 'refused')) return [3 /*break*/, 11];
                    _a.label = 7;
                case 7:
                    _a.trys.push([7, 9, , 10]);
                    return [4 /*yield*/, wallet.contracts.eventContract.methods.getEvent(arianeeEventId).call()];
                case 8:
                    _a.sent();
                    chai_1.expect(true).to.be.false;
                    return [3 /*break*/, 10];
                case 9:
                    err_2 = _a.sent();
                    chai_1.expect(true).to.be.true;
                    return [3 /*break*/, 10];
                case 10: return [3 /*break*/, 18];
                case 11:
                    if (!(status === 'pending')) return [3 /*break*/, 17];
                    return [4 /*yield*/, wallet.contracts.eventContract.methods.pendingEventsLength(certificateId).call()];
                case 12:
                    eventsLength = _a.sent();
                    isIncluded = false;
                    index = 0;
                    _a.label = 13;
                case 13:
                    if (!(index < eventsLength)) return [3 /*break*/, 16];
                    return [4 /*yield*/, wallet.contracts.eventContract.methods
                            .pendingEvents(certificateId, index).call()];
                case 14:
                    event_2 = _a.sent();
                    if (event_2.toString() === arianeeEventId.toString()) {
                        isIncluded = true;
                        return [3 /*break*/, 16];
                    }
                    _a.label = 15;
                case 15:
                    index++;
                    return [3 /*break*/, 13];
                case 16:
                    ;
                    chai_1.expect(isIncluded === true).to.be.true;
                    return [3 /*break*/, 18];
                case 17: throw new Error('status is undefined or not known');
                case 18: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} try to create 2 events with the same eventId on certficate{int}', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, arianeeEventId, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    return [4 /*yield*/, wallet.methods.createArianeeEvent({
                            certificateId: certificateId,
                            content: {
                                title: 'title',
                                $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
                            }
                        })];
                case 1:
                    arianeeEventId = (_b.sent()).arianeeEventId;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, wallet.methods.createArianeeEvent({
                            certificateId: certificateId,
                            arianeeEventId: arianeeEventId,
                            content: {
                                title: 'title',
                                $schema: 'https://cert.arianee.org/version1/ArianeeEvent-i18n.json'
                            }
                        })];
                case 3:
                    _b.sent();
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=events.step.js.map