# Cucumber WebdriverIO-V6

Run native automation for web (browser) & mobile (android and ios) using cucumber-wdio with page object pattern.

## Based on

- WebdriverIO v6
- Cucumber v6
- Node version 16, execute `npm install -g node@16.15.1`
- NPM version 6, execute `npm -g install npm@6`
- JAVA JDK 11, execute `brew tap homebrew/cask-versions` and `brew install --cask zulu11`
- Appium 2.0.0, execute `npm install -g appium@2.0.0-beta.41` or `npm i -g appium@next`
- UIAutomator2 driver, execute `appium driver install uiautomator2`
- XCUITest, execute `appium driver install xcuitest`
- Browser drivers (chromedriver)

## Supports

- Native/Hybrid Android & iOS apps, web browsers
- Contains sample test scenarios in cucumber
- Page Object Model
- Allure html reports


## Additional requirements

- Java JDK 11
- [Appium 2.0.0 package installation](https://www.npmjs.com/package/appium/v/2.0.0-beta.40)
- [Appium inspector](https://github.com/appium/appium-inspector/releases)
- [Appium doctor](https://www.npmjs.com/package/appium-doctor)
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


## Source

Click below to know more 
- [Appium Introduction](http://appium.io/docs/en/about-appium/intro/)
- [Appium Capabilities](http://appium.io/docs/en/writing-running-appium/caps/)
- [Appium package installation](https://www.npmjs.com/package/appium/v/2.0.0-beta.40)
- [Running Appium Tests](http://appium.io/docs/en/writing-running-appium/running-tests/)
- [Webdriver.IO](https://webdriver.io/docs/)
- [Cucumber](https://cucumber.io/docs/cucumber/)


## Running tests & Reports

Follow the below commands 
- Clone the project - `https://github.com/javicoin/cucumber-wdio.git`.

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.device.info.js` and `config/ios.device.info.js` respectively. 
  For Android, it's mandatory to have the emulator configured & running before launching the tests, for iOS just a configured emulator is enough.

- Execute `npm run android` or `android` script to run android native app

- Execute `npm run ios` or `ios` script to run ios native app

- Execute `npm run lint` or `lint` script to run eslint

- Execute `npm run xray_results_upload` or `xray_results_upload` script to upload executed test results to Jira (you need Jira credentials for the matter)
