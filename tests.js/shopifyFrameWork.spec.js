"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const csv1_json_1 = require("../testDataResponse/csv1.json");
(0, test_1.test)('login test', () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield test_1.chromium.launch({ headless: false });
    const context = yield browser.newContext();
    const page = yield context.newPage();
    yield page.goto('https://l-tstore-com.myshopify.com/passwor');
    yield page.locator('#password').fill(csv1_json_1.project.passWord);
    yield page.locator('#password').press('Enter');
    yield page.locator('#title-template--16694239887439__featured_collection-7693895106639').click();
    const tittleHeader = yield page.title();
    console.log(csv1_json_1.project.tittle, tittleHeader);
    yield page.locator('#ProductSubmitButton-template--16694240313423__main').click();
    yield page.locator('#cart-notification-button').click();
    const cartHeader = yield page.title();
    console.log(csv1_json_1.project.tittle_2, cartHeader);
    yield page.locator('//a[text()="Continue shopping"]').click();
    yield page.locator('//summary[@aria-label="Search"]').click();
    yield page.locator('//input[@id="Search-In-Modal"]').fill(csv1_json_1.project.SearchName);
    yield page.locator('//p[text()="7 Shakra Bracelet"]').click();
    yield page.locator('#ProductSubmitButton-template--16694240313423__main').click();
    yield page.locator('#cart-notification-button').click();
    yield page.locator('#checkout').click();
    const value1 = yield page.locator('//*[text()="7 Shakra Bracelet"]//..//..//following-sibling::div//p[contains(text(),"₹68.78")]');
    //await expect(page.locator('//*[text()="Biodegradable cardboard pots"]//..//..//following-sibling::div//p[contains(text(),"₹16.01")]'));
    //await expect(page.locator('//*[text()="Total"]//..//..//following-sibling::div//strong[contains(text(),"₹100.05")]'));
    yield page.locator('#email').fill(csv1_json_1.project.phone);
    yield page.locator('#email').press('Tab');
    yield page.locator('//input[@name="firstName"]').first().fill(csv1_json_1.project.userFirstName);
    yield page.locator('//input[@name="lastName"]').first().fill(csv1_json_1.project.SecondName);
    //await page.pause();
    const dropdown = '//select[@name="zone"]';
    const selectdrp = '//select[@name="zone"]//option';
    const drp = yield page.$$(selectdrp);
    console.log(drp.length);
    for (const e of drp) {
        const text = yield e.textContent();
        console.log(text);
        if (text === 'Uttarakhand') {
            yield page.selectOption(dropdown, { label: text });
            break;
        }
    }
    // await page.selectOption(dropdown, {value: 'UP'});
    yield page.getByRole('checkbox').check();
    yield page.screenshot({ path: "shopify.png" });
    yield browser.close();
}));
