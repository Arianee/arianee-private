import { Transaction } from 'web3-core';
import { MixedTransaction } from '../../../etherjsWeb3Transaction/TransactionMapper';
import { ConfigurationService } from '../configurationService/configurationService';
import { Web3Service } from '../web3Service/web3Service';
import { TransactionObject } from '@arianee/arianee-abi/types/types';
export declare class WalletService {
    private web3Service;
    private configurationService;
    userCustomSign: (data: string) => Promise<{
        message: string;
        messageHash: string;
        signature: string;
    }>;
    account: any;
    metamask: any;
    userCustomSendTransaction: (transaction: Transaction) => Promise<any>;
    userCustomCall: (transaction: Transaction, data: TransactionObject<any>) => Promise<any>;
    constructor(web3Service: Web3Service, configurationService: ConfigurationService);
    readonly customSendTransaction: (transaction: any) => Promise<any>;
    isRemoteAccount: () => boolean;
    private customCommon;
    signTransaction: (transaction: MixedTransaction) => Promise<{
        rawTransaction: string;
        transactionHash: string;
    }>;
    signProof: (data: string, privateKey?: string) => Promise<{
        message: string;
        messageHash: string;
        signature: string;
    }>;
    sign: (data: string, privateKey?: string) => Promise<{
        message: string;
        messageHash: string;
        signature: string;
    }>;
    readonly address: string;
    readonly privateKey: string;
    isCustomSendTransaction: () => boolean;
    isCustomCall: () => boolean;
}
