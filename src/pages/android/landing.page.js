class LandingPage{
    constructor(){
        this.dashboardTab =
            '//android.view.View[@resource-id="Dashboard tab"]';
        this.settingsTab =
            '//android.view.View[@resource-id="Settings tab"]';
    }
}

module.exports = new LandingPage();
