const ActionHelper = require('../../helpers/actionHelper');
// const Actions = require('../../actions');
const Pages = require('../../pages');
const AndroidWelcomeActions = require('../android/welcome.actions');
// require('chai').should();

class WelcomeActions extends AndroidWelcomeActions {

    async storeMasterKey() {
        // TODO: might need Android/iOS splitting
        console.log("Master key\n");
        let wordList = '';
        let wordText1 = '';;
        let wordText2 = '';
        let wordText3 = '';
        for (let i = 1; i <= 8; i++) {
            wordList = await $$(Pages.welcomePage.wordList);
            wordText1 = (await ActionHelper.getText(wordList[0])).split(' ')[1];
            wordText2 = (await ActionHelper.getText(wordList[1])).split(' ')[1];
            wordText3 = (await ActionHelper.getText(wordList[2])).split(' ')[1];
            console.log(`Word${1+3*(i-1)} = ${wordText1}\n`);
            console.log(`Word${2+3*(i-1)} = ${wordText2}\n`);
            console.log(`Word${3+3*(i-1)} = ${wordText3}\n`);
            await ActionHelper.click(Pages.welcomePage.rightNavigationArrow);
            // TODO: store words into json db
        }
    }
}

module.exports = WelcomeActions;
