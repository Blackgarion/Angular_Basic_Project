import { SuperAwesomeStorePage } from './app.po';

describe('super-awesome-store App', function() {
  let page: SuperAwesomeStorePage;

  beforeEach(() => {
    page = new SuperAwesomeStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
