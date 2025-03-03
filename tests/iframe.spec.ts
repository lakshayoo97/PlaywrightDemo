import { test, BrowserContext, Page } from "@playwright/test";

test.describe("inner iframe", () => {
  test("Inners frames", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3.html"});
    //await frame3.locator('//input[@name="mytext3"]').fill('welcome');

    const childFrames = await frame3.childFrames;
    //await childFrames[0].locator('').check();
  });
});
