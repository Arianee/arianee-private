"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var sortEvents_1 = require("../../libs/sort/sortEvents");
var CertificateEventsSummary = /** @class */ (function () {
    function CertificateEventsSummary() {
        this.transfer = [];
        this.arianeeEvents = [];
    }
    Object.defineProperty(CertificateEventsSummary.prototype, "all", {
        get: function () {
            return __spreadArrays(this.transfer, this.arianeeEvents).sort(sortEvents_1.sortEvents);
        },
        enumerable: true,
        configurable: true
    });
    return CertificateEventsSummary;
}());
exports.CertificateEventsSummary = CertificateEventsSummary;
//# sourceMappingURL=certificateSummary.js.map