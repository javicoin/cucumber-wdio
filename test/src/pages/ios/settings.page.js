// TODO: this class is just an example to ilustrate usage
class SettingsPage{
    constructor(){
        this.settingsTitle =
            '//XCUIElementTypeStaticText[@name="settings-title"]';
        this.optionBTC =
            '~checkBTC';
        this.optionWinners =
            '~Only show winners';
        this.optionLosers =
            '~Only show losers';
    }
}

module.exports = new SettingsPage();
