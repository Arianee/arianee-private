import { CertificateJwt } from '../../../../models/JWT/certificate-jwt';
import { ContractService } from '../contractService/contractsService';
import { WalletService } from '../walletService/walletService';
import { JWTService } from './JWTService';
import { ArianeeBlockchainProxyService } from '../arianeeBlockchainProxyService/arianeeBlockchainProxyService';
export declare class ArianeeAccessTokenValidatorService {
    private jwtService;
    private walletService;
    private contractService;
    private arianeeProxyService;
    constructor(jwtService: JWTService, walletService: WalletService, contractService: ContractService, arianeeProxyService: ArianeeBlockchainProxyService);
    /**
     * Decode proof and return it
     * @param token
     */
    decodeArianeeAccessToken: (token: any) => {
        header: any;
        payload: CertificateJwt;
        signature: string;
    };
    /**
     * Only check if iss of token signer of token
     * @param token
     */
    isArianeeAccessTokenValid: (token: any) => Promise<boolean>;
    /**
     * Get jwt in js object if token is valid
     * @param token
     */
    getArianeeAccessTokenJWT: (token: any) => Promise<{
        header: any;
        payload: any;
        signature: string;
    }>;
    /**
     * Method to check if token is valid and if certificateId is own by current wallet
     * @param token
     */
    isCertificateArianeeAccessTokenValid: (token: any) => Promise<boolean>;
}
