# WebdriverIO-V6-appium-cucumber-allure

Run native automation for android and ios using cucumber-wdio-allure with page object pattern.

## Based on

- WebdriverIO v6
- Cucumber v6
- Node version 16 or higher
- Appium 2.0.0 & XCUITest/UIAutomator2
- JAVA JDK 11 or higher

## Supports

- Native Android and iOS apps
- Contains sample test scenarios in cucumber
- Page Object Model
- Allure html reports

## Additional requirements

- Java JDK 11 or higher
- Appium 2.0.0
- Appium drivers XCUITest/UIAutomator2
- Appium inspector
- Appium doctor

For Android
- Android Studio
- Android SDK tools
- AVD Manager to create & configure android emulators (with developer options enabled)

For iOS
- XCode
- Xcode Command Line Tools
- Carthage
- iOS emulators


## Source

Click below to know more 
- [Appium Introduction](http://appium.io/docs/en/about-appium/intro/)
- [Appium Capabilities](http://appium.io/docs/en/writing-running-appium/caps/)
- [Running Appium Tests](http://appium.io/docs/en/writing-running-appium/running-tests/)
- [Webdriver.IO](https://webdriver.io/docs/)
- [Cucumber](https://cucumber.io/docs/cucumber/)
- [Allure reporter](https://webdriver.io/docs/allure-reporter)


## Running tests & Reports

Follow the below commands 
- Clone the project - `https://github.com/lokali/appium-cucumber-wdio.git`.

- Install dependencies using `npm i` in the terminal.

- Update the deviceName and platFormVersion in `config/android.device.info.js` and `config/ios.device.info.js` respectively. For Android, it's mandatory to have the emulator configured & running before launching the tests, for iOS just a configured emulator is enough.

- Execute `npm run android` or `android` script to run android native app

- Execute `npm run ios` or `ios` script to run ios native app

- Execute `npm run lint` or `lint` script to run eslint

- Execute `allure generate --clean './allure-results' && allure open` or `open-allure` script to run allure report
