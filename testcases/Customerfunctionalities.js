/**
 * Created by Selenium on 29-12-2015.
 */

var SelectWrapper = require('../util/select-wrapper.js');
var sel=new SelectWrapper(by.model("custId"));
var accsel = new SelectWrapper(by.model("accountNo"));
var homepage=require('../Pages/HomePage.js');
var CustomerTransaction=require('../Pages/CustomerTransactions.js');
var basepage=require('../Pages/BasePage.js');
var obj=require('../Objects.json');

describe("Automating Customer Login functionality",function(){
   it("Login to the Account",function(){
        basepage.navigatetoURL(obj.url);
        browser.sleep(obj.timeOut);
        homepage.loginasCustomer();
        browser.sleep(2000);
       sel.selectByText(obj.Customer.values.userName);  
       element(by.buttonText(obj.Customer.locators.loginButton)).click();
   });
   it("Verification of Logged in user name and acc no",function(){
        browser.sleep(obj.timeOut);
        var uname=CustomerTransaction.loggedinUserName;
        expect(element(by.xpath(obj.Customer.locators.userNameTxt)).getText()).toEqual(obj.Customer.values.userName);
        CustomerTransaction.selectandVerifyAccNum(obj.Customer.values.accNo);
   });
   it("Validate Deposits",function(){
        CustomerTransaction.gotoDeposit();
        browser.sleep(obj.timeOut);
        CustomerTransaction.amountDepositinput(obj.Customer.values.amountToBeDeposit);
        CustomerTransaction.DepositbtnClick();    
        element(by.binding("message")).getText().then(function(text){
            console.log(text);
        });
        expect(element(by.binding("message")).getText()).toEqual("Deposit Successful");
    }) ;
    it("Validate Withdrawl",function(){
        CustomerTransaction.gotoWithdrawl();
        browser.sleep(obj.timeOut);
        CustomerTransaction.amountDepositinput(obj.Customer.values.amountToBeWithdraw);
        CustomerTransaction.DepositbtnClick();    
        element(by.binding("message")).getText().then(function(text){
            console.log(text);
        });
        expect(element(by.binding("message")).getText()).toEqual("Transaction successful");
    }) ;
    it("Validate Transactions",function(){
        CustomerTransaction.gotoTransactions();
        browser.sleep(obj.timeOut);
        CustomerTransaction.validateTransTable();
    });

});
