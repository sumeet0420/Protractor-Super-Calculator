import { ElementFinder, element, by, browser } from "protractor";


export const HOME_PAGE_LINK: string = "http://juliemr.github.io/protractor-demo/";
export const PAGE_TITLE: string = "Super Calculator";

export class SuperCalculator {

    firstNumber: ElementFinder = element(by.model("first"));
    secondNumber: ElementFinder = element(by.model("second"));
    addition: ElementFinder = element(by.model("operator")).element(by.css("option[value='ADDITION']"));
    subtraction: ElementFinder = element(by.model("operator")).element(by.css("option[value='SUBTRACTION']"));
    multiplication: ElementFinder = element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']"));
    division: ElementFinder = element(by.model("operator")).element(by.css("option[value='DIVISION']"));
    modulo: ElementFinder = element(by.model("operator")).element(by.css("option[value='MODULO']"));
    go: ElementFinder = element(by.id("gobutton"));
    static result_memory = element.all(by.repeater('result in memory'));
    result: ElementFinder = element(by.css('h2[class="ng-binding"]'));

    openHomePage() {
        browser.get(HOME_PAGE_LINK);
    }

    getResult() {
        let result_return = ''
        return this.result.getText()
    }
    add_numbers(num1, num2): number {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.addition.click();
        this.go.click();
        return num1 + num2;
    }

    subtract_numbers(num1, num2): number {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.subtraction.click();
        this.go.click();
        return num1 - num2;
    }

    divide_numbers(num1, num2): number {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.division.click();
        this.go.click();
        return num1 / num2;
    }

    multiply_numbers(num1, num2): number {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.multiplication.click();
        this.go.click();
        return num1 * num2;
    }

    modolo_numbers(num1, num2): number {
        this.firstNumber.sendKeys(num1);
        this.secondNumber.sendKeys(num2);
        this.modulo.click();
        this.go.click();
        return num1 % num2;
    }

    static printAllResult() {
        this.result_memory.each(result => {
            result.element(by.css("td:nth-child(3)")).getText().then(text => console.log(text))
        });
    }

    static isAtHomePage() {
        return browser.getCurrentUrl();
    }

    static verifyTitle() {
        return browser.getTitle();
    }
}