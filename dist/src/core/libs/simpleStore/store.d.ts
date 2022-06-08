export declare class Store {
    private store;
    getStoreItem: (storeKey: string) => Promise<any>;
    hasItem: (storeKey: string) => Promise<boolean>;
    setStoreItem: (storeKey: string, value: any) => Promise<this>;
}
