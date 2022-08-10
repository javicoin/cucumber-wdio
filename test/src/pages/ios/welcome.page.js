class WelcomePage{
    constructor(){
        // this.dashboardTab =
        //     '~Dashboard tab';
        // this.settingsTab =
        //     '~Settings tab';

        this.createWallet =
            '//XCUIElementTypeOther[@name="new wallet"]';
        this.importWallet =
            '//XCUIElementTypeOther[@name="import wallet"]';
        this.secureNow =
            '//XCUIElementTypeOther[@name="secure now"]';
        this.rightNavigationArrow =
            '//XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[3]';
        this.masterKey =
            '//XCUIElementTypeScrollView[1]/XCUIElementTypeOther[2]';    

        //Page 2
            //XCUIElementTypeOther[@name="secure now"]
        //Page 3, right arrow x3
            //XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[3]
        //Page 4, master key & right arrow
            //full master key, extract name attribute
            //'(//XCUIElementTypeScrollView[1]/XCUIElementTypeOther)[2]'
            // right arrow x8
            //XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther[3]
    }
}

module.exports = new WelcomePage();
