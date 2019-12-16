import DashboardPage from '../pageobjects/dashboardPage.page'
import DetailPage from '../pageobjects/detailPage.page'
import { getSubstring } from '../support/helper'

describe('Dashboard tests', () => {

    let dashboardPage;

    beforeAll(() => {
        dashboardPage = new DashboardPage();
    });

    beforeEach(() => {
        dashboardPage.open();
    });

    const tabsNames = [ 'Dashboard', 'Heroes' ];

    describe('Dashboard page attributes', () => {

        it('Checks Dashboard title', () => {
            expect(dashboardPage.getTitleText()).toEqual('Tour of Heroes');
        });

        it('Checks Dashboard tabs', () => {
            expect (dashboardPage.getTabsNames()).toEqual(tabsNames);
        });

        it('Checks Top Heroes title', () => {
            expect(dashboardPage.getTopHeroesTitleText()).toEqual('Top Heroes');
        });

        it('Checks Top Heroes list is not empty', () => {
            expect(dashboardPage.getTopHeroesListLength()).toBeGreaterThan(0);
        });

        it('Checks Hero Search title', () => {
            expect(dashboardPage.getHeroSearchTitleText()).toEqual('Hero Search');
        });

        it('Checks Hero Search input is displayed', () => {
            expect(dashboardPage.checkHeroSearchInputIsDisplayed()).toBe(true);
        });

    });

    describe('Search tests', () => {

        it('Checks search suggestions for the part of existing name', async () => {
            let partialName = getSubstring(await dashboardPage.getRandomTopHeroName(), 2);
            await dashboardPage.fillSearchInput(partialName);
            expect(await dashboardPage.searchSuggestionsForNameAreDisplayed(partialName)).toBe(true);
        });

        it('Checks search navigates to detail page', async () => {
            let detailPage = new DetailPage();
            let name = await dashboardPage.getRandomTopHeroName();
            await dashboardPage.searchHero(name);
            let heroObjectFromSearch = await detailPage.getHeroObject();
            expect(browser.getCurrentUrl()).toMatch(`detail/${heroObjectFromSearch.id}`);
        });

    });

    describe('Tabs navigation tests', () => {

        it('Checks navigation to heroes tab', async () => {
            await dashboardPage.navigateToHeroesTab();
            expect(browser.getCurrentUrl()).toMatch('/heroes');
        });

    });

});
