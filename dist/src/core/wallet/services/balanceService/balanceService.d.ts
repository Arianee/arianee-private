import { ContractService } from '../contractService/contractsService';
import { WalletService } from '../walletService/walletService';
import { Web3Service } from '../web3Service/web3Service';
export declare class BalanceService {
    private contractService;
    private walletService;
    private web3Service;
    constructor(contractService: ContractService, walletService: WalletService, web3Service: Web3Service);
    /**
     * Get balance of Aria (with 18 decimals)
     * @param {any} address
     * @returns {Promise<string>}
     */
    balanceOfAria: (address?: any) => Promise<string>;
    /**
     * Get balance of Aria (without the 18 decimals) readable by human
     * @param {any} address
     * @returns {Promise<string>}
     */
    balanceOfAriaReadable: (address?: any) => Promise<string>;
    /**
     * Get balance of Ria (aria * 10^18)
     * @param {any} address
     * @returns {Promise<string>}
     */
    balanceOfRia: (address?: any) => Promise<string>;
    balanceOfPoa: (address?: any) => Promise<string>;
    /**
     * Get credit price in ria (aria * 10^18)
     * @param {creditTypeEnum | string} creditType
     * @returns {Promise<any>}
     */
    getCreditPrice: (creditType: string) => Promise<any>;
    balanceOfCredit: (creditType: string, address?: any) => Promise<string>;
}
