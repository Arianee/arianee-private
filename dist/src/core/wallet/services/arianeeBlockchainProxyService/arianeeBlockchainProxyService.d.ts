import { ContractService } from '../contractService/contractsService';
import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { ConfigurationService } from '../configurationService/configurationService';
import { WalletService } from '../walletService/walletService';
import { ArianeeAccessTokenCreatorService } from '../ArianeeAccessToken/arianeeAccessTokenCreatorService';
import { GetPastEventService } from '../getPastEventService/getPastEventService';
export declare class ArianeeBlockchainProxyService {
    private contractService;
    private arianeeHttpClient;
    private configurationService;
    private walletService;
    private arianeeAccessTokenCreatorService;
    private getPastEvent;
    constructor(contractService: ContractService, arianeeHttpClient: ArianeeHttpClient, configurationService: ConfigurationService, walletService: WalletService, arianeeAccessTokenCreatorService: ArianeeAccessTokenCreatorService, getPastEvent: GetPastEventService);
    getAllMyMessageIds: () => Promise<any>;
    /**
     * Return all tokenIds from proxy or blockchain depending on configuration
     */
    getAllMyCertificateIds: () => Promise<any[]>;
    /**
     * Get owner of a token for current network from blockchain or proxy depending on configuration
     * If no owner (meaning nft is not minted) it throws
     * @param tokenId
     */
    ownerOf: (tokenId: string | number) => Promise<any>;
}
