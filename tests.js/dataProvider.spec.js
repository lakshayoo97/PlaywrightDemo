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
const userInputData_1 = require("../steps/userInputData");
for (const data of userInputData_1.userData)
    test_1.test.describe('validate user data ${data.userName}- ${data.password}', () => __awaiter(void 0, void 0, void 0, function* () {
        const browser = yield test_1.chromium.launch({ headless: false });
        const context = yield browser.newContext();
        const page = yield context.newPage();
        yield page.goto('https://app.cyndx.com/signin');
        yield page.fill('', data.userName);
        yield page.fill('', data.password);
        yield expect(page.locator('')).toBeVisible();
        if (data.action === 'login') {
            yield page.fill('', data.userName);
            yield page.fill('', data.password);
            yield page.click('');
            yield expect(page.locator('')).toBeVisible();
        }
        else if (data.action === 'logout') {
            yield page.fill('', data.userName);
            yield page.fill('', data.password);
            yield page.click('');
            yield expect(page.locator('')).toBeVisible();
        }
        if (data.action === 'valid login') {
            yield page.fill('', data.userName);
            yield page.fill('', data.password);
            yield page.click('');
            yield expect(page.locator('')).toBeVisible();
        }
        yield page.screenshot({ path: 'screnshot.png', fullPage: true });
    }));
