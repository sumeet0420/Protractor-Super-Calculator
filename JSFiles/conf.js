"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    //seleniumAddress:'http://localhost:4444/wd/hub', Direct Connect. Commmenting this line
    specs: ['calculator.js'],
    directConnect: true,
    jasmineNodeOpts: {
        showColors: true
    },
    onPrepare: function () {
        protractor_1.browser.manage().window().maximize();
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFFL0IsUUFBQSxNQUFNLEdBQVU7SUFDdkIsdUZBQXVGO0lBQ3ZGLEtBQUssRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUN4QixhQUFhLEVBQUMsSUFBSTtJQUNqQixlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUMsSUFBSTtLQUNoQjtJQUNKLFNBQVMsRUFBRztRQUNSLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNKLENBQUEifQ==