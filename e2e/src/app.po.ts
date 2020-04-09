import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root app-location-detail h1')).getText() as Promise<string>;
  }

  getIdInput() {
    return element(by.id('location-detail-id'));
  }

  getIdLookupBtn() {
    return element(by.id('location-detail-btn'));
  }

  getCityText() {
    return element(by.id('location-detail-city')).getText();
  }
}
