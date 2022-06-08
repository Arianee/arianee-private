import { ContractService } from '../contractService/contractsService';
import { ConfigurationService } from '../configurationService/configurationService';
import { BlockchainEvent } from '../../../../models';
import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { Web3Service } from '../web3Service/web3Service';
import { UtilsService } from '../utilService/utilsService';
export declare class GetPastEventService {
    private contractService;
    private arianeeHttpClient;
    private configurationService;
    private web3Service;
    private utils;
    constructor(contractService: ContractService, arianeeHttpClient: ArianeeHttpClient, configurationService: ConfigurationService, web3Service: Web3Service, utils: UtilsService);
    urlFactory: (contractAddress: string, eventName: string, parameters?: {
        filter?: any;
        fromBlock?: number;
        toBlock?: number | "latest";
    }) => any;
    getPastEvents: (contractAddressOrContractName: string, eventName: string, parameters?: {
        filter?: any;
        fromBlock?: number;
        toBlock?: number | "latest";
    }) => Promise<BlockchainEvent[]>;
}
