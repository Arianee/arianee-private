import { Web3Service } from '../web3Service/web3Service';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
export declare class BatchService {
    private web3Service;
    private utilsService;
    private walletService;
    constructor(web3Service: Web3Service, utilsService: UtilsService, walletService: WalletService);
    private batchTransactions;
    addToBatch(transaction: any): this;
    executeBatch(): Promise<unknown>;
    watchPendingTransaction(transactionInProgress: any): Promise<unknown>;
}
