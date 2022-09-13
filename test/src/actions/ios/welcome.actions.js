const ActionHelper = require('../../helpers/actionHelper');
// const Actions = require('../../actions');
const Pages = require('../../pages');
const AndroidWelcomeActions = require('../android/welcome.actions');
// require('chai').should();

class WelcomeActions extends AndroidWelcomeActions {

    async storeMasterKey() {
        // TODO: needs Android/iOS splitting
        await ActionHelper.waitForElement(Pages.welcomePage.masterKey, 3000);
        const masterKey = await ActionHelper.getText(Pages.welcomePage.masterKey);
        const masterKey1 = await ActionHelper.getText(Pages.welcomePage.masterKey1);
        console.log("Master key: " + masterKey);
        console.log("Master key 1: " + masterKey1);
    }
}

module.exports = WelcomeActions;
