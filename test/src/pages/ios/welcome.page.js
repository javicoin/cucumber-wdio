const AndroidWelcomePage = require('../android/welcome.page');

class WelcomePage extends AndroidWelcomePage {
    masterKeyTitle =
        '~Your Master Key';
    wordList =
        '//XCUIElementTypeStaticText[contains(@label,"word")]';

    wordSuggestion = '~selectSuggestion0';

    typeNemonic(position) {
        return `(//XCUIElementTypeTextField[@name="input.wordInput"])[${position}]`;
    }
    pin(num) {
        return `//XCUIElementTypeOther[@name="keypad_${num}"]`;
    }



    landing ='(//XCUIElementTypeOther[@name="0x4cf3...Fa0e"])[1]';
}

module.exports = WelcomePage;