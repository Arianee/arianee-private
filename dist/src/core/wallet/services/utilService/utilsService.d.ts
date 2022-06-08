import { Transaction } from 'web3-core';
import { NETWORK } from '../../../..';
import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { ConfigurationService } from '../configurationService/configurationService';
import { GasStationService } from '../gasStationService/gasStationService';
import { WalletService } from '../walletService/walletService';
import { Web3Service } from '../web3Service/web3Service';
export declare class UtilsService {
    private web3Service;
    private configurationService;
    private walletService;
    private httpService;
    private gasStationService;
    constructor(web3Service: Web3Service, configurationService: ConfigurationService, walletService: WalletService, httpService: ArianeeHttpClient, gasStationService: GasStationService);
    private readonly web3;
    signProofForRequestToken(certificateId: number, addressNextOwner: string, privateKeyPreviousOwner: string): Promise<{
        message: string;
        messageHash: string;
        signature: string;
    }>;
    signProofForRpc(certificateId: number, privateKey: string): Promise<{
        message: string;
        messageHash: string;
        signature: string;
    }>;
    simplifiedParsedURL(url: string): {
        hash: string;
        hostname: string;
        pathname: string;
        port: string;
        protocol: string;
        search: string;
        username: string;
        password: string;
    };
    createUID(): number;
    createPassphrase(): string;
    recover(data: string | Array<any>, signature: string): string;
    /**
     * Calculate imprint from JSON (identity, certificate...etc)
     * @param {{$schema: string; [p: string]: any}} content
     * @returns {Promise<string>}
     */
    calculateImprint: (content: {
        [key: string]: any;
        $schema: string;
    }) => Promise<string>;
    cert(schema: any, data: any): Promise<string>;
    private cleanObject;
    /**
     * Function to find if hostname match deeplink or alternative deeplink of an ArianeeConfiguration
     * @param hostname
     * @param arianeeConfig
     */
    private findHostNameInConfig;
    /**
     * Function. Pass a deeplink hostname, and find the right network according to configuration
     * @param hostname
     * @returns {NETWORK} network name of this deeplink hostname. If no network associated with this hostname, it returns
     * undefined
     */
    findChainFromHostname(hostname: any): NETWORK;
    /**
     * Function. Pass a deeplink hostname.
     * @param hostname
     * @returns {true} it return true if arianeejs is initiated on the right network otherwise it thrown an error
     * with the most likely chainName
     */
    isRightChain(hostname: string): boolean;
    createLink(certificateId: number, passphrase: string, customDeepLink?: string, suffix?: string): {
        certificateId: number;
        passphrase: string;
        link: string;
    };
    /**
     * Read link and decompose it.
      * @param link
     * @param {boolean} checkChain, true by default. If you don't need to check that arianee is on the right chain
     * @returns {{method: string; certificateId: number; passphrase: string}}
     */
    readLink(link: any, checkChain?: boolean): {
        method: string;
        certificateId: number;
        passphrase: string;
    };
    timestampIsMoreRecentThan: typeof UtilsService.timestampIsMoreRecentThan;
    static timestampIsMoreRecentThan(timestamp: any, seconds: any): boolean;
    getTimestampFromBlock(blockNumber: any): Promise<any>;
    prepareTransaction(encodeABI: any, contractAddress: any, overrideNonce?: any, transaction?: any): Promise<Transaction>;
}
