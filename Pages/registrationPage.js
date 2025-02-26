var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("gender"));
var obj=require('../Objects.json');
var registrationPage=function(){
    this.addAllregistrationdeatils=function(firstName,lastName,email,password){
        element(by.xpath(obj.regPage.locators.firstName)).sendKeys(firstName);
       element(by.xpath(obj.regPage.locators.lastName)).sendKeys(lastName);
       element(by.xpath(obj.regPage.locators.email)).sendKeys(email);
       element(by.xpath(obj.regPage.locators.password)).sendKeys(password);
       element(by.xpath(obj.regPage.locators.Reading)).click();
       element(by.xpath(obj.regPage.locators.Traveling)).click();
       element(by.xpath(obj.regPage.locators.Sports)).click();
       mySelect.selectByText(obj.regPage.values.GenderFemale);
       element(by.xpath(obj.regPage.locators.about)).sendKeys(obj.regPage.values.aboutDesc);
       browser.sleep(2000);
        element(by.xpath(obj.regPage.locators.RegisterBtn)).click();
        browser.sleep(1000);
        var message=element(by.xpath(obj.regPage.locators.successMessage)).getText();
        expect(element(by.xpath(obj.regPage.locators.successMessage)).getText()).toEqual(obj.regPage.values.successMessage);
        console.log(message);
        
    };
    this.addfewdetailsandvalidateregistrationform=function(firstName,lastName,email,password){
        element(by.xpath(obj.regPage.locators.firstName)).sendKeys(firstName);
        element(by.xpath(obj.regPage.locators.lastName)).sendKeys(lastName);
        element(by.xpath(obj.regPage.locators.email)).sendKeys(email);
        element(by.xpath(obj.regPage.locators.password)).sendKeys(password);
        element(by.xpath(obj.regPage.locators.Reading)).click();
        element(by.xpath(obj.regPage.locators.Traveling)).click();
        element(by.xpath(obj.regPage.locators.Sports)).click();
       mySelect.selectByText(obj.regPage.values.GenderFemale);
       browser.sleep(2000);
       element(by.xpath(obj.regPage.locators.RegisterBtn)).click();
        browser.sleep(1000);
        var errmsg=element(by.xpath(obj.regPage.locators.errorMessage)).getText();
        expect(element(by.xpath(obj.regPage.locators.errorMessage)).getText()).toEqual(obj.regPage.values.errorMessage);
        console.log(errmsg);
    };
};
module.exports=new registrationPage();