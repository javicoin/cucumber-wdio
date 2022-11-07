# Cucumber WebdriverIO-V7

Run native automation for web (browser) & mobile (android and ios) using cucumber-wdio with page object pattern.

## Supports

- JavaScript
- Native/Hybrid Android & iOS apps, web browsers
- Contains sample test scenarios in cucumber
- Page Object Model
- Jira XRay integration (It's possible to download/upload cucumber tests & test executions creation)
- Browserstack integration
- Cucumber JSON & Allure HTML reports
- Github Actions workflow (integration with Browserstack & JIRA Cloud)

## Installation guide (Beware of mandatory versions)

- WebdriverIO v7
- Cucumber v7
- Node version 16, execute `npm install -g node@16.15.1`
- NPM version 8, execute `npm install -g npm@latest`, currently 8.19.2
- JAVA JDK 11, execute `brew tap homebrew/cask-versions` and `brew install --cask zulu11`
- Appium 2.0.0, execute `npm i -g appium@next`, currently v2.0.0-beta.46 (to install a new appium version, first uninstall the existing one by `npm uninstall -g appium`)
- UIAutomator2 driver, execute `appium driver install uiautomator2` or `appium driver update uiautomator2`, current version 2.9.0
- XCUITest, execute `appium driver install xcuitest` or `appium driver update xcuitest`, current version 4.12.1
- Browser drivers (chromedriver)
- [Appium inspector](https://github.com/appium/appium-inspector/releases)
- [Appium doctor](https://www.npmjs.com/package/appium-doctor)

To ensure everything is installed properly
-  Run `appium-inspector` in the terminal

### Environment variables config
- Edit the `~/.zshrc` (or bash_profile), the environment variables should look like:

```

export JAVA_HOME=$HOME/OpenJDK/jdk-18.0.1.1.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
export ANDROID_HOME=$HOME/Library/Android/sdk
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

export JIRA_CLOUD_CLIENT_ID="XXX" 
export JIRA_CLOUD_CLIENT_SECRET="YYY"

export BROWSERSTACK_USERNAME="XXX"
export BROWSERSTACK_ACCESS_KEY="YYY"

```

### Additional requirements

- [Appium 2.0.0 package installation](https://www.npmjs.com/package/appium/v/2.0.0-beta.40)
- [Appium driver XCUITest](http://appium.io/docs/en/drivers/ios-xcuitest/)
- [Appium driver XCUITest repository](https://github.com/appium/appium-xcuitest-driver#desired-capabilities)
- [Appium driver UIAutomator2](https://www.npmjs.com/package/appium-uiautomator2-driver)
- [Appium driver UIAutomator2 selectors](https://developer.android.com/reference/androidx/test/uiautomator/package-summary)

For Android
- Android Studio
- Android SDK tools & platform tools
- AVD Manager to create & configure android emulators (with developer options enabled)
- [React environment setup](https://reactnative.dev/docs/environment-setup)

For iOS
- XCode
- XCode Command Line Tools
- iOS simulators


## Running tests & Reports

Follow the below commands 
- Clone the project - `https://github.com/javicoin/cucumber-wdio.git`.

- Install dependencies using `npm i` in the terminal.
(To install code upgrades, execute `rm -rf node_modules && npm cache clean -f && rm package.lock && npm i`)

- Update the deviceName and platFormVersion in `config/android.device.info.js` and `config/ios.device.info.js` respectively. 
  For Android, it's mandatory to have the emulator configured & running before launching the tests, for iOS just a configured emulator is enough.

To visualize NPM Scripts view go to View -> Open View... -> NPM Scripts

- Execute `test:android:local` script to run android native app locally

- Execute `test:ios:local` script to run ios native app locally


## Browserstack
BrowserStack specific code has been added in the `mobile.wdio.bs.conf.js` under the /test/config folder.

It's required to provide BrowserStack credentials as environment variables (process.env.BROWSERSTACK_USERNAME & process.env.BROWSERSTACK_ACCESS_KEY).

- To run test on BrowserStack npm run `test:android:browserstack` or `test:ios:browserstack` scripts.

## External libraries
### Downloading/Uploading Cucumber features (tests) & Creating Test Executions in Jira
- [@xray-app/xray-automation module](https://github.com/javicoin/xray-automation-js)

This module based on axios is used to interact with Jira XRay API, it lets:
- Download/Upload the E2E tests written on Gherkin
- Once tests are executed, it lets to upload their results by creating a Test Execution.

The goal should be managing the features in the source code in order to avoid sync issues on Jira and for better maintainance and flexibility, as follows [Pure VCS based workflow](https://docs.getxray.app/pages/viewpage.action?pageId=31622264)

Required condiguration files (except jira.cloud.json containing Jira API credentials) can be found in `test/config/xray/`

- `cucumber:download_features` let's the user download specific tests (using Jira test KEY) or a set of tests under a filter (filter must be public, each test of the filter MUST belong to a user story/task). It uses `cucumberConfig.json`
- `cucumber:upload_features` let's the user upload ALL the tests under `test/features/_walletLivingDocumentation/` to a specific Jira project defined in `cucumberConfig.json`
- `cucumber:submit_results` it creates a test execution in an existing test plan of an existing Jira project, uses `cucumber.multipart.config.json`

### Features serialization
- [wdio-cucumber-parallel-execution](https://github.com/javicoin/wdio-cucumber-parallel-execution)

This module lets:
- Splitting features containing multiple Scenario/Scenario Outline into independent features in order to be executed either sequencially or in parallel (specially useful to avoid queuing in browserstack if we have a certain limitations)
- Generating a consolidated JSON report (merges individual JSON report files into 1 file so it can be used to create the Test Execution in Jira mentioned above). However, to achieve this, for now the framework uses `test/src/helpers/lib/mergeReports.js` instead.

## Sources

Click below to know more 
- [Appium Introduction](http://appium.io/docs/en/about-appium/intro/)
- [Appium Capabilities](http://appium.io/docs/en/writing-running-appium/caps/)
- [Appium package installation](https://www.npmjs.com/package/appium/v/2.0.0-beta.40)
- [Running Appium Tests](http://appium.io/docs/en/writing-running-appium/running-tests/)
- [Webdriver.IO](https://webdriver.io/docs/) [Selectors](https://webdriver.io/docs/selectors) [Recorder](https://webdriver.io/docs/record)
- [Cucumber](https://cucumber.io/docs/cucumber/)