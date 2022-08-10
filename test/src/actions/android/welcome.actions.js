const ActionHelper = require('../../helpers/actionHelper');
const Actions = require('../../actions');
const Pages = require('../../pages');
require('chai').should();

class WelcomeActions {

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
        await ActionHelper.click(Pages.welcomePage.createWallet);
        await this.skipOnboarding();
        await this.storeMasterKey();
    }

    async importWallet() {
        await ActionHelper.click(Pages.welcomePage.importWallet);
    }

    async skipOnboarding() {
        await ActionHelper.click(Pages.welcomePage.secureNow);
        await ActionHelper.click(Pages.welcomePage.rightNavigationArrow);
        await ActionHelper.click(Pages.welcomePage.rightNavigationArrow);
        await ActionHelper.click(Pages.welcomePage.rightNavigationArrow);
    }

    async storeMasterKey() {
        // TODO: needs Android/iOS splitting
        await ActionHelper.waitForElement(Pages.welcomePage.masterKey, 3000);
        const masterKey = await ActionHelper.getText(Pages.welcomePage.masterKey);
        console.log("Master key: " + masterKey);
    }
}

module.exports = WelcomeActions;
