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
(0, test_1.test)("API Delete Testing", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const response = yield request.delete("https://reqres.in/api/users/2");
    (0, test_1.expect)(response.status()).toBe(204);
}));
(0, test_1.test)("API Put Testing", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const response = yield request.put("https://reqres.in/api/users/2", {
        data: {
            name: "Raghav",
            job: "engineer",
        },
    });
    (0, test_1.expect)(response.status()).toBe(200);
    const text = yield response.text();
    (0, test_1.expect)(text).toContain("engineer");
    console.log(response.json());
}));
(0, test_1.test)("API Post Testing", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const response = yield request.post("https://reqres.in/api/users", {
        data: {
            "First name": "Lakshay",
            "Second name": "Shankar",
        },
    });
    (0, test_1.expect)(response.status()).toBe(201);
    const text = yield response.text();
    (0, test_1.expect)(text).toContain("Lakshay");
    console.log(response.json());
}));
(0, test_1.test)("API Testing", (_a) => __awaiter(void 0, [_a], void 0, function* ({ request }) {
    const response = yield request.get("https://reqres.in/api/users/2");
    (0, test_1.expect)(response.status()).toBe(200);
    const text = yield response.text();
    (0, test_1.expect)(text).toContain("Janet");
    console.log(yield response.json());
}));
