const {Given, When, Then,} = require("@cucumber/cucumber");
const Actions = require('../../src/actions');

Given(/^I launch the app$/, async function () {
    await Actions.welcomeActions.launchApp();
});

Given(/^I open the RSK wallet for the first time$/, async function () {
	await Actions.welcomeActions.launchFreshApp();
});

When(/^I create a new wallet$/, async function () {
	// let pageSource = await driver.getPageSource();
	// console.log(pageSource);
	await Actions.welcomeActions.createWallet();
});

Given(/^I navigate to IOV website$/,async function () {
	await browser.url('https://www.iovlabs.org/');
});

When(/^I proceed to import an existing wallet$/, async function () {
	await Actions.welcomeActions.importWallet();
});

Then(/^I input the master key of an existing wallet$/, async function () {
	await Actions.welcomeActions.addMasterKey();
	await Actions.welcomeActions.setPin();
});

Then(/^I verify I am able to recover the existing wallet$/, async function () {
	await Actions.welcomeActions.home();
});


