import { test, chromium, Browser, BrowserContext, Page, Locator, firefox, webkit, expect } from '@playwright/test';
import { promises } from 'dns';

test('register Form', async()=> {
    const broswer:Browser = await chromium.launch({headless: false});
    const browserContext: BrowserContext = await broswer.newContext();
    const page: Page = await browserContext.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    const newUser:Locator = await page.locator('[class="btn btn-primary"]').first();
    await newUser.click();

    const tittle = await page.title();
    console.log('Register Account', tittle);

    const first:Locator = await page.locator('[name="firstname"]');
    const second:Locator = await page.locator('[name="lastname"]');
    const email:Locator = await page.locator('input[type="email"]');
    const phone:Locator = await page.locator('input[type="tel"]');
    const password:Locator = await page.locator('input[id*="input-password"]');
    const re_password:Locator = await page.locator('input[id*="input-confirm"]');

    await first.fill('Hello');
    await second.fill('There');
    await email.fill('HelloThere@123gmail.com');
    await phone.fill('987654321');
    await password.fill('pikachu@123');
    await re_password.fill('pikachu@123');

    const submitUser: Locator = await page.locator('input[type="Submit"]');
    await submitUser.click();

    const tittle_2 = await page.title();
    console.log('Register Account', tittle_2);

//    expect(tittle_2).toBeVisible("");
    await page.getByRole('checkbox').check();

    await page.waitForTimeout(10000);

//await page.getByLabel('input[type="checkbox"]').check();


const element = await expect(page.getByText('Register Account')).toBeVisible();


//  const queueIsVisible =
//   await page.locator('span')
//             .filter({ hasText: "QUEUED" })
//             .first()
//             .isVisible()


await new Promise(() => {});

})
