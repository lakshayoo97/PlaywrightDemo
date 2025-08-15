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
const test_2 = require("@playwright/test");
(0, test_1.test)('login test suite', () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield test_2.chromium.launch({ headless: false });
    const page = yield browser.newPage();
    yield page.goto("https://qa-app-01.qventus.com/");
    const User = page.locator('//form//input[@name="username"]');
    const password = page.locator('//form//input[@type="password"]');
    const submit = page.locator('//form//button[@type="submit"]');
    yield User.fill('hjayaswal+2000@qventus.com');
    yield password.type('T@c301124');
    yield submit.click();
    yield browser.close();
    //await new Promise(() => {});
    //await page.waitForTimeout(1000);
}));
