const {config} = require('./mobile.wdio.conf');
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
        'appium:app': path.resolve(`./apps/${IosInfo.appName()}`)
    }
];

config.cucumberOpts.tagExpression = '@ios';// pass tag to run tests specific to ios

exports.config = config;
