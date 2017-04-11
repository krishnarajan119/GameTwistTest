'use strict';

var navMenuPage = require('../page/navigationMenu.page.js');

var ChangeLanguage = function (){};

ChangeLanguage.prototype = Object.create({},{
    currentSelectedLanguage: {
        get: function () {
            return browser.driver.findElement(by.xpath("//div[@class = 'branding__content float--right authenticated']//span[@class = 'select-language__button']"));
        }
    },
    germanLanguage: {
        get: function () {
            return browser.driver.findElement(by.xpath("//div[@class = 'branding__content float--right authenticated']//a[@data-lang='de']"));
        }
    },
    englishLanguage: {
        get: function () {
            return browser.driver.findElement(by.xpath("//div[@class = 'branding__content float--right authenticated']//a[@data-lang='en']"));
        }
    },
    selectGermanLanguage: {
        value: function () {
            return this.germanLanguage.click();
        }
    },
    selectEnglishLanguage: {
        value: function () {
            return this.englishLanguage.click();
        }
    }
});

module.exports = new ChangeLanguage();