
var alertFunctionality=function(){
    this.alertaccept=function(){
        var alertDialog = browser.switchTo().alert();
        alertDialog.accept();
    };
    this.getAlertText=function(){
        var text;
        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){
            console.log(text);
        })
        return text;
    }



};
module.exports=new alertFunctionality()