import {test,expect, Browser, Page, BrowserContext} from "@playwright/test";
import {chromium} from "@playwright/test";

test.describe('Basic Authentication', async () => {
    let broswer: Browser;
    let context: BrowserContext;
    let page: Page;

    test.beforeEach (async function() {
    broswer = await chromium.launch({headless:false});
    context = await broswer.newContext();
    page = await context.newPage();
    });

    test.afterEach(async function() {
        await broswer.close();
    });

test('handle Auth', async ()=> {
    const username = 'admin';
    const password = 'admin';

    await page.setExtraHTTPHeaders({Authorization: createAuthorization(username,password)});

    await page.goto('https://the-internet.herokuapp.com/basic_auth'); 

    await page.screenshot({path: "Authori.png"});

    console.log('Authorization header set');
    
    await page.waitForTimeout(5000); 

   // await page.pause(); wait for user to hold the page.

    function createAuthorization(username:any, password:any) {
        return 'Basic ' + btoa(username+':'+password);
    }
});
});