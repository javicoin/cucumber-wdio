const {Given, When, Then} = require('cucumber');

const LandingActions = require('../actions/landing.actions');
const landingActions = new LandingActions();

Given(/^I launch the app$/, async function () {
    await landingActions.launchApp();
});

When(/^I open Dashboard tab$/, async function () {
    await landingActions.openDashboardTab();
});

When(/^I open Settings tab$/, async function () {
    await landingActions.openSettingsTab();
});

Given(/^I navigate to IOV website$/,async function () {
	await browser.url('https://www.iovlabs.org/');
});
