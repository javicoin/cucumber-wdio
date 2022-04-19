const { Then } = require('cucumber');

const SettingsPage = require('../actions/settings.actions');
const settingsPage = new SettingsPage();

Then(/^I verify Settings page loaded$/, async function () {
    await settingsPage.verifySettingsPageLoaded();
});
