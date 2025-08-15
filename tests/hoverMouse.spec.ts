import {test, expect, Browser, BrowserContext, Page} from '@playwright/test';
import { chromium } from '@playwright/test';

test ('website testing', async() => {
    const {chromium} = require('playwright');
    const broswer:Browser = await chromium.launch({headless: false});
    const context:BrowserContext =  await broswer.newContext();
    const page:Page = await context.newPage();

    const btn ='//button[@id="headlessui-menu-button-:R5bab6:"]';
    await page.goto('https://www.bigbasket.com/?utm_source=google&utm_medium=cpc&utm_campaign=Brand-T1&gad_source=1&gclid=CjwKCAjwxY-3BhAuEiwAu7Y6s6z904Aev9qcaH76bGLCJcOFXV8SN0KOC3zFr3LLtDi34fiethhvzhoCuS0QAvD_BwE');
    await page.locator(btn).click();
    await page.getByText('Beverages').first().hover();
    await page.waitForTimeout(5000);
})