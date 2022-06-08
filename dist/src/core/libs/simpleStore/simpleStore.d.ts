import { ArianeeEventEmitter } from '../../wallet/services/arianeeEventEmitterService/ArianeeEventEmitter';
import { Store } from './store';
import { ConfigurationService } from '../../wallet/services/configurationService/configurationService';
import { WalletService } from '../../wallet/services/walletService/walletService';
export declare class SimpleStore {
    private store;
    private arianeeConfig;
    private walletService;
    private arianeeEventEmitter;
    constructor(store: Store, arianeeConfig: ConfigurationService, walletService: WalletService, arianeeEventEmitter: ArianeeEventEmitter);
    private cache;
    keyBuilder: (namespace: string, key: any) => string;
    get: <T>(namespace: string, key: string | number, getter: () => Promise<any>, force?: boolean) => Promise<T>;
    set: (namespace: string, key: string | number, value: any) => Promise<Store>;
}
