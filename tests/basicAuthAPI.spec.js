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
const buffer = Buffer.from('user:password');
(0, test_1.test)('API', () => __awaiter(void 0, void 0, void 0, function* () {
    const context = yield test_1.request.newContext({
        baseURL: 'https://reqres.in/api',
        extraHTTPHeaders: {
            'Authorization': 'Basic ' + buffer.toString('base64'),
        },
    });
    const response = yield context.get('/users/2');
    console.log(response.json());
}));
