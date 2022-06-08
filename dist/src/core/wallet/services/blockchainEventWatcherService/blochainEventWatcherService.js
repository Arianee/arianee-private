"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var contractsService_1 = require("../contractService/contractsService");
var walletService_1 = require("../walletService/walletService");
var simpleStore_1 = require("../../../libs/simpleStore/simpleStore");
var ArianeeEventEmitter_1 = require("../arianeeEventEmitterService/ArianeeEventEmitter");
var web3Service_1 = require("../web3Service/web3Service");
var blockchainEventsName_1 = require("../../../../models/blockchainEventsName");
var getPastEventService_1 = require("../getPastEventService/getPastEventService");
var configurationService_1 = require("../configurationService/configurationService");
var blockchainEventCursorNamespaceKey = 'blockchainEventCursor';
var BlockchainEventWatcherService = /** @class */ (function () {
    function BlockchainEventWatcherService(contractService, walletService, store, eventEmitter, web3Service, getPastEventService, configurationService) {
        var _this = this;
        this.contractService = contractService;
        this.walletService = walletService;
        this.store = store;
        this.eventEmitter = eventEmitter;
        this.web3Service = web3Service;
        this.getPastEventService = getPastEventService;
        this.configurationService = configurationService;
        this.createCompositeIdWatcher = function (eventNames) {
            return eventNames.sort().join();
        };
        this.onGoingWatchers = new Set();
        this.timeout = 2000;
        this.addWatchParameter = function (watcherParameter) {
            _this.watcherParameters.push(watcherParameter);
        };
        this.watcherParameters = [
            {
                contract: this.contractService[contractsService_1.ContractName.smartAssetContract],
                filter: { _from: this.walletService.address },
                blockchainEvent: blockchainEventsName_1.blockchainEventsName.smartAsset.transfer,
                eventNames: ["Transfer" /* Transfer */, "TransferFrom" /* TransferFrom */]
            },
            {
                contract: this.contractService[contractsService_1.ContractName.smartAssetContract],
                filter: { _to: this.walletService.address },
                blockchainEvent: blockchainEventsName_1.blockchainEventsName.smartAsset.transfer,
                eventNames: ["Transfer" /* Transfer */, "TransferTo" /* TransferTo */]
            },
            {
                contract: this.contractService[contractsService_1.ContractName.identityContract],
                filter: {},
                blockchainEvent: blockchainEventsName_1.blockchainEventsName.identity.IdentityUpdate,
                eventNames: ["URIUpdated" /* IdentityUpdate */]
            },
            {
                contract: this.contractService[contractsService_1.ContractName.identityContract],
                filter: {},
                blockchainEvent: blockchainEventsName_1.blockchainEventsName.identity.IdentityValidate,
                eventNames: ["URIValidate" /* IdentityValidate */]
            },
            {
                contract: this.contractService[contractsService_1.ContractName.messageContract],
                blockchainEvent: blockchainEventsName_1.blockchainEventsName.message.MessageSent,
                filter: { _receiver: this.walletService.address },
                eventNames: ["MessageReceive" /* MessageReceive */]
            }
        ];
        this.watch = function (conf) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    var contract, filter, blockchainEvent, eventNames, contractAddress, cursorKey, isProxyfied, currentBlock, _a, defaultCursor_1, cursor, pastEvent_1, sumOfListeners, e_1;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 7, , 8]);
                                contract = conf.contract, filter = conf.filter, blockchainEvent = conf.blockchainEvent, eventNames = conf.eventNames;
                                contractAddress = contract.options.address;
                                cursorKey = blockchainEvent.concat(JSON.stringify(filter)) + contractAddress;
                                isProxyfied = this.configurationService.isProxyEnable();
                                if (!isProxyfied) return [3 /*break*/, 1];
                                _a = 'latest';
                                return [3 /*break*/, 3];
                            case 1: return [4 /*yield*/, this.web3Service.web3.eth.getBlockNumber()];
                            case 2:
                                _a = _b.sent();
                                _b.label = 3;
                            case 3:
                                currentBlock = _a;
                                defaultCursor_1 = currentBlock === 'latest' ? 0 : currentBlock - 1;
                                return [4 /*yield*/, this.store.get(blockchainEventCursorNamespaceKey, cursorKey, function () { return Promise.resolve(defaultCursor_1); })];
                            case 4:
                                cursor = _b.sent();
                                if (!(currentBlock > cursor || currentBlock === 'latest')) return [3 /*break*/, 6];
                                return [4 /*yield*/, this.getPastEventService.getPastEvents(contractAddress, blockchainEvent, { fromBlock: cursor, toBlock: currentBlock, filter: filter })];
                            case 5:
                                pastEvent_1 = _b.sent();
                                if (isProxyfied) {
                                    if (pastEvent_1.length > 0) {
                                        this.store.set(blockchainEventCursorNamespaceKey, cursorKey, pastEvent_1[pastEvent_1.length - 1].blockNumber + 1);
                                    }
                                }
                                else {
                                    this.store.set(blockchainEventCursorNamespaceKey, cursorKey, currentBlock + 1);
                                }
                                eventNames.forEach(function (eventName) {
                                    if (pastEvent_1.length > 0) {
                                        _this.eventEmitter.EE.emit(eventName, pastEvent_1);
                                    }
                                });
                                _b.label = 6;
                            case 6:
                                sumOfListeners = eventNames.reduce(function (acc, eventName) {
                                    return acc + _this.eventEmitter.EE.listeners(eventName).length;
                                }, 0);
                                if (sumOfListeners > 0) {
                                    this.watch(conf);
                                }
                                else {
                                    this.onGoingWatchers.delete(this.createCompositeIdWatcher(conf.eventNames));
                                }
                                return [3 /*break*/, 8];
                            case 7:
                                e_1 = _b.sent();
                                console.error(e_1);
                                return [3 /*break*/, 8];
                            case 8: return [2 /*return*/];
                        }
                    });
                }); }, this.timeout);
                return [2 /*return*/];
            });
        }); };
        eventEmitter.EE.on("newListener" /* newListener */, function (event) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.watcherParameters
                    // is event handle by our watchers
                    .filter(function (conf) { return conf.eventNames.includes(event); })
                    // there is no on going watcher yet. Avoid double watcher.
                    .filter(function (conf) { return !_this.onGoingWatchers.has(_this.createCompositeIdWatcher(conf.eventNames)); })
                    .forEach(function (conf) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.onGoingWatchers.add(this.createCompositeIdWatcher(conf.eventNames));
                        this.watch(conf);
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    }
    BlockchainEventWatcherService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [contractsService_1.ContractService,
            walletService_1.WalletService,
            simpleStore_1.SimpleStore,
            ArianeeEventEmitter_1.ArianeeEventEmitter,
            web3Service_1.Web3Service,
            getPastEventService_1.GetPastEventService,
            configurationService_1.ConfigurationService])
    ], BlockchainEventWatcherService);
    return BlockchainEventWatcherService;
}());
exports.BlockchainEventWatcherService = BlockchainEventWatcherService;
//# sourceMappingURL=blochainEventWatcherService.js.map