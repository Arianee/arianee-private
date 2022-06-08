"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = function (objectToFreeze) {
    for (var _i = 0, _a = Object.entries(objectToFreeze); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (Object.prototype.hasOwnProperty.call(objectToFreeze, key) && typeof value === 'object' && value !== null) {
            exports.deepFreeze(value);
        }
    }
    Object.freeze(objectToFreeze);
    return objectToFreeze;
};
//# sourceMappingURL=deepFreeze.js.map