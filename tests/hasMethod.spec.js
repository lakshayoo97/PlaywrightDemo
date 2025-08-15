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
test_1.test.describe('hasMethod', () => {
    (0, test_1.test)('has method', () => __awaiter(void 0, void 0, void 0, function* () {
        const browser = yield test_1.chromium.launch({ headless: false });
        const context = yield browser.newContext();
        const page = yield context.newPage();
        yield page.goto('https://www.saucedemo.com/');
        yield page.locator('.form_group', { has: page.locator('#user-name') }).click();
        yield page.locator('.form_group', { has: page.locator('#user-name') }).pressSequentially('standard_user');
        yield page.locator('.form_group', { hasNot: page.locator('#user-name') }).click();
        yield page.locator('.form_group', { hasNot: page.locator('#user-name') }).pressSequentially('secret_sauce');
        yield page.locator('.btn_action').click();
        yield page.waitForTimeout(5000);
        // Check if the page has a method called 'goto'
        //const hasGotoMethod = typeof page.goto === 'function';
        // Expect the method to exist
        //test.expect(hasGotoMethod).toBeTruthy();
    }));
});
