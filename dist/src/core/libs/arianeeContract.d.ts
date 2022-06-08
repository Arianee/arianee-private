import { Contract } from 'web3-eth-contract';
import { POAAndAriaService } from '../wallet/services/POAAndAriaFaucet/POAAndAriaService';
import { UtilsService } from '../wallet/services/utilService/utilsService';
import { WalletService } from '../wallet/services/walletService/walletService';
import { Web3Service } from '../wallet/services/web3Service/web3Service';
declare global {
    interface Window {
        ethereum: any;
    }
}
export declare class ArianeeContract<ContractImplementation extends Contract> {
    private contract;
    private walletService;
    private web3Service;
    private poaAndAriaService;
    private utilsService;
    key: ContractImplementation;
    constructor(contract: Contract, walletService: WalletService, web3Service: Web3Service, poaAndAriaService: POAAndAriaService, utilsService: UtilsService);
    makeArianee(): ContractImplementation;
    /**
     * arianeeSignMetamask
     * @param nonce
     * @param contractAddress
     * @param data
     */
    arianeeSignMetamask(transaction: any): Promise<any>;
    private overideCall;
    private overideSend;
}
