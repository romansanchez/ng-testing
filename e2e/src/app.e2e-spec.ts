import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display location detail component', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Location Detail Component');
  });

  it('should submit lookup request', () => {
    page.navigateTo();
    page.getIdInput().sendKeys(88888);
    page.getIdLookupBtn().click();
    expect(page.getCityText()).toEqual('atlanta');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
