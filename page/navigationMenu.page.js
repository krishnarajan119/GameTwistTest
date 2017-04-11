'use strict';

var gameTwistPage = require('../page/gameTwist.home.page.js');
var userData = require('../data/userData.json');

function NavigationMenu(){
    this._gameTwistLogo = browser.driver.findElement(by.xpath('//a[@class = "branding__logo"]'));
    this._slotsGamePage = browser.driver.findElement(by.xpath('//a[@href="/en/games/slots/"]'));
    this._bingoGamePage = browser.driver.findElement(by.xpath('//a[@href="/en/games/bingo/"]'));
    this._casinoGamePage = browser.driver.findElement(by.xpath('//a[@href="/en/games/casino/"]'));
    this._pokerGamePage = browser.driver.findElement(by.xpath('//a[@href="/en/games/poker/"]'));
}

NavigationMenu.prototype.goToHomePage = function(){
    browser.driver.findElement(by.xpath('//a[@class = "branding__logo"]')).click();
    gameTwistPage.checkCurrentURL(userData.urls.homePageEN);
};

NavigationMenu.prototype.goToSlotGamesPage = function () {
    //this._slotsGamePage.click();
    browser.driver.findElement(by.xpath('//a[@href="/en/games/slots/"]')).click();
    gameTwistPage.checkCurrentURL(userData.urls.slotPage);
};

NavigationMenu.prototype.goToBingoGamesPage = function(){
    //this._bingoGamePage.click();
    browser.driver.findElement(by.xpath('//a[@href="/en/games/bingo/"]')).click();
    gameTwistPage.checkCurrentURL(userData.urls.bingoPage);
};

NavigationMenu.prototype.goToCasinoGamesPage = function () {
    //this._casinoGamePage.click();
    browser.driver.findElement(by.xpath('//a[@href="/en/games/casino/"]')).click();
    gameTwistPage.checkCurrentURL(userData.urls.casinoPage);
};

NavigationMenu.prototype.goToPokerGamesPage = function () {
    //this._pokerGamePage.click();
    browser.driver.findElement(by.xpath('//a[@href="/en/games/poker/"]')).click();
    gameTwistPage.checkCurrentURL(userData.urls.pokerPage);
};

module.exports = new NavigationMenu();