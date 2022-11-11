const ActionHelper = require('wdio-common/helpers/components/action-helper.js');
const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');
const Pages = require('../../pages');
const walletData = './test/resources/files/walletData.json';

class WelcomeActions {

    async launchApp() {
        await ActionHelper.launchApp();
        await ActionHelper.switchToNativeContext();
        await ActionHelper.pause();
    }

    async launchFreshApp() {
        await ActionHelper.launchApp();
        // await ActionHelper.launchFreshApp();
        await ActionHelper.switchToNativeContext();
        await ActionHelper.pause();
    }

    async createWallet() {
        // TODO: click if present
        // await ActionHelper.click(Pages.welcomePage.buttonOK);
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
        await ActionHelper.waitForDisplayed(Pages.welcomePage.masterKeyTitle, 3000);
    }

    async storeMasterKey() {
        const masterKey = [];
        let wordList = '';
        let wordText1 = '';
        let wordText2 = '';
        let wordText3 = '';
        for (let i = 1; i <= 8; i++) {
            wordList = await $$(Pages.welcomePage.mnemonic);
            wordText1 = await ActionHelper.getText(wordList[0]);
            wordText2 = await ActionHelper.getText(wordList[1]);
            wordText3 = await ActionHelper.getText(wordList[2]);
            masterKey.push(wordText1, wordText2, wordText3);
            await ActionHelper.click(Pages.welcomePage.rightNavigationArrow);
        }
        FilesHelper.editJsonByKey(walletData, "masterKey", masterKey);
    }
}

module.exports = WelcomeActions;
