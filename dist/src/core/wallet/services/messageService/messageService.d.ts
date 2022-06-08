import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { SimpleStore } from '../../../libs/simpleStore/simpleStore';
import { ConsolidatedCertificateRequest, Message } from '../../certificateSummary/certificateSummary';
import { ArianeePrivacyGatewayService } from '../arianeePrivacyGatewayService/arianeePrivacyGatewayService';
import { CertificateService } from '../certificateService/certificateService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { DiagnosisService } from '../diagnosisService/diagnosisService';
import { IdentityService } from '../identityService/identityService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { GetPastEventService } from '../getPastEventService/getPastEventService';
import { ArianeeBlockchainProxyService } from '../arianeeBlockchainProxyService/arianeeBlockchainProxyService';
export declare class MessageService {
    private identityService;
    private contractService;
    private walletService;
    private configurationService;
    private httpClient;
    private utils;
    private diagnosisService;
    private store;
    private certificateService;
    private arianeePrivacyGateWayService;
    private getPastEvent;
    private arianeeProxyService;
    constructor(identityService: IdentityService, contractService: ContractService, walletService: WalletService, configurationService: ConfigurationService, httpClient: ArianeeHttpClient, utils: UtilsService, diagnosisService: DiagnosisService, store: SimpleStore, certificateService: CertificateService, arianeePrivacyGateWayService: ArianeePrivacyGatewayService, getPastEvent: GetPastEventService, arianeeProxyService: ArianeeBlockchainProxyService);
    getMessage: (parameters: {
        messageId: number;
        query?: ConsolidatedCertificateRequest;
        url?: string;
        forceRefresh?: boolean;
    }) => Promise<Message<any, any>>;
    /**
     * Fetch message and apply i18n
     * @param {{messageId: number; query?: ConsolidatedCertificateRequest; url?: string}} parameters
     * @returns {Promise<Message>}
     */
    fetchMessage: (parameters: {
        messageId: number;
        query?: ConsolidatedCertificateRequest;
        url?: string;
    }) => Promise<Message<any, any>>;
    /**
     * Fetch message
     * @param {{messageId: number; query?: ConsolidatedCertificateRequest; url?: string}} parameters
     * @returns {Promise<Message>}
     */
    fetchRawMessage: (parameters: {
        messageId: number;
        query?: ConsolidatedCertificateRequest;
        url?: string;
    }) => Promise<Message<any, any>>;
    getAllMyMessageIds: () => Promise<any>;
    getMyMessages: (parameters?: {
        query?: ConsolidatedCertificateRequest;
        url?: string;
    }) => Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>;
    markAsRead: (messageId: number) => Promise<any>;
    isMessageRead: (messageId?: number) => Promise<boolean>;
    storeMessageContentInRPCServer: (messageId: number, content: any, url?: string) => Promise<{
        jsonrpc: number;
        id: string;
        result?: any;
    }>;
    createAndStoreMessage: (data: {
        uri?: string;
        certificateId: number;
        content?: {
            [key: string]: any;
            $schema: string;
        };
        messageId?: number;
    }, url?: string) => Promise<{
        contentImprint: string;
        messageId: number;
    }>;
    generateAvailableMessageId: () => Promise<number>;
    private isMessageIdFree;
    createMessage: (data: {
        contentImprint?: string;
        certificateId: number;
        content?: {
            [key: string]: any;
            $schema: string;
        };
        messageId?: number;
    }) => Promise<{
        contentImprint: string;
        messageId: number;
    }>;
}
