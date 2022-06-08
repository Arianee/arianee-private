"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var appConfigurations_1 = __importDefault(require("./appConfigurations"));
exports.appConfig = appConfigurations_1.default;
var Aria_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/Aria"));
var ArianeeCreditHistory_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeCreditHistory"));
var ArianeeEvent_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeEvent"));
var ArianeeIdentity_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeIdentity"));
var ArianeeSmartAsset_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeSmartAsset"));
var ArianeeStaking_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeStaking"));
var ArianeeStore_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeStore"));
var ArianeeWhitelist_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeWhitelist"));
var ArianeeLost_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeLost"));
var ArianeeMessage_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeMessage"));
var ArianeeUserAction_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeUserAction"));
var ArianeeUpdate_1 = __importDefault(require("@arianee/arianee-abi/abi/js/V1/ArianeeUpdate"));
var Aria_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/Aria"));
var ArianeeCreditHistory_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeCreditHistory"));
var ArianeeEvent_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeEvent"));
var ArianeeIdentity_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeIdentity"));
var ArianeeSmartAsset_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeSmartAsset"));
var ArianeeStaking_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeStaking"));
var ArianeeStore_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeStore"));
var ArianeeWhitelist_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeWhitelist"));
var ArianeeLost_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeLost"));
var ArianeeMessage_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeMessage"));
var ArianeeUserAction_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeUserAction"));
var ArianeeUpdate_2 = __importDefault(require("@arianee/arianee-abi/abi/js/V2/ArianeeUpdate"));
var contracts = {
    1: {
        identity: ArianeeIdentity_1.default,
        store: ArianeeStore_1.default,
        smartAsset: ArianeeSmartAsset_1.default,
        aria: Aria_1.default,
        eventArianee: ArianeeEvent_1.default,
        creditHistory: ArianeeCreditHistory_1.default,
        whitelist: ArianeeWhitelist_1.default,
        staking: ArianeeStaking_1.default,
        lost: ArianeeLost_1.default,
        message: ArianeeMessage_1.default,
        userAction: ArianeeUserAction_1.default,
        updateSmartAssets: ArianeeUpdate_1.default
    },
    2: {
        identity: ArianeeIdentity_2.default,
        store: ArianeeStore_2.default,
        smartAsset: ArianeeSmartAsset_2.default,
        aria: Aria_2.default,
        eventArianee: ArianeeEvent_2.default,
        creditHistory: ArianeeCreditHistory_2.default,
        whitelist: ArianeeWhitelist_2.default,
        staking: ArianeeStaking_2.default,
        lost: ArianeeLost_2.default,
        message: ArianeeMessage_2.default,
        userAction: ArianeeUserAction_2.default,
        updateSmartAssets: ArianeeUpdate_2.default
    }
};
exports.contracts = contracts;
//# sourceMappingURL=index.js.map