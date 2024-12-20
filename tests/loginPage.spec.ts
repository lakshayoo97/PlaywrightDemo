import {Browser, BrowserContext, chromium, firefox, Locator, Page, test, webkit} from '@playwright/test';
import { promises } from 'dns';

test('login' ,async()=> {
    const broswer: Browser = await chromium.launch({headless: false});
    const browserContext: BrowserContext = await broswer.newContext();
    const page: Page =  await browserContext.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const mail:Locator = await page.locator('[id="input-email"]');
    const pass:Locator = await page.locator('[id="input-password"]');

    const submit:Locator = await page.locator('[class="btn btn-primary"]').last();

    await mail.fill('HelloThere@123gmail.com');
    await pass.fill('pikachu@123');
    await submit.click();

    const title = await page.title();
   // console.log('Title', title);

    await new Promise(() => {} );

   // await broswer.close();


})