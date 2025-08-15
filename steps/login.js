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
const cucumber_1 = require("@cucumber/cucumber");
// Step: Navigate to login page
(0, cucumber_1.Given)('the user navigates to the login page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('User navigates to the login page');
    });
});
// Step: Enter valid username and password
(0, cucumber_1.When)('the user enters valid username and password', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('User enters valid username and password');
    });
});
// Step: Enter invalid username and password
(0, cucumber_1.When)('the user enters invalid username and password', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('User enters invalid username and password');
    });
});
// Step: Click login button
(0, cucumber_1.When)('the user clicks on the login button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('User clicks on the login button');
    });
});
// Step: Successful dashboard redirect
(0, cucumber_1.Then)('the user should be redirected to the dashboard', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('User is redirected to the dashboard');
    });
});
// Step: Error message display
(0, cucumber_1.Then)('an error message should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield console.log('An error message is displayed');
    });
});
