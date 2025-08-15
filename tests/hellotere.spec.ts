import {request, test, Browser, chromium, Page, BrowserContext} from "@playwright/test";

test.describe('only check',() =>{
    test.only('check',async()=> {
        const browser:Browser =await chromium.launch({headless:false});
        const context:BrowserContext = await browser.newContext();
        const page:Page = await context.newPage();
        await page.goto('https://github.com/lakshayoo97/PlaywrightDemo')

    })
})
