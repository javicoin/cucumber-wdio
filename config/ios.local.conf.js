const {config} = require('./mobile.wdio.local.conf');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        'appium:automationName': 'XCUITest',
        'appium:deviceName': 'iPhone 13',
        'appium:platformVersion': '15.2',
        'appium:bundleId':'co.rsk.rifwallet.test',
        //'appium:app': path.resolve('./test/resources/apps/sWallet.app'),
        'appium:noReset': 'false',
        'appium:fullReset': 'false',
        // 'appium:printPageSourceOnFindFailure': 'true',
        // 'appium:isHeadless': 'true',
        'appium:autoDismissAlerts': 'true'
    }
];

config.cucumberOpts.tagExpression = '@ios';// pass tag to run tests specific to ios

exports.config = config;
