import { HttpRequestInterceptor } from '../../../models/httpClient';
export declare class ArianeeHttpClient {
    private httpRequestInterceptor;
    private httpFetch;
    setRequestInterceptor: (interceptor: HttpRequestInterceptor) => ArianeeHttpClient;
    setHttpFetch: (httpFetch: (url: any, config: any) => Promise<any>) => ArianeeHttpClient;
    /**
     * Calculate hash key from url and headers of a request
     * @param url
     * @param config
     * @return {string}
     */
    private static createKeyFromURL;
    private RPCConfigurationFactory;
    RPCCall: <resultType = any>(endpoint: string, method: string, params: any) => Promise<{
        jsonrpc: number;
        id: string;
        result?: resultType;
    }>;
    /**
     * Default headers for fetch
     */
    static readonly defaultConfig: {
        method: string;
        headers: {
            'Content-Type': string;
        };
    };
    /**
     * HTTP call
     * Default configuration of headers is method GET and content-type: application/json
     * @param url
     * @param config
     * @return Promise{any}
     */
    fetch(url: string, config?: any): Promise<any>;
}
