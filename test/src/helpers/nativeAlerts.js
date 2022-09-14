// This class is deprecated and just used for future possible functionalities
require('chai').should();

const SELECTORS = {
    ANDROID: {
        ALERT_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
    },
    IOS: {
        ALERT: '-ios predicate string:type == \'XCUIElementTypeAlert\'',
    },
};

class NativeAlert {
    /**
     * Wait for specific alert to exist
     * @param {String} alertTitle
     */
    static async waitForIsShown (alertTitle) {
        const selector = driver.isAndroid ? SELECTORS.ANDROID.ALERT_TITLE : SELECTORS.IOS.ALERT;
        await (await $(selector)).waitForExist({
            timeout: 11000
        });
        (await driver.getAlertText()).should.equal(alertTitle);
    }
}

module.exports = NativeAlert;
