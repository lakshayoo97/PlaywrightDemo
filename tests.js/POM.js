"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POM = void 0;
class POM {
    constructor(page) {
        this.username = page.locator('//input[@name="user_login"]');
    }
}
exports.POM = POM;
