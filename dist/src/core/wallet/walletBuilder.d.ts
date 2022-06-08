import { ArianeeConfig } from '../../models/arianeeConfiguration';
import { ArianeeWallet } from './wallet';
export declare class ArianeeWalletBuilder {
    private arianeeConfig;
    private container;
    private web3;
    constructor(arianeeConfig: ArianeeConfig);
    private buildAriaWalletFrom;
    fromPassPhrase(passphrase: string): ArianeeWallet;
    /**
     * From a randomKey and return ArianeeProtocol
     */
    fromRandomKey(): ArianeeWallet;
    /**
     * Generate a mnemonic and return ArianeeProtocol
     * @param data
     */
    fromRandomMnemonic(): ArianeeWallet;
    readOnlyWallet(): ArianeeWallet;
    /**
     *  From a mnemonic and return ArianeeProtocol
     * @param mnemonic
     */
    fromMnemonic(mnemonic: string): ArianeeWallet;
    /**
     *  From privatekey and return ArianeeProtocol
     * @param privateKey
     * @param bdHVaultURL
     */
    fromPrivateKey(privateKey: string): ArianeeWallet;
    fromExternalWallet: (data: {
        address: string;
        customSign: (data: string) => Promise<{
            message: string;
            messageHash: string;
            signature: string;
        }>;
    }) => ArianeeWallet;
    fromCustomWeb3(web3: any): Promise<ArianeeWallet>;
    fromMetamask(address: any): ArianeeWallet;
}
