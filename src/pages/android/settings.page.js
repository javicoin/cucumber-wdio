class SettingsPage{
    constructor(){
        this.settingsTitle =
            '//android.widget.TextView[@content-desc="settings-title"]';
        this.optionBTC =
            '//android.widget.TextView[@resource-id="checkBTC"]';
        this.optionWinners =
            '//android.widget.TextView[@resource-id="checkWinners"]';
        this.optionLosers =
            '//android.widget.TextView[@resource-id="checkLosers"]';
    }
}

module.exports = new SettingsPage();
