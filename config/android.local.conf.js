const {config} = require('./mobile.wdio.local.conf');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:automationName': 'UIAutomator2',
        'appium:deviceName': 'Pixel_5_API_33',
        'appium:platformVersion': '12',
        'appium:appPackage':'com.swallet',
        'appium:appActivity':'com.swallet.MainActivity',
        // 'appium:app': path.resolve('./test/resources/apps/app-release_swallet.apk'),
        'appium:noReset': 'false',
        'appium:fullReset': 'false',
        'appium:autoGrantPermissions': 'true',
        'appium:autoDismissAlerts': 'true',
        // 'appium:printPageSourceOnFindFailure': 'true',
        // 'appium:isHeadless': 'true'
    }
];

config.cucumberOpts.tagExpression = '@android'; // pass tag to run tests specific to android

exports.config = config;
