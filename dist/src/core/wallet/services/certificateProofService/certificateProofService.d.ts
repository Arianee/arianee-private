import { ExtendedBoolean } from '../../../../models/extendedBoolean';
import { ArianeeAccessTokenValidatorService } from '../ArianeeAccessToken/arianeeAccessTokenValidatorService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
import { Web3Service } from '../web3Service/web3Service';
import { GetPastEventService } from '../getPastEventService/getPastEventService';
import { ArianeeBlockchainProxyService } from '../arianeeBlockchainProxyService/arianeeBlockchainProxyService';
import { ArianeeAccessTokenCreatorService } from '../ArianeeAccessToken/arianeeAccessTokenCreatorService';
export declare class CertificateProofService {
    private contractService;
    private configurationService;
    private arianeeAccessTokenService;
    private walletService;
    private web3Service;
    private utils;
    private getPastEventService;
    private arianeeBlockchainProxyService;
    private arianeeAccessTokenCreatorService;
    constructor(contractService: ContractService, configurationService: ConfigurationService, arianeeAccessTokenService: ArianeeAccessTokenValidatorService, walletService: WalletService, web3Service: Web3Service, utils: UtilsService, getPastEventService: GetPastEventService, arianeeBlockchainProxyService: ArianeeBlockchainProxyService, arianeeAccessTokenCreatorService: ArianeeAccessTokenCreatorService);
    private setPassphrase;
    createCertificateProofLink: (certificateId: number, passphrase?: string, customDeeplink?: string) => Promise<{
        certificateId: number;
        passphrase: string;
        link: string;
    }>;
    /**
     * Create an actionProofLink. It appends encode RFC 3986 query param proof link to provided url
     * @param url
     * @param certificateId
     * @param passphrase
     * @return url
     */
    createActionProofLink: (url: string, certificateId: number, passphrase?: string) => Promise<string>;
    createAuthURL: (data: {
        type: "arianeeAccessToken" | "proof";
        certificateId: any;
        url: string;
    }) => Promise<string>;
    isAuthURL: (url: string) => Promise<any>;
    isCertificateProofValidFromLink: (proofLink: string) => Promise<ExtendedBoolean<{
        timestamp?: number;
    }>>;
    isCertificateProofValid: (certificateId: number, passphrase?: string, jwt?: string) => Promise<ExtendedBoolean<{
        timestamp?: number;
    }>>;
    private isJwtProofValid;
    private isProofValid;
    private isProofValidSince;
}
