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
test_1.test.describe("three tests", () => {
    let context;
    let page;
    test_1.test.beforeEach((_a) => __awaiter(void 0, [_a], void 0, function* ({ browser }) {
        context = yield browser.newContext();
        page = yield context.newPage();
        yield page.goto("https://testautomationpractice.blogspot.com/");
    }));
    test_1.test.skip("login test", () => __awaiter(void 0, void 0, void 0, function* () {
        page.on("dialog", (dialog) => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(dialog.type()).toContain("alert");
            (0, test_1.expect)(dialog.message()).toContain("I am an alert box!");
            console.log("test", dialog.message);
            yield dialog.accept();
        }));
        yield page.click('//button[@id="alertBtn"]');
        yield page.waitForTimeout(5000);
    }));
    (0, test_1.test)("Alert test", () => __awaiter(void 0, void 0, void 0, function* () {
        page.on("dialog", (dialog) => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(dialog.type()).toContain("confirm");
            (0, test_1.expect)(dialog.message()).toContain("Press a button!");
            console.log("test", dialog.message);
            yield dialog.accept();
        }));
        yield page.click('//button[@id="confirmBtn"]');
        yield page.waitForTimeout(5000);
    }));
    (0, test_1.test)("Alert input", () => __awaiter(void 0, void 0, void 0, function* () {
        page.on("dialog", (dialog) => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(dialog.type()).toContain("prompt");
            (0, test_1.expect)(dialog.message()).toContain("Please enter your name:");
            (0, test_1.expect)(dialog.defaultValue()).toContain("Harry Potter");
            console.log("test", dialog.message);
            yield dialog.accept();
        }));
        yield page.click('//button[@id="promptBtn"]');
        yield page.waitForTimeout(5000);
    }));
});
