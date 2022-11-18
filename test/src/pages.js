class Pages {

    static welcomePage;
    static basePage;


    static initPageObjects(platform) {
        // How to include android/ios page object class:
        // Add prefix using literal string like:
        // ```
        // const WelcomePage = require(`./pages/${platform}/welcome.page.js`);
        // Pages.welcomePage = new WelcomePage();
        // ```
        //
        const WelcomePage = require(`./pages/${platform}/welcome.page`);
        Pages.welcomePage = new WelcomePage();

        const BasePage = require(`./pages/base.page`);
        Pages.basePage = new BasePage();

    }
}

module.exports = Pages;
