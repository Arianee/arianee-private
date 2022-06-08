import { AxiosRequestConfig } from 'axios';
export interface HttpClient {
    get: (...args: any[]) => Promise<any>;
    post?: (...args: any[]) => Promise<any>;
}
export interface HttpInterceptorObject {
    url: string;
    config: AxiosRequestConfig;
}
export interface HttpInterceptor {
    httpRequestInterceptor: HttpRequestInterceptor;
}
export declare type HttpRequestInterceptor = (url: any, config: any) => Promise<HttpInterceptorObject>;
