import { test, chromium , Browser, Page, BrowserContext, Locator} from "@playwright/test";
import { POM,  } from "../PageObjectModel/POM";


let pom:POM;
test.describe('Login',() => {
   test.only('login test', async()=> {
      const browser:Browser = await chromium.launch({headless: false});
      const context:BrowserContext = await browser.newContext();
      const page:Page = await context.newPage(); 
      await page.goto('https://letcode.in/edit');
      //await page.keyboard.press('tab');
      await page.fill('[id="getMe"]','getInfo');
      await page.fill('[id="fullName"]','TestEngineer');
      await page.fill('[id="join"]','InAutomation');
      await page.fill('[id="clearMe"]','lovetodoAutomation');
      const emailDisable = await page.isEnabled('[id="noEdit"]');
         if(emailDisable) {
         await expect(emailDisable).toBe(true);
      }
      //await page.fill('[id="dontwrite"]','PlaywrightFramework');
      await page.close();
   })


























/*
   test('test login funnction', async() => {
    const browser: Browser = await chromium.launch({headless:false});
    const browsercontext:BrowserContext  = await browser.newContext();;
    const page:Page = await browsercontext.newPage();

    await page.goto('https://login.wordpress.org/register');
    await pom.username.fill("LakshayShnkar");
    //await page.locator('').fill('')


   });
   */
});