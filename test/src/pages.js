class Pages {

    static welcomePage;
    static flightSearchPage;

    static initPageFiles(platform) {
        // How to include android/ios version:
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