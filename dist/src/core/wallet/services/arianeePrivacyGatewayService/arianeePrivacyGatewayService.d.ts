import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { IdentityService } from '../identityService/identityService';
export declare class ArianeePrivacyGatewayService {
    private configurationService;
    private contractService;
    private identityService;
    constructor(configurationService: ConfigurationService, contractService: ContractService, identityService: IdentityService);
    /**
     * Return Arianee Privacygateway or fallbacks
     * @param {string} url
     * @param {ArianeeTokenId} certificateId
     * @returns {Promise<string | any>}
     */
    getArianeePrivacyURLORFallback: (url?: string, certificateId?: any) => Promise<any>;
}
