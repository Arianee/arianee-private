import { ConsolidatedCertificateRequest } from '../../certificateSummary/certificateSummary';
import { CertificateDetails } from '../certificateDetailsService/certificatesDetailsService';
import { ContractService } from '../contractService/contractsService';
import { IdentityService } from '../identityService/identityService';
import { WalletService } from '../walletService/walletService';
export declare class CertificateAuthorizationService {
    private contractService;
    private identityService;
    private certificateDetailsService;
    private walletService;
    constructor(contractService: ContractService, identityService: IdentityService, certificateDetailsService: CertificateDetails, walletService: WalletService);
    /**
       * Get authorized senders for this certificate.
       * For now it return only the issuer
       * @param certificateId
       */
    getMessageSenders: (parameters: {
        certificateId: any;
        query: ConsolidatedCertificateRequest;
    }) => Promise<{
        [key: string]: boolean;
    }>;
    setMessageAuthorizationFor: (certificateId: any, senderAddress: string, isAuthorized: boolean) => Promise<any>;
}
