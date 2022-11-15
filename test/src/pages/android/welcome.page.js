class WelcomePage{
        buttonOK =
            'android=new UiSelector().text("OK").className("android.widget.TextView")';
        createWallet =
            '~newWallet';
        importWallet =
            '~importWallet';
        secureNow =
            '~secureNow';
        rightNavigationArrow =
            '~buttonRight';
        masterKeyTitle =
            'android=new UiSelector().text("Your Master Key").className("android.widget.TextView")';
        mnemonic =
            '//android.widget.TextView[contains(@content-desc,"word")]';
    
        // Other locator strategy examples
        //'android=new UiSelector().text("new wallet").className("android.widget.TextView")';
        // '//android.widget.TextView[@resource-id="sidemenuButton"]';
        // '//android.widget.TextView[@content-desc="settings-title"]';
        // 'android=new UiSelector().text("secure now").className("android.widget.TextView")';
        // //android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup
}

module.exports = WelcomePage;
