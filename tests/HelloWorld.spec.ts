import { test, expect, BrowserContext, Page } from "@playwright/test";

test.describe("three tests", () => {
  let context: BrowserContext;
  let page: Page;

  test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
  });

  test.skip("login test", async () => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("I am an alert box!");
      console.log("test", dialog.message);
      await dialog.accept();
    });

    await page.click('//button[@id="alertBtn"]');
    await page.waitForTimeout(5000);
  });

  test("Alert test", async () => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("confirm");
      expect(dialog.message()).toContain("Press a button!");
      console.log("test", dialog.message);
      await dialog.accept();
    });

    await page.click('//button[@id="confirmBtn"]');
    await page.waitForTimeout(5000);
  });

  test("Alert input", async () => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("prompt");
      expect(dialog.message()).toContain("Please enter your name:");
      expect(dialog.defaultValue()).toContain("Harry Potter");
      console.log("test", dialog.message);
      await dialog.accept();
    });

    await page.click('//button[@id="promptBtn"]');
    await page.waitForTimeout(5000);
  });

});