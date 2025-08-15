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
const xlsx_1 = require("xlsx");
(0, test_1.test)('Download PDF', (_a, testInfo_1) => __awaiter(void 0, [_a, testInfo_1], void 0, function* ({ page }, testInfo) {
    const org_const = 'original.xlsx';
    const orginalExe = yield (0, xlsx_1.readFile)(org_const); // Ensure this is awaited
    yield page.goto('https://letcode.in/file');
    const [download] = yield Promise.all([
        page.waitForEvent('download'),
        page.locator('#xls').click()
    ]);
    const path = `./${download.suggestedFilename()}`;
    yield download.saveAs(path); // Save the file
    yield testInfo.attach('download', { path: path });
    const forDownloadFile = yield (0, xlsx_1.readFile)(path); // Ensure this is awaited
    (0, test_1.expect)(orginalExe).toStrictEqual(forDownloadFile);
}));
//async function readExcel(path: string) {
//await fs.access(path);  // Ensure file exists before reading
//const buffer = await fs.readFile(path);
// const workbook = readXlsxFile
// const sheet = workbook.Sheets[workbook.SheetNames[0]];
//const jsonSheet = utils.sheet_to_json(sheet);
//await console.log(jsonSheet);
//return jsonSheet;
//}
