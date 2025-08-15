import { chromium } from "@playwright/test";
import {test , Browser , Locator, BrowserContext, Page} from "@playwright/test";

test.describe('login tewst', () => {
    test.only('create an account', async () => {

        const browser:Browser = await chromium.launch({headless:false});
        const context:BrowserContext = await browser.newContext();
        const page:Page = await context.newPage();

        await page.goto('https://bolt.playrealbrokerage.com/register');
        await page.locator('[name="firstName"]').fill("Lakshay");
        await page.locator('[name="lastName"]').fill("Shankar");
        await page.locator('[name="username"]').fill("Lakshay097");
        await page.locator('[name="emailAddress"]').fill("Lakshay.shankar.97@gmail.com");
        await page.locator('[name="password"]').fill("Lakshay1234");
        await page.locator('[name="password"]').fill("Lakshay1234");

        await page.locator('[aria-autocomplete="list"]').click();
        const SelectCanada = '[id="mantine-q0c3d0jft-1"]';
        const dropdown = '[class="mantine-uwwqev mantine-ScrollArea-viewport"]';
        const selectionDropdown = await page.$$(dropdown);

        console.log(dropdown.length);
        for (const e of selectionDropdown) {
            const text = await e.textContent();
            console.log(text);
        if(text === 'Canada'){
            await page.selectOption(SelectCanada , {label:text})
            break;
        }
        await page.waitForTimeout(15000);
        }
        // const dropdown = await page.locator('//input[@id="mantine-ijucelxj1"]/following-sibling::div').getByText();
        // if ( dropdown == 'Canada')
        // }
        // await page.getByRole{''};
       // await page.getByRole('checkbox').check();
       await page.getByRole('button', {name: /Crete Account/i}).click();
        //await page.waitForLoadState('networkidle');
        //await expect(page).toHaveURL('');
        await page.close();
    });
})