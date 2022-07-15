const {config} = require('./mobile.wdio.conf');
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
        'appium:app': path.resolve(`./apps/${AndroidInfo.appName()}`)
    }
];

config.cucumberOpts.tagExpression = '@android'; // pass tag to run tests specific to android

exports.config = config;
