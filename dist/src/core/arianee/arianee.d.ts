import { provider } from 'web3-core';
import { TransactionOptions } from '../../models/arianeeConfiguration';
import { HttpInterceptor } from '../../models/httpClient';
import { NETWORK } from '../../models/networkConfiguration';
import { ConsolidatedCertificateRequest } from '../wallet/certificateSummary/certificateSummary';
import { GlobalConfigurationService } from '../wallet/services/globalConfigurationService/globalConfigurationService';
import { ArianeeWalletBuilder } from '../wallet/walletBuilder';
export declare class Arianee {
    globalConfigurationService: GlobalConfigurationService;
    constructor();
    fromCustomConfiguration(): void;
    init(networkName?: NETWORK, arianeeCustomConfiguration?: {
        walletReward?: {
            address: string;
        };
        brandDataHubReward?: {
            address: string;
        };
        httpProvider?: provider;
        transactionOptions?: TransactionOptions;
        deepLink?: string;
        gasStation?: string;
        protocolConfiguration?: any;
        defaultArianeePrivacyGateway?: string;
        httpInterceptor?: HttpInterceptor;
        httpFetch?: (url: any, config: any) => Promise<any>;
        blockchainProxy?: {
            enable: boolean;
            host?: string;
        };
    }): Promise<ArianeeWalletBuilder>;
    /**
     * @deprecated this method has been renamed setStore.
     */
    setCache(storageObject: any): Arianee;
    /**
       * @deprecated this method is available in ArianeeWallet class
       */
    setDefaultQuery(value: ConsolidatedCertificateRequest): void;
    setStore(storageObject: {
        getStoreItem: (storeKey: string) => Promise<any>;
        hasItem: (storeKey: string) => Promise<boolean>;
        setStoreItem: (keyl: string, value: any) => Promise<any>;
    }): this;
    /**
     * @deprecated this method has been renamed init.
     */
    connectToProtocol: (args?: any) => Promise<ArianeeWalletBuilder>;
}
