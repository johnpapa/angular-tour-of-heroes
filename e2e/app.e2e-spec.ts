import { BlankPage } from './app.po';

describe('blank App', () => {
  let page: BlankPage;

  beforeEach(() => {
    page = new BlankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
