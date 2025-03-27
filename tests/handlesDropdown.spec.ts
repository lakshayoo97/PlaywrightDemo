import {test, expect, Browser, BrowserContext, Page} from "@playwright/test";
import { chromium } from "@playwright/test";

test('accessive testing', async() => {
 const broswer: Browser = await chromium.launch({headless: false});
const context:BrowserContext=  await broswer.newContext();
const page:Page = await context.newPage();

await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');

   // await expect(page.getByRole('heading', { name: 'Mark Allen' }));
    const selectValue = 'select#Contact_CountryCode';
    const dropDown = '#Contact_CountryCode  option';
    const selectOption = await page.$$(dropDown);
     console.log(selectOption.length);

     for (const e of selectOption){
        const text = await e.textContent();
        console.log(text);
        if (text === 'India') {
            await page.selectOption(selectValue, {label: text});
            break;
        }
     }
    await page.waitForTimeout(15000);
    broswer.close
});