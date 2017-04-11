'use strict';

var navMenuPage = require('../page/navigationMenu.page.js');
var userData = require('../data/userData.json');

function LoginUser(){
    this._nickNameField = browser.driver.findElement(by.id('login-nickname-ctl00$cphHeader$ctl00'));
    this._passwordField = browser.driver.findElement(by.id('login-password'));
    this._loginButtton = browser.driver.findElement(by.xpath('//button[@class="btn btn--primary"]/span[text()="LOG IN"]'));
    this._userMenu = browser.driver.findElement(by.xpath('//div[@class="flyout my-gt-menu__flyout"]//span[@class="nickname"]'));
    this._logoutButton = browser.driver.findElement(by.xpath('//div[@class="flyout my-gt-menu__flyout"]//button[@class="btn--link js-logout"]'));
    this._userName = browser.driver.findElement(by.xpath('//li[@class="branding__user"]//span[@class="nickname"]'));
}

LoginUser.prototype.verifyNickNameField = function () {
    return this._nickNameField.isDisplayed();
};

LoginUser.prototype.verifyPasswordField = function () {
    return this._passwordField.isDisplayed();
};

LoginUser.prototype.verifyLoginButtonAvailable = function () {
    return this._loginButtton.isDisplayed();
};

LoginUser.prototype.userLogin = function () {
    this._nickNameField.sendKeys(userData.userInfo.validUserDetails.userName);
    this._passwordField.sendKeys(userData.userInfo.validUserDetails.password);
    this._loginButtton.click();
};

LoginUser.prototype.userConfirm = function () {
    return this._userName.isDisplayed();
};


LoginUser.prototype.userLogout = function () {
    browser.driver.actions().mouseMove(browser.driver.findElement(by.xpath('//div[@class="flyout my-gt-menu__flyout"]//span[@class="nickname"]'))).perform().then(function(){
        browser.driver.findElement(by.xpath('//div[@class="flyout my-gt-menu__flyout"]//button[@class="btn--link js-logout"]')).click();
    });
};

module.exports = new LoginUser();