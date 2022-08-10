const ActionHelper = require('../helpers/actionHelper');
require('chai').should();

const CONSTANTS = {
    ANDROID: {
        TITLE: '100 coins',
    },
    IOS: {
        TITLE: 'dashboard-title',
    },
};

class DashboardActions {

    getLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../pages/${platform}/dashboard.page.js`);
    }

    async verifyDashboardPageLoaded() {
        const dashboardTitle = driver.isAndroid ? CONSTANTS.ANDROID.TITLE : CONSTANTS.IOS.TITLE;
        await ActionHelper.waitForElement(this.getLocator().title, 4);
        (await ActionHelper.getText(this.getLocator().title)).should.equal(dashboardTitle);
    }
}

module.exports = DashboardActions;
