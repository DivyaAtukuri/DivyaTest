require('../util/customlocators');
var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("accountSelect"));
var obj=require('../Objects.json');
var CustomerTransactions=function(){

    this.gotoTransactions=function(){
        element(by.ngClick(obj.Customer.locators.transaction)).click();
    }
    this.gotoDeposit=function(){
        element(by.ngClick(obj.Customer.locators.deposit)).click();
    }
    this.gotoWithdrawl=function(){
        element(by.ngClick(obj.Customer.locators.withdrawl)).click();
    }
    this.loggedinUserName=function(){
        return element(by.xpath(obj.Customer.locators.userNameTxt)).getText();
    }
    this.accountNo=function(){
        element(by.xpath(obj.Customer.locators.accountNo));
    }
    this.selectandVerifyAccNum=function(accNo){
        mySelect.selectByText(accNo);
        browser.sleep(2000);
        expect(element(by.xpath(obj.Customer.locators.accountNo)).getText()).toEqual(accNo);
    }
    this.amountDepositinput=function(amt){
        element(by.xpath(obj.Customer.locators.amountDepositInput)).sendKeys(amt);
    }
    this.DepositbtnClick=function(){
        element(by.css(obj.Customer.locators.DepositBtn)).click();
    }
    this.validateTransTable=function(){
        var amount = element(by.xpath("//*[@id='anchor0']//td[2]"));
        var transType = element(by.xpath("//*[@id='anchor0']//td[3]"))
        amount.getText().then(function(text){
            console.log("first Name:"+text);
            expect(text).toEqual(obj.Customer.values.amountToBeDeposit);
        });
        transType.getText().then(function(text){
            console.log("first Name:"+text);
            expect(text).toEqual('Credit');
        });
        
    }




};
module.exports=new CustomerTransactions();