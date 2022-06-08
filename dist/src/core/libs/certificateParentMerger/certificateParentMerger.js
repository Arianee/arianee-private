"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
/**
 * Will be merged from 0 to last content
 * @param {Array<any>} override
 * @returns {{}}
 */
exports.certificateParentMerger = function (override) {
    var content = {};
    override.forEach(function (d) {
        lodash_1.mergeWith(content, d);
    });
    return content;
};
//# sourceMappingURL=certificateParentMerger.js.map