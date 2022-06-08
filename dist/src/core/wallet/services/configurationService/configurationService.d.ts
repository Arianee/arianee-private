import Web3 from 'web3';
import { ArianeeConfig } from '../../../../models/arianeeConfiguration';
import { ArianeeWalletBuilder } from '../../walletBuilder';
export declare class ConfigurationService {
    private defaultArianeeConfiguration;
    private _arianeeConfiguration;
    arianeeConfiguration: ArianeeConfig;
    getBlockChainProxyEndpoint(): string;
    isProxyEnable(): boolean;
    walletFactory(): ArianeeWalletBuilder;
    static readonly web3: Web3;
    supportedConfigurations: any;
}
