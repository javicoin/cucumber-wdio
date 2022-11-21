const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');

class WelcomePage {

    get btnOK () { return $('android=new UiSelector().text("OK").className("android.widget.TextView")') }
    get btnCreateWallet () { return $('~newWallet') }
    get btnImportWallet () { return $('~importWallet') }
    get btnSecureNow () { return $('~secureNow') }
    get btnRightNavigationArrow () { return $('~buttonRight') }
    get textMasterKeyTitle () { return $('android=new UiSelector().text("Your Master Key").className("android.widget.TextView")') }
    get listMnemonic () { return '//android.widget.TextView[contains(@content-desc,"word")]' }
    // Example of dynamic locator
    // listMnemonic(position) {
    //   return `//XCUIElementTypeTextField[@name="input.wordInput"][${position}]`;
    // }            

    async createWallet() {
        // TODO: click alert if present
        // await this.buttonOK().click();
        await this.btnCreateWallet.click();
        await this.skipOnboarding();
        await this.storeMasterKey();
    }

    async importWallet() {
        await this.btnImportWallet().click();
    }

    async skipOnboarding() {
        await this.btnSecureNow.click();
        await this.btnRightNavigationArrow.click();
        await this.btnRightNavigationArrow.click();
        await this.btnRightNavigationArrow.click({waitForStatic: true});
        await this.textMasterKeyTitle.getText({waitForDisplayed: true});
    }

    async storeMasterKey() {
        const masterKey = [];
        let wordList = '';
        let wordText1 = '';;
        let wordText2 = '';
        let wordText3 = '';
        for (let i = 1; i <= 8; i++) {
            wordList = await $$(this.listMnemonic);
            wordText1 = await wordList[0].getText();
            wordText2 = await wordList[1].getText();
            wordText3 = await wordList[2].getText();
            masterKey.push(wordText1, wordText2, wordText3);
            await this.btnRightNavigationArrow.click();
        }        
        const jsonFile = FilesHelper.createJsonFile('walletData');
        FilesHelper.editJsonByKey(jsonFile, 'masterKey', masterKey);
    }
}

module.exports = WelcomePage;
