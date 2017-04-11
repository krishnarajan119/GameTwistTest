'use strict';

//Navigation page objects
var navMenuPage = require('../page/navigationMenu.page.js');

//Test Cases written in the spec files
var loginSpec = require('../spec/intialize/login.spec.js');
var slotSpec = require('../spec/gameTypes/slots.spec.js');
var bingoSpec = require('../spec/gameTypes/bingo.spec.js');
var casinoSpec = require('../spec/gameTypes/casino.spec.js');
var pokerSpec = require('../spec/gameTypes/poker.spec.js');
var searchSlotGameSpec = require('../spec/searchGames/searchSlot.spec.js');
var changeLanguage = require('../spec/changeLanguage/changeLanguage.spec');
var logoutSpec = require('../spec/finalize/logout.spec.js');

describe('Game Twist Main Page - ', function () {
    beforeEach(function () {
        isAngularSite(false);
    });

    loginSpec.start();
    slotSpec.start();
    bingoSpec.start();
    casinoSpec.start();
    pokerSpec.start();
    searchSlotGameSpec.start();
    changeLanguage.start();
    logoutSpec.start();

    });
