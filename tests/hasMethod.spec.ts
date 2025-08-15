import {Browser, chromium, test, BrowserContext} from "@playwright/test";

test.describe('hasMethod', () => {
    test('has method', async () => {
        const browser:Browser = await chromium.launch({headless: false});
        const context:BrowserContext = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.saucedemo.com/');
        await page.locator('.form_group',{ has: page.locator('#user-name')}).click();
        await page.locator('.form_group',{ has: page.locator('#user-name')}).pressSequentially('standard_user');
        await page.locator('.form_group',{ hasNot: page.locator('#user-name')}).click();
        await page.locator('.form_group',{ hasNot: page.locator('#user-name')}).pressSequentially('secret_sauce');
        await page.locator('.btn_action').click();
        await page.waitForTimeout(5000);

        
        // Check if the page has a method called 'goto'
        //const hasGotoMethod = typeof page.goto === 'function';
        
        // Expect the method to exist
        //test.expect(hasGotoMethod).toBeTruthy();
    });

});