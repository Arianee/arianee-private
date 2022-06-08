"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CCStore = /** @class */ (function () {
    function CCStore() {
        this.users = [];
        this.tokens = [];
        this.events = [];
        this.cache = {};
        this.certificateSummaries = {};
    }
    CCStore.prototype.getUserWallet = function (userIndex) {
        return this.users[userIndex];
    };
    CCStore.prototype.storeWallet = function (userIndex, wallet) {
        this.users[userIndex] = wallet;
    };
    CCStore.prototype.getEvent = function (eventIndex) {
        return this.events[eventIndex];
    };
    CCStore.prototype.storeEvent = function (eventIndex, eventId) {
        this.events[eventIndex] = eventId;
    };
    CCStore.prototype.getToken = function (tokenIndex) {
        return this.tokens[tokenIndex];
    };
    CCStore.prototype.storeToken = function (tokenIndex, certificateId) {
        this.tokens[tokenIndex] = certificateId;
    };
    CCStore.prototype.storeCustom = function (key, value) {
        this.cache[key] = value;
    };
    CCStore.prototype.getCustom = function (key) {
        return this.cache[key];
    };
    CCStore.prototype.getCertificateSummary = function (certificateId) {
        return this.certificateSummaries[certificateId];
    };
    CCStore.prototype.storeCertificateSummary = function (certificateId, certificateSummary) {
        this.certificateSummaries[certificateId] = certificateSummary;
    };
    return CCStore;
}());
exports.CCStore = CCStore;
//# sourceMappingURL=store.js.map