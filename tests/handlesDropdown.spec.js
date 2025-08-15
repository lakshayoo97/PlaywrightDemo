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
(0, test_1.test)('accessive testing', () => __awaiter(void 0, void 0, void 0, function* () {
    const broswer = yield test_2.chromium.launch({ headless: false });
    const context = yield broswer.newContext();
    const page = yield context.newPage();
    yield page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');
    // await expect(page.getByRole('heading', { name: 'Mark Allen' }));
    const selectValue = 'select#Contact_CountryCode';
    const dropDown = '#Contact_CountryCode  option';
    const selectOption = yield page.$$(dropDown);
    console.log(selectOption.length);
    for (const e of selectOption) {
        const text = yield e.textContent();
        console.log(text);
        if (text === 'India') {
            yield page.selectOption(selectValue, { label: text });
            break;
        }
    }
    yield page.waitForTimeout(15000);
    broswer.close;
}));
