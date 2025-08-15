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
test_1.test.describe("inner iframe", () => {
    (0, test_1.test)("Inner frames interaction", (_a) => __awaiter(void 0, [_a], void 0, function* ({ browser }) {
        // Create a new browser context and page
        const context = yield browser.newContext();
        const page = yield context.newPage();
        // Navigate to the website
        yield page.goto("https://ui.vision/demo/webtest/frames/");
        // Select the iframe using URL
        const frame3 = yield page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_3.html" });
        if (!frame3)
            throw new Error("Frame 3 not found!");
        // Wait for the input field and fill it
        yield frame3.waitForSelector('input[name="mytext3"]');
        yield frame3.locator('input[name="mytext3"]').fill("welcome");
        // Wait for the "Sign in to Google" link and click it
        const childframe = yield frame3.childFrames();
        yield childframe[0].waitForSelector('//a[contains(text(),"Sign in to Google")]');
        yield childframe[0].locator('//a[contains(text(),"Sign in to Google")]').click();
        // Handling a new page opening in a new tab
        const [newPage] = yield Promise.all([
            context.waitForEvent("page"), // Wait for a new page event
            frame3.locator('a[target="_blank"]').click(), // Click link that opens new tab
        ]);
        yield newPage.waitForLoadState();
        // Checking if there are child frames inside frame3
        //  const childFrames = frame3.childFrames();
        // console.log(`Number of child frames: ${childFrames.length}`);
        // if (childFrames.length > 0) {
        //   await childFrames[0].waitForSelector('input[type="checkbox"]');
        // await childFrames[0].locator('input[type="checkbox"]').check();
        //}
        // Close the browser context
        yield context.close();
    }));
});
