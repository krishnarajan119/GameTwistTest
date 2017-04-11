'use strict';

var navMenuPage = require('../../page/navigationMenu.page.js');
var gameTwistPage = require('../../page/gameTwist.home.page.js');
var testData = require('../../data/userData.json');


exports.start = function(){

    describe('Slots Game Page', function () {
        beforeEach(function () {
            isAngularSite(false);
        });
        it('Goto and Verify the Slot Games Page', function () {
            navMenuPage.goToSlotGamesPage();
            browser.driver.wait(gameTwistPage.checkCurrentURL(testData.urls.slotPage), 2000);
            browser.driver.sleep(1000);
        });
    });
};