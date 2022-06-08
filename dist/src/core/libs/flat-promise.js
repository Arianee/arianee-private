"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatPromise() {
    var resolve, reject;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    return { promise: promise, resolve: resolve, reject: reject };
}
exports.flatPromise = flatPromise;
//# sourceMappingURL=flat-promise.js.map