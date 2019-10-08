export default [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "_totalCredits",
				"type": "uint256"
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
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_type",
				"type": "uint256"
			},
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "userCreditHistory",
		"outputs": [
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_quantity",
				"type": "uint256"
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
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "userIndex",
		"outputs": [
			{
				"name": "_historyIndex",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
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
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_price",
				"type": "uint256"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			},
			{
				"name": "_type",
				"type": "uint256"
			}
		],
		"name": "addCreditHistory",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newArianeeStoreAdress",
				"type": "address"
			}
		],
		"name": "setArianeeStoreAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_spender",
				"type": "address"
			},
			{
				"name": "_type",
				"type": "uint256"
			},
			{
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "consumeCredits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "arianeeStoreAddress",
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