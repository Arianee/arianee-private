import { TxData } from '@ethereumjs/tx';
import { Transaction as EtherTransaction } from 'ethers';
import { TransactionConfig as Web3Transaction } from 'web3-core';
export interface MixedTransaction {
    nonce: string | number;
    gasPrice: string | number;
    to: string;
    value?: string;
    chainId?: number;
    data?: string;
    from?: string;
    gasLimit?: string | number;
    gas?: string | number;
}
export declare class TransactionMapper {
    private mixedTransaction;
    constructor(mixedTransaction: MixedTransaction);
    private readonly gasLimit;
    private static toBigNumber;
    private clean;
    private static toNumber;
    toWeb3: () => Web3Transaction;
    toEtherjs: () => EtherTransaction;
    toEthereumjs(): TxData;
    toMetamaskTransaction: () => any;
}
