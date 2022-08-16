class WelcomePage{

        createWallet =
            //'android=new UiSelector().text("new wallet").className("android.widget.TextView")';
            '~newWallet';
        secureNow =
            'android=new UiSelector().text("secure now").className("android.widget.TextView")';
        rightNavigationArrow =
            '//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup';
        masterKey =
            'android=new UiSelector().text("Your Master Key").className("android.widget.TextView")';
    
        // Other locator strategy examples
        // '//android.widget.TextView[@resource-id="sidemenuButton"]';
        // '//android.widget.TextView[@content-desc="settings-title"]';
}

module.exports = WelcomePage;
