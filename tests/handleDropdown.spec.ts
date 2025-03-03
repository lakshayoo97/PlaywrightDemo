import { test, expect, Page } from "@playwright/test";

test.describe("one test Case", () => {
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    });

    test("handle dropdown", async () => {
      await expect(await page.locator('//input[@id="name"]')).toBeVisible();
      await expect(await page.locator('//input[@id="name"]')).toBeEmpty();
      await expect(await page.locator('//input[@id="name"]')).toBeEnabled();
      await page.fill('//input[@id="name"]', "hello");
      await page.close();
  });
});
