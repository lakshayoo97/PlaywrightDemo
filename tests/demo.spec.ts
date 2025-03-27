import { test , expect, Browser, BrowserContext, Page} from "@playwright/test";
import { chromium } from "@playwright/test";

test ('login test', async() => {
    const broswer:Browser = await chromium.launch({headless:false})
    const context:BrowserContext = await broswer.newContext();
    const page:Page = await context.newPage();

    await page.goto('https://app.cyndx.com/signin');

    const username = 'xyz@hello.com';
    const password = '1234567';
    
    await page.locator('//input[@placeholder="Email"]').fill(username);
    await page.locator('//input[@placeholder="Password"]').fill(password);
    await page.locator('(//button)[1]').click();

})