import { ConfigurationService } from '../configurationService/configurationService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { Web3Service } from '../web3Service/web3Service';
export declare class BlockchainUtilsService {
    private web3Service;
    private configurationService;
    private utilsService;
    private walletService;
    constructor(web3Service: Web3Service, configurationService: ConfigurationService, utilsService: UtilsService, walletService: WalletService);
    /**
     * Cancel transaction from nonce to another nonce (both included)
     * @param {{fromNonce: number; toNonce?: number; gas?: number; gasPrice?: number}} parameters
     * @returns {Promise<void>}
     */
    cancelTransactions: (parameters: {
        fromNonce: number;
        toNonce?: number;
        gas?: number;
        gasPrice?: number;
    }) => Promise<void>;
}
