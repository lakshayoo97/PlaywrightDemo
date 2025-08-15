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
(0, test_1.test)('website testing', () => __awaiter(void 0, void 0, void 0, function* () {
    const { chromium } = require('playwright');
    const broswer = yield chromium.launch({ headless: false });
    const context = yield broswer.newContext();
    const page = yield context.newPage();
    const btn = '//button[@id="headlessui-menu-button-:R5bab6:"]';
    yield page.goto('https://www.bigbasket.com/?utm_source=google&utm_medium=cpc&utm_campaign=Brand-T1&gad_source=1&gclid=CjwKCAjwxY-3BhAuEiwAu7Y6s6z904Aev9qcaH76bGLCJcOFXV8SN0KOC3zFr3LLtDi34fiethhvzhoCuS0QAvD_BwE');
    yield page.locator(btn).click();
    yield page.getByText('Beverages').first().hover();
    yield page.waitForTimeout(5000);
}));
