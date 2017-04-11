'use strict';

exports.start = function(){

    var gameTwistPage = require('../../page/gameTwist.home.page.js');
    var navMenuPage = require('../../page/navigationMenu.page.js');
    var loginUserPage = require('../../page/loginUser.page.js');
    var popUpHandlePage = require('../../page/popUps.page.js');
    var userData = require('../../data/userData.json');


    describe('Login and closing popups - ', function () {

        beforeEach(function () {
            isAngularSite(false);
        });

        it('Close the Accept cookie message and check it is closed', function () {
            popUpHandlePage.acceptCookie();
        });

        it('Check the home page is opened', function () {
            expect(gameTwistPage.checkGameTwistLogo).toBeTruthy();
        });

        it('Check the nickname and password field is available in the home page', function () {
            expect(loginUserPage.verifyNickNameField()).toBeTruthy();
            expect(loginUserPage.verifyPasswordField()).toBeTruthy();
        });

        it('Check the Login and Register button is available in the home page', function () {
            expect(loginUserPage.verifyLoginButtonAvailable()).toBeTruthy();
            expect(gameTwistPage.registerNewUser).toBeTruthy();
        });

        it('Login to the site', function () {
            loginUserPage.userLogin();
            browser.driver.sleep(3000);
        });

        it('check the twister present and if so run it and close it', function () {
            browser.driver.ignoreSynchronization = true;
            popUpHandlePage.closeTwister();
        });
    });
};