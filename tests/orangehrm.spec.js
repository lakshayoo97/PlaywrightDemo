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
(0, test_1.test)("login", () => __awaiter(void 0, void 0, void 0, function* () {
    const broswer = yield test_1.chromium.launch({ headless: false });
    const browserContext = yield broswer.newContext();
    const page = yield browserContext.newPage();
    yield page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const mail = yield page.locator('//*[@name="username"]');
    const pass = yield page.locator('//*[@name="password"]');
    const submit = yield page.locator('//button[contains(@class,"oxd-button")]');
    yield mail.fill("Admin");
    yield pass.fill("admin123");
    yield submit.click();
    const title = yield page.title();
    // console.log('Title', title);
    //await new Promise(() => {} );
    yield expect(page.locator('//*[text()="Quick Launch"]')).toBeVisible();
    //await heading.toBeVisible();
    yield broswer.close();
}));
