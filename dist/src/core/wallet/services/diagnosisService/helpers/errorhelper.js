"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErrorInstance = function (errPayload) {
    var err = errPayload && errPayload.error ? errPayload.error : errPayload;
    if (err && err.message) {
        return true;
    }
    else {
        return false;
    }
};
exports.getErrorMessage = function (errPayload) {
    var err = errPayload && errPayload.error ? errPayload.error : errPayload;
    return err.message;
};
var isInError = function (errPayload, possibleMessages) {
    var message = exports.getErrorMessage(errPayload);
    if (message && possibleMessages.length > 0) {
        return possibleMessages.find(function (d) { return message.includes(d); }) !== undefined;
    }
    else {
        return false;
    }
};
exports.isAlreadyKnown = function (errPayload) {
    var possibleMessages = ['AlreadyKnown'];
    return isInError(errPayload, possibleMessages);
};
exports.isAlreadyTxWithSameNonce = function (errPayload) {
    var possibleMessages = ['FeeTooLowToCompete'];
    return isInError(errPayload, possibleMessages);
};
exports.isNonceTooLow = function (errPayload) {
    var possibleMessages = ['OldNonce'];
    return isInError(errPayload, possibleMessages);
};
//# sourceMappingURL=errorhelper.js.map