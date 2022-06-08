"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
exports.getRandomInt = getRandomInt;
function getRandomCharacter(letterOnly) {
    if (letterOnly === void 0) { letterOnly = false; }
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    if (letterOnly) {
        randomChars = randomChars.substring(0, 26);
    }
    return randomChars.charAt(Math.floor(Math.random() * randomChars.length));
}
exports.getRandomCharacter = getRandomCharacter;
//# sourceMappingURL=randomCharacter.js.map