"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var Store = /** @class */ (function () {
    function Store() {
        var _this = this;
        this.store = {};
        this.getStoreItem = function (storeKey) {
            return Promise.resolve(JSON.parse(_this.store[storeKey]));
        };
        this.hasItem = function (storeKey) {
            return Promise.resolve(Object.prototype.hasOwnProperty.call(_this.store, storeKey));
        };
        this.setStoreItem = function (storeKey, value) {
            _this.store[storeKey] = JSON.stringify(value);
            return Promise.resolve(_this);
        };
    }
    Store = __decorate([
        tsyringe_1.injectable()
    ], Store);
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=store.js.map