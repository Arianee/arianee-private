import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { ConfigurationService } from '../configurationService/configurationService';
export declare class GasStationService {
    private configurationService;
    private httpClient;
    constructor(configurationService: ConfigurationService, httpClient: ArianeeHttpClient);
    fetchGas: () => Promise<string>;
    private getGasFromGasPrice;
}
