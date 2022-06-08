"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var deepFreeze_1 = require("../core/libs/deepFreeze/deepFreeze");
var networkConfiguration_1 = require("../models/networkConfiguration");
exports.default = deepFreeze_1.deepFreeze((_a = {},
    _a[networkConfiguration_1.NETWORK.testnet] = {
        networkName: networkConfiguration_1.NETWORK.testnet,
        faucetUrl: "https://faucet.arianee.net/faucet?network=" + networkConfiguration_1.NETWORK.testnet,
        deepLink: 'test.arianee.net',
        alternativeDeeplink: ['test.arian.ee'],
        protocolVersion: 1
    },
    _a[networkConfiguration_1.NETWORK.mainnet] = {
        networkName: networkConfiguration_1.NETWORK.mainnet,
        faucetUrl: "https://faucet.arianee.net/faucet?network=" + networkConfiguration_1.NETWORK.mainnet,
        deepLink: 'arianee.net',
        alternativeDeeplink: ['dev.test.arian.ee', 'arian.ee'],
        protocolVersion: 1
    },
    _a[networkConfiguration_1.NETWORK.arianeeTestnet] = {
        networkName: networkConfiguration_1.NETWORK.arianeeTestnet,
        faucetUrl: "http://localhost:3000/faucet?network=" + networkConfiguration_1.NETWORK.arianeeTestnet,
        deepLink: 'wallet:4200',
        alternativeDeeplink: ['test.testnet.arian.ee'],
        protocolVersion: 2
    },
    _a[networkConfiguration_1.NETWORK.mumbai] = {
        networkName: networkConfiguration_1.NETWORK.mumbai,
        faucetUrl: "https://faucet.arianee.net/faucet?network=" + networkConfiguration_1.NETWORK.mumbai,
        deepLink: 'testnet.poly.arian.ee',
        alternativeDeeplink: ['mumbai.arian.ee'],
        protocolVersion: 2
    },
    _a[networkConfiguration_1.NETWORK.polygon] = {
        networkName: networkConfiguration_1.NETWORK.polygon,
        faucetUrl: "https://faucet.arianee.net/faucet?network=" + networkConfiguration_1.NETWORK.polygon,
        deepLink: 'poly.arian.ee',
        alternativeDeeplink: [],
        protocolVersion: 2
    },
    _a[networkConfiguration_1.NETWORK.arialabs] = {
        networkName: networkConfiguration_1.NETWORK.arialabs,
        faucetUrl: "https://faucet.arianee.net/faucet?network=" + networkConfiguration_1.NETWORK.arialabs,
        deepLink: 'arialabs.arian.ee',
        alternativeDeeplink: [],
        protocolVersion: 2
    },
    _a[networkConfiguration_1.NETWORK.stadetoulousain] = {
        networkName: networkConfiguration_1.NETWORK.stadetoulousain,
        faucetUrl: "https://faucet.arianee.net/faucet?network=" + networkConfiguration_1.NETWORK.stadetoulousain,
        deepLink: 'stadetoulousain.arian.ee',
        alternativeDeeplink: [],
        protocolVersion: 2
    },
    _a));
//# sourceMappingURL=appConfigurations.js.map