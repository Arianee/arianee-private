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
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var arianeeContract_1 = require("../../../libs/arianeeContract");
var configurationService_1 = require("../configurationService/configurationService");
var POAAndAriaService_1 = require("../POAAndAriaFaucet/POAAndAriaService");
var utilsService_1 = require("../utilService/utilsService");
var walletService_1 = require("../walletService/walletService");
var web3Service_1 = require("../web3Service/web3Service");
var lodash_1 = require("lodash");
var ContractName;
(function (ContractName) {
    ContractName["smartAssetContract"] = "smartAssetContract";
    ContractName["storeContract"] = "storeContract";
    ContractName["identityContract"] = "identityContract";
    ContractName["ariaContract"] = "ariaContract";
    ContractName["creditHistoryContract"] = "creditHistoryContract";
    ContractName["whitelistContract"] = "whitelistContract";
    ContractName["stakingContract"] = "stakingContract";
    ContractName["eventContract"] = "eventContract";
    ContractName["messageContract"] = "messageContract";
    ContractName["userActionContract"] = "userActionContract";
    ContractName["updateSmartAssetContract"] = "updateSmartAssetContract";
    ContractName["lostContract"] = "lostContract";
})(ContractName = exports.ContractName || (exports.ContractName = {}));
var ContractService = /** @class */ (function () {
    function ContractService(walletService, web3Service, poaAndAriaService, configurationService, utilsService) {
        var _this = this;
        this.walletService = walletService;
        this.web3Service = web3Service;
        this.poaAndAriaService = poaAndAriaService;
        this.configurationService = configurationService;
        this.utilsService = utilsService;
        /**
         * Get web3 contract instance from address
         * @param addressOrContractName
         */
        this.getInstanceFromAddressOrName = function (addressOrContractName) {
            var contractName = _this.reverseMapper[addressOrContractName];
            return _this[contractName] || _this[addressOrContractName];
        };
        // map address to smart contract name
        this.reverseMapper = {};
        this.smartAssetContract = this.create('smartAsset', ContractName.smartAssetContract);
        this.identityContract = this.create('identity', ContractName.identityContract);
        this.ariaContract = this.create('aria', ContractName.ariaContract);
        this.storeContract = this.create('store', ContractName.storeContract);
        this.creditHistoryContract = this.create('creditHistory', ContractName.creditHistoryContract);
        this.whitelistContract = this.create('whitelist', ContractName.whitelistContract);
        this.stakingContract = this.create('staking', ContractName.stakingContract);
        var isEventArianee = lodash_1.get(this.configurationService, 'arianeeConfiguration.eventArianee.abi') &&
            lodash_1.get(this.configurationService, 'arianeeConfiguration.eventArianee.address');
        if (isEventArianee) {
            this.eventContract = this.create('eventArianee', ContractName.eventContract);
        }
        var islostArianee = lodash_1.get(this.configurationService, 'arianeeConfiguration.lost.abi') &&
            lodash_1.get(this.configurationService, 'arianeeConfiguration.lost.address');
        if (islostArianee) {
            this.lostContract = this.create('lost', ContractName.lostContract);
        }
        var isMessageArianee = lodash_1.get(this.configurationService, 'arianeeConfiguration.message.abi') &&
            lodash_1.get(this.configurationService, 'arianeeConfiguration.message.address');
        if (isMessageArianee) {
            this.messageContract = this.create('message', ContractName.messageContract);
        }
        var isUserAction = lodash_1.get(this.configurationService, 'arianeeConfiguration.userAction.abi') &&
            lodash_1.get(this.configurationService, 'arianeeConfiguration.userAction.address');
        if (isUserAction) {
            this.userActionContract = this.create('userAction', ContractName.userActionContract);
        }
        var isupdateSmartAssetContract = lodash_1.get(this.configurationService, 'arianeeConfiguration.updateSmartAssets.abi') &&
            lodash_1.get(this.configurationService, 'arianeeConfiguration.updateSmartAssets.address');
        if (isupdateSmartAssetContract) {
            this.updateSmartAssetContract = this.create('updateSmartAssets', ContractName.updateSmartAssetContract);
        }
    }
    ContractService.prototype.create = function (name, arianeeJSContractName) {
        try {
            var contract = new this.web3Service.web3.eth.Contract(this.configurationService.arianeeConfiguration[name].abi, this.configurationService.arianeeConfiguration[name].address);
            this.reverseMapper[this.configurationService.arianeeConfiguration[name].address] = arianeeJSContractName;
            return new arianeeContract_1.ArianeeContract(contract, this.walletService, this.web3Service, this.poaAndAriaService, this.utilsService).makeArianee();
        }
        catch (e) {
            console.error("this contract does not have configuration " + name);
        }
    };
    ContractName.smartAssetContract, ContractName.storeContract, ContractName.identityContract, ContractName.ariaContract, ContractName.creditHistoryContract, ContractName.whitelistContract, ContractName.stakingContract, ContractName.eventContract, ContractName.lostContract, ContractName.messageContract, ContractName.userActionContract, ContractName.updateSmartAssetContract;
    ContractService = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [walletService_1.WalletService,
            web3Service_1.Web3Service,
            POAAndAriaService_1.POAAndAriaService,
            configurationService_1.ConfigurationService,
            utilsService_1.UtilsService])
    ], ContractService);
    return ContractService;
}());
exports.ContractService = ContractService;
//# sourceMappingURL=contractsService.js.map