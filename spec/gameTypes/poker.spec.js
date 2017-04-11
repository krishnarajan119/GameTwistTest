'use strict';

var navMenuPage = require('../../page/navigationMenu.page.js');
var gameTwistPage = require('../../page/gameTwist.home.page.js');
var testData = require('../../data/userData.json');


exports.start = function(){
    describe('Poker Game Page - ', function () {
        beforeEach(function () {
            isAngularSite(false);
        });
        it('Goto and Verify the Poker Games Page', function () {
            navMenuPage.goToPokerGamesPage();
            browser.driver.wait(gameTwistPage.checkCurrentURL(testData.urls.pokerPage), 2000);
            browser.driver.sleep(1000);
        });
    });
};