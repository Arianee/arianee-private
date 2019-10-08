export default [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_receiver",
                "type": "uint8"
            }
        ],
        "name": "percentOfDispatch",
        "outputs": [
            {
                "name": "_percent",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_creditType",
                "type": "uint256"
            },
            {
                "name": "_quantity",
                "type": "uint256"
            },
            {
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "buyCredit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ariaUSDExchange",
                "type": "uint256"
            }
        ],
        "name": "setAriaUSDExchange",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_oldStoreAddress",
                "type": "address"
            }
        ],
        "name": "getAriaFromOldStore",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "nonFungibleRegistry",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_to",
                "type": "address"
            }
        ],
        "name": "reserveToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "creditHistory",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ariaUSDExchange",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_eventId",
                "type": "uint256"
            },
            {
                "name": "_providerOwner",
                "type": "address"
            }
        ],
        "name": "acceptEvent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_authorizedExchangeAddress",
                "type": "address"
            }
        ],
        "name": "setAuthorizedExchangeAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "unpause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_percentInfra",
                "type": "uint8"
            },
            {
                "name": "_percentBrandsProvider",
                "type": "uint8"
            },
            {
                "name": "_percentOwnerProvider",
                "type": "uint8"
            },
            {
                "name": "_arianeeProject",
                "type": "uint8"
            },
            {
                "name": "_assetHolder",
                "type": "uint8"
            }
        ],
        "name": "setDispatchPercent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "acceptedToken",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "arianeeProjectAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_eventId",
                "type": "uint256"
            },
            {
                "name": "_providerOwner",
                "type": "address"
            }
        ],
        "name": "refuseEvent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "paused",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_arianeeProjectAddress",
                "type": "address"
            }
        ],
        "name": "setArianeeProjectAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "protocolInfraAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdrawArias",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "name": "_sender",
                "type": "address"
            }
        ],
        "name": "canDestroy",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "pause",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_protocolInfraAddress",
                "type": "address"
            }
        ],
        "name": "setProtocolInfraAddress",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "arianeeEvent",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_creditType",
                "type": "uint256"
            }
        ],
        "name": "creditPriceUSD",
        "outputs": [
            {
                "name": "_creditPriceUSD",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "name": "_hash",
                "type": "bytes32"
            },
            {
                "name": "_keepRequestToken",
                "type": "bool"
            },
            {
                "name": "_providerOwner",
                "type": "address"
            },
            {
                "name": "_signature",
                "type": "bytes"
            }
        ],
        "name": "requestToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "canTransfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_eventId",
                "type": "uint256"
            },
            {
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "name": "_imprint",
                "type": "bytes32"
            },
            {
                "name": "_uri",
                "type": "string"
            },
            {
                "name": "_providerBrand",
                "type": "address"
            }
        ],
        "name": "createEvent",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_tokenId",
                "type": "uint256"
            },
            {
                "name": "_imprint",
                "type": "bytes32"
            },
            {
                "name": "_uri",
                "type": "string"
            },
            {
                "name": "_encryptedInitialKey",
                "type": "address"
            },
            {
                "name": "_tokenRecoveryTimestamp",
                "type": "uint256"
            },
            {
                "name": "_initialKeyIsRequestKey",
                "type": "bool"
            },
            {
                "name": "_providerBrand",
                "type": "address"
            }
        ],
        "name": "hydrateToken",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "authorizedExchangeAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_creditType",
                "type": "uint256"
            }
        ],
        "name": "getCreditPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_creditType",
                "type": "uint256"
            },
            {
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "setCreditPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_acceptedToken",
                "type": "address"
            },
            {
                "name": "_nonFungibleRegistry",
                "type": "address"
            },
            {
                "name": "_creditHistoryAddress",
                "type": "address"
            },
            {
                "name": "_arianeeEvent",
                "type": "address"
            },
            {
                "name": "_ariaUSDExchange",
                "type": "uint256"
            },
            {
                "name": "_creditPricesUSD0",
                "type": "uint256"
            },
            {
                "name": "_creditPricesUSD1",
                "type": "uint256"
            },
            {
                "name": "_creditPricesUSD2",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_addressType",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_newAddress",
                "type": "address"
            }
        ],
        "name": "SetAddress",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_creditType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "NewCreditPrice",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_ariaUSDExchange",
                "type": "uint256"
            }
        ],
        "name": "NewAriaUSDExchange",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "buyer",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_receiver",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_creditType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "quantity",
                "type": "uint256"
            }
        ],
        "name": "CreditBuyed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_percentInfra",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "_percentBrandsProvider",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "_percentOwnerProvider",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "_arianeeProject",
                "type": "uint8"
            },
            {
                "indexed": false,
                "name": "_assetHolder",
                "type": "uint8"
            }
        ],
        "name": "NewDispatchPercent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_type",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "_quantity",
                "type": "uint256"
            }
        ],
        "name": "CreditSpended",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Pause",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Unpause",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
]