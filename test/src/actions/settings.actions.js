const ActionHelper = require('../helpers/actionHelper');
require('chai').should();

class SettingsActions {

    getLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../pages/${platform}/settings.page.js`);
    }

    async verifySettingsPageLoaded() {
        await ActionHelper.waitForElement(this.getLocator().settingsTitle, 4);
        await ActionHelper.waitForElement(this.getLocator().optionBTC, 4);
        await ActionHelper.waitForElement(this.getLocator().optionWinners, 4);
        await ActionHelper.waitForElement(this.getLocator().optionLosers, 4);
    }
}

module.exports = SettingsActions;
