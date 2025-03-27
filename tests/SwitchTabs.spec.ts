import {test, expect, chromium, BrowserContext, Page, Browser} from '@playwright/test'

test('Switch Tabs', async () => {

    const browser: Browser = await chromium.launch({headless: false});
    const page1: Page = await browser.newPage();
    const page2:Page= await browser.newPage();
    await page1.goto('https://www.google.com');
    await page1.waitForTimeout(1000);
    await page2.goto('https://www.bing.com');
    await page1.bringToFront();
    await page1.waitForTimeout(1000);
    await page2.title();
    await page2.bringToFront();
    await page2.waitForTimeout(1000);
    await page1.title();
    await browser.close();


    
});