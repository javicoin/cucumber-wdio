const AndroidWelcomePage = require('../android/welcome.page');
const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');
// const {WaitHelper, timeouts} = require('wdio-common/helpers/utils/wait-helper.js');
// const waitHelper = new WaitHelper();
const walletData = './test/resources/files/walletData.json';

class WelcomePage extends AndroidWelcomePage {
    
    textMasterKeyTitle () { return $('~Your Master Key') }
    listMnemonic () { return $('//XCUIElementTypeStaticText[contains(@label,"word")]') }

    async storeMasterKey() {
        const masterKey = [];
        let wordList = '';
        let wordText1 = '';;
        let wordText2 = '';
        let wordText3 = '';
        for (let i = 1; i <= 8; i++) {
            wordList = await this.listMnemonic().getElementsText();
            wordText1 = wordList[0].split(' ')[1];
            wordText2 = wordList[1].split(' ')[1];
            wordText3 = wordList[2].split(' ')[1];
            await this.btnRightNavigationArrow().click({waitForStatic: true});
        }
        FilesHelper.editJsonByKey(walletData, "masterKey", masterKey);
    }
}

module.exports = WelcomePage;
