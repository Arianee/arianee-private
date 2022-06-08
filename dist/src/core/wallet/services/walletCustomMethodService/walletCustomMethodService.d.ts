import { creditTypeEnum } from '../../../../models/creditTypesEnum';
import { hydrateTokenParameters } from '../../../../models/transaction-parameters';
import { ArianeeHttpClient } from '../../../libs/arianeeHttpClient/arianeeHttpClient';
import { ConsolidatedCertificateRequest, ConsolidatedIssuerRequest } from '../../certificateSummary/certificateSummary';
import { BalanceService } from '../balanceService/balanceService';
import { BlockchainUtilsService } from '../blockChainUtilsService/blockchainUtilsService';
import { CertificateAuthorizationService } from '../certificateAuthorizationService/certificateAuthorizationService';
import { CertificateProofService } from '../certificateProofService/certificateProofService';
import { CertificateService } from '../certificateService/certificateService';
import { ConfigurationService } from '../configurationService/configurationService';
import { ContractService } from '../contractService/contractsService';
import { DiagnosisService } from '../diagnosisService/diagnosisService';
import { EventService } from '../eventService/eventsService';
import { IdentityService } from '../identityService/identityService';
import { ArianeeAccessTokenValidatorService } from '../ArianeeAccessToken/arianeeAccessTokenValidatorService';
import { LostAndStolenService } from '../lostAndStolenService/lostAndStolenService';
import { MessageService } from '../messageService/messageService';
import { POAAndAriaService } from '../POAAndAriaFaucet/POAAndAriaService';
import { WalletService } from '../walletService/walletService';
import { Web3Service } from '../web3Service/web3Service';
import { GasStationService } from '../gasStationService/gasStationService';
import { ArianeeAccessTokenCreatorService } from '../ArianeeAccessToken/arianeeAccessTokenCreatorService';
export declare class WalletCustomMethodService {
    private httpClient;
    private configurationService;
    private web3Service;
    private contractService;
    private eventService;
    private messageService;
    private walletService;
    private certificateService;
    private poaAndAriaService;
    private identityService;
    private certificateAuthorizationService;
    private balanceService;
    private diagnosisService;
    private arianeeAccessTokenValidatorService;
    private arianeeAccessTokenCreatorService;
    private certificateProofService;
    private gasStationService;
    private blockchainUtilsService;
    private lostAndStolenService;
    constructor(httpClient: ArianeeHttpClient, configurationService: ConfigurationService, web3Service: Web3Service, contractService: ContractService, eventService: EventService, messageService: MessageService, walletService: WalletService, certificateService: CertificateService, poaAndAriaService: POAAndAriaService, identityService: IdentityService, certificateAuthorizationService: CertificateAuthorizationService, balanceService: BalanceService, diagnosisService: DiagnosisService, arianeeAccessTokenValidatorService: ArianeeAccessTokenValidatorService, arianeeAccessTokenCreatorService: ArianeeAccessTokenCreatorService, certificateProofService: CertificateProofService, gasStationService: GasStationService, blockchainUtilsService: BlockchainUtilsService, lostAndStolenService: LostAndStolenService);
    arianeeMethods(): {
        aria: {
            faucet: () => Promise<any>;
            balance: (objParams: {
                address: any;
            }) => Promise<string>;
        };
        poa: {
            balance: () => Promise<any>;
            faucet: (objParams: {
                address: any;
            }) => Promise<string>;
        };
        credit: {
            buy: (objParams: {
                creditType: string;
                quantity: number;
                receiver?: string;
            }) => Promise<any>;
            balance: (objParams: {
                creditType: string;
                address?: string;
            }) => Promise<string>;
            types: () => creditTypeEnum[];
        };
        identity: {
            fetch: (objParams: {
                address: string;
                query?: ConsolidatedIssuerRequest;
            }) => Promise<import("../../../../models").IdentitySummary<any>>;
            getByShortId: (objParams: {
                shortId: string;
            }) => Promise<import("../../../../models").IdentitySummary<any>>;
        };
        certificate: {
            fetch: {
                one: (objParams: {
                    certificateId: string;
                    passphrase?: string;
                    query?: ConsolidatedCertificateRequest;
                }) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>>;
                oneFromLink: (objParams: {
                    link: string;
                    query: ConsolidatedCertificateRequest;
                }) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>>;
                oneFromArianeeAccessToken: (objParams: {
                    arianeeAccessToken: string;
                    query: ConsolidatedCertificateRequest;
                }) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>>;
                mine: {
                    all: (objParams: {
                        verifyOwnership?: boolean;
                        query?: ConsolidatedCertificateRequest;
                    }) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>[]>;
                    groupByIssuer: (objParams: {
                        query?: ConsolidatedCertificateRequest;
                    }) => Promise<{
                        [key: string]: import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>[];
                    }>;
                };
            };
            creation: {
                create: (data: hydrateTokenParameters) => Promise<{
                    [key: string]: any;
                    passphrase: string;
                    certificateId: any;
                    deepLink: string;
                }>;
                reserveId: (objParams: {
                    certificateId: number;
                }) => Promise<any>;
                createAndStore: (objParams: {
                    data: hydrateTokenParameters;
                    urlOfRPCServer: string;
                }) => Promise<{
                    [key: string]: any;
                    passphrase: string;
                    certificateId: any;
                    deepLink: string;
                }>;
                storeContent: (objParams: {
                    certificateId: any;
                    content: any;
                    url?: string;
                }) => Promise<{
                    jsonrpc: number;
                    id: string;
                    result?: any;
                }>;
                batch: (objParams: {
                    datas: hydrateTokenParameters[];
                }) => Promise<unknown>;
            };
            arianeeAccessToken: {
                create: (objParams: {
                    url: string;
                    certificateId: number;
                }) => Promise<any>;
                decode: (objParams: {
                    arianeeAccessToken: any;
                }) => {
                    header: any;
                    payload: import("../../../../models/JWT/certificate-jwt").CertificateJwt;
                    signature: string;
                };
                isArianeeAccessTokenValid: (objParams: {
                    arianeeAccessToken: any;
                }) => Promise<boolean>;
                isCertificateProofValid: (objParams: {
                    certificateId: number;
                    passphrase?: string;
                    arianeeAccessToken?: string;
                }) => Promise<import("../../../../models/extendedBoolean").ExtendedBoolean<{
                    timestamp?: number;
                }>>;
                isCertificateProofValidFromLink: (objParams: {
                    proofLink: string;
                }) => Promise<import("../../../../models/extendedBoolean").ExtendedBoolean<{
                    timestamp?: number;
                }>>;
                isCertificateProofValidFromActionProofLink: (objParams: {
                    actionProofLink: string;
                }) => Promise<any>;
            };
            proof: {
                createCertificateProofLink: (objParams: {
                    certificateId: number;
                    passphrase?: string;
                }) => Promise<{
                    certificateId: number;
                    passphrase: string;
                    link: string;
                }>;
                createActionProofLink: (objParams: {
                    url: string;
                    certificateId: number;
                    passphrase?: string;
                }) => Promise<string>;
                isCertificateProofValid: (objParams: {
                    certificateId: number;
                    passphrase?: string;
                    arianeeAccessToken?: string;
                }) => Promise<import("../../../../models/extendedBoolean").ExtendedBoolean<{
                    timestamp?: number;
                }>>;
                isCertificateProofValidFromLink: (objParams: {
                    proofLink: string;
                }) => Promise<import("../../../../models/extendedBoolean").ExtendedBoolean<{
                    timestamp?: number;
                }>>;
                isCertificateProofValidFromActionProofLink: (objParams: {
                    actionProofLink: string;
                }) => Promise<any>;
            };
            ownership: {
                destroy: (objParams: {
                    certificateId: any;
                }) => Promise<any>;
                recover: (objParams: {
                    certificateId: any;
                }) => Promise<any>;
                request: (objParams: {
                    certificateId: any;
                    passphrase: string;
                }) => Promise<any>;
                isRequestable: (objParams: {
                    certificateId: any;
                    passphrase: string;
                }) => Promise<any>;
                createRequestLink: (objParams: {
                    certificateId: any;
                    passphrase: string;
                }) => Promise<{
                    certificateId: number;
                    passphrase: string;
                    link: string;
                }>;
            };
        };
        arianeeEvent: {
            accept: (objParams: {
                eventId: string;
            }) => any;
            refuse: (objParams: {
                eventId: string;
            }) => any;
            setMessageAuthorization: (objParams: {
                certificateId: any;
                senderAddress: string;
                isAuthorized: boolean;
            }) => Promise<any>;
            senders: (parameters: {
                certificateId: any;
                query: ConsolidatedCertificateRequest;
            }) => Promise<{
                [key: string]: boolean;
            }>;
            creation: {
                create: (data: {
                    uri?: string;
                    contentImprint?: string;
                    certificateId: number;
                    arianeeEventId?: number;
                    content?: {
                        [key: string]: any;
                        $schema: string;
                    };
                }) => Promise<{
                    contentImprint: string;
                    arianeeEventId: number;
                }>;
                storeContent: (objParams: {
                    certificateId: any;
                    arianeeEventId: number;
                    content: any;
                    url: string;
                }) => Promise<{
                    jsonrpc: number;
                    id: string;
                    result?: any;
                }>;
                createAndStore: (objParams: {
                    data: {
                        uri?: string;
                        certificateId: number;
                        arianeeEventId?: number;
                        content?: {
                            [key: string]: any;
                            $schema: string;
                        };
                    };
                    urlOfRPC: string;
                }) => Promise<{
                    contentImprint: string;
                    arianeeEventId: number;
                }>;
            };
        };
        store: {
            approve: () => any;
        };
        advanced: {
            diagnosis: (diagnosisList: Promise<any>[], rawErrors?: any) => Promise<any[]>;
        };
        dMessage: {
            fetch: {
                mine: (parameters?: {
                    query?: ConsolidatedCertificateRequest;
                    url?: string;
                }) => Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>;
                one: (parameters: {
                    messageId: number;
                    query?: ConsolidatedCertificateRequest;
                    url?: string;
                    forceRefresh?: boolean;
                }) => Promise<import("../../certificateSummary/certificateSummary").Message<any, any>>;
            };
            creation: {
                send: (objParams: {
                    data: {
                        uri?: string;
                        certificateId: number;
                        content?: {
                            [key: string]: any;
                            $schema: string;
                        };
                        messageId?: number;
                    };
                    url: string;
                }) => Promise<{
                    contentImprint: string;
                    messageId: number;
                }>;
                storeContent: (objParams: {
                    messageId: number;
                    content: any;
                    url: string;
                }) => Promise<{
                    jsonrpc: number;
                    id: string;
                    result?: any;
                }>;
                create: (data: {
                    contentImprint?: string;
                    certificateId: number;
                    content?: {
                        [key: string]: any;
                        $schema: string;
                    };
                    messageId?: number;
                }) => Promise<{
                    contentImprint: string;
                    messageId: number;
                }>;
                createAndStore: (objParams: {
                    data: {
                        uri?: string;
                        certificateId: number;
                        content?: {
                            [key: string]: any;
                            $schema: string;
                        };
                        messageId?: number;
                    };
                    url: string;
                }) => Promise<{
                    contentImprint: string;
                    messageId: number;
                }>;
            };
            markAsRead: (objParams: {
                certificateId: any;
            }) => Promise<any>;
        };
    };
    getMethods(): {
        requestAria: () => Promise<any>;
        requestPoa: () => Promise<any>;
        cancelTransactions: (parameters: {
            fromNonce: number;
            toNonce?: number;
            gas?: number;
            gasPrice?: number;
        }) => Promise<void>;
        reserveCertificateId: (certificateId?: number, receiver?: string) => Promise<any>;
        createCertificate: (data: hydrateTokenParameters) => Promise<{
            [key: string]: any;
            passphrase: string;
            certificateId: any;
            deepLink: string;
        }>;
        createCertificatesBatch: (datas: hydrateTokenParameters[]) => Promise<unknown>;
        createAndStoreCertificate: (data: hydrateTokenParameters, urlOfRPCServer?: string) => Promise<{
            [key: string]: any;
            passphrase: string;
            certificateId: any;
            deepLink: string;
        }>;
        getCertificate: <CertificateType = any, IdentityType = any>(certificateId: any, passphrase?: string, query?: ConsolidatedCertificateRequest) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<CertificateType, IdentityType>>;
        getCertificateFromArianeeAccessToken: (arianeeAccessToken: string, query?: ConsolidatedCertificateRequest) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>>;
        destroyCertificate: (certificateId: any) => Promise<any>;
        recoverCertificate: (certificateId: any) => Promise<any>;
        getMyCertificates: (query?: ConsolidatedCertificateRequest, verifyOwnership?: boolean) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>[]>;
        getCertificatesId: (verifyOwnership?: boolean) => Promise<any[]>;
        getMyCertificatesGroupByIssuer: (query?: ConsolidatedCertificateRequest) => Promise<{
            [key: string]: import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>[];
        }>;
        getIdentity: (address: string, issuerQuery?: ConsolidatedIssuerRequest) => Promise<import("../../../../models").IdentitySummary<any>>;
        getIdentityByShortId: (shortId: string) => Promise<import("../../../../models").IdentitySummary<any>>;
        createCertificateRequestOwnershipLink: (certificateId: number, passphrase?: string, customDeeplink?: string) => Promise<{
            certificateId: number;
            passphrase: string;
            link: string;
        }>;
        createCertificateProofLink: (certificateId: number, passphrase?: string, customDeeplink?: string) => Promise<{
            certificateId: number;
            passphrase: string;
            link: string;
        }>;
        createActionProofLink: (url: string, certificateId: number, passphrase?: string) => Promise<string>;
        getCertificateFromLink: (arianeeLink: string, query?: ConsolidatedCertificateRequest) => Promise<import("../../certificateSummary/certificateSummary").CertificateSummary<any, any>>;
        isCertificateProofValid: (certificateId: number, passphrase?: string, jwt?: string) => Promise<import("../../../../models/extendedBoolean").ExtendedBoolean<{
            timestamp?: number;
        }>>;
        isCertificateProofValidFromLink: (proofLink: string) => Promise<import("../../../../models/extendedBoolean").ExtendedBoolean<{
            timestamp?: number;
        }>>;
        isCertificateProofValidFromActionProofLink: (url: string) => Promise<any>;
        isCertificateOwnershipRequestable: (certificateId: any, passphrase: any) => Promise<any>;
        requestCertificateOwnership: (certificateId: number, passphrase: string) => Promise<any>;
        balanceOfAria: (address?: any) => Promise<string>;
        balanceOfRia: (address?: any) => Promise<string>;
        balanceOfPoa: (address?: any) => Promise<string>;
        balanceOfAriaReadable: (address?: any) => Promise<string>;
        getCreditPrice: (creditType: string) => Promise<any>;
        approveStore: () => any;
        buyCredits: (creditType: string, quantity: number, receiver?: string) => Promise<any>;
        balanceOfCredit: (creditType: string, address?: any) => Promise<string>;
        ownerOf: (certificateId: any) => Promise<import("../../../../models").IOwnerOf>;
        transfer: (certificateId: any, toAddress: string) => Promise<any>;
        acceptArianeeEvent: (eventId: any) => any;
        refuseArianeeEvent: (eventId: any) => any;
        setMessageAuthorizationFor: (certificateId: any, senderAddress: string, isAuthorized: boolean) => Promise<any>;
        getMessageSenders: (parameters: {
            certificateId: any;
            query: ConsolidatedCertificateRequest;
        }) => Promise<{
            [key: string]: boolean;
        }>;
        storeContentInRPCServer: (certificateId: any, content: any, arianeePrivacyGatewayURL?: string) => Promise<{
            jsonrpc: number;
            id: string;
            result?: any;
        }>;
        createArianeeEvent: (data: {
            uri?: string;
            contentImprint?: string;
            certificateId: number;
            arianeeEventId?: number;
            content?: {
                [key: string]: any;
                $schema: string;
            };
        }) => Promise<{
            contentImprint: string;
            arianeeEventId: number;
        }>;
        storeArianeeEvent: (certificateId: any, arianeeEventId: number, content: any, url?: string) => Promise<{
            jsonrpc: number;
            id: string;
            result?: any;
        }>;
        createAndStoreArianeeEvent: (data: {
            uri?: string;
            certificateId: number;
            arianeeEventId?: number;
            content?: {
                [key: string]: any;
                $schema: string;
            };
        }, url?: string) => Promise<{
            contentImprint: string;
            arianeeEventId: number;
        }>;
        getMyMessages: (parameters?: {
            query?: ConsolidatedCertificateRequest;
            url?: string;
        }) => Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>;
        getAllMyMessageIds: () => Promise<any>;
        getMessage: (parameters: {
            messageId: number;
            query?: ConsolidatedCertificateRequest;
            url?: string;
            forceRefresh?: boolean;
        }) => Promise<import("../../certificateSummary/certificateSummary").Message<any, any>>;
        isMessageRead: (messageId?: number) => Promise<boolean>;
        createMessage: (data: {
            contentImprint?: string;
            certificateId: number;
            content?: {
                [key: string]: any;
                $schema: string;
            };
            messageId?: number;
        }) => Promise<{
            contentImprint: string;
            messageId: number;
        }>;
        storeMessage: (messageId: number, content: any, url?: string) => Promise<{
            jsonrpc: number;
            id: string;
            result?: any;
        }>;
        createAndStoreMessage: (data: {
            uri?: string;
            certificateId: number;
            content?: {
                [key: string]: any;
                $schema: string;
            };
            messageId?: number;
        }, url?: string) => Promise<{
            contentImprint: string;
            messageId: number;
        }>;
        markAsRead: (messageId: number) => Promise<any>;
        diagnosis: (diagnosisList: Promise<any>[], rawErrors?: any) => Promise<any[]>;
        createActionArianeeAccessTokenLink: (url: string, certificateId: number) => Promise<any>;
        decodeArianeeAccessToken: (token: any) => {
            header: any;
            payload: import("../../../../models/JWT/certificate-jwt").CertificateJwt;
            signature: string;
        };
        createCertificateArianeeAccessToken: (certificateId: number) => Promise<string>;
        isCertificateArianeeAccessTokenValid: (token: any) => Promise<boolean>;
        isArianeeAccessTokenValid: (token: any) => Promise<boolean>;
        getArianeeAccessTokenJWT: (token: any) => Promise<{
            header: any;
            payload: any;
            signature: string;
        }>;
        createWalletAccessToken: () => Promise<string>;
        createAuthURL: (data: {
            type: "arianeeAccessToken" | "proof";
            certificateId: any;
            url: string;
        }) => Promise<string>;
        isAuthURL: (url: string) => Promise<any>;
        updateAndStoreCertificate: <T = any>(parameters: {
            certificateId: any;
            content: any;
        }, urlOfRPCServer?: string) => Promise<any>;
        storeUpdateContentInRPCServer: (certificateId: any, content: any, arianeePrivacyGatewayURL?: string) => Promise<{
            jsonrpc: number;
            id: string;
            result?: any;
        }>;
        updateCertificate: <T_1 = any>(parameters: {
            certificateId: any;
            content?: any;
            imprint?: string;
        }) => Promise<any>;
        setMissingStatus: (arianeeId: any) => any;
        unsetMissingStatus: (arianeeId: any) => Promise<any>;
        setStolenStatus: (arianeeId: any) => Promise<any>;
        unsetStolenStatus: (arianeeId: any) => Promise<any>;
        isMissing: (arianeeId: any) => Promise<boolean>;
        isStolen: (arianeeId: any) => Promise<boolean>;
        fetchGasPrice: () => Promise<string>;
    };
    private approveStore;
    getCreditTypes: () => creditTypeEnum[];
    buyCredits: (creditType: string, quantity: number, receiver?: string) => Promise<any>;
}
