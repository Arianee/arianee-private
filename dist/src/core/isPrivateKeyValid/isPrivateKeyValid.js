"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrivateKeyValid = function (privateKey) {
    var isLength = privateKey.length === 66;
    var isHexaPrefix = privateKey.startsWith('0x');
    return isLength && isHexaPrefix;
};
//# sourceMappingURL=isPrivateKeyValid.js.map