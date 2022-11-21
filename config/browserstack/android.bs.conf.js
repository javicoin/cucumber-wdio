const {config} = require('./mobile.wdio.bs.conf');

config.capabilities = [
    {
        // Appium capabilities
        platformName : "android",
        "appium:deviceName" : "Google Pixel 5",
        "appium: platformVersion" : "12.0",
        "appium:app" : "bs://0c778afd56cfab653b188726ac2c4d9351053f8f",
        'appium:autoDismissAlerts': 'true',
        // bstack requirements   
        'bstack:options' : {
            "appiumVersion" : "2.0.0",
            "projectName" : "RIF Wallet Android Project",
            "buildName" : "Webdriverio Android",
            "local" : "true",
            "debug" : "true",
            "networkLogs" : "true",
            "deviceLogs" : "true"
        },
    }
];

config.cucumberOpts.tagExpression = '@android'; // pass tag to run tests specific to android

exports.config = config;
