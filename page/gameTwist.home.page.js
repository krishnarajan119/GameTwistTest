'use strict';

var navMenuPage = require('../page/navigationMenu.page.js');

var GameTwistHome = function(){};

GameTwistHome.prototype = Object.create({},{
    gameTwistLogo: {
        get: function () {
            return browser.driver.findElement(by.css('a.branding__logo'));
        }
    },
    registerButton: {
        get: function () {
            return browser.driver.findElement(by.css('a[href="/en/registration/"]'));
        }
    },
    registerNewUser:{
        value: function () {
            return this.registerButton.isDisplayed();
        }
    },
    checkGameTwistLogo:{
        value: function () {
            return this.gameTwistLogo.isDisplayed();
        }
    },
    checkCurrentURL: {
        value: function (urlValue) {
            return browser.driver.getCurrentUrl().then(function (value) {
                return urlValue == value;
            });
        }
    }

});

module.exports = new GameTwistHome();