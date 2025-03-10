import {BrowserContext, chromium, test, Page} from "@playwright/test";

test.describe('one test', async() => {
    let page:Page;

    test.beforeEach( async() => {
        const browser =await chromium.launch({headless:false});
        const context:BrowserContext = await browser.newContext();
        page = await context.newPage();
        page.goto('https://www.redbus.in/');

    })

    test('login Page validayion', async() => {
        await page.fill('#src','mumbai');
        await page.waitForTimeout(1000);
        await page.keyboard.press('Enter');
        await page.fill('#dest','agra');
        await page.keyboard.press('Enter');
        await page.waitForTimeout(1000);
        await page.click('#onwardCal');

        const futureDate = new Date();
        futureDate.setDate(futureDate.getDate() + 2); // Select N+2 date dynamically
        const futureDateText = futureDate.getDate().toString(); // Convert to string

    await page.evaluate((dateText) => {
    const elements = document.querySelectorAll('#onwardCal span'); // Ensure correct selector

    for (const el of elements) {
        if (el.textContent.trim() === dateText) { // Remove extra spaces & compare
            (el as HTMLElement).click(); // Ensure it's a clickable element
            break;
        }
    }
}, futureDateText);

        

    });

    test.afterEach(async({}) => {
        await page.close()
    })
});