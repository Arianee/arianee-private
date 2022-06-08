import { Aria, ArianeeCreditHistory, ArianeeEvent, ArianeeIdentity, ArianeeMessage, ArianeeSmartAsset, ArianeeStaking, ArianeeStore, ArianeeUpdate, ArianeeUserAction, ArianeeWhitelist } from '@arianee/arianee-abi';
import { ArianeeLost } from '@arianee/arianee-abi/types/ArianeeLost';
import { Contract } from 'web3-eth-contract';
import { ConfigurationService } from '../configurationService/configurationService';
import { POAAndAriaService } from '../POAAndAriaFaucet/POAAndAriaService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { Web3Service } from '../web3Service/web3Service';
export declare enum ContractName {
    smartAssetContract = "smartAssetContract",
    storeContract = "storeContract",
    identityContract = "identityContract",
    ariaContract = "ariaContract",
    creditHistoryContract = "creditHistoryContract",
    whitelistContract = "whitelistContract",
    stakingContract = "stakingContract",
    eventContract = "eventContract",
    messageContract = "messageContract",
    userActionContract = "userActionContract",
    updateSmartAssetContract = "updateSmartAssetContract",
    lostContract = "lostContract"
}
export declare class ContractService {
    private walletService;
    private web3Service;
    private poaAndAriaService;
    private configurationService;
    private utilsService;
    [ContractName.smartAssetContract]: ArianeeSmartAsset;
    [ContractName.storeContract]: ArianeeStore;
    [ContractName.identityContract]: ArianeeIdentity;
    [ContractName.ariaContract]: Aria;
    [ContractName.creditHistoryContract]: ArianeeCreditHistory;
    [ContractName.whitelistContract]: ArianeeWhitelist;
    [ContractName.stakingContract]: ArianeeStaking;
    [ContractName.eventContract]: ArianeeEvent;
    [ContractName.lostContract]: ArianeeLost;
    [ContractName.messageContract]: ArianeeMessage;
    [ContractName.userActionContract]: ArianeeUserAction;
    [ContractName.updateSmartAssetContract]: ArianeeUpdate;
    constructor(walletService: WalletService, web3Service: Web3Service, poaAndAriaService: POAAndAriaService, configurationService: ConfigurationService, utilsService: UtilsService);
    /**
     * Get web3 contract instance from address
     * @param addressOrContractName
     */
    getInstanceFromAddressOrName: (addressOrContractName: string) => Contract;
    reverseMapper: {
        [key: string]: ContractName;
    };
    create<T extends Contract>(name: string, arianeeJSContractName: ContractName): T;
}
