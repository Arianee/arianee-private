import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { SimpleStore } from '../../../libs/simpleStore/simpleStore';
import { CertificateSummaryBuilder } from '../../certificateSummary';
import { CertificateContentContainer, ConsolidatedCertificateRequest } from '../../certificateSummary/certificateSummary';
import { ArianeeAuthentificationService } from '../arianeeAuthentificationService/arianeeAuthentificationService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { GlobalConfigurationService } from '../globalConfigurationService/globalConfigurationService';
import { IdentityService } from '../identityService/identityService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { ArianeeBlockchainProxyService } from '../arianeeBlockchainProxyService/arianeeBlockchainProxyService';
export declare class CertificateDetails {
    private identityService;
    private httpClient;
    private contractService;
    private configurationService;
    private walletService;
    private utils;
    private store;
    private arianeeAuthentificationService;
    private globalConfigurationService;
    private arianeeProxyService;
    constructor(identityService: IdentityService, httpClient: ArianeeHttpClient, contractService: ContractService, configurationService: ConfigurationService, walletService: WalletService, utils: UtilsService, store: SimpleStore, arianeeAuthentificationService: ArianeeAuthentificationService, globalConfigurationService: GlobalConfigurationService, arianeeProxyService: ArianeeBlockchainProxyService);
    getCertificateIssuer: (parameters: {
        certificateId: any;
        query: ConsolidatedCertificateRequest;
    }) => Promise<import("../../../../models").IdentitySummary<any>>;
    fetchCertificateIssuer: (parameters: {
        certificateId: any;
        query: ConsolidatedCertificateRequest;
    }) => Promise<import("../../../../models").IdentitySummary<any>>;
    getCertificateOwner: (certificateId: any, certificateBuilder?: CertificateSummaryBuilder) => Promise<any>;
    private getCertificateContentFromHttp;
    private updateCertificateContentReadRPC;
    private originalCertificateContentReadRPC;
    private getCertificateContentFromRPC;
    private getContent;
    getCertificateContent: (parameters: {
        certificateId: any;
        passphrase?: string;
        query: ConsolidatedCertificateRequest;
    }) => Promise<CertificateContentContainer<import("../../../../models/jsonSchema/certificates/ArianeeProducti18n").GenericJsonSchema>>;
    getCertificateAndParentCertificate: (parameters: {
        certificateId: any;
        passphrase?: string;
        query: ConsolidatedCertificateRequest;
    }) => Promise<CertificateContentContainer<import("../../../../models/jsonSchema/certificates/ArianeeProducti18n").GenericJsonSchema>>;
    private fetchCertificateContent;
}
