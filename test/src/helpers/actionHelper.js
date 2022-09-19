class ActionHelper {

    /**
     * Launches a native app in the driver
     *
     */
    static async launchApp() {
        await driver.launchApp();
    }

    /**
     * Launches a fresh native app in the driver
     *
     */
     static async launchFreshApp() {
        await driver.resetApp();
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
     * @param miliseconds
     *
     */
    static async pause(miliseconds = 2000) {
        await browser.pause(miliseconds);
    }

    /**
     * Clicks on a displayed element
     *
     * @param {String} locator
     *
     */
    static async click(locator) {
        try {
            const elem = await $(locator);
            await elem.waitForDisplayed({ timeout: 300 });
            await elem.click();
            await driver.pause(50);
        } catch (error) {
            console.log("Error while clicking on element: " + error);
            throw new Error("Error while clicking on element: " + error);
        }
    }

    /**
     * Waits for an element to be displayed
     *
     * @param {String} locator
     * @param waitTimeInMiliSeconds
     *
     */
    static async waitForElement(locator, waitTimeInMiliSeconds = 300) {
        try{
            const elem = await $(locator);
            await elem.waitForDisplayed(waitTimeInMiliSeconds);
        } catch (error) {
            console.log("Element not displayed: " + error);
            throw new Error("Element not displayed: " + error);
        }
    }

    /**
     * Gets the text value of a given element
     *
     * @param {String} locator
     *
     */
    static async getText(locator) {
        const elem = await $(locator);
        await this.waitForElement(elem);
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
            { action: 'wait', options: { ms: 1000 },},
            { action: 'moveTo', options: to},
            { action: 'release' }
        ]);
        await driver.pause(200)
    }
}

module.exports = ActionHelper;
