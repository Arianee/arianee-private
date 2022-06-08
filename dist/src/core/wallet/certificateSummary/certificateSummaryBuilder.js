"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNullOrUndefined_1 = require("../../libs/isNullOrUndefined/isNullOrUndefined");
var certificateSummary_1 = require("./certificateSummary");
var CertificateSummaryBuilder = /** @class */ (function () {
    function CertificateSummaryBuilder() {
    }
    CertificateSummaryBuilder.prototype.setContent = function (data) {
        this._content = data;
        return this;
    };
    CertificateSummaryBuilder.prototype.setCertificateId = function (certificateId) {
        this._certificateId = certificateId;
        return this;
    };
    CertificateSummaryBuilder.prototype.setArianeeEvents = function (events) {
        if (isNullOrUndefined_1.isNullOrUndefined(this._events)) {
            this._events = new certificateSummary_1.CertificateEventsSummary();
        }
        this._events.arianeeEvents = events;
        return this;
    };
    CertificateSummaryBuilder.prototype.setEvents = function (events) {
        if (isNullOrUndefined_1.isNullOrUndefined(this._events)) {
            this._events = new certificateSummary_1.CertificateEventsSummary();
        }
        this._events.transfer = events;
        return this;
    };
    CertificateSummaryBuilder.prototype.setMessageSenders = function (messageSenders) {
        this._messageSenders = messageSenders;
    };
    CertificateSummaryBuilder.prototype.setIsRequestable = function (isRequestable) {
        this._isRequestable = isRequestable;
        return this;
    };
    CertificateSummaryBuilder.prototype.setRecover = function (recover) {
        this._recover = recover;
        return this;
    };
    CertificateSummaryBuilder.prototype.setIssuer = function (isIdentityAuthentic, isIdentityVerified, imprint, identity) {
        this._issuer = {
            identity: identity,
            isIdentityAuthentic: isIdentityAuthentic,
            isIdentityVerified: isIdentityVerified,
            imprint: imprint
        };
        return this;
    };
    CertificateSummaryBuilder.prototype.setAdvandced = function (advanded) {
        this._advanced = advanded;
        return this;
    };
    CertificateSummaryBuilder.prototype.setOwner = function (ownerAddress, currentWallet) {
        this._owner = {
            /**
               * @deprecated use address instead
               */
            get publicKey() {
                console.warn('publicKey is deprecated use address instead. It will be removed in a next version');
                return ownerAddress;
            },
            address: ownerAddress,
            isOwner: ownerAddress.toLowerCase() === currentWallet.toLowerCase()
        };
        return this;
    };
    CertificateSummaryBuilder.prototype.build = function () {
        var arianeCertificate = {
            certificateId: this._certificateId,
            content: this._content,
            issuer: this._issuer,
            isRequestable: this._isRequestable,
            owner: this._owner,
            events: this._events,
            advanced: this._advanced,
            messageSenders: this._messageSenders,
            recover: this._recover
        };
        Object.keys(arianeCertificate).forEach(function (key) {
            if (isNullOrUndefined_1.isNullOrUndefined(arianeCertificate[key])) {
                delete arianeCertificate[key];
            }
        });
        return arianeCertificate;
    };
    return CertificateSummaryBuilder;
}());
exports.CertificateSummaryBuilder = CertificateSummaryBuilder;
//# sourceMappingURL=certificateSummaryBuilder.js.map