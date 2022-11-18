const ActionHelper = require('wdio-common/helpers/components/action-helper.js');
const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');


class BasePage {


btnCreateWallet () { return $('~newWallet') }
btnImportWallet () { return $('~importWallet') }
btnSecureNow () { return $('~secureNow') }
btnRightNavigationArrow () { return $('~buttonRight') }

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
    // TODO: click alert if present
    // await this.buttonOK().click();
    await this.btnCreateWallet().click();
    await this.skipOnboarding();
    await this.storeMasterKey();
}

async importWallet() {
    await this.btnImportWallet().click();
}

async skipOnboarding() {
    await this.btnSecureNow().click();
    await this.btnRightNavigationArrow().click({waitForStatic: true});
    await this.btnRightNavigationArrow().click({waitForStatic: true});
    await this.btnRightNavigationArrow().click({waitForStatic: true});
    await this.textMasterKeyTitle().getText({waitForDisplayed: true});
}
}


module.exports = BasePage;