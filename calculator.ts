import {browser, element, by} from 'protractor'
import { SuperCalculator, HOME_PAGE_LINK, PAGE_TITLE } from './SuperCalculatorHomePage';

describe('To test all the functionality of Calculator Page', function(){

        let calc = new SuperCalculator();

        it('This test case tests multiple functionalities of the Calculator', done =>{
        calc.openHomePage();

        expect(SuperCalculator.isAtHomePage()).toContain(HOME_PAGE_LINK)
        expect(SuperCalculator.verifyTitle()).toContain(PAGE_TITLE)

        let result1 = calc.add_numbers(100, 300);
        expect(calc.getResult()).toContain(result1.toString())
        
        let result2 = calc.subtract_numbers(20, 50);
        expect(calc.getResult()).toContain(result2.toString())
        
        let result3 = calc.multiply_numbers(10,908)
        expect(calc.getResult()).toContain(result3.toString())

        let result4 = calc.multiply_numbers(98,98)
        expect(calc.getResult()).toContain(result4.toString())

        let result5 = calc.modolo_numbers(100, 50);
        expect(calc.getResult()).toContain(result5.toString())

        let result6 = calc.divide_numbers(100, 50);
        expect(calc.getResult()).toContain(result6.toString())
        
        SuperCalculator.printAllResult();
        done()
    });
});