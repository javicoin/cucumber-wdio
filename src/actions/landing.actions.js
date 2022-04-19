const ActionHelper = require('../helpers/actionHelper');
require('chai').should();

class LandingActions {

    getLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../pages/${platform}/landing.page.js`);
    }

    async launchApp() {
        await ActionHelper.launchApp();
        await ActionHelper.switchToNativeContext();
        await ActionHelper.pause(2);
    }

    async openDashboardTab() {
        await ActionHelper.click(this.getLocator().dashboardTab);
    }

    async openSettingsTab() {
        await ActionHelper.click(this.getLocator().settingsTab);
    }
}

module.exports = LandingActions;
