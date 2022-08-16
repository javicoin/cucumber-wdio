const ActionHelper = require('../../helpers/actionHelper');
const Actions = require('../../actions');
const Pages = require('../../pages');
const AndroidWelcomeActions = require('../android/welcome.actions');
require('chai').should();

class WelcomeActions extends AndroidWelcomeActions {

    async storeMasterKey() {
        // TODO: needs Android/iOS splitting
        await ActionHelper.waitForElement(Pages.welcomePage.masterKey, 3000);
        const masterKey = await ActionHelper.getText(Pages.welcomePage.masterKey);
        console.log("Master key 1: " + masterKey);
    }
}

module.exports = WelcomeActions;
