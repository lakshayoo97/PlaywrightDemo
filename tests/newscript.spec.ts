import {test, expect, Browser, Page, Locator} from '@playwright/test';
import { chromium } from '@playwright/test';
import { promises } from 'dns';

test ('login test suite', async() => {
const browser:Browser = await chromium.launch({headless: false});    
const page:Page = await browser.newPage();
await page.goto("https://qa-app-01.qventus.com/");

const User:Locator = page.locator('//form//input[@name="username"]');
 const password:Locator = page.locator('//form//input[@type="password"]');

const submit: Locator = page.locator('//form//button[@type="submit"]');
await User.fill('hjayaswal+2000@qventus.com');
await password.type('T@c301124');
await submit.click();
await browser.close();
//await new Promise(() => {});
//await page.waitForTimeout(1000);
});
