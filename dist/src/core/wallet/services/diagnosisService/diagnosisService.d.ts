import { BalanceService } from '../balanceService/balanceService';
import { CertificateUtilsService } from '../certificateUtilsService/certificateUtilsService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { WalletService } from '../walletService/walletService';
export declare class DiagnosisService {
    private contractService;
    private configurationService;
    private balanceService;
    private walletService;
    private certificateUtilsService;
    constructor(contractService: ContractService, configurationService: ConfigurationService, balanceService: BalanceService, walletService: WalletService, certificateUtilsService: CertificateUtilsService);
    diagnosis: (diagnosisList: Promise<any>[], rawErrors?: any) => Promise<any[]>;
    isRequestable: (tokenId: any, passphrase: string) => Promise<any>;
    isStoreApprove: () => Promise<any>;
    isUpdateCertificateCredit: () => Promise<any>;
    isCertificateCredit: () => Promise<any>;
    isEventCredit: () => Promise<any>;
    isMessageCredit: () => Promise<any>;
    isAriaCredit: () => Promise<any>;
    isPOACredit: () => Promise<any>;
    isCertificateIdExist: (tokenId: any) => Promise<any>;
    isWhiteListed: (tokenId: any) => Promise<any>;
    /**
     * Try to extract from payload error the error. It may differs from rpc to another rpc.
     * @param errPayload
     */
    tryFindErrorFromErrorPayload: (errPayload: any) => any;
}
