"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var chai_1 = require("chai");
var lodash_1 = require("lodash");
var waitFor_1 = require("./helpers/waitFor");
cucumber_1.Given('user{int} has positive credit certificate balance', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, address, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    address = wallet.account.address;
                    return [4 /*yield*/, wallet.contracts.creditHistoryContract.methods
                            .balanceOf(wallet.address, 0)
                            .send()];
                case 1:
                    balance = _a.sent();
                    chai_1.expect(balance.toNumber() > 0).equals(true);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} can make different request on certificate{int}', function (userIndex, tokenIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, verify, queryToTest;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    verify = function (query) { return __awaiter(_this, void 0, void 0, function () {
                        var cer, keys, i, value;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, wallet.methods.getCertificate(certificateId, undefined, query)];
                                case 1:
                                    cer = _a.sent();
                                    keys = Object.keys(query);
                                    for (i = 0; i < keys.length; i++) {
                                        value = keys[i];
                                        chai_1.expect(cer[value], value + " does not exist on query " + JSON.stringify(query)).to.be.not.undefined;
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    queryToTest = [
                        { issuer: true },
                        { content: true },
                        { messageSenders: true },
                        { owner: true },
                        { isRequestable: true },
                        // { arianeeEvents: true }
                        // { events: true }
                        {
                            content: true,
                            issuer: {
                                waitingIdentity: true
                            }
                        },
                        { issuer: true, content: true }
                    ];
                    return [4 /*yield*/, Promise.all(queryToTest.map(function (query) { return verify(query); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} certificates balance is {int}', function (userIndex, expectedBalance) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.contracts.smartAssetContract.methods.balanceOf(wallet.address).call()];
                case 1:
                    balance = _a.sent();
                    chai_1.expect(parseInt(balance)).equals(expectedBalance);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} creates a new certificate{int} with uri {string}', { timeout: 45000 }, function (userIndex, tokenIndex, uri) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, hash, certificateId, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    hash = wallet.web3.utils.keccak256('ezofnzefon');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, wallet.methods.createCertificate({
                            uri: uri,
                            hash: hash
                        })];
                case 2:
                    certificateId = (_a.sent()).certificateId;
                    return [4 /*yield*/, waitFor_1.waitFor()];
                case 3:
                    _a.sent();
                    this.store.storeToken(tokenIndex, certificateId);
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    console.error('ERROR');
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} creates a new certificate{int} with expected errors', { timeout: 45000 }, function (userIndex, tokenIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, hash, err_2, isCertificateCreditError, isApproveStoreError, isCreditPoaError;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    hash = wallet.web3.utils.keccak256('ezofnzefon');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wallet.methods.createCertificate({
                            hash: hash
                        })];
                case 2:
                    _a.sent();
                    chai_1.expect(false).to.be.true;
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    isCertificateCreditError = err_2.find(function (d) { return d.code === 'credit.certificate'; }) !== undefined;
                    isApproveStoreError = err_2.find(function (d) { return d.code === 'approve.store'; }) !== undefined;
                    isCreditPoaError = err_2.find(function (d) { return d.code === 'credit.POA'; }) !== undefined;
                    chai_1.expect(isApproveStoreError).to.be.false;
                    chai_1.expect(isCertificateCreditError).to.be.true;
                    chai_1.expect(isCreditPoaError).to.be.false;
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} createsAndStores certificate{int}', { timeout: 45000 }, function (userIndex, tokenIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wallet.methods.createAndStoreCertificate({
                            content: {
                                $schema: 'https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json',
                                name: 'Top Time Limited Edition'
                            }
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 2:
                    certificateId = (_a.sent()).certificateId;
                    this.store.storeToken(tokenIndex, certificateId);
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 4];
                case 3:
                    err_3 = _a.sent();
                    console.error(err_3);
                    console.error('ERROR');
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} updates certificate{int}', { timeout: 45000 }, function (userIndex, tokenIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, tokenId, imprint, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    tokenId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.utils.calculateImprint({
                            $schema: 'https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json',
                            name: 'Certificate Updated'
                        })];
                case 1:
                    imprint = _a.sent();
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, wallet.methods.updateAndStoreCertificate({
                            certificateId: tokenId,
                            content: {
                                $schema: 'https://cert.arianee.org/version1/ArianeeProductCertificate-i18n.json',
                                name: 'Certificate Updated'
                            }
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 3:
                    _a.sent();
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 5];
                case 4:
                    err_4 = _a.sent();
                    console.error(err_4);
                    console.error('ERROR');
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} fetch certificate{int} summary', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, certificate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    return [4 /*yield*/, wallet.methods.getCertificate(certificateId, undefined, {
                            content: {
                                forceRefresh: true
                            },
                            issuer: {
                                rpcURI: "http://localhost:3002/" + process.env.NETWORK + "/rpc"
                            }
                        })];
                case 1:
                    certificate = _a.sent();
                    this.store.storeCertificateSummary(certificateId, certificate);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} creates {int} new certificate in batch', function (userIndex, certNb) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, cert, i, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    cert = [];
                    for (i = 0; i < certNb; i++) {
                        cert.push({ uri: '', content: { $schema: 'https://cert.arianee.org/version1/ArianeeAsset.json', name: 'test batch' } });
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wallet.methods.createCertificatesBatch(cert)];
                case 2:
                    _a.sent();
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 4];
                case 3:
                    err_5 = _a.sent();
                    console.error('ERROR', err_5);
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} creates and stores certificate{int} with parent certificate', function (userIndex, tokenIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, parentContent0, parentContent1, result0, result1, certificateId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    parentContent0 = {
                        $schema: 'https://cert.arianee.org/version3/ArianeeProductCertificate-i18n.json',
                        name: 'john',
                        externalContents: [
                            {
                                title: 'About Arianee',
                                url: 'https://www.arianee.org',
                                backgroundColor: '#000',
                                color: '#FFF'
                            }
                        ]
                    };
                    parentContent1 = {
                        $schema: 'https://cert.arianee.org/version2/ArianeeProductCertificate-i18n.json',
                        sku: '"mon sky',
                        title: 'titre nonnon',
                        externalContents: [
                            {
                                title: 'About Arianee',
                                url: 'https://www.arianee.org',
                                backgroundColor: '#000',
                                color: '#FFF'
                            }
                        ]
                    };
                    return [4 /*yield*/, wallet.methods.createAndStoreCertificate({
                            content: parentContent0
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 1:
                    result0 = _a.sent();
                    return [4 /*yield*/, wallet.methods.createAndStoreCertificate({
                            content: parentContent1
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 2:
                    result1 = _a.sent();
                    return [4 /*yield*/, wallet.methods.createAndStoreCertificate({
                            content: {
                                $schema: 'https://cert.arianee.org/version3/ArianeeProductCertificate-i18n.json',
                                title: 'mon titre',
                                parentCertificates: [
                                    {
                                        type: 'full',
                                        order: 0,
                                        arianeeLink: result0.deepLink.link
                                    },
                                    {
                                        type: 'full',
                                        order: 1,
                                        arianeeLink: result1.deepLink.link
                                    }
                                ]
                            }
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 3:
                    certificateId = (_a.sent()).certificateId;
                    this.store.storeToken(tokenIndex, certificateId);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} can call wallet method {string}', { timeout: 45000 }, function (userIndex, methodName, tableOfArg) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, args, result;
        var _a;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    args = tableOfArg.rawTable
                        .map(function (_a) {
                        var key = _a[0], value = _a[1];
                        if (value.includes('certificate')) {
                            var certificateIndex = value.split('certificate')[1];
                            var certificateId = _this.store.getToken(certificateIndex);
                            return certificateId;
                        }
                        else {
                            return value;
                        }
                    });
                    return [4 /*yield*/, (_a = wallet.methods)[methodName].apply(_a, args)];
                case 1:
                    result = _b.sent();
                    this.store.storeCustom('result', result);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} creates and stores certificate{int} as:', { timeout: 45000 }, function (userIndex, tokenIndex, certificateContent) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, content, result, certificateId, err_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    content = JSON.parse(certificateContent);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wallet.methods.createAndStoreCertificate({
                            content: content
                        }, "http://localhost:3002/" + process.env.NETWORK + "/rpc")];
                case 2:
                    result = _a.sent();
                    certificateId = result.certificateId;
                    this.store.storeToken(tokenIndex, certificateId);
                    this.store.storeCustom('result', result);
                    return [3 /*break*/, 4];
                case 3:
                    err_6 = _a.sent();
                    console.error('ERROR');
                    console.log(err_6);
                    this.store.storeCustom('result', err_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} creates certificate{int} as:', { timeout: 45000 }, function (userIndex, tokenIndex, certificateContent) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, content, result, certificateId, err_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    content = JSON.parse(certificateContent);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wallet.methods.createCertificate({
                            content: content
                        })];
                case 2:
                    result = _a.sent();
                    certificateId = result.certificateId;
                    this.store.storeToken(tokenIndex, certificateId);
                    this.store.storeCustom('result', result);
                    return [3 /*break*/, 4];
                case 3:
                    err_7 = _a.sent();
                    console.error('ERROR');
                    console.log(err_7);
                    this.store.storeCustom('result', err_7);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} creates a new certificate{int} with uri {string} and passphrase {word}', { timeout: 45000 }, function (userIndex, tokenIndex, uri, password) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, hash, _a, certificateId, passphrase, deepLink, err_8;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    hash = wallet.web3.utils.keccak256('ezofnzefon');
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, wallet.methods.createCertificate({
                            uri: uri,
                            hash: hash,
                            passphrase: password
                        })];
                case 2:
                    _a = _b.sent(), certificateId = _a.certificateId, passphrase = _a.passphrase, deepLink = _a.deepLink;
                    return [4 /*yield*/, waitFor_1.waitFor()];
                case 3:
                    _b.sent();
                    this.store.storeToken(tokenIndex, certificateId);
                    chai_1.expect(deepLink).to.be.not.undefined;
                    chai_1.expect(certificateId).to.be.not.undefined;
                    chai_1.expect(deepLink).to.be.not.undefined;
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 5];
                case 4:
                    err_8 = _b.sent();
                    console.error('ERROR');
                    console.log(err_8);
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.When('user{int} create a proof in certificate{int} with passphrase {word}', function (userIndex, tokenIndex, password) {
    return __awaiter(this, void 0, void 0, function () {
        var certificateId, wallet, linkObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    certificateId = this.store.getToken(tokenIndex);
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.createCertificateProofLink(certificateId, password)];
                case 1:
                    linkObject = _a.sent();
                    chai_1.expect(linkObject.passphrase).equals(password);
                    chai_1.expect(linkObject.certificateId).equals(certificateId);
                    chai_1.expect(linkObject.link).contain(certificateId);
                    chai_1.expect(linkObject.link).contain(password);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} can check the proof in certificate{int} with passphrase {word}', function (userIndex, certificateIndex, password) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, proofIsValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    return [4 /*yield*/, wallet.methods.isCertificateProofValid(certificateId, password)];
                case 1:
                    proofIsValid = _a.sent();
                    chai_1.expect(proofIsValid.isTrue).equal(true);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} cannot check the proof in certificate{int} with passphrase {word}', function (userIndex, certificateIndex, password) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, proofIsValid;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(certificateIndex);
                    return [4 /*yield*/, wallet.methods.isCertificateProofValid(certificateId, password)];
                case 1:
                    proofIsValid = _a.sent();
                    chai_1.expect(proofIsValid.isTrue).equal(false);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} transfers certificate{int} to user{int}', function (userIndex, certificateIndex, userIndex2) {
    return __awaiter(this, void 0, void 0, function () {
        var token, wallet, wallet2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = this.store.getToken(certificateIndex);
                    wallet = this.store.getUserWallet(userIndex);
                    wallet2 = this.store.getUserWallet(userIndex2);
                    return [4 /*yield*/, wallet.methods.transfer(token, wallet2.address)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} is the owner of the certificate{int}', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var token, wallet, owner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = this.store.getToken(certificateIndex);
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.contracts.smartAssetContract.methods.ownerOf(token).call()];
                case 1:
                    owner = _a.sent();
                    chai_1.expect(wallet.address).equals(owner);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} destroys certificate{int}', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var token, wallet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = this.store.getToken(certificateIndex);
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.destroyCertificate(token)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} recovers certificate{int}', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var token, wallet;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = this.store.getToken(certificateIndex);
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.recoverCertificate(token)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} is not the owner of the certificate{int}', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var token, wallet, owner;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = this.store.getToken(certificateIndex);
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.contracts.smartAssetContract.methods.ownerOf(token).call()];
                case 1:
                    owner = _a.sent();
                    chai_1.expect(wallet.address !== owner).to.be.true;
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} is the owner of the certificate{int} with uri {string}', function (userIndex, tokenIndex, expectedUri) {
    return __awaiter(this, void 0, void 0, function () {
        var token, wallet, owner, uriKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    token = this.store.getToken(tokenIndex);
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.contracts.smartAssetContract.methods.ownerOf(token).call()];
                case 1:
                    owner = _a.sent();
                    chai_1.expect(wallet.address).equals(owner);
                    return [4 /*yield*/, wallet.contracts.smartAssetContract.methods
                            .tokenURI(token)
                            .call()];
                case 2:
                    uriKey = _a.sent();
                    chai_1.expect(expectedUri).equals(uriKey);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} requests certificate{int} with passprase {word}', function (userIndex, tokenIndex, passphrase) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.requestCertificateOwnership(certificateId, passphrase)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, waitFor_1.waitFor()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} makes certificate{int} {word} without passphrase', function (userIndex, tokenIndex, actionType) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, linkObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.createCertificateRequestOwnershipLink(certificateId)];
                case 1:
                    linkObject = _a.sent();
                    this.store.storeCustom('linkObject', linkObject);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} requests certificate{int} with the link', function (userIndex, tokenIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, linkObject;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    linkObject = this.store.getCustom('linkObject');
                    return [4 /*yield*/, wallet.methods.requestCertificateOwnership(linkObject.certificateId, linkObject.passphrase)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} checks if certificate{int} can be requested with passphrase {word}', function (userIndex, tokenIndex, passphrase) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, isRequestable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.isCertificateOwnershipRequestable(certificateId, passphrase)];
                case 1:
                    isRequestable = _a.sent();
                    chai_1.expect(isRequestable.isTrue).equal(true);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} checks if certificate{int} can not be requested with passphrase {word}', function (userIndex, tokenIndex, passphrase) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, isRequestable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.isCertificateOwnershipRequestable(certificateId, passphrase)];
                case 1:
                    isRequestable = _a.sent();
                    chai_1.expect(isRequestable.isTrue).equal(false);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} want to see certificate{int} details', function (userIndex, tokenIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, certficiateDetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.getCertificate(certificateId, undefined, { owner: true })];
                case 1:
                    certficiateDetails = _a.sent();
                    chai_1.expect(certficiateDetails).to.be.not.undefined;
                    chai_1.expect(certficiateDetails.owner).to.be.not.undefined;
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} sees certificate{int} with params:', function (userIndex, tokenIndex, passphrase, queryParameters) {
    return __awaiter(this, void 0, void 0, function () {
        var params, wallet, certificateId, certficiateDetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = JSON.parse(queryParameters);
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.getCertificate(certificateId, passphrase, params)];
                case 1:
                    certficiateDetails = _a.sent();
                    this.store.storeCustom('result', certficiateDetails);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} sees certificate{int} details with passphrase {word} with params:', function (userIndex, tokenIndex, passphrase, queryParameters) {
    return __awaiter(this, void 0, void 0, function () {
        var params, wallet, certificateId, certficiateDetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    params = JSON.parse(queryParameters);
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.getCertificate(certificateId, passphrase, params)];
                case 1:
                    certficiateDetails = _a.sent();
                    this.store.storeCustom('result', certficiateDetails);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('result should have property', function (table) {
    return __awaiter(this, void 0, void 0, function () {
        var properties, certficiateDetails;
        return __generator(this, function (_a) {
            properties = table.raw();
            certficiateDetails = this.store.getCustom('result');
            properties.forEach(function (prop) {
                var name = prop[0], value = prop[1];
                var hasProperty = lodash_1.get(certficiateDetails, name) !== undefined;
                chai_1.expect(hasProperty.toString() === value.toString()).to.be.true;
            });
            return [2 /*return*/];
        });
    });
});
cucumber_1.Given('user{int} want to see certificate{int} details with passphrase {word}', function (userIndex, tokenIndex, passphrase) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, certficiateDetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.getCertificate(certificateId, passphrase, { owner: true })];
                case 1:
                    certficiateDetails = _a.sent();
                    chai_1.expect(certficiateDetails).to.be.not.undefined;
                    chai_1.expect(certficiateDetails.owner).to.be.not.undefined;
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} want to see certificate{int} details from link with passphrase {word}', function (userIndex, tokenIndex, passphrase) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, deepLink, certficiateDetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    deepLink = wallet.utils.createLink(certificateId, passphrase);
                    return [4 /*yield*/, wallet.methods.getCertificateFromLink(deepLink.link, { owner: true })];
                case 1:
                    certficiateDetails = _a.sent();
                    chai_1.expect(certficiateDetails).to.be.not.undefined;
                    chai_1.expect(certficiateDetails.owner).to.be.not.undefined;
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} can see its {int} certificates from getMyCertificates', function (userIndex, numberOfCertificates) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificates;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.getMyCertificates({ owner: true })];
                case 1:
                    certificates = _a.sent();
                    chai_1.expect(certificates.length === numberOfCertificates).to.be.true;
                    certificates.forEach(function (certficiateDetails) {
                        chai_1.expect(certficiateDetails.owner).to.be.not.undefined;
                    });
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} makes certificate{int} {word} with passphrase {word}', function (userIndex, tokenIndex, actionType, passphrase) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId;
        return __generator(this, function (_a) {
            wallet = this.store.getUserWallet(userIndex);
            certificateId = this.store.getToken(tokenIndex);
            return [2 /*return*/, wallet.methods.createCertificateRequestOwnershipLink(certificateId, passphrase)];
        });
    });
});
cucumber_1.Given('user{int} can see its {int} certificates and {int} issuers from groupByIssuerCertificates', function (userIndex, numberOfCertificates, numberOfBrands) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificatesGroupBy, numberOfCertificatesFetched;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.getMyCertificatesGroupByIssuer({ owner: true })];
                case 1:
                    certificatesGroupBy = _a.sent();
                    chai_1.expect(Object.keys(certificatesGroupBy).length === numberOfBrands).to.be.true;
                    numberOfCertificatesFetched = Object.keys(certificatesGroupBy).reduce(function (acc, currKey) {
                        acc += certificatesGroupBy[currKey].length;
                        return acc;
                    }, 0);
                    chai_1.expect(numberOfCertificatesFetched === numberOfCertificates).to.be.true;
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} switch certificate{int} issuer message authorization to {string}', function (userIndex, tokenIndex, value) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, issuer, address;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods.getCertificate(certificateId, undefined, { issuer: true })];
                case 1:
                    issuer = (_a.sent()).issuer;
                    address = issuer.identity.address;
                    return [4 /*yield*/, wallet.methods.setMessageAuthorizationFor(certificateId, address, JSON.parse(value))];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} certificate{int} issuer message authorization should be {string}', function (userIndex, tokenIndex, value) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, _a, issuer, messageSenders, address;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getToken(tokenIndex);
                    return [4 /*yield*/, wallet.methods
                            .getCertificate(certificateId, undefined, { issuer: true, messageSenders: true })];
                case 1:
                    _a = _b.sent(), issuer = _a.issuer, messageSenders = _a.messageSenders;
                    address = issuer.identity.address;
                    chai_1.expect(messageSenders[address] === JSON.parse(value)).to.be.true;
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} want to see certificateId {string} with passphrase {string}', function (userIndex, certificateId, passphrase, table) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, tableToQuery, query, verify, certificate;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    tableToQuery = function (queryTable) {
                        return queryTable.reduce(function (acc, curr) {
                            var propName = curr[0];
                            var value = curr[1];
                            acc[propName] = JSON.parse(value);
                            return acc;
                        }, {});
                    };
                    query = tableToQuery(table.rawTable);
                    verify = function (certificate, query) { return __awaiter(_this, void 0, void 0, function () {
                        var keys, i, value;
                        return __generator(this, function (_a) {
                            keys = Object.keys(query);
                            for (i = 0; i < keys.length; i++) {
                                value = keys[i];
                                chai_1.expect(certificate[value], value + " does not exist on query " + JSON.stringify(query)).to.be.not.undefined;
                            }
                            return [2 /*return*/];
                        });
                    }); };
                    return [4 /*yield*/, wallet.methods.getCertificate(certificateId, undefined, query)];
                case 1:
                    certificate = _a.sent();
                    verify(certificate, query);
                    this.store.storeCertificateSummary(certificateId, certificate);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('certificate{int} imprint should be {string}', function (tokenIndex, expectedImprint) {
    return __awaiter(this, void 0, void 0, function () {
        var certificateId, summary, contentToBeVerified;
        return __generator(this, function (_a) {
            certificateId = this.store.getToken(tokenIndex);
            summary = this.store.getCertificateSummary(certificateId);
            contentToBeVerified = summary.content.imprint;
            chai_1.expect(contentToBeVerified === expectedImprint).to.be.true;
            return [2 /*return*/];
        });
    });
});
cucumber_1.Then('certificate{int} {string} should contains:', function (tokenIndex, objectPath, expectedStringContent) {
    return __awaiter(this, void 0, void 0, function () {
        var certificateId, summary, expectedContent;
        return __generator(this, function (_a) {
            certificateId = this.store.getToken(tokenIndex);
            summary = this.store.getCertificateSummary(certificateId);
            expectedContent = JSON.parse(expectedStringContent);
            Object.keys(expectedContent)
                .forEach(function (key) {
                chai_1.expect(lodash_1.get(summary, objectPath)[key] === expectedContent[key]).to.be.true;
            });
            return [2 /*return*/];
        });
    });
});
cucumber_1.Then('certificateId {string} {string} imprint should be {string}', function (certificateId, contentType, expectedImprint) {
    return __awaiter(this, void 0, void 0, function () {
        var summary, contentToBeVerified;
        return __generator(this, function (_a) {
            summary = this.store.getCertificateSummary(certificateId);
            if (contentType === 'content') {
                contentToBeVerified = summary.content.imprint;
            }
            else if (contentType === 'identity') {
                contentToBeVerified = summary.issuer.identity.imprint;
            }
            else {
                throw new Error('this type of content is not defined');
            }
            chai_1.expect(contentToBeVerified === expectedImprint).to.be.true;
            return [2 /*return*/];
        });
    });
});
cucumber_1.Then('user{int} tries to create 2 certificates with the same certificateId', function (userIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, hash, certificateId, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    hash = wallet.web3.utils.keccak256('ezofnzefon');
                    return [4 /*yield*/, wallet.methods.createCertificate({
                            uri: '',
                            hash: hash
                        })];
                case 1:
                    certificateId = (_b.sent()).certificateId;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, wallet.methods.createCertificate({
                            certificateId: certificateId,
                            uri: '',
                            hash: hash
                        })];
                case 3:
                    _b.sent();
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 5];
                case 4:
                    _a = _b.sent();
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('user{int} reserve a certificateId{int}', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    return [4 /*yield*/, wallet.methods.reserveCertificateId()];
                case 1:
                    certificateId = (_a.sent()).certificateId;
                    this.store.storeCustom("Certificate_" + certificateIndex, certificateId);
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('user{int} create a certificate with certificateId{int}', function (userIndex, certificateIndex) {
    return __awaiter(this, void 0, void 0, function () {
        var wallet, certificateId, hash, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wallet = this.store.getUserWallet(userIndex);
                    certificateId = this.store.getCustom("Certificate_" + certificateIndex);
                    hash = wallet.web3.utils.keccak256('ezofnzefon');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, wallet.methods.createCertificate({
                            certificateId: certificateId,
                            uri: '',
                            hash: hash
                        })];
                case 2:
                    _a.sent();
                    chai_1.expect(true).equals(true);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log(e_1);
                    chai_1.expect(true).equals(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=certificate.step.js.map