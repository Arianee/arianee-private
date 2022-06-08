import { ArianeeWallet } from '../../../src/core/wallet';
import { CertificateSummary } from '../../../src/core/wallet/certificateSummary';
export declare class CCStore {
    private users;
    private tokens;
    private events;
    private cache;
    private certificateSummaries;
    getUserWallet(userIndex: number): ArianeeWallet;
    storeWallet(userIndex: number, wallet: ArianeeWallet): void;
    getEvent(eventIndex: number): number;
    storeEvent(eventIndex: number, eventId: number): void;
    getToken(tokenIndex: any): number;
    storeToken(tokenIndex: any, certificateId: number): void;
    storeCustom(key: any, value: any): void;
    getCustom(key: any): any;
    getCertificateSummary(certificateId: any): CertificateSummary;
    storeCertificateSummary(certificateId: any, certificateSummary: CertificateSummary): void;
}
