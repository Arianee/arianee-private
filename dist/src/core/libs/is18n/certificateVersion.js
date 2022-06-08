"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var isNullOrUndefined_1 = require("../isNullOrUndefined/isNullOrUndefined");
function isSchemai18n(x) {
    return !isNullOrUndefined_1.isNullOrUndefined(lodash_1.get(x, 'i18n'));
}
exports.isSchemai18n = isSchemai18n;
function isIdentitySchemai18n(x) {
    return !isNullOrUndefined_1.isNullOrUndefined(lodash_1.get(x, 'i18n'));
}
exports.isIdentitySchemai18n = isIdentitySchemai18n;
//# sourceMappingURL=certificateVersion.js.map