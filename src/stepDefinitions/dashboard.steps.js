const {Then} = require('cucumber');

const DashboardActions = require('../actions/dashboard.actions');
const dashboardActions = new DashboardActions();

Then(/^I verify Dashboard page loaded$/, async function () {
    await dashboardActions.verifyDashboardPageLoaded();
});
