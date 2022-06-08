import { IdentitySummary } from '../../../../models/arianee-identity';
import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { SimpleStore } from '../../../libs/simpleStore/simpleStore';
import { ConsolidatedCertificateRequest, ConsolidatedIssuerRequest } from '../../certificateSummary/certificateSummary';
import { ContractService } from '../contractService/contractsService';
import { GlobalConfigurationService } from '../globalConfigurationService/globalConfigurationService';
import { UtilsService } from '../utilService/utilsService';
export declare class IdentityService {
    private httpClient;
    private utils;
    private contractService;
    private globalConfigurationService;
    private store;
    constructor(httpClient: ArianeeHttpClient, utils: UtilsService, contractService: ContractService, globalConfigurationService: GlobalConfigurationService, store: SimpleStore);
    getIdentityByShortId: (shortId: string) => Promise<IdentitySummary<any>>;
    getSimpleIdentity: (address: string, issuerQuery?: ConsolidatedIssuerRequest) => Promise<IdentitySummary<any>>;
    getIdentity: (parameters: {
        address: string;
        query?: ConsolidatedCertificateRequest;
    }) => Promise<IdentitySummary<any>>;
    /**
       * fetchWaitingIdentity
       * Get waiting identity from an address and Fallback to approved identity if no waiting identity
       * @param address address of the contract
       * @return Promise{IdentitySummary}
       */
    private fetchWaitingIdentity;
    /**
     * fetchIdentity
     * Get approved identity from an address
     * @param address address of the contract
     * @return Promise{IdentitySummary}
     */
    private fetchIdentity;
}
