'use strict';

var navMenuPage = require('../page/navigationMenu.page.js');

var SearchGames = function (){};

SearchGames.prototype = Object.create({},{
    searchBox: {
        get:function(){
            return browser.driver.findElement(by.id('ctl00_cphNavAndSearch_ctl01_gameSearch'));
        }
    },
    getCountElement: {
        get:function() {
            return browser.driver.findElement(by.xpath('//li[@class = "game-search__results-sum grid__item one-whole results--sum"]'));
        }
    },
    getThePageNumber: {
        get:function() {
            return browser.driver.findElement(by.xpath('//button[@data-num="3"]'));
        }
    },
    getGameToOpen: {
        get:function () {
            return browser.driver.findElement(by.xpath('//div[@class = "game-search"]//ul/li[3]'));
        }
    },
    getGameURL: {
        get:function () {
            return browser.driver.findElement(by.xpath('//div[@class = "game-search"]//ul/li[3]/a'));
        }
    },
    getGameName: {
        get: function () {
            return browser.driver.findElement(by.xpath('//div[@class="heading-wrapper"]//h1'));
        }
    },
    sendSearchKey: {
        value: function (searchKey) {
            return this.searchBox.sendKeys(searchKey);
        }
    },
    clickSomePage: {
        value: function () {
            return this.getThePageNumber.click();
        }
    },
    openGame: {
        value: function () {
            return this.getGameToOpen.click();
        }
    }
});

module.exports = new SearchGames();