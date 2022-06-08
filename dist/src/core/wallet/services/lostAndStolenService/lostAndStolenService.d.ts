import { ContractService } from '../contractService/contractsService';
export declare class LostAndStolenService {
    private contractService;
    constructor(contractService: ContractService);
    /**
       * Set missing status of specific smartasset
       * @param {ArianeeTokenId} arianeeId
       * @returns {<void>}
       */
    setMissingStatus: (arianeeId: any) => any;
    /**
     * Unset missing status of specific smartasset
     * @param {ArianeeTokenId} arianeeId
     * @returns {<void>}
     */
    unsetMissingStatus: (arianeeId: any) => Promise<any>;
    /**
     * Set stolen status of specific smartasset
     * @param {ArianeeTokenId} arianeeId
     * @returns {<void>}
     */
    setStolenStatus: (arianeeId: any) => Promise<any>;
    /**
     * Unset missing status of specific smartasset
     * @param {ArianeeTokenId} arianeeId
     * @returns {<void>}
     */
    unsetStolenStatus: (arianeeId: any) => Promise<any>;
    /**
     * Missing or stolena status
     * @param arianeeId
     */
    getMissingOrStolenStatus: (arianeeId: any) => Promise<{
        isStolen: boolean;
        isMissing: boolean;
    }>;
    /**
     * Check missing status of specific smartasset
     * @param {ArianeeTokenId} arianeeId
     * @returns {Promise<boolean>}
     */
    isMissing: (arianeeId: any) => Promise<boolean>;
    /**
     * Check stolen status of specific smartasset
     * @param {ArianeeTokenId} arianeeId
     * @returns {Promise<boolean>}
     */
    isStolen: (arianeeId: any) => Promise<boolean>;
}
