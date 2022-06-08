import { ContractService } from '../contractService/contractsService';
import { WalletService } from '../walletService/walletService';
import { SimpleStore } from '../../../libs/simpleStore/simpleStore';
import { ArianeeEventEmitter } from '../arianeeEventEmitterService/ArianeeEventEmitter';
import { Web3Service } from '../web3Service/web3Service';
import { WatchParameter } from '../../../../models/watchParameter';
import { GetPastEventService } from '../getPastEventService/getPastEventService';
import { ConfigurationService } from '../configurationService/configurationService';
export declare class BlockchainEventWatcherService {
    private contractService;
    private walletService;
    store: SimpleStore;
    private eventEmitter;
    private web3Service;
    private getPastEventService;
    private configurationService;
    constructor(contractService: ContractService, walletService: WalletService, store: SimpleStore, eventEmitter: ArianeeEventEmitter, web3Service: Web3Service, getPastEventService: GetPastEventService, configurationService: ConfigurationService);
    private createCompositeIdWatcher;
    private onGoingWatchers;
    timeout: number;
    addWatchParameter: (watcherParameter: WatchParameter) => void;
    watcherParameters: WatchParameter[];
    watch: (conf: WatchParameter) => Promise<void>;
}
