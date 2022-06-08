import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { CertificateDetails } from '../certificateDetailsService/certificatesDetailsService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { ArianeeBlockchainProxyService } from '../arianeeBlockchainProxyService/arianeeBlockchainProxyService';
export declare class CertificateUtilsService {
    private utils;
    private httpClient;
    private configurationService;
    private contractService;
    private certificateDetails;
    private walletService;
    private arianeeProxyService;
    constructor(utils: UtilsService, httpClient: ArianeeHttpClient, configurationService: ConfigurationService, contractService: ContractService, certificateDetails: CertificateDetails, walletService: WalletService, arianeeProxyService: ArianeeBlockchainProxyService);
    isCertificateIdFree: (certificateId: number) => Promise<boolean>;
    canCreateCertificateWithCertificateId: (certificateId: number) => Promise<boolean>;
    customRequestTokenFactory: (certificateId: any, passphrase: any) => Promise<import("@arianee/arianee-abi/types/types").TransactionObject<void>>;
    isCertificateOwnershipRequestable: (certificateId: any, passphrase: any) => Promise<any>;
}
