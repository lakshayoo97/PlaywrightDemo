import {
  Browser,
  BrowserContext,
  chromium,
  Page,
  test,
} from "@playwright/test";

test("test", async () => {
  const broswer: Browser = await chromium.launch({ headless: false });
  const context: BrowserContext = await broswer.newContext();
  const page: Page = await context.newPage();

  await page.goto("https://www.redbus.in/");
  const fromInput = await page.locator("#src");
  await fromInput.click();
  await fromInput.fill("Mumbai");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  const toInput = await page.locator("#dest");
  await toInput.click();
  await toInput.fill("Agra");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  ////div[contains(@class,"sc-jzJRlG hrJoeL")]
  await page.locator('//div[contains(@class,"sc-kAzzGY jiFglw")]').click();

  //let today = new Date();
  //today.setDate(today.getDate() + 2);
  //const day = today.getDate();
  //const month = today.toLocaleString("default", { month: "short" });

  //console.log(`Selected Day: ${day}, Month: ${month}`);

  const dateSelector = `//div[contains(@class,'DayTiles__CalendarDaysBlock')]//span[text()='27']`;
  console.log(`Date Selector: ${dateSelector}`);

  await page.locator(dateSelector).waitFor({ state: "visible" });
  await page.locator(dateSelector).click();

  await page.locator("#search_button").waitFor({ state: "visible" });
  await page.locator("#search_button").click();

  //console.log(`Bus search initiated successfully for ${day} ${month}!`);
  await page.waitForTimeout(5000);
  await page.close();
});
