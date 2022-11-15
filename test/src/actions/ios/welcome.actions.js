const AndroidWelcomeActions = require('../android/welcome.actions');
const ActionHelper = require('wdio-common/helpers/components/action-helper.js');
const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');
const Pages = require('../../pages');
const walletData = './test/resources/files/walletData.json';

class WelcomeActions extends AndroidWelcomeActions {

    async storeMasterKey() {
        const masterKey = [];
        let wordList = '';
        let wordText1 = '';;
        let wordText2 = '';
        let wordText3 = '';
        for (let i = 1; i <= 8; i++) {
            wordList = await $$(Pages.welcomePage.mnemonic);
            wordText1 = (await ActionHelper.getText(wordList[0])).split(' ')[1];
            wordText2 = (await ActionHelper.getText(wordList[1])).split(' ')[1];
            wordText3 = (await ActionHelper.getText(wordList[2])).split(' ')[1];
            // console.log(`Word${1+3*(i-1)} = ${wordText1}\n`);
            // console.log(`Word${2+3*(i-1)} = ${wordText2}\n`);
            // console.log(`Word${3+3*(i-1)} = ${wordText3}\n`);
            masterKey.push(wordText1, wordText2, wordText3);
            await ActionHelper.click(Pages.welcomePage.rightNavigationArrow);
        }
        FilesHelper.editJsonByKey(walletData, "masterKey", masterKey);
    }
}

module.exports = WelcomeActions;
