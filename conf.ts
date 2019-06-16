import {Config, browser} from 'protractor'

export let config:Config = {
    //seleniumAddress:'http://localhost:4444/wd/hub', Direct Connect. Commmenting this line
    specs: ['calculator.js'],
    directConnect:true,
     jasmineNodeOpts: {
         showColors:true
       },
    onPrepare : function(){
        browser.manage().window().maximize();
    }
}