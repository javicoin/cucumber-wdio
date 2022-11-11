const AndroidWelcomePage = require('../android/welcome.page');

class WelcomePage extends AndroidWelcomePage{
        masterKeyTitle =
            '~Your Master Key';
        mnemonic =
            '//XCUIElementTypeStaticText[contains(@label,"word")]';
}

module.exports = WelcomePage;
