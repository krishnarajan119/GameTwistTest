'use strict';

var navMenuPage = require('../../page/navigationMenu.page.js');
var gameTwistPage = require('../../page/gameTwist.home.page.js');
var testData = require('../../data/userData.json');

exports.start = function(){

    describe('Bingo Game Page - ', function () {
        beforeEach(function () {
            isAngularSite(false);
        });

        it('Goto and Verify the Bingo Games Page', function () {
            navMenuPage.goToBingoGamesPage();
            browser.driver.wait(gameTwistPage.checkCurrentURL(testData.urls.bingoPage), 2000);
            browser.driver.sleep(1000);
        });
    });
};