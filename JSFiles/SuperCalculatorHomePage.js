"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.HOME_PAGE_LINK = "http://juliemr.github.io/protractor-demo/";
exports.PAGE_TITLE = "Super Calculator";
class SuperCalculator {
    constructor() {
        this.firstNumber = protractor_1.element(protractor_1.by.model("first"));
        this.secondNumber = protractor_1.element(protractor_1.by.model("second"));
        this.addition = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='ADDITION']"));
        this.subtraction = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='SUBTRACTION']"));
        this.multiplication = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='MULTIPLICATION']"));
        this.division = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='DIVISION']"));
        this.modulo = protractor_1.element(protractor_1.by.model("operator")).element(protractor_1.by.css("option[value='MODULO']"));
        this.go = protractor_1.element(protractor_1.by.id("gobutton"));
        this.result = protractor_1.element(protractor_1.by.css('h2[class="ng-binding"]'));
    }
    openHomePage() {
        protractor_1.browser.get(exports.HOME_PAGE_LINK);
    }
    getResult() {
        let result_return = '';
        return this.result.getText();
    }
    add_numbers(num1, num2) {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.addition.click();
        this.go.click();
        return num1 + num2;
    }
    subtract_numbers(num1, num2) {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.subtraction.click();
        this.go.click();
        return num1 - num2;
    }
    divide_numbers(num1, num2) {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.division.click();
        this.go.click();
        return num1 / num2;
    }
    multiply_numbers(num1, num2) {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.multiplication.click();
        this.go.click();
        return num1 * num2;
    }
    modolo_numbers(num1, num2) {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.modulo.click();
        this.go.click();
        return num1 % num2;
    }
    static printAllResult() {
        this.result_memory.each(result => {
            result.element(protractor_1.by.css("td:nth-child(3)")).getText().then(text => console.log(text));
        });
    }
    static isAtHomePage() {
        return protractor_1.browser.getCurrentUrl();
    }
    static verifyTitle() {
        return protractor_1.browser.getTitle();
    }
}
SuperCalculator.result_memory = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
exports.SuperCalculator = SuperCalculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwZXJDYWxjdWxhdG9ySG9tZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9TdXBlckNhbGN1bGF0b3JIb21lUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFpRTtBQUdwRCxRQUFBLGNBQWMsR0FBVywyQ0FBMkMsQ0FBQztBQUNyRSxRQUFBLFVBQVUsR0FBVyxrQkFBa0IsQ0FBQztBQUVyRCxNQUFhLGVBQWU7SUFBNUI7UUFFSSxnQkFBVyxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN4RCxpQkFBWSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxRCxhQUFRLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUNwRyxnQkFBVyxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDMUcsbUJBQWMsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ2hILGFBQVEsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQ3BHLFdBQU0sR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFD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