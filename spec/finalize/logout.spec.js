'use strict';

exports.start = function(){

    var loginUserPage = require('../../page/loginUser.page.js');
    var userData = require('../../data/userData.json');


    describe('Login and closing popups - ', function () {

        beforeEach(function () {
            isAngularSite(false);
        });

        it('log out the page', function () {
            loginUserPage.userLogout();
        });

    });
};