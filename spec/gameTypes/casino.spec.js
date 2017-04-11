'use strict';

var navMenuPage = require('../../page/navigationMenu.page.js');
var gameTwistPage = require('../../page/gameTwist.home.page.js');
var testData = require('../../data/userData.json');


exports.start = function(){
    describe('Casino Game Page - ', function () {
        beforeEach(function () {
            isAngularSite(false);
        });
        it('Goto and Verify the Casino Games Page', function () {
            navMenuPage.goToCasinoGamesPage();
            browser.driver.wait(gameTwistPage.checkCurrentURL(testData.urls.casinoPage), 2000);
            browser.driver.sleep(1000);
        });
    });
};