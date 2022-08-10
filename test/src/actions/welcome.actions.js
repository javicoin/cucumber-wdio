const ActionHelper = require('../helpers/actionHelper');
//const platform = browser.capabilities.platformName.toLowerCase();
//require(`../pages/${platform}/welcome.page.js`);
require('chai').should();

class WelcomeActions {

    getLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../pages/${platform}/welcome.page.js`);
    }

    async launchApp() {
        await ActionHelper.launchApp();
        await ActionHelper.switchToNativeContext();
        await ActionHelper.pause();
    }

    async launchFreshApp() {
        await ActionHelper.launchApp();
        //await ActionHelper.launchFreshApp();
        await ActionHelper.switchToNativeContext();
        await ActionHelper.pause();
    }

    async createWallet() {
        await ActionHelper.click(this.getLocator().createWallet);
        await this.skipOnboarding();
        await this.storeMasterKey();
    }

    async importWallet() {
        await ActionHelper.click(this.getLocator().importWallet);
    }

    async skipOnboarding() {
        await ActionHelper.click(this.getLocator().secureNow);
        await ActionHelper.click(this.getLocator().rightNavigationArrow);
        await ActionHelper.click(this.getLocator().rightNavigationArrow);
        await ActionHelper.click(this.getLocator().rightNavigationArrow);
    }

    async storeMasterKey() {
        // TODO: needs Android/iOS splitting
        await ActionHelper.waitForElement(this.getLocator().masterKey, 3000);
        const masterKey = await ActionHelper.getText(this.getLocator().masterKey);
        console.log("Master key: " + masterKey);
    }
}

module.exports = WelcomeActions;
