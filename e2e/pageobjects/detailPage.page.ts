import Page from './page'

let heroDetailTitle = element(by.css('my-hero-detail h2'));
let heroDetailId = element(by.xpath('//label[text()="id: "]/..'));
let heroDetailNameSection = element(by.xpath('//label[text()="name: "]/..'));
let heroDetailNameInput = element(by.css('my-hero-detail input'));
let backButton = element(by.xpath('//button[text()="Back"]'));
let saveButton = element(by.xpath('//button[text()="Save"]'));

export default class DetailPage extends Page {

    async getHeroObject() {
        let name = await heroDetailNameInput.getAttribute('value');
        let id = await heroDetailId.getText();
        id = +id.substr(id.indexOf(' ') + 1);
        let title = await heroDetailTitle.getText();
        return { title, id, name }
    }

    async navigateBackFromDetailPage() {
        await backButton.click();
    }

    async checkHeroDetailsSectionIsDisplayed() {
        let idSectionIsDisplayed = await heroDetailId.isDisplayed();
        let nameSectionIsDisplayed = await heroDetailNameSection.isDisplayed();
        let backButtonIsDisplayed = await backButton.isDisplayed();
        let saveButtonIsDisplayed = await saveButton.isDisplayed()
        expect(idSectionIsDisplayed && nameSectionIsDisplayed && backButtonIsDisplayed && saveButtonIsDisplayed).toBe(true);
    }

    async fillNameInputField(name: string) {
        await heroDetailNameInput.clear();
        await heroDetailNameInput.sendKeys(name);
    }

    async fillNameAndSave(name: string) {
        await this.fillNameInputField(name);
        saveButton.click();
    }

    async fillNameAndCancel(name: string) {
         await this.fillNameInputField(name);
         backButton.click();
    }

}
