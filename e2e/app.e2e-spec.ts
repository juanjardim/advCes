import { CesarwebsitePage } from './app.po';

describe('cesarwebsite App', () => {
  let page: CesarwebsitePage;

  beforeEach(() => {
    page = new CesarwebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
