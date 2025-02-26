var homepage=require('../Pages/HomePage.js');
var obj=require('../Objects.json');
var basepage=require('../Pages/BasePage.js');
describe("WindowHandles",function(){
    it("window handle on linkdin",function(){
        basepage.navigatetoURL(obj.url);
        browser.sleep(2000);
        homepage.LifeTimeMem();
        element(By.xpath(obj.LifeTime.locators.linkdin)).click();
        browser.sleep(5000);
        browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]).then(function(){
                basepage.pageTitle().then(function(text){
                    console.log("linkdin site title:"+text);
                })
                expect(basepage.pageTitle()).toEqual("Sign Up | LinkedIn");
            })
        })

    })




})