const {When, Then} = require('cucumber');
const NativeAlert = require('./../helpers/nativeAlerts');

const SidemenuActions = require('../actions/sidemenu.actions');
const sidemenuActions = new SidemenuActions();

When(/^I slide out user menu$/, async function () {
    await sidemenuActions.openSideMenu();
});

When(/^I go to the ultimate answer$/, async function () {
    await sidemenuActions.goToUltimateAnswer();
});

Then(/^I verify an alert with title "([^"]*)" is shown$/, async function (title) {
    await NativeAlert.waitForIsShown(title);
});
