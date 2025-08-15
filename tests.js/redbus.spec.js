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
(0, test_1.test)("test", () => __awaiter(void 0, void 0, void 0, function* () {
    const broswer = yield test_1.chromium.launch({ headless: false });
    const context = yield broswer.newContext();
    const page = yield context.newPage();
    yield page.goto("https://www.redbus.in/");
    const fromInput = yield page.locator("#src");
    yield fromInput.click();
    yield fromInput.fill("Mumbai");
    yield page.waitForTimeout(1000);
    yield page.keyboard.press("Enter");
    const toInput = yield page.locator("#dest");
    yield toInput.click();
    yield toInput.fill("Agra");
    yield page.waitForTimeout(1000);
    yield page.keyboard.press("Enter");
    yield page.locator('//div[contains(@class,"sc-kAzzGY jiFglw")]').click();
    const yyyy = '2025';
    const month = 'March';
    function modifyDate(date, num) {
        return Number(date) + date + num;
    }
    const dateSelectors = yield page.$$(`//div[contains(@class,'DayTiles__CalendarDaysBlock')]//span`);
    for (const dt of dateSelectors) {
        if ((yield dt.textContent()) == modifyDate(13, 2)) {
            yield dt.click();
            break;
        }
    }
    yield page.waitForTimeout(5000);
    yield page.close();
}));
