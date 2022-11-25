
class HomePage {

    get btnHome() { return $('~home') };

    async homeValidation() {
        await expect(await this.btnHome).toBeDisplayed();
    }

}

module.exports = HomePage;