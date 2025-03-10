import { test, expect } from "@playwright/test";
import readXlsxFile from "read-excel-file";
import { readFile, utils } from "xlsx";


test('Download PDF', async ({ page }, testInfo) => {
    const org_const = 'original.xlsx';
    const orginalExe = await readFile(org_const);  // Ensure this is awaited

    await page.goto('https://letcode.in/file');
    
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#xls').click()
    ]);

    const path = `./${download.suggestedFilename()}`;
    await download.saveAs(path);  // Save the file
    await testInfo.attach('download', { path: path });

    const forDownloadFile = await readFile(path);  // Ensure this is awaited

    expect(orginalExe).toStrictEqual(forDownloadFile);
});

//async function readExcel(path: string) {
    //await fs.access(path);  // Ensure file exists before reading
    //const buffer = await fs.readFile(path);
       // const workbook = readXlsxFile
       // const sheet = workbook.Sheets[workbook.SheetNames[0]];
        //const jsonSheet = utils.sheet_to_json(sheet);
        //await console.log(jsonSheet);
        //return jsonSheet;
//}