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
(0, test_1.test)('Switch Tabs', () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield test_1.chromium.launch({ headless: false });
    const page1 = yield browser.newPage();
    const page2 = yield browser.newPage();
    yield page1.goto('https://www.google.com');
    yield page1.waitForTimeout(1000);
    yield page2.goto('https://www.bing.com');
    yield page1.bringToFront();
    yield page1.waitForTimeout(1000);
    yield page2.title();
    yield page2.bringToFront();
    yield page2.waitForTimeout(1000);
    yield page1.title();
    yield browser.close();
}));
