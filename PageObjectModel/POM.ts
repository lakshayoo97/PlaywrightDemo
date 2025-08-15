import { Page, Browser, Locator} from '@playwright/test';

export class POM {
  username: Locator;

  constructor(page: Page) {
    this.username = page.locator('//input[@name="user_login"]');
  }
}