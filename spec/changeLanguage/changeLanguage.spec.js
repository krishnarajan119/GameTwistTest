'use strict';

var changeLanguagePage = require('../../page/changeLanguage.page.js');
var gameTwistPage = require('../../page/gameTwist.home.page.js');
var testData = require('../../data/userData.json');

exports.start = function(){
    describe('Change the Language', function (){
        beforeEach(function () {
            isAngularSite(false);
        });

        it('check the current language', function () {
            browser.wait(gameTwistPage.checkCurrentURL(testData.urls.homePageEN), 5000);
        });

        it('change the desired language', function () {
            //changeLanguagePage.changeToOtherLanguage();
            browser.driver.actions().mouseMove(changeLanguagePage.currentSelectedLanguage).perform().then(function(){
                changeLanguagePage.selectGermanLanguage();
            });
            browser.driver.sleep(5000);
            browser.wait(gameTwistPage.checkCurrentURL(testData.urls.homePageDE), 5000);
        });

        it('change the desired language', function () {
            browser.driver.actions().mouseMove(changeLanguagePage.currentSelectedLanguage).perform().then(function(){
                changeLanguagePage.selectEnglishLanguage();
            });
            browser.driver.sleep(5000);
            browser.wait(gameTwistPage.checkCurrentURL(testData.urls.homePageEN), 5000);
        });

    });
};