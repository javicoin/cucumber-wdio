// TODO: this class is just an example to ilustrate usage
const {When, Then} = require('cucumber');
const NativeAlert = require('../../src/helpers/nativeAlerts');

const SidemenuActions = require('../../src/actions/sidemenu.actions');
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
