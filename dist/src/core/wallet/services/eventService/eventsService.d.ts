import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { ArianeeEvent, ConsolidatedCertificateRequest } from '../../certificateSummary/certificateSummary';
import { ArianeePrivacyGatewayService } from '../arianeePrivacyGatewayService/arianeePrivacyGatewayService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { DiagnosisService } from '../diagnosisService/diagnosisService';
import { IdentityService } from '../identityService/identityService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { GetPastEventService } from '../getPastEventService/getPastEventService';
export declare class EventService {
    private identityService;
    private contractService;
    private walletService;
    private configurationService;
    private httpClient;
    private utils;
    private diagnosisService;
    private arianeePrivacyGateWayService;
    private getPastEventService;
    constructor(identityService: IdentityService, contractService: ContractService, walletService: WalletService, configurationService: ConfigurationService, httpClient: ArianeeHttpClient, utils: UtilsService, diagnosisService: DiagnosisService, arianeePrivacyGateWayService: ArianeePrivacyGatewayService, getPastEventService: GetPastEventService);
    getCertificateTransferEvents: (parameters: {
        certificateId: any;
        query: ConsolidatedCertificateRequest;
    }) => Promise<any>;
    getCertificateArianeeEvents: <EventType, IdentityType>(parameters: {
        certificateId: number;
        passphrase?: string;
        query: ConsolidatedCertificateRequest;
    }) => Promise<ArianeeEvent<EventType, IdentityType>[]>;
    static orderArianeeEvents: (leftEvent: ArianeeEvent<any, any>, rightEvent: ArianeeEvent<any, any>) => number;
    private getValidateEvents;
    private getPendingEvents;
    private getArianeeEvent;
    acceptArianeeEvent: (eventId: any) => any;
    refuseArianeeEvent: (eventId: any) => any;
    /**
     * Sotre content to Arianee Privacy Gateway
     * @param {ArianeeTokenId} certificateId
     * @param {number} arianeeEventId
     * @param content
     * @param {string} url: if not url is specified, fallback to default rpc, if not fallback to rpc of issuer
     * @returns {Promise<{jsonrpc: number; id: string; result?: any}>}
     */
    storeArianeeEventContentInRPCServer: (certificateId: any, arianeeEventId: number, content: any, url?: string) => Promise<{
        jsonrpc: number;
        id: string;
        result?: any;
    }>;
    createAndStoreArianeeEvent: (data: {
        uri?: string;
        certificateId: number;
        arianeeEventId?: number;
        content?: {
            [key: string]: any;
            $schema: string;
        };
    }, url?: string) => Promise<{
        contentImprint: string;
        arianeeEventId: number;
    }>;
    generateAvailableArianeeEventId: () => Promise<number>;
    private isArianeeEventIdFree;
    createArianeeEvent: (data: {
        uri?: string;
        contentImprint?: string;
        certificateId: number;
        arianeeEventId?: number;
        content?: {
            [key: string]: any;
            $schema: string;
        };
    }) => Promise<{
        contentImprint: string;
        arianeeEventId: number;
    }>;
}
