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
//RecordTarget:TestRunner
const test_1 = require("@playwright/test");
(0, test_1.test)('test', () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield test_1.chromium.launch({ headless: false });
    const context = yield browser.newContext();
    const page = yield context.newPage();
    yield page.goto('https://www.google.com/');
    yield page.getByRole('combobox', { name: 'Search' }).click();
    yield page.getByRole('combobox', { name: 'Search' }).fill('playwright automation note ');
    yield page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bautomation%2Bnote%2B%26sca_esv%3D685d635ce644e565%26source%3Dhp%26ei%3DqF4waLzWA_jc2roPhYqluAk%26iflsig%3DACkRmUkAAAAAaDBsuHWfVUVUr3DADJjWh4k4aqqhRvcn%26ved%3D0ahUKEwi8yt-CwbmNAxV4rlYBHQVFCZcQ4dUDCA8%26uact%3D5%26oq%3Dplaywright%2Bautomation%2Bnote%2B%26gs_lp%3DEgdnd3Mtd2l6IhtwbGF5d3JpZ2h0IGF1dG9tYXRpb24gbm90ZSAyBxAAGIAEGA0yBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESKalAlDcDVj2oAJwDHgAkAEAmAGzAaAB5yOqAQQwLjM4uAEDyAEA-AEBmAIyoAL_JKgCCsICChAAGAMY6gIYjwHCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIFEAAYgATCAgsQLhiABBixAxjUAsICERAuGIAEGLEDGNEDGIMBGMcBwgIIEC4YgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAgUQLhiABMICChAAGIAEGLEDGArCAgoQLhiABBixAxgKwgIHEAAYgAQYCsICChAAGIAEGLEDGA3CAg0QLhiABBixAxjUAhgNwgIKEC4YgAQYsQMYDcICDhAuGIAEGLEDGIMBGIoFwgINEAAYgAQYsQMYgwEYCsICCBAAGBYYChgewgILEAAYgAQYhgMYigXCAgUQABjvBZgDA_EFEU-vuAuKF3uSBwUxMi4zOKAHv44CsgcEMC4zOLgH2yTCBwYzLjQxLjbIB3g%26sclient%3Dgws-wiz%26sei%3D0V4waL3ZLKGGnesPy_jDuAI&q=EgRnRBdhGNG9wcEGIjA5eZzk7wQ3IRtJhQvLLRT-Rb_jMAetlSaKaNhunpz10_rIYXXpoKh_ZcEzDVe_I4cyAVJaAUM');
    yield page.locator('iframe[name="a-ly8n30weme75"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
    yield page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
    yield page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
    yield page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
    yield page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
    yield page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(2)').click();
    yield page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(4) > td').first().click();
    yield page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
    yield page.getByRole('button', { name: 'Show more AI Overview' }).click();
    yield page.getByText('a free, open-source test').click();
    yield page.getByRole('link', { name: 'Tools QA', exact: true }).click();
    yield page.getByRole('link', { name: 'Playwright Automation Framework: Tutorial BrowserStack https://www.browserstack' }).click();
    yield page.getByRole('link', { name: 'Get Started free' }).click();
    yield page.goto('https://www.browserstack.com/guide/playwright-tutorial');
}));
