import {Browser, BrowserContext, chromium, Page, test} from "@playwright/test";
import { ChromiumBrowser } from "@playwright/test";
import { json } from "stream/consumers";
import { project } from "../testDataResponse/csv1.json";


test ('login test' , async() => {
    const browser:Browser =await chromium.launch({headless:false});
    const context:BrowserContext =await browser.newContext();
    const page:Page =await context.newPage();

    await page.goto('https://l-tstore-com.myshopify.com/passwor');
    
    await page.locator('#password').fill(project.passWord);
    await page.locator('#password').press('Enter');

    await page.locator('#title-template--16694239887439__featured_collection-7693895106639').click();

    const tittleHeader = await page.title();
    console.log(project.tittle, tittleHeader);

    await page.locator('#ProductSubmitButton-template--16694240313423__main').click();

    await page.locator('#cart-notification-button').click();

    const cartHeader = await page.title();
    console.log(project.tittle_2, cartHeader);

    await page.locator('//a[text()="Continue shopping"]').click();

    await page.locator('//summary[@aria-label="Search"]').click();

    await page.locator('//input[@id="Search-In-Modal"]').fill(project.SearchName);

    await page.locator('//p[text()="7 Shakra Bracelet"]').click();

    await page.locator('#ProductSubmitButton-template--16694240313423__main').click();

    await page.locator('#cart-notification-button').click();

    await page.locator('#checkout').click();

    const value1 =await page.locator('//*[text()="7 Shakra Bracelet"]//..//..//following-sibling::div//p[contains(text(),"₹68.78")]');

    //await expect(page.locator('//*[text()="Biodegradable cardboard pots"]//..//..//following-sibling::div//p[contains(text(),"₹16.01")]'));

    //await expect(page.locator('//*[text()="Total"]//..//..//following-sibling::div//strong[contains(text(),"₹100.05")]'));

    await page.locator('#email').fill(project.phone);

    await page.locator('#email').press('Tab');
    
    await page.locator('//input[@name="firstName"]').first().fill(project.userFirstName);

    await page.locator('//input[@name="lastName"]').first().fill(project.SecondName);

    //await page.pause();

    const dropdown = '//select[@name="zone"]';
    const selectdrp = '//select[@name="zone"]//option';

    const drp = await page.$$(selectdrp);
    console.log(drp.length);

     for (const e of drp){
        const text = await e.textContent();
        console.log(text);
        if (text === 'Uttarakhand') {
            await page.selectOption(dropdown, {label: text});
            break;
        }
     }

   // await page.selectOption(dropdown, {value: 'UP'});

    await page.getByRole('checkbox').check();

    await page.screenshot({path:"shopify.png"});

    await browser.close();
    
    
})
