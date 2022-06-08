"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var CustomEventEmitter = /** @class */ (function (_super) {
    __extends(CustomEventEmitter, _super);
    function CustomEventEmitter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addListener = _this.on;
        return _this;
    }
    CustomEventEmitter.prototype.on = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[0] !== "newListener" /* newListener */) {
            _super.prototype.emit.call(this, "newListener" /* newListener */, args[0]);
        }
        // @ts-ignore
        return _super.prototype.on.apply(this, args);
    };
    return CustomEventEmitter;
}(eventemitter3_1.default));
exports.CustomEventEmitter = CustomEventEmitter;
var ArianeeEventEmitter = /** @class */ (function () {
    function ArianeeEventEmitter() {
        this.EE = new CustomEventEmitter();
    }
    ArianeeEventEmitter = __decorate([
        tsyringe_1.injectable()
    ], ArianeeEventEmitter);
    return ArianeeEventEmitter;
}());
exports.ArianeeEventEmitter = ArianeeEventEmitter;
//# sourceMappingURL=ArianeeEventEmitter.js.map