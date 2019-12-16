import Page from './page'
import DetailPage from './detailPage.page'
import { getRandomNumberOf } from '../support/helper.ts'

let viewDetailsButton = element(by.xpath('//button[text()="View Details"]'));
let addNewHeroButton = element(by.xpath('//button[text()="Add New Hero"]'));
let title = element(by.css('my-heroes h2'));
let heroes = element.all(by.css('ul.heroes li'));
let heroesIdNames = element.all(by.css('.hero-element'));

let EC = protractor.ExpectedConditions;

export default class HeroesPage extends Page {

    open() {
        super.open('/heroes');
    }

    async selectHeroByName(name: string) {
        let heroElement = element(by.xpath(`//ul[@class="heroes"]//span[contains(text(), "${name}")]`));
        await heroElement.click();
    }

    async getViewDetailsObject(name: string) {
        let detailPage = new DetailPage();
        await this.selectHeroByName(name);
        await viewDetailsButton.click();
        let HeroObject = await detailPage.getHeroObject();
        await detailPage.navigateBackFromDetailPage();
        return HeroObject;
    }

    getTitleText() {
        return title.getText();
    }

    async getRandomHeroName() {
        let names = await this.getListOfHeroesNames();
        let length = names.length;
        let randomHeroIndex = getRandomNumberOf(length);
        return names[randomHeroIndex];
    }

    async getListOfHeroesLength() {
        return await heroes.count();
    }

    checkAddNewHeroButtonIsDisplayed() {
        return addNewHeroButton.isDisplayed();
    }

    async addNewHero(name: string) {
        let detailPage = new DetailPage();
        await addNewHeroButton.click();
        await detailPage.checkHeroDetailsSectionIsDisplayed();
        await detailPage.fillNameAndSave(name);
    }

    async updateHero(nameBefore: string, nameAfter: string) {
        let detailPage = new DetailPage();
        await this.selectHeroByName(nameBefore);
        await viewDetailsButton.click();
        await detailPage.checkHeroDetailsSectionIsDisplayed();
        await detailPage.fillNameAndSave(nameAfter);
    }

    async updateAndCancelNewHero(nameBefore: string, nameAfter: string) {
        let detailPage = new DetailPage();
        await this.selectHeroByName(nameBefore);
        await viewDetailsButton.click();
        await detailPage.checkHeroDetailsSectionIsDisplayed();
        await detailPage.fillNameAndCancel(nameAfter);
    }

    async getListOfHeroesNames() {
        browser.wait(EC.visibilityOf(heroes.first()), 5000);
        let idAndNamesList = await heroesIdNames.getText();
        return idAndNamesList.map(item => item.substr(item.indexOf(' ') + 1))
    }

    async addAndCancelNewHero(name: string) {
        let detailPage = new DetailPage();
        await addNewHeroButton.click();
        await detailPage.checkHeroDetailsSectionIsDisplayed();
        await detailPage.fillNameAndCancel(name);
    }

    async deleteHeroByName(name: string) {
        let deleteHeroButton = element(by.xpath(`//ul[@class="heroes"]//span[contains(text(), "${name}")]/../button[@class="delete-button"]`))
        await deleteHeroButton.click();
    }

}
