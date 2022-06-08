"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var GlobalConfigurationService = /** @class */ (function () {
    function GlobalConfigurationService() {
        this.defaultQuery = {
            isRequestable: true,
            content: true,
            issuer: {
                waitingIdentity: false,
                forceRefresh: false
            },
            owner: true,
            events: true,
            arianeeEvents: true,
            advanced: {
                languages: undefined
            },
            messageSenders: true,
            recover: false
        };
    }
    GlobalConfigurationService.prototype.getMergedQuery = function (query) {
        var _this = this;
        if (query === void 0) { query = {}; }
        if (query === undefined || Object.keys(query).length === 0) {
            return this.defaultQuery;
        }
        else {
            return Object.keys(this.defaultQuery)
                .reduce(function (acc, currKey) {
                var value = query[currKey];
                if (currKey === 'advanced') {
                    acc[currKey] = __assign(__assign({}, _this.defaultQuery.advanced), query.advanced);
                }
                else if (value === undefined || value === false) {
                    // not fetching at all
                    acc[currKey] = false;
                }
                else if (value === true) {
                    acc[currKey] = typeof _this.defaultQuery[currKey] === 'boolean' ? true : _this.defaultQuery[currKey];
                }
                else if (typeof query === 'object') {
                    acc[currKey] = __assign(__assign({}, _this.defaultQuery[currKey]), query[currKey]);
                }
                return acc;
            }, {});
        }
    };
    GlobalConfigurationService.prototype.setDefaultQuery = function (defaultQuery) {
        this.defaultQuery = __assign({}, defaultQuery);
        return this;
    };
    GlobalConfigurationService = __decorate([
        tsyringe_1.injectable()
    ], GlobalConfigurationService);
    return GlobalConfigurationService;
}());
exports.GlobalConfigurationService = GlobalConfigurationService;
//# sourceMappingURL=globalConfigurationService.js.map