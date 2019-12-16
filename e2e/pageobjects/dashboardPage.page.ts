import Page from './page'
import DetailPage from '../pageobjects/detailPage.page'
import { getRandomNumberOf } from '../support/helper.ts'

let title = element(by.css('my-root h1'));
let topHeroesTitle = element(by.css('my-dashboard h3'));
let dashboardTabs = element.all(by.css('nav a'));
let heroesTab = element(by.css('nav a[routerlink="/heroes"]'));
let dashboardTab = element(by.css('nav a[routerlink="/dashboard"]'));
let heroSearchTitle = element(by.css('#search-component h4'));
let heroSearchInput = element(by.css('input#search-box'));
let topHeroes = element.all(by.css('div.module.hero h4'));
let searchSuggestions = element.all(by.css('div.search-result'));

export default class DashboardPage extends Page {

    open() {
        super.open('/');
    }

    getTitleText() {
        return title.getText();
    }

    getTopHeroesTitleText() {
        return topHeroesTitle.getText();
    }

    getTabsNames() {
        return dashboardTabs.getText();
    }

    getTopHeroesListLength() {
        return topHeroes.count();
    }

    getHeroSearchTitleText() {
        return heroSearchTitle.getText();
    }

    checkHeroSearchInputIsDisplayed() {
        return heroSearchInput.isDisplayed();
    }

    async getRandomTopHeroName() {
        let length = await this.getTopHeroesListLength()
        let randomHeroIndex = getRandomNumberOf(length);
        return topHeroes.get(randomHeroIndex).getText();
    }

    async selectTopHero(name: string) {
        name = name || await this.getRandomTopHeroName();
        return topHeroes
            .filter((elem) => elem.getText()
            .then(text => text === name))
        .first().click();
    }

    async getHeroObjectFromTopHero(name: string) {
        let detailPage = new DetailPage();
        await this.selectTopHero(name);
        let HeroObject = await detailPage.getHeroObject();
        await detailPage.navigateBackFromDetailPage();
        return HeroObject;
    }

    async searchHero(name: string) {
        await this.fillSearchInput(name);
        await searchSuggestions.first().click();
    }

    async navigateToHeroesTab() {
        await heroesTab.click();
    }

    async navigateToDashboardTab() {
        await dashboardTab.click();
    }

    async fillSearchInput(inputText) {
        await heroSearchInput.sendKeys(inputText);
    }

    async searchSuggestionsForNameAreDisplayed(name: string) {
        let suggestions = await searchSuggestions.count();
        expect(suggestions).toBeGreaterThan(0);
        let suggestionsIncludeName = await searchSuggestions.filter((elem) =>
            elem.getText()
                .then(text => text.toLowerCase().indexOf(name.toLowerCase() != -1)))
            .count();
        return suggestions === suggestionsIncludeName;
    }

}
