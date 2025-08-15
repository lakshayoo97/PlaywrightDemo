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
    yield page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const email = yield page.locator('[id="input-email"]');
    const passwordl = yield page.locator('[id="input-password"]');
    const click = yield page.locator('[type="submit"]');
    yield email.fill("pikachu123@getMaxListeners.com");
    yield passwordl.fill("lucky@123");
    yield click.click();
    const title1 = yield page.title();
    console.log("home page title", title1);
    yield page.screenshot({ path: "homealonePage.png" });
    yield browser.close;
}));
