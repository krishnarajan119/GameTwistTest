/**
 *
 ***GameTwist.com Automation Test***
 ******Krishnarajan Rajendran*******
 ********Configuration File*********
 *
 **/

require('jasmine-given');
var jasmineReporters = require('jasmine-reporters');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine2',
    seleniumPort: 4444,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['E:/greentube/spec/gameTwistMain.spec.js'],
    allScriptsTimeout: 500000,
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 400000,
        print: function() {}
    },

    capabilities:
        {
            'browserName' :'chrome',
            'chromeOptions' : {
                'args':['incognito'],
                prefs: {
                    'profile:managed_default_content_settings.notifications': 1
                }

            }

        },

    onPrepare: function () {

        global.isAngularSite = function(flag){
            browser.driver.ignoreSynchronization = !flag;
        };
        jasmine.getEnv().addReporter(
            new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                filePrefix: 'jasmine-report',
                savePath: 'protractor-result'
            }));

        browser.driver.ignoreSynchronization = true;
        browser.driver.get("https://www.gametwist.com/en/");

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true,
                displayFailuresSummary: true
            }
        }));
    }
};