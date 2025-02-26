require('../util/customlocators.js');

var HomePage=function(){
    this.sampleForm=function(){
        element(by.partialLinkText("Sample")).click();
    };

    this.loginasCustomer=function(){
        element(by.ngClick("customer()")).click();
    };
    this.loginasBankManger=function(){
        element(by.ngClick("manager()")).click();
    };
    this.LifeTimeMem=function(){
        element(by.linkText("Lifetime Membership")).click();
    };
};
module.exports=new HomePage();