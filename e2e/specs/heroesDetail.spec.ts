import DashboardPage from '../pageobjects/dashboardPage.page'
import DetailPage from '../pageobjects/detailPage.page'
import HeroesPage from '../pageobjects/heroesPage.page'
import { objectsAreEqual } from '../support/helper.ts'

describe('Heroes detail tests', () => {

    let dashboardPage;
    let detailPage;

    beforeAll(() => {
        dashboardPage = new DashboardPage();
        detailPage = new DetailPage();
    });

    beforeEach(() => {
        dashboardPage.open();
    });

   it('Checks navigation to detail page from Top Heroes' , async () => {
       await dashboardPage.selectTopHero();
       expect(browser.getCurrentUrl()).toMatch('detail');
       await detailPage.navigateBackFromDetailPage();
   });

   it('Checks detail page for navigation from top hero, search and heroes pages', async () => {

       let heroesPage = new HeroesPage();
       let name = await dashboardPage.getRandomTopHeroName();

       let heroObjectFromTopHero = await dashboardPage.getHeroObjectFromTopHero(name);

       await dashboardPage.searchHero(name);
       let heroObjectFromSearch = await detailPage.getHeroObject();
       await detailPage.navigateBackFromDetailPage();

       await dashboardPage.navigateToHeroesTab();
       let heroObjectFromHeroesList = await heroesPage.getViewDetailsObject(name);

       expect(await objectsAreEqual([heroObjectFromTopHero, heroObjectFromSearch, heroObjectFromHeroesList])).toBe(true);
   });

   it('Checks detail page title', async () => {
       let name = await dashboardPage.getRandomTopHeroName();
       let heroObjectFromTopHero = await dashboardPage.getHeroObjectFromTopHero(name);
       expect(heroObjectFromTopHero.title).toEqual(`${name} details!`);
   });

});
