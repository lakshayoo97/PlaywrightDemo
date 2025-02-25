import {Browser, BrowserContext, chromium, firefox, Locator, Page, test, webkit} from '@playwright/test';
import { promises } from 'dns';

test('login' ,async()=> {
    const broswer: Browser = await chromium.launch({headless: false});
    const browserContext: BrowserContext = await broswer.newContext();
    const page: Page =  await browserContext.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const mail:Locator = await page.locator('//*[@name="username"]');
    const pass:Locator = await page.locator('//*[@name="password"]');

    const submit:Locator = await page.locator('//button[contains(@class,"oxd-button")]');

    await mail.fill('Admin');
    await pass.fill('admin123');
    await submit.click();

    const title = await page.title();
   // console.log('Title', title);

    //await new Promise(() => {} );

    await expect(page.locator('//*[text()="Quick Launch"]')).toBeVisible();
    //await heading.toBeVisible();


   await broswer.close();


})