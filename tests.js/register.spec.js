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
(0, test_1.test)('register Form', () => __awaiter(void 0, void 0, void 0, function* () {
    const broswer = yield test_1.chromium.launch({ headless: false });
    const browserContext = yield broswer.newContext();
    const page = yield browserContext.newPage();
    yield page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const newUser = yield page.locator('[class="btn btn-primary"]').first();
    yield newUser.click();
    const tittle = yield page.title();
    console.log('Register Account', tittle);
    const first = yield page.locator('[name="firstname"]');
    const second = yield page.locator('[name="lastname"]');
    const email = yield page.locator('input[type="email"]');
    const phone = yield page.locator('input[type="tel"]');
    const password = yield page.locator('input[id*="input-password"]');
    const re_password = yield page.locator('input[id*="input-confirm"]');
    yield first.fill('Hello');
    yield second.fill('There');
    yield email.fill('HelloThere@123gmail.com');
    yield phone.fill('987654321');
    yield password.fill('pikachu@123');
    yield re_password.fill('pikachu@123');
    const submitUser = yield page.locator('input[type="Submit"]');
    yield submitUser.click();
    const tittle_2 = yield page.title();
    console.log('Register Account', tittle_2);
    //    expect(tittle_2).toBeVisible("");
    yield page.getByRole('checkbox').check();
    yield page.waitForTimeout(10000);
    //await page.getByLabel('input[type="checkbox"]').check();
    const element = yield (0, test_1.expect)(page.getByText('Register Account')).toBeVisible();
    //  const queueIsVisible =
    //   await page.locator('span')
    //             .filter({ hasText: "QUEUED" })
    //             .first()
    //             .isVisible()
    yield new Promise(() => { });
}));
