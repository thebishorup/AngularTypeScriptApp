import { AngularJSTypescriptPage } from './app.po';

describe('angular-jstypescript App', function() {
  let page: AngularJSTypescriptPage;

  beforeEach(() => {
    page = new AngularJSTypescriptPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
