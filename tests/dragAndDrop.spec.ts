import { test , expect } from "@playwright/test";

test('drag and drop', async({page}) => {
    await page.goto('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const Copenhagen =await page.locator('#box4');
    const italy = await page.locator('#box106');
    await Copenhagen.dragTo(italy);
    await page.waitForTimeout(1000);
    await page.close();
})