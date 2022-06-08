import { ArianeeGateWayAuthentification } from '../../../../models/ArianeeGateWayAuthentification';
import { ArianeeTokenId } from '../../../../models/ArianeeTokenId';
import { JWTService } from '../ArianeeAccessToken/JWTService';
import { ConfigurationService } from '../configurationService/configurationService';
import { UtilsService } from '../utilService/utilsService';
import { WalletService } from '../walletService/walletService';
export interface ArianeeLinkObject {
    certificateId: ArianeeTokenId;
    authentification: string;
    type: 'arianeeAccessToken' | 'passphrase';
}
export declare class ArianeeAuthentificationService {
    private jwtService;
    private utils;
    private walletService;
    private configurationService;
    constructor(jwtService: JWTService, utils: UtilsService, walletService: WalletService, configurationService: ConfigurationService);
    generateAuthentificationHeader: (certificateId: any, arianeeAuthenticator: string) => Promise<ArianeeGateWayAuthentification>;
    extractParametersFromArianeeLink: (arianeeLink: string, checkChain?: boolean) => ArianeeLinkObject;
    isArianeeAccessToken: (arianeeLink: string) => boolean;
    isBlockchainPassphrase: (arianeeLink: string) => boolean;
}
