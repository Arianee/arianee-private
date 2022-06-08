import { ArianeeCertificatei18n } from '../../../models/jsonSchema/certificates/ArianeeProducti18n';
import { CertificateSummary } from '../../wallet/certificateSummary';
import { ArianeeBrandIdentityi18n } from '../../../models/jsonSchema/identities/ArianeeBrandIdentityi18n';
export declare const replaceLanguage: (certificateSummary: CertificateSummary<ArianeeCertificatei18n, any>, languages: string[]) => CertificateSummary<ArianeeCertificatei18n, any>;
export declare const replaceLanguageContentWithFavUserLanguage: (certificateId18n: ArianeeCertificatei18n, languages: string[]) => ArianeeCertificatei18n;
export declare const availableLanguagesExtract: (certificateId18n: ArianeeCertificatei18n) => string[];
export declare const replaceLanguageContent: (certificateId18n: ArianeeCertificatei18n, language: string) => ArianeeCertificatei18n;
export declare const replaceLanguageIdentityContentWithFavUserLanguage: (identityI18n: ArianeeBrandIdentityi18n, languages: string[]) => ArianeeCertificatei18n;
