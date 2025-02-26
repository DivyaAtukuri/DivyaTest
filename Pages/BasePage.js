var BasePage=function(){
    this.navigatetoURL=function(url){
        browser.get(url);
    };
    this.pageTitle=function(){
        return browser.getTitle();
    }
};
module.exports=new BasePage();