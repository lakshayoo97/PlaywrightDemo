import {test, expect, Browser, Page, Locator} from '@playwright/test';
import { chromium } from '@playwright/test';

test ('login test suite', async() => {
const browser:Browser = await chromium.launch({headless: false});    
const page:Page = await browser.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login#:~:text=Tags:");


const user:Locator = await page.locator('//form//input[@name="_token"]');



// const passwordl:Locator = await page.locator('[id="input-password"]');
// const click:Locator =await page.locator('[type="submit"]');

await user.type('Admin');

await page.waitForTimeout(10000);

// await passwordl.fill("lucky@123");
// await click.click();

// const title1 = await page.title();
// console.log("home page title", title1);

// await page.screenshot({path:"homealonePage.png"})

await browser.close
});


