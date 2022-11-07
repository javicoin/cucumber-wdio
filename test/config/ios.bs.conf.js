const {config} = require('./mobile.wdio.bs.conf');
const IosInfo = require('./ios.device.info');

config.capabilities = [
    {
        // Appium capabilities
        platformName: 'iOS',
        'appium:deviceName': IosInfo.deviceName(),
        'appium:platformVersion': IosInfo.platFormVersion(),
        'appium:bundleId':'co.rsk.rifwallet.test',
        'appium:autoDismissAlerts': 'true',
        // bstack requirements   
        'bstack:options' : {
            "appiumVersion" : "2.0.0",
            "projectName" : "RIF Wallet iOS Project",
            "buildName" : "Webdriverio iOS",
            "local" : "true",
            "debug" : "true",
            "networkLogs" : "true",
            "deviceLogs" : "true"
        },
    }
];

config.cucumberOpts.tagExpression = '@ios';// pass tag to run tests specific to ios

exports.config = config;
