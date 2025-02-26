/**
 * Created by Selenium on 29-12-2015.
 */
var homepage=require('../Pages/HomePage.js');
var basepage=require('../Pages/BasePage.js');
var registrationPage=require('../Pages/registrationPage.js');
var obj=require('../Objects.json');
describe("Automating Customer Login functionality",function(){
  beforeEach(function(){
    basepage.navigatetoURL(obj.url);
    browser.sleep(2000);
    homepage.sampleForm();
  });

   it("Verify the Sample form by entering all required details",function(){
        registrationPage.addAllregistrationdeatils(obj.regPage.values.fname,obj.regPage.values.lname,obj.regPage.values.email,obj.regPage.values.pwd);
  });
  it("verify the sample form without entering all fields",function(){
        registrationPage.addfewdetailsandvalidateregistrationform(obj.regPage.values.fname,obj.regPage.values.lname,obj.regPage.values.email,obj.regPage.values.pwd);
  });
});



