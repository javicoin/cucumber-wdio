# Cucumber WebdriverIO-V6

Run native automation for web (browser) & mobile (android and ios) using cucumber-wdio with page object pattern.

## Based on

- WebdriverIO v6
- Cucumber v6
- Node version 16 or higher
- JAVA JDK 11 or higher
- Appium 2.0.0 & XCUITest/UIAutomator2
- Browser drivers (chromedriver)

## Supports

- Native Android and iOS apps
- Contains sample test scenarios in cucumber
- Page Object Model

## Additional requirements

- [Java JDK 11 or higher](https://www.codejava.net/java-se/install-openjdk-18-on-macos/)
- [Appium 2.0.0 package installation](https://www.npmjs.com/package/appium/v/2.0.0-beta.40)
- [Appium driver XCUITest](http://appium.io/docs/en/drivers/ios-xcuitest/)
- [Appium driver UIAutomator2](https://www.npmjs.com/package/appium-uiautomator2-driver)
- [Appium inspector](https://github.com/appium/appium-inspector/releases)
- [Appium doctor](https://www.npmjs.com/package/appium-doctor)

For Android
- Android Studio
- Android SDK tools & platform tools
- AVD Manager to create & configure android emulators (with developer options enabled)

For iOS
- XCode
- XCode Command Line Tools
- Carthage
- iOS emulators


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
