import { CertificateAdvanced, CertificateContentContainer, CertificateRecover, CertificateSummary } from './certificateSummary';
export declare class CertificateSummaryBuilder {
    private _content;
    private _events;
    private _issuer;
    private _isRequestable;
    private _owner;
    private _advanced;
    private _certificateId;
    private _messageSenders;
    private _recover;
    setContent(data: CertificateContentContainer): CertificateSummaryBuilder;
    setCertificateId(certificateId: string): CertificateSummaryBuilder;
    setArianeeEvents(events: any[]): CertificateSummaryBuilder;
    setEvents(events: any[]): CertificateSummaryBuilder;
    setMessageSenders(messageSenders: {
        [key: string]: boolean;
    }): void;
    setIsRequestable(isRequestable: any): CertificateSummaryBuilder;
    setRecover(recover: CertificateRecover): CertificateSummaryBuilder;
    setIssuer(isIdentityAuthentic: any, isIdentityVerified: any, imprint: string, identity?: any): CertificateSummaryBuilder;
    setAdvandced(advanded: CertificateAdvanced): CertificateSummaryBuilder;
    setOwner(ownerAddress: string, currentWallet: string): this;
    build(): CertificateSummary<any, any>;
}
