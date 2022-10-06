const {config} = require('./mobile.wdio.local.conf');
const AndroidInfo = require('./android.device.info');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        platformName: 'Android',
        maxInstances: 1,
        'appium:automationName': 'UIAutomator2',
        'appium:deviceName': AndroidInfo.deviceName(),
        'appium:platformVersion': AndroidInfo.platFormVersion(),
        'appium:appPackage':'com.swallet',
        'appium:appActivity':'com.swallet.MainActivity',
        // 'appium:app': path.resolve(`./test/resources/apps/${AndroidInfo.appName()}`),
        'appium:noReset': 'false',
        'appium:fullReset': 'false',
        'appium:autoGrantPermissions': 'true'
        // 'appium:printPageSourceOnFindFailure': 'true',
        // 'appium:isHeadless': 'true'
    }
];

config.cucumberOpts.tagExpression = '@android'; // pass tag to run tests specific to android

exports.config = config;
