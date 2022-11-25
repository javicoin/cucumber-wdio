const {Then} = require("@cucumber/cucumber");
const Pages = require('../../src/pages');

Then(/^I verify I am able to recover the existing wallet$/, async function () {
	await Pages.homePage.homeValidation();
});