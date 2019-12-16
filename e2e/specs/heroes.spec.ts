import DashboardPage from '../pageobjects/dashboardPage.page'
import HeroesPage from '../pageobjects/heroesPage.page'

let dashboardPage;
let heroesPage;

describe('Heroes tests', () => {

    beforeAll(() => {
        dashboardPage = new DashboardPage();
        heroesPage = new HeroesPage();
    });

    beforeEach(() => {
        heroesPage.open();
    });

    it('Checks navigation to dashboard page', async() => {
        await dashboardPage.navigateToDashboardTab();
        expect(browser.getCurrentUrl()).toMatch('/dashboard');
    });

    describe('Heroes page attributes', () => {

        it('Checks heroes page title', () => {
            expect(heroesPage.getTitleText()).toEqual('My Heroes');
        });

        it('Checks list of heroes is not empty', () => {
            expect(heroesPage.getListOfHeroesLength()).toBeGreaterThan(0);
        });

        it('Checks "Add New Hero" button is displayed', () => {
            expect (heroesPage.checkAddNewHeroButtonIsDisplayed()).toBe(true);
        });
   });

   describe('Add new hero tests', () => {

       it('Checks adding new hero', async() => {
           let newHeroName = 'New Hero';
           await heroesPage.addNewHero(newHeroName);
           expect(heroesPage.getListOfHeroesNames()).toContain(newHeroName);
       });

       it('Checks Cancel button for adding', async () => {
           let newHeroName = 'Check cancel adding hero';
           await heroesPage.addAndCancelNewHero(newHeroName);
           expect(heroesPage.getListOfHeroesNames()).not.toContain(newHeroName);
       });

   });

   describe('Update hero tests', () => {

       it('Checks updating new hero', async() => {
           let nameBefore = await heroesPage.getRandomHeroName();
           let nameAfter = 'Updated Hero';
           await heroesPage.updateHero(nameBefore, nameAfter);
           let listOfHeroes = await heroesPage.getListOfHeroesNames();
           expect(listOfHeroes).not.toContain(nameBefore);
           expect(listOfHeroes).toContain(nameAfter);
       });

       it('Checks Cancel button for update', async () => {
           let nameBefore = await heroesPage.getRandomHeroName();
           let nameAfter = 'Check cancel update hero';
           await heroesPage.updateAndCancelNewHero(nameBefore, nameAfter);
           let listOfHeroes = await heroesPage.getListOfHeroesNames();
           expect(listOfHeroes).not.toContain(nameAfter);
           expect(listOfHeroes).toContain(nameBefore);
       });

   });

   it('Checks Delete hero', async () => {
       let name = await heroesPage.getRandomHeroName();
       await heroesPage.deleteHeroByName(name);
       let listOfHeroes = await heroesPage.getListOfHeroesNames();
       expect(listOfHeroes).not.toContain(name);
    });

});
