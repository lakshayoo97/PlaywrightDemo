import {Browser, BrowserContext, chromium, Page, test} from '@playwright/test';
import { userData } from '../steps/userInputData';

for (const data of userData)
test.describe('validate user data ${data.userName}- ${data.password}', async () => {
    const browser:Browser = await chromium.launch({headless:false});
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto('https://app.cyndx.com/signin');
    await page.fill('',data.userName);
    await page.fill('',data.password);
    await expect(page.locator('')).toBeVisible();

    if(data.action === 'login') {
        await page.fill('',data.userName);
        await page.fill('',data.password);
        await page.click('');
        await expect(page.locator('')).toBeVisible();
    }
    else if(data.action === 'logout') { 
        await page.fill('',data.userName);
        await page.fill('',data.password);
        await page.click('');
        await expect(page.locator('')).toBeVisible();
    }
    if(data.action === 'valid login') {
        await page.fill('',data.userName);
        await page.fill('',data.password);
        await page.click('');
        await expect(page.locator('')).toBeVisible();
    } 
    await page.screenshot({path: 'screnshot.png',fullPage :true});
});