import axios from 'axios';
import { injectable } from 'tsyringe';
import { HttpInterceptor, HttpRequestInterceptor } from '../../../models/httpClient';

@injectable()
export class ArianeeHttpClient {
    private httpRequestInterceptor:HttpRequestInterceptor;
    private httpFetch=(url, config) => axios(url, config).then(result => result.data);

    public setRequestInterceptor=(interceptor:HttpRequestInterceptor):ArianeeHttpClient => {
      this.httpRequestInterceptor = interceptor;
      return this;
    }

    public setHttpFetch=(httpFetch:(url, config)=>Promise<any>):ArianeeHttpClient => {
      this.httpFetch = httpFetch;
      return this;
    }

    /**
     * Calculate hash key from url and headers of a request
     * @param url
     * @param config
     * @return {string}
     */
    private static createKeyFromURL = (url, config) => {
      const hash = function (s) {
        let a = 1;
        let c = 0;
        let h;
        let o;
        if (s) {
          a = 0;
          for (h = s.length - 1; h >= 0; h--) {
            o = s.charCodeAt(h);
            a = ((a << 6) & 268435455) + o + (o << 14);
            c = a & 266338304;
            a = c !== 0 ? a ^ (c >> 21) : a;
          }
        }

        return String(a);
      };

      return hash(JSON.stringify(url) + JSON.stringify(config));
    }

    private RPCConfigurationFactory = (endpoint, method, params) => {
      return {
        method: 'POST',
        data: {
          jsonrpc: '2.0',
          method: method,
          params: params,
          id: ArianeeHttpClient.createKeyFromURL(endpoint, params)
        },
        headers: {
          'Content-Type': 'application/json'
        }
      };
    }

    public RPCCall = async <resultType=any>(endpoint: string, method: string, params: any): Promise<{
        jsonrpc: number,
        id: string,
        result?: resultType
    }> => {
      const config = this.RPCConfigurationFactory(endpoint, method, params);

      const RPCRes = await this.fetch(endpoint, config);

      if (RPCRes.error) {
        throw new Error(JSON.stringify(RPCRes.error));
      }

      if (RPCRes.result) {
        RPCRes.result = (typeof (RPCRes.result) === 'string') ? JSON.parse(RPCRes.result) : RPCRes.result;
      }

      return RPCRes;
    }

    /**
     * Default headers for fetch
     */
    public static get defaultConfig () {
      return {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };
    }

    /**
     * HTTP call
     * Default configuration of headers is method GET and content-type: application/json
     * @param url
     * @param config
     * @return Promise{any}
     */
    public async fetch (
      url: string,
      config: any = { ...ArianeeHttpClient.defaultConfig }
    ) {
      if (config.body) {
        config.data = config.body;
      }

      if (this.httpRequestInterceptor) {
        const result = await this.httpRequestInterceptor(url, config);
        url = result.url;
        config = result.config;
      }
      try {
        return this.httpFetch(url, config);
      } catch (e) {
        console.warn('Error on fetch', url, config);
        Promise.reject(e);
      }
    }

  /**
     * The exact same method as static fetch method
     */
}
