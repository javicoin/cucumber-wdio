class Actions {

    static welcomeActions;

    static initActionFiles(platform) {
        // How to include android/ios version:
        // Add prefix using literal string like:
        // ```
        // const WelcomeActions = require(`./actions/${platform}/welcome.actions.js`);
        // Actions.welcomeActions = new WelcomeActions();
        // ```
        //

        const WelcomeActions = require(`./actions/${platform}/welcome.actions.js`);
        Actions.welcomeActions = new WelcomeActions();

    }
}

module.exports = Actions;
