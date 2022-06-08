"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitFor = function (n) {
    if (n === void 0) { n = 8000; }
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('foo');
        }, n);
    });
};
//# sourceMappingURL=waitFor.js.map