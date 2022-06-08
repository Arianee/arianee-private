import { ConsolidatedCertificateRequest } from '../../certificateSummary/certificateSummary';
export declare class GlobalConfigurationService {
    defaultQuery: ConsolidatedCertificateRequest;
    getMergedQuery(query?: ConsolidatedCertificateRequest): ConsolidatedCertificateRequest;
    setDefaultQuery(defaultQuery: ConsolidatedCertificateRequest): GlobalConfigurationService;
}
