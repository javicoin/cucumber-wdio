const FilesHelper = require('wdio-common/helpers/utils/file-helper.js');
const importData = require('../../../resources/files/walletData.json')
const ActionHelper = require('wdio-common/helpers/components/action-helper.js');
const { WaitHelper } = require('wdio-common/helpers/utils/wait-helper.js');
const waitHelper = new WaitHelper();


class WelcomePage {

    get btnOK() { return $('android=new UiSelector().text("OK").className("android.widget.TextView")') }
    get btnCreateWallet() { return $('~newWallet') }
    get btnImportWallet() { return $('~importWallet') }
    get btnSecureNow() { return $('~secureNow') }
    get btnRightNavigationArrow() { return $('~buttonRight') }
    //TODO -> Waiting for unique locator
    get textMasterKeyTitle() {
        if (this.runningAndroid()) {
            return $('android=new UiSelector().text("Your Master Key").className("android.widget.TextView")')
        }
        return $('~Your Master Key');
    }
    //TODO -> Waiting for unique locator
    get listMnemonic() {
        if (this.runningAndroid()) {
            return '//android.widget.TextView[contains(@content-desc,"word")]'
        }
        return $('//XCUIElementTypeStaticText[contains(@label,"word")]');
    }

    get wordSuggestion() { return $('~selectSuggestion0') }

    typeNemonic(position) {
        return $(`~wordInput${position}`)
    }
    //TODO -> Waiting for unique locator
    pin(num) {
        if (this.runningAndroid()) {
            return $(`//android.view.ViewGroup[contains(@resource-id, "keypad_${num}")]`)
        }
        return $(`~keypad_${num}`)
    }

    get btnHome() { return $('~home') };

    async createWallet() {
        this.closeAdvice();
        await this.btnCreateWallet.click();
        await this.skipOnboarding();
        await this.storeMasterKey();
    }

    async importWallet() {
        this.closeAdvice();
        await this.btnImportWallet.click();
    }

    async skipOnboarding() {
        await this.btnSecureNow.click();
        for (let i = 1; i <= 3; i++) {
            await this.btnRightNavigationArrow.click({ waitForStatic: true });
        }
        await expect(awaitthis.textMasterKeyTitle).toBeDisplayed();
    }

    async storeMasterKey() {
        const masterKey = [];
        let wordList = '';
        let wordText1 = '';;
        let wordText2 = '';
        let wordText3 = '';

        if (this.runningAndroid()) {
            for (let i = 1; i <= 4; i++) {
                wordList = await $$(this.listMnemonic);
                wordText1 = await wordList[0].getText();
                wordText2 = await wordList[1].getText();
                wordText3 = await wordList[2].getText();
                masterKey.push(wordText1, wordText2, wordText3);
                await this.btnRightNavigationArrow.click();
            }
        } else {
            for (let i = 1; i <= 4; i++) {
                wordList = await this.listMnemonic.getElementsText();
                wordText1 = wordList[0].split(' ')[1];
                wordText2 = wordList[1].split(' ')[1];
                wordText3 = wordList[2].split(' ')[1];
                masterKey.push(wordText1, wordText2, wordText3);
                await this.btnRightNavigationArrow.click({ waitForStatic: true });
            }
        }
        const jsonFile = FilesHelper.createJsonFile('walletData');
        FilesHelper.editJsonByKey(jsonFile, 'masterKey', masterKey);
    }

    async addMasterKey() {
        let h = 1;
        for (let i = 0; i < 12;) {
            for (let j = 1; j <= 3; j++) {
                await this.typeNemonic(h).setValue(importData.importWallet[i]);
                await ActionHelper.pause(500);
                if (await this.wordSuggestion.isDisplayed()) {
                    await this.wordSuggestion.click();
                }
                i++; h++;
            }
            await this.btnRightNavigationArrow.click();
        }
    }

    async setPin() {
        this.closeAdvice();
        waitHelper.waitForEnabled(this.pin(1))
        for (let i = 1; i <= 2; i++) {
            for (let j = 0; j <= 3; j++) {
                await this.pin(importData.pass[j]).click();
            }
        }
    }

    async home() {
        await expect(await this.btnHome).toBeDisplayed();
    }

    async closeAdvice() {
        if (this.runningAndroid()) {
            await this.btnOK.click();
        }
    }

    runningAndroid() {
        return driver.isAndroid
    }

}

module.exports = WelcomePage;
