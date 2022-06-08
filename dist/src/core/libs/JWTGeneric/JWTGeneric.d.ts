export declare class JWTGeneric {
    private signer;
    private decoder;
    private header;
    private payload;
    private encodedToken;
    constructor(signer: (data: any) => {}, decoder: any);
    /**
     * Set payload to be signed
     * @param payload
     */
    setPayload: (payload: any) => Promise<{
        sign: any;
        setHeader: any;
    }>;
    /**
     * Set payload to be signed
     * @param payload
     */
    setHeader: (payload: any) => Promise<{
        sign: any;
        setPayload: any;
    }>;
    /**
     * Set token to be verified or decoded
     * @param encodedToken
     */
    setToken(encodedToken: any): {
        decode: any;
        verify: any;
    };
    private static base64Stringified;
    private static fromBase64JSONParse;
    private sign;
    /**
     * Verify if signature was signed by pubKey and return true/false
     * @param pubKey
     */
    private verify;
    private arePropertiesValid;
    private decode;
    private signature;
}
