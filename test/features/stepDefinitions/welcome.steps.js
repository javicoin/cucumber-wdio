const {Given, When, Then} = require("@cucumber/cucumber");
const Pages = require('../../src/pages');

Given(/^I launch the app$/, async function () {
    await Pages.basePage.launchApp();
});

Given(/^I open the RSK wallet for the first time$/, async function () {
	await Pages.basePage.launchFreshApp();
});

When(/^I create a new wallet$/, async function () {
	// let pageSource = await driver.getPageSource();
	// console.log(pageSource);
	await Pages.welcomePage.createWallet();
});

Given(/^I navigate to IOV website$/,async function () {
	await browser.url('https://www.iovlabs.org/');
});
