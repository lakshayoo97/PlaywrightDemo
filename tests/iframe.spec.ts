import { test, BrowserContext, Page } from "@playwright/test";

test.describe("inner iframe", () => {
  test("Inner frames interaction", async ({ browser }) => {
    // Create a new browser context and page
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    // Navigate to the website
    await page.goto("https://ui.vision/demo/webtest/frames/");

    // Select the iframe using URL
    const frame3 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
    if (!frame3) throw new Error("Frame 3 not found!");

    // Wait for the input field and fill it
    await frame3.waitForSelector('input[name="mytext3"]');
    await frame3.locator('input[name="mytext3"]').fill("welcome");

    // Wait for the "Sign in to Google" link and click it
    const childframe = await frame3.childFrames();
    await childframe[0].waitForSelector('//a[contains(text(),"Sign in to Google")]');
    await childframe[0].locator('//a[contains(text(),"Sign in to Google")]').click();


    // Handling a new page opening in a new tab
    const [newPage] = await Promise.all([
      context.waitForEvent("page"), // Wait for a new page event
      frame3.locator('a[target="_blank"]').click(), // Click link that opens new tab
    ]);

    await newPage.waitForLoadState();

    // Checking if there are child frames inside frame3
  //  const childFrames = frame3.childFrames();
   // console.log(`Number of child frames: ${childFrames.length}`);
   // if (childFrames.length > 0) {
   //   await childFrames[0].waitForSelector('input[type="checkbox"]');
     // await childFrames[0].locator('input[type="checkbox"]').check();
    //}

    // Close the browser context
    await context.close();
  });
});
