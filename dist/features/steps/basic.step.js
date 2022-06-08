"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("@cucumber/cucumber");
var chai_1 = require("chai");
cucumber_1.Given('a variable set to {int}', function (number) {
    chai_1.expect(true).equals(true);
});
cucumber_1.Then('the variable should contain {int}', function (number) {
    chai_1.expect(true).equals(true);
});
cucumber_1.When('I increment the variable by {int}', function (number) {
    chai_1.expect(true).equals(true);
});
//# sourceMappingURL=basic.step.js.map