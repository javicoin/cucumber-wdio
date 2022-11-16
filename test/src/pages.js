class Pages {

    static welcomePage;

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

    }
}

module.exports = Pages;
