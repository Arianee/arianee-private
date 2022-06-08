"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.global = window;
global.Buffer = global.Buffer || require('buffer').Buffer;
window.process = {
    version: ''
};
require("regenerator-runtime/runtime");
var arianee_1 = require("./core/arianee");
exports.Arianee = arianee_1.Arianee;
var networkConfiguration_1 = require("./models/networkConfiguration");
exports.NETWORK = networkConfiguration_1.NETWORK;
require("./polyfills");
exports.default = arianee_1.Arianee;
//# sourceMappingURL=index.browser-bundle.js.map