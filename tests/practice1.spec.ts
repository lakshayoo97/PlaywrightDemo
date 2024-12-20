import {test, expect, Browser, Page, Locator} from '@playwright/test';
import { chromium } from '@playwright/test';

test ('login test suite', async() => {
const browser:Browser = await chromium.launch({headless: false});    
const page:Page = await browser.newPage();
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
const email:Locator = await page.locator('[id="input-email"]');
const passwordl:Locator = await page.locator('[id="input-password"]');
const click:Locator =await page.locator('[type="submit"]');

await email.fill("pikachu123@getMaxListeners.com");
await passwordl.fill("lucky@123");
await click.click();

const title1 = await page.title();
console.log("home page title", title1);

await page.screenshot({path:"homealonePage.png"})

await browser.close
});


