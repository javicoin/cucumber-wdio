class WelcomePage{

        createWallet =
            'android=new UiSelector().text("new wallet").className("android.widget.TextView")';
        secureNow =
            'android=new UiSelector().text("secure now").className("android.widget.TextView")';
        rightNavigationArrow =
            '//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup';
        masterKey =
            'android=new UiSelector().text("Your Master Key").className("android.widget.TextView")';
    

            //Page 2
            // 'new UiSelector().text("secure now").className("android.widget.TextView")'
        //Page 3, right arrow x3
            // elementID: 00000000-0000-002a-ffff-ffff0000007b
        //Page 4, master key & right arrow
            //full master key, extract name attribute
            //
            // right arrow x8
            // elementID 00000000-0000-002a-ffff-ffff0000007b

        // Other locator strategy examples
        // '//android.widget.TextView[@resource-id="sidemenuButton"]';
        // '//android.widget.TextView[@content-desc="settings-title"]';
}

module.exports = WelcomePage;
