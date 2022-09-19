const {Given, When, Then} = require('cucumber');
const Actions = require('../../src/actions');

Given(/^I launch the app$/, async function () {
    await Actions.welcomeActions.launchApp();
});

Given(/^I open the RSK wallet for the first time$/, async function () {
	await Actions.welcomeActions.launchFreshApp();
});

When(/^I create a new wallet$/, async function () {
	await Actions.welcomeActions.createWallet();
});

Given(/^I navigate to IOV website$/,async function () {
	await browser.url('https://www.iovlabs.org/');
});
