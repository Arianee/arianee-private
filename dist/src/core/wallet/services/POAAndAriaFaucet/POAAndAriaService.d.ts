import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { ConfigurationService } from '../configurationService/configurationService';
import { WalletService } from '../walletService/walletService';
export declare class POAAndAriaService {
    private httpClient;
    private configurationService;
    private walletService;
    constructor(httpClient: ArianeeHttpClient, configurationService: ConfigurationService, walletService: WalletService);
    requestPoa: () => Promise<any>;
    requestAria: () => Promise<any>;
}
