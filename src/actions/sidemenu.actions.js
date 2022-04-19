const ActionHelper = require('../helpers/actionHelper');

class LandingActions {

    getLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`../pages/${platform}/sidemenu.page.js`);
    }

    async openSideMenu() {
        const screenSize = await driver.getWindowSize()
        const location_start_x = screenSize['width'] * 0.05;
        const location_end_x = screenSize['width'] * 0.7;
        const location_y = screenSize['height'] * 0.9;
        const from = { x: location_start_x, y: location_y };
        const to = { x: location_end_x, y: location_y };
        await ActionHelper.swipe(from, to);
    }

    async goToUltimateAnswer() {
        await ActionHelper.click(this.getLocator().sideMenuButton);
    }
}

module.exports = LandingActions;
