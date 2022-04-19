class ActionHelper {

    /**
     * Launches a native app in the driver
     *
     */
    static async launchApp() {
        await driver.launchApp();
    }

    /**
     * Switches the driver to native context
     *
     */
    static async switchToNativeContext() {
        await browser.switchContext('NATIVE_APP');
    }

    /**
     * Stops the driver for a given amount of time
     *
     * @param seconds
     *
     */
    static async pause(seconds) {
        await browser.pause(seconds * 1000);
    }

    /**
     * Clicks on a displayed element
     *
     * @param {String} locator
     *
     */
    static async click(locator) {
        const elem = await $(locator);
        await elem.waitForDisplayed({ timeout: 3000 });
        await elem.click();
    }

    /**
     * Waits for an element to be displayed
     *
     * @param {String} locator
     * @param waitTimeInSeconds
     *
     */
    static async waitForElement(locator, waitTimeInSeconds) {
        const elem = await $(locator);
        await elem.waitForDisplayed(waitTimeInSeconds * 1000);
    }

    /**
     * Gets the text value of a given element
     *
     * @param {String} locator
     *
     */
    static async getText(locator) {
        const elem = await $(locator);
        return await elem.getText();
    }

    /**
     * Swipe from coordinates (from) to the new coordinates (to). The given coordinates are in pixels.
     *
     * @param {object} from Example { x: 50, y: 50 }
     * @param {object} to Example { x: 25, y: 25 }
     *
     */
    static async swipe (from, to) {
        await driver.touchPerform([
            { action: 'press', options: from},
            { action: 'wait', options: { ms: 5000 },},
            { action: 'moveTo', options: to},
            { action: 'release' }
        ]);
        await driver.pause(1000)
    }
}

module.exports = ActionHelper;
