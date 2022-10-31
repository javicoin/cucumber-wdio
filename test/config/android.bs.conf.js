const {config} = require('./mobile.wdio.bs.conf');
// Appium capabilities
config.capabilities = [
    {
        project: "RIF Wallet Android Project",
        build: 'Webdriverio Android',
        platformName: 'Android',
        name: 'first_test',
        device: "Google Pixel 5",
        os_version: "12.0",
        // bs requirement
        //app: 'WalletApp',
        app: 'bs://0c778afd56cfab653b188726ac2c4d9351053f8f',
        'bstack:options' : {
            "appiumVersion" : "2.0.0"
        },
        'browserstack.debug': true,
        'browserstack.networkLogs': true,
        'browserstack.appiumLogs': true,
        'browserstack.deviceLogs': true
    }
];

config.cucumberOpts.tagExpression = '@android'; // pass tag to run tests specific to android

exports.config = config;
