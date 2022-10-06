const {config} = require('./mobile.wdio.bs.conf');
const IosInfo = require('./ios.device.info');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        'appium:automationName': 'XCUITest',
        'appium:deviceName': IosInfo.deviceName(),
        'appium:platformVersion': IosInfo.platFormVersion(),
        'appium:bundleId':'co.rsk.rifwallet.test',
        //'appium:app': path.resolve(`./test/resources/apps/${IosInfo.appName()}`),
        'appium:noReset': 'false',
        'appium:fullReset': 'false',
        // 'appium:printPageSourceOnFindFailure': 'true',
        // 'appium:isHeadless': 'true',
        'appium:autoDismissAlerts': 'true'
    }
];

config.cucumberOpts.tagExpression = '@ios';// pass tag to run tests specific to ios

exports.config = config;
