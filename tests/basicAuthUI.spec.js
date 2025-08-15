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
test_1.test.describe('Basic Authentication', () => __awaiter(void 0, void 0, void 0, function* () {
    let broswer;
    let context;
    let page;
    test_1.test.beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            broswer = yield test_2.chromium.launch({ headless: false });
            context = yield broswer.newContext();
            page = yield context.newPage();
        });
    });
    test_1.test.afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield broswer.close();
        });
    });
    (0, test_1.test)('handle Auth', () => __awaiter(void 0, void 0, void 0, function* () {
        const username = 'admin';
        const password = 'admin';
        yield page.setExtraHTTPHeaders({ Authorization: createAuthorization(username, password) });
        yield page.goto('https://the-internet.herokuapp.com/basic_auth');
        yield page.screenshot({ path: "Authori.png" });
        console.log('Authorization header set');
        yield page.waitForTimeout(5000);
        // await page.pause(); wait for user to hold the page.
        function createAuthorization(username, password) {
            return 'Basic ' + btoa(username + ':' + password);
        }
    }));
}));
