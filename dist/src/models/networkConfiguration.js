"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var NETWORK;
(function (NETWORK) {
    NETWORK["testnet"] = "testnet";
    NETWORK["mainnet"] = "mainnet";
    NETWORK["arianeeTestnet"] = "arianeetestnet";
    NETWORK["mumbai"] = "mumbai";
    NETWORK["polygon"] = "polygon";
    NETWORK["arialabs"] = "arialabs";
    NETWORK["stadetoulousain"] = "stadetoulousain";
    NETWORK["ysl"] = "ysl";
})(NETWORK = exports.NETWORK || (exports.NETWORK = {}));
exports.networkURL = (_a = {},
    _a[NETWORK.polygon] = 'https://cert.arianee.net/contractAddresses/polygon.json',
    _a[NETWORK.mumbai] = 'https://cert.arianee.net/contractAddresses/mumbai.json',
    _a[NETWORK.testnet] = 'https://cert.arianee.net/contractAddresses/newsokol.json',
    _a[NETWORK.mainnet] = 'https://cert.arianee.net/contractAddresses/newpoacore.json',
    _a[NETWORK.arianeeTestnet] = 'https://cert.arianee.net/contractAddresses/arianeetest.json',
    _a[NETWORK.arialabs] = 'https://cert.arianee.net/contractAddresses/arialabs.json',
    _a[NETWORK.stadetoulousain] = 'https://cert.arianee.net/contractAddresses/stadetoulousain.json',
    _a[NETWORK.ysl] = 'https://cert.arianee.net/contractAddresses/ysl.json',
    _a);
//# sourceMappingURL=networkConfiguration.js.map