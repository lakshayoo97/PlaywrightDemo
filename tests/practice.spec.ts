import {test,expect, Browser, Page, BrowserContext} from "@playwright/test";
import {chromium} from "@playwright/test";

test('handle Auth', async()=> {
    const broswer:Browser = await chromium.launch({headless:false});
    const context:BrowserContext = await broswer.newContext();
    const page:Page = await context.newPage();

    const username = 'admin';
    const password = 'admin';

   // const sign ='Basic ' + btoa(username+':'+password);

    page.setExtraHTTPHeaders({Authorization: createAuthorization(username,password)});

    await page.goto('https://the-internet.herokuapp.com/basic_auth'); 

    await page.screenshot({path: "Authori.png"});

   // console.log(50000);
    //page.pause();

    function createAuthorization(username:any, password:any) {
        return 'Basic ' + btoa(username+':'+password);
    }
});