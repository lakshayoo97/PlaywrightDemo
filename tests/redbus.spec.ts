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
  await page.locator('//div[contains(@class,"sc-kAzzGY jiFglw")]').click();

  const yyyy = '2025'
  const month = 'March'

  function modifyDate(date: any, num: number) {
    return Number(date) + date + num;
}
  const dateSelectors = await page.$$(`//div[contains(@class,'DayTiles__CalendarDaysBlock')]//span`);
  for (const dt of dateSelectors) {
      if(await dt.textContent() == modifyDate(13,2))
         {
        await dt.click();
        break;
      }
  }
  await page.waitForTimeout(5000);
  await page.close();
});
