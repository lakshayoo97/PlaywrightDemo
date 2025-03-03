import {Page, test} from "@playwright/test";

test.describe('radio button', async () => {
    let page:Page;
 
    test.beforeEach(async ({ browser }) => {
        const context =await browser.newContext();
        page =await context.newPage();
        await page.goto('https://testautomationpractice.blogspot.com/');
    });
    test('radio button',async() => {
        const radio = '//input[@id="sunday"]';
        //await page.check(radio);
        // Single selection matching the label
        //await page.getByLabel('Choose a color').selectOption({ label: 'Blue' });
        // Multiple selected items
        await page.getByLabel('Days:').selectOption(['sunday', 'monday', 'wednesday']);
        //await page.getByRole("radio", )

    })
});