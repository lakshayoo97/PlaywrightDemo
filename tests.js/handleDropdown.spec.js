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
test_1.test.describe("one test Case", () => {
    let page;
    test_1.test.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ browser }) {
        const context = yield browser.newContext();
        page = yield context.newPage();
        yield page.goto("https://testautomationpractice.blogspot.com/");
    }));
    (0, test_1.test)("handle dropdown", () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, test_1.expect)(yield page.locator('//input[@id="name"]')).toBeVisible();
        yield (0, test_1.expect)(yield page.locator('//input[@id="name"]')).toBeEmpty();
        yield (0, test_1.expect)(yield page.locator('//input[@id="name"]')).toBeEnabled();
        yield page.fill('//input[@id="name"]', "hello");
        yield page.close();
    }));
});
