'use strict';

var searchPage = require('../../page/search.page.js');
var navigateHandlePage = require('../../page/navigationMenu.page');
var testData = require('../../data/userData.json');
var gameTwistPage = require('../../page/gameTwist.home.page.js')

exports.start = function(){
    describe('Search Games Section', function () {
        beforeEach(function () {
            isAngularSite(false);
        });

        it('search the slot games', function(){
            var key = 'Slot';
            searchPage.sendSearchKey(key);
            browser.driver.sleep(2000);
            expect(searchPage.getCountElement.isDisplayed()).toBe(true);
        });

        it('count the number of games found in search', function () {
            searchPage.getCountElement.getText().then(function (gamecount) {
                //console.log('Test Value is ' + gamecount);
                var str = gamecount;
                var result = str.split("/");
                console.log('Total number of games for the search Key Slot is '+ result[1]);
            });
        });
        
        it('search, click and load the game', function () {
           searchPage.clickSomePage().then( function () {
               searchPage.getGameToOpen.getAttribute('data-name').then(function (attributeValue) {
                   //console.log('Attribute Value is '+attributeValue);
                   searchPage.getGameURL.getAttribute('href').then(function (attributeHref){
                       //console.log('Href Value is '+attributeHref);
                       searchPage.openGame();
                       browser.driver.sleep(5000);
                       browser.driver.wait(gameTwistPage.checkCurrentURL(attributeHref), 2000);
                       searchPage.getGameName.getText().then(function (textValue){
                           //console.log('Game name is '+textValue);
                           var checkGameName = textValue.indexOf(attributeValue);
                           expect(checkGameName).toBeGreaterThan(0);
                       });
                   });
               });
               browser.driver.sleep(5000);
               navigateHandlePage.goToHomePage();
               browser.driver.sleep(15000);
           });
        });
        });
};