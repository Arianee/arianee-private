import { JWTService } from './JWTService';
export declare class ArianeeAccessTokenCreatorService {
    private jwtService;
    constructor(jwtService: JWTService);
    /**
     * Create a wallet JWTProof
     */
    createWalletAccessToken: () => Promise<string>;
    /**
     * Create a certificate JWTProof
     * @param certificateId
     */
    createCertificateArianeeAccessToken: (certificateId: number) => Promise<string>;
    /**
     * Create JWTProof and add it to url
     * @param url
     * @param certificateId
     */
    createActionArianeeAccessTokenLink: (url: string, certificateId: number) => Promise<any>;
}
