import { IOwnerOf } from '../../../../models/IOwnerOf';
import { hydrateTokenParameters } from '../../../../models/transaction-parameters';
import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { SimpleStore } from '../../../libs/simpleStore/simpleStore';
import { CertificateSummary, ConsolidatedCertificateRequest } from '../../certificateSummary/certificateSummary';
import { ArianeeAccessTokenValidatorService } from '../ArianeeAccessToken/arianeeAccessTokenValidatorService';
import { ArianeeAuthentificationService } from '../arianeeAuthentificationService/arianeeAuthentificationService';
import { BatchService } from '../batchService/batchService';
import { CertificateAuthorizationService } from '../certificateAuthorizationService/certificateAuthorizationService';
import { CertificateDetails } from '../certificateDetailsService/certificatesDetailsService';
import { CertificateUtilsService } from '../certificateUtilsService/certificateUtilsService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { DiagnosisService } from '../diagnosisService/diagnosisService';
import { EventService } from '../eventService/eventsService';
import { GlobalConfigurationService } from '../globalConfigurationService/globalConfigurationService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { Web3Service } from '../web3Service/web3Service';
import { ArianeeBlockchainProxyService } from '../arianeeBlockchainProxyService/arianeeBlockchainProxyService';
export declare class CertificateService {
    private utils;
    private httpClient;
    private configurationService;
    private contractService;
    private certificateDetails;
    private walletService;
    private eventService;
    private web3Service;
    private certificateAuthorizationService;
    private globalConfiguration;
    private store;
    private batchService;
    private diagnosisService;
    private jwtProofService;
    private certificateUtilsService;
    private arianeeAuthentificationService;
    private arianeeProxyService;
    isCertificateOwnershipRequestable: (certificateId: any, passphrase: any) => Promise<any>;
    reserveCertificateId: (certificateId?: number, receiver?: string) => Promise<any>;
    private getAvailableCertificateId;
    private isCertificateIdFree;
    constructor(utils: UtilsService, httpClient: ArianeeHttpClient, configurationService: ConfigurationService, contractService: ContractService, certificateDetails: CertificateDetails, walletService: WalletService, eventService: EventService, web3Service: Web3Service, certificateAuthorizationService: CertificateAuthorizationService, globalConfiguration: GlobalConfigurationService, store: SimpleStore, batchService: BatchService, diagnosisService: DiagnosisService, jwtProofService: ArianeeAccessTokenValidatorService, certificateUtilsService: CertificateUtilsService, arianeeAuthentificationService: ArianeeAuthentificationService, arianeeProxyService: ArianeeBlockchainProxyService);
    private hydrateTokenTransaction;
    createAndStoreCertificate: (data: hydrateTokenParameters, urlOfRPCServer?: string) => Promise<{
        [key: string]: any;
        passphrase: string;
        certificateId: any;
        deepLink: string;
    }>;
    customHydrateToken: (data: hydrateTokenParameters) => Promise<{
        [key: string]: any;
        passphrase: string;
        certificateId: any;
        deepLink: string;
    }>;
    /**
     * Update certificate imprint of a certificate
     * @param {{certificateId: ArianeeTokenId; content?: any; imprint?: string}} parameters
     * @returns {Promise<never>}
     */
    updateCertificate: <T = any>(parameters: {
        certificateId: any;
        content?: any;
        imprint?: string;
    }) => Promise<any>;
    /**
     * Update imprint and content of certificate
     * @param {{certificateId: ArianeeTokenId; content: any}} parameters
     * @param {string} urlOfRPCServer
     * @returns {Promise<never>}
     */
    updateAndStoreCertificateContent: <T = any>(parameters: {
        certificateId: any;
        content: any;
    }, urlOfRPCServer?: string) => Promise<any>;
    /**
     * Store update content of a certificate to Arianee Privacy Gateway
     * @param {ArianeeTokenId} certificateId
     * @param content
     * @param {string} arianeePrivacyGatewayURL
     * @returns {Promise<{jsonrpc: number; id: string; result?: any}>}
     */
    storeUpdateContentInRPCServer: (certificateId: any, content: any, arianeePrivacyGatewayURL?: string) => Promise<{
        jsonrpc: number;
        id: string;
        result?: any;
    }>;
    customHydrateTokenBatch: (datas: hydrateTokenParameters[]) => Promise<unknown>;
    storeContentInRPCServer: (certificateId: any, content: any, arianeePrivacyGatewayURL?: string) => Promise<{
        jsonrpc: number;
        id: string;
        result?: any;
    }>;
    /**
     *
     * @param {number} certificateId
     * @param {string} passphrase
     * @returns {Promise<never>}
     */
    requestCertificateOwnershipWithPassphrase: (certificateId: number, passphrase: string) => Promise<any>;
    /**
     * Get certificate from Arianee Access Token
     * example: getCertificateFromArianeeAccessToken(eyJ0eXAiOiJK...restOfYourJWT)
     * @param Arianee Access Token
     * @param query
     */
    getCertificateFromArianeeAccessToken: (arianeeAccessToken: string, query?: ConsolidatedCertificateRequest) => Promise<CertificateSummary<any, any>>;
    /**
     * Get certificate from certificateId and passphrase.
     * @param certificateId
     * @param passphrase
     * @param query
     */
    getCertificate: <CertificateType = any, IdentityType = any>(certificateId: any, passphrase?: string, query?: ConsolidatedCertificateRequest) => Promise<CertificateSummary<CertificateType, IdentityType>>;
    /**
     * Get all certificate ids owned by this wallet
     */
    getMyCertificateIds: (verifyOwnership?: boolean) => Promise<any[]>;
    getMyCertificates: (query?: ConsolidatedCertificateRequest, verifyOwnership?: boolean) => Promise<CertificateSummary<any, any>[]>;
    getMyCertificatesGroupByIssuer: (query?: ConsolidatedCertificateRequest) => Promise<{
        [key: string]: CertificateSummary<any, any>[];
    }>;
    createCertificateRequestOwnershipLink: (certificateId: number, passphrase?: string, customDeeplink?: string) => Promise<{
        certificateId: number;
        passphrase: string;
        link: string;
    }>;
    private setPassphrase;
    /**
     *
     * @param arianeeLink can be both "https://arianee.net/4567,fgheziufez" or a Arianee Access Token
     * @param query
     */
    getCertificateFromLink: (arianeeLink: string, query?: ConsolidatedCertificateRequest) => Promise<CertificateSummary<any, any>>;
    private prepareHydrateToken;
    /**
     * Get information about owner compared to this wallet.
     * It does not throw if certificateId does not exist
     * @param {ArianeeTokenId} certificateId
     * @returns {Promise<IOwnerOf>}
     */
    ownerOf: (certificateId: any) => Promise<IOwnerOf>;
    /**
     * Transfer a certificate from this wallet to another wallet
     * @param {ArianeeTokenId} certificateId
     * @param {string} toAddress
     * @returns {Promise<void>}
     */
    transfer: (certificateId: any, toAddress: string) => Promise<any>;
    /**
     * Transfer certificate to dead address if this wallet is owner
     * @param {ArianeeTokenId} certificateId
     * @returns {Promise<any>}
     */
    destroyCertificate: (certificateId: any) => Promise<any>;
    recoverCertificate: (certificateId: any) => Promise<any>;
}
