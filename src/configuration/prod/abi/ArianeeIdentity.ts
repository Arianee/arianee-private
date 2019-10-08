export default [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_identity",
				"type": "address"
			}
		],
		"name": "waitingURI",
		"outputs": [
			{
				"name": "_waitingUri",
				"type": "string"
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
				"name": "_newValidatorAddress",
				"type": "address"
			}
		],
		"name": "updateValidatorAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_identity",
				"type": "address"
			}
		],
		"name": "compromiseIdentityDate",
		"outputs": [
			{
				"name": "_compromiseDate",
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
				"name": "_newBouncerAddress",
				"type": "address"
			}
		],
		"name": "updateBouncerAddress",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_identity",
				"type": "address"
			}
		],
		"name": "waitingImprint",
		"outputs": [
			{
				"name": "_waitingImprint",
				"type": "bytes32"
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
				"name": "_identity",
				"type": "address"
			}
		],
		"name": "removeAddressFromApprovedList",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_identity",
				"type": "address"
			},
			{
				"name": "_uriToValidate",
				"type": "string"
			},
			{
				"name": "_imprintToValidate",
				"type": "bytes32"
			}
		],
		"name": "validateInformation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes3"
			}
		],
		"name": "addressFromId",
		"outputs": [
			{
				"name": "_identity",
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
				"name": "_identity",
				"type": "address"
			}
		],
		"name": "addressURI",
		"outputs": [
			{
				"name": "_uri",
				"type": "string"
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
				"name": "_identity",
				"type": "address"
			}
		],
		"name": "addressImprint",
		"outputs": [
			{
				"name": "_imprint",
				"type": "bytes32"
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
				"name": "_identity",
				"type": "address"
			},
			{
				"name": "_compromiseDate",
				"type": "uint256"
			}
		],
		"name": "updateCompromiseDate",
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
		"constant": false,
		"inputs": [
			{
				"name": "_uri",
				"type": "string"
			},
			{
				"name": "_imprint",
				"type": "bytes32"
			}
		],
		"name": "updateInformations",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newIdentity",
				"type": "address"
			}
		],
		"name": "addAddressToApprovedList",
		"outputs": [
			{
				"name": "",
				"type": "bytes3"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_identity",
				"type": "address"
			}
		],
		"name": "addressIsApproved",
		"outputs": [
			{
				"name": "_isApproved",
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
		"inputs": [
			{
				"name": "_newBouncerAddress",
				"type": "address"
			},
			{
				"name": "_newValidatorAddress",
				"type": "address"
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
				"name": "_newIdentity",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_addressId",
				"type": "bytes3"
			}
		],
		"name": "AddressApprovedAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_newIdentity",
				"type": "address"
			}
		],
		"name": "AddressApprovedRemoved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_identity",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_uri",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_imprint",
				"type": "bytes32"
			}
		],
		"name": "URIUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_identity",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_uri",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_imprint",
				"type": "bytes32"
			}
		],
		"name": "URIValidate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_identity",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_compromiseDate",
				"type": "uint256"
			}
		],
		"name": "IdentityCompromised",
		"type": "event"
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