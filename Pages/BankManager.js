require('../util/customlocators');
var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currency = new SelectWrapper(by.id("currency"));
var obj=require('../Objects.json');
var alert=require('../Pages/alerts.js');
var BankManager=function(){

    this.gotoAddCust=function(){
        element(by.ngClick("addCust()")).click();
    }
    this.gotoOpenAcc=function(){
        element(by.ngClick("openAccount()")).click();
    }
    this.gotoCustomers=function(){
        element(by.buttonText("Customers")).click();
    }
    this.addCustomerInfo=function(fname,lname,postCd){
        element(by.xpath(obj.BankManager.locators.fName)).sendKeys(fname);
        element(by.xpath(obj.BankManager.locators.lname)).sendKeys(lname);
        element(by.xpath(obj.BankManager.locators.postCd)).sendKeys(postCd);
        element(by.css(obj.Customer.locators.DepositBtn)).click();
        browser.sleep(obj.timeOut);
        alert.getAlertText();
        alert.alertaccept();
        browser.sleep(obj.timeOut);
    }
    this.openAccount=function(name,cur){
        mySelect.selectByText(name);
        currency.selectByText(cur);
        element(by.buttonText(obj.BankManager.locators.processBtn)).click();
        browser.sleep(obj.timeOut);
        alert.getAlertText();
        alert.alertaccept();
        browser.sleep(obj.timeOut);
    }
    this.customerExistance=function(fname){
        element(by.xpath(obj.BankManager.locators.searchCustomer)).sendKeys(fname);
        var firstName = element(by.repeater(obj.BankManager.locators.CustTable).row(0).column(obj.BankManager.locators.fnameCol));
        var lastName = element(by.repeater(obj.BankManager.locators.CustTable).row(0).column(obj.BankManager.locators.lnameCol));
        var postCode = element(by.repeater(obj.BankManager.locators.CustTable).row(0).column(obj.BankManager.locators.PostCodeCol));
        firstName.getText().then(function(text){
            console.log("first Name:"+text);
        });
        expect(firstName.getText()).toEqual(obj.BankManager.values.fname);
        lastName.getText().then(function(lname){
            console.log("last Name:"+lname);
        });
        expect(lastName.getText()).toEqual(obj.BankManager.values.lname);
        postCode.getText().then(function(pCode){
            console.log("Post Code:"+pCode);
        });
        expect(postCode.getText()).toEqual(obj.BankManager.values.postcode);
        browser.sleep(2000);
    }
};
module.exports=new BankManager();