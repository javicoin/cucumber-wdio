const ActionHelper = require('wdio-common/helpers/components/action-helper.js');
const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');
const walletData = './test/resources/files/walletData.json';

class WelcomePage extends BasePage {

    btnOK () { return $('android=new UiSelector().text("OK").className("android.widget.TextView")') }
    textMasterKeyTitle () { return $('android=new UiSelector().text("Your Master Key").className("android.widget.TextView")') }
    listMnemonic () { return '//android.widget.TextView[contains(@content-desc,"word")]' }
    // Example of dynamic locator
    // listMnemonic(position) {
    //   return `//XCUIElementTypeTextField[@name="input.wordInput"][${position}]`;
    // }            

    async storeMasterKey() {
        const masterKey = [];
        let wordList = '';
        let wordText1 = '';;
        let wordText2 = '';
        let wordText3 = '';
        for (let i = 1; i <= 8; i++) {
            wordList = await $$(this.listMnemonic());
            wordText1 = await wordList[0].getText();
            wordText2 = await wordList[1].getText();
            wordText3 = await wordList[2].getText();
            masterKey.push(wordText1, wordText2, wordText3);
            await this.btnRightNavigationArrow().click();
        }
        FilesHelper.editJsonByKey(walletData, "masterKey", masterKey);
    }
}

module.exports = WelcomePage;
