const {Given, When, Then} = require('cucumber');

const WelcomeActions = require('../actions/welcome.actions');
const welcomeActions = new WelcomeActions();

Given(/^I launch the app$/, async function () {
    await welcomeActions.launchApp();
});

Given(/^I open the RSK wallet for the first time$/, async function () {
	await welcomeActions.launchFreshApp();
});

When(/^I create a new wallet$/, async function () {
	await welcomeActions.createWallet();
});

When(/^I open Dashboard tab$/, async function () {
    await welcomeActions.openDashboardTab();
});

When(/^I open Settings tab$/, async function () {
    await welcomeActions.openSettingsTab();
});

Given(/^I navigate to IOV website$/,async function () {
	await browser.url('https://www.iovlabs.org/');
});
