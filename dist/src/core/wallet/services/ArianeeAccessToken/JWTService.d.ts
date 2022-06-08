import { ConfigurationService } from '../configurationService/configurationService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
export declare class JWTService {
    private utilService;
    private walletService;
    private configuration;
    constructor(utilService: UtilsService, walletService: WalletService, configuration: ConfigurationService);
    sign: (payload: any) => Promise<string>;
    decode<T = any>(JWT: any): {
        header: any;
        payload: T;
        signature: string;
    };
    isValidJWT(JWT: string, address: string): boolean;
    private JWTGenericFactory;
}
