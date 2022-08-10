class WelcomePage {
        createWallet =
            '//XCUIElementTypeOther[@name="new wallet"]';
        importWallet =
            '//XCUIElementTypeOther[@name="import wallet"]';
        secureNow =
            '//XCUIElementTypeOther[@name="secure now"]';
        rightNavigationArrow =
            '//XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[3]';
        masterKey =
            '//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[2]';    

    //     //Page 2
    //         //XCUIElementTypeOther[@name="secure now"]
    //     //Page 3, right arrow x3
    //         //XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[3]
    //     //Page 4, master key & right arrow
    //         //full master key, extract name attribute
    //         //'(//XCUIElementTypeScrollView[1]/XCUIElementTypeOther)[2]'
    //         // right arrow x8
    //         //XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[3]
            // Other locator strategy examples
            // '~sidemenuButton';
            // '//XCUIElementTypeStaticText[@name="settings-title"]';
    // }
}

module.exports = WelcomePage;
