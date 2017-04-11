'use strict';

var navMenuPage = require('../page/navigationMenu.page.js');
var gameTwistPage = require('../page/gameTwist.home.page.js');

function PopUpHandler(){
    this._acceptCookie = browser.driver.findElement(by.xpath("//h2[@class = 'message__header']"));
    this._oKAcceptCookie = browser.driver.findElement(by.xpath("//button[@class = 'btn btn--secondary js-cookie-accept-btn']"));
}

PopUpHandler.prototype.acceptCookie = function () {
    this._oKAcceptCookie.click();
};

PopUpHandler.prototype.closeTwister = function () {
    browser.driver.findElements(by.xpath("//div[@class = 'wheel-start pulse']")).then( function(result) {
        //console.log("result of find element is "+result.length);
        if(result.length) {
            browser.driver.findElement(by.xpath("//div[@class = 'wheel-start pulse']")).click().then(function () {
                browser.driver.sleep(10000);
                browser.driver.findElement(by.xpath("//button[@class = 'btn WOF-close pulse']")).click().then(function () {
                    navMenuPage.goToHomePage();
                    browser.driver.sleep(2000);
                });
            });
        }
        else{
            navMenuPage.goToHomePage();
            browser.driver.sleep(2000);

        }
        });

};


module.exports = new PopUpHandler();