/**
 * Created by Selenium on 29-12-2015.
 */


var SelectWrapper = require('..//util//select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currency = new SelectWrapper(by.id("currency"));
require('../util/customlocators.js');
var basepage=require('../Pages/BasePage.js');
var obj=require('../Objects.json');
var bankmanager=require('../Pages/BankManager.js');
// var locator = require("../util/customlocators.js");
// var capture = require("../util/screenshot.js");
// var customlocators= require("..//testcases//customlocators.js")

describe("Automating BankManager Login functionality",function(){

    it("Login to the Bank Manager Account",function(){
        basepage.navigatetoURL(obj.url);
        browser.sleep(obj.timeOut);
        element(by.ngClick("manager()")).click();
        browser.sleep(obj.timeOut);
    }) ;
    it("Validate Add Customer",function(){
        bankmanager.gotoAddCust();
        browser.sleep(obj.timeOut);
        bankmanager.addCustomerInfo(obj.BankManager.values.fname,obj.BankManager.values.lname,obj.BankManager.values.postcode)
    }) ;
    it("Validate Open Account",function(){
        bankmanager.gotoOpenAcc();
        browser.sleep(obj.timeOut);
        bankmanager.openAccount(obj.BankManager.values.fname+" "+obj.BankManager.values.lname,obj.BankManager.values.currencyRupee);
    }) ;
   it("Validate Customer Existance",function(){
        bankmanager.gotoCustomers();
        browser.sleep(2000);
        bankmanager.customerExistance(obj.BankManager.values.fname);
    }) ;






});
