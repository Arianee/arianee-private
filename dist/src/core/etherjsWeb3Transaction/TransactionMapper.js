"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ethers_1 = require("ethers");
var TransactionMapper = /** @class */ (function () {
    function TransactionMapper(mixedTransaction) {
        var _this = this;
        this.mixedTransaction = mixedTransaction;
        this.clean = function (obj) {
            Object.keys(obj).forEach(function (key) { return obj[key] === undefined ? delete obj[key] : {}; });
            return obj;
        };
        this.toWeb3 = function () {
            return _this.clean({
                nonce: TransactionMapper.toNumber(_this.mixedTransaction.nonce),
                gasPrice: TransactionMapper.toNumber(_this.mixedTransaction.gasPrice),
                to: _this.mixedTransaction.to,
                value: _this.mixedTransaction.value,
                chainId: _this.mixedTransaction.chainId,
                data: _this.mixedTransaction.data,
                gas: TransactionMapper.toNumber(_this.gasLimit)
            });
        };
        this.toEtherjs = function () {
            return _this.clean({
                nonce: TransactionMapper.toNumber(_this.mixedTransaction.nonce),
                gasPrice: TransactionMapper.toBigNumber(_this.mixedTransaction.gasPrice),
                to: _this.mixedTransaction.to,
                value: TransactionMapper.toBigNumber(_this.mixedTransaction.value),
                chainId: _this.mixedTransaction.chainId,
                data: _this.mixedTransaction.data,
                gasLimit: TransactionMapper.toBigNumber(_this.gasLimit)
            });
        };
        this.toMetamaskTransaction = function () {
            return _this.clean({
                from: _this.mixedTransaction.from,
                to: _this.mixedTransaction.to,
                gasPrice: '0x' + _this.mixedTransaction.gasPrice.toString(16),
                gas: '0x' + _this.mixedTransaction.gasLimit.toString(16),
                nonce: '0x' + _this.mixedTransaction.nonce.toString(16),
                data: _this.mixedTransaction.data
            });
        };
    }
    Object.defineProperty(TransactionMapper.prototype, "gasLimit", {
        get: function () {
            return this.mixedTransaction.gas || this.mixedTransaction.gasLimit;
        },
        enumerable: true,
        configurable: true
    });
    TransactionMapper.toBigNumber = function (value) {
        if (value === undefined) {
            return undefined;
        }
        else if (ethers_1.BigNumber.isBigNumber(value)) {
            return value.toHexString();
        }
        else {
            return ethers_1.BigNumber.from(value).toHexString();
        }
    };
    TransactionMapper.toNumber = function (value) {
        if (ethers_1.BigNumber.isBigNumber(value)) {
            return value.toNumber();
        }
        else if (typeof value === 'string') {
            return parseInt(value);
        }
        else {
            return value;
        }
    };
    TransactionMapper.prototype.toEthereumjs = function () {
        return this.clean({
            nonce: TransactionMapper.toBigNumber(this.mixedTransaction.nonce),
            gasPrice: TransactionMapper.toBigNumber(this.mixedTransaction.gasPrice),
            to: this.mixedTransaction.to,
            value: TransactionMapper.toBigNumber(this.mixedTransaction.value),
            chainId: this.mixedTransaction.chainId,
            data: this.mixedTransaction.data,
            gasLimit: TransactionMapper.toBigNumber(this.gasLimit)
        });
    };
    return TransactionMapper;
}());
exports.TransactionMapper = TransactionMapper;
//# sourceMappingURL=TransactionMapper.js.map