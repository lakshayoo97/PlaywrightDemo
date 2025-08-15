//RecordTarget:TestRunner
import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test';
test('test', async () => {
    const browser:Browser = await chromium.launch({ headless: false });
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright automation note ');
    await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%2Bautomation%2Bnote%2B%26sca_esv%3D685d635ce644e565%26source%3Dhp%26ei%3DqF4waLzWA_jc2roPhYqluAk%26iflsig%3DACkRmUkAAAAAaDBsuHWfVUVUr3DADJjWh4k4aqqhRvcn%26ved%3D0ahUKEwi8yt-CwbmNAxV4rlYBHQVFCZcQ4dUDCA8%26uact%3D5%26oq%3Dplaywright%2Bautomation%2Bnote%2B%26gs_lp%3DEgdnd3Mtd2l6IhtwbGF5d3JpZ2h0IGF1dG9tYXRpb24gbm90ZSAyBxAAGIAEGA0yBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyCBAAGIAEGKIESKalAlDcDVj2oAJwDHgAkAEAmAGzAaAB5yOqAQQwLjM4uAEDyAEA-AEBmAIyoAL_JKgCCsICChAAGAMY6gIYjwHCAgsQABiABBixAxiDAcICCBAAGIAEGLEDwgIFEAAYgATCAgsQLhiABBixAxjUAsICERAuGIAEGLEDGNEDGIMBGMcBwgIIEC4YgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCxAuGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAgUQLhiABMICChAAGIAEGLEDGArCAgoQLhiABBixAxgKwgIHEAAYgAQYCsICChAAGIAEGLEDGA3CAg0QLhiABBixAxjUAhgNwgIKEC4YgAQYsQMYDcICDhAuGIAEGLEDGIMBGIoFwgINEAAYgAQYsQMYgwEYCsICCBAAGBYYChgewgILEAAYgAQYhgMYigXCAgUQABjvBZgDA_EFEU-vuAuKF3uSBwUxMi4zOKAHv44CsgcEMC4zOLgH2yTCBwYzLjQxLjbIB3g%26sclient%3Dgws-wiz%26sei%3D0V4waL3ZLKGGnesPy_jDuAI&q=EgRnRBdhGNG9wcEGIjA5eZzk7wQ3IRtJhQvLLRT-Rb_jMAetlSaKaNhunpz10_rIYXXpoKh_ZcEzDVe_I4cyAVJaAUM');
    await page.locator('iframe[name="a-ly8n30weme75"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
    await page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
    await page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
    await page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
    await page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
    await page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(4) > td:nth-child(2)').click();
    await page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().locator('tr:nth-child(4) > td').first().click();
    await page.locator('iframe[name="c-ly8n30weme75"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
    await page.getByRole('button', { name: 'Show more AI Overview' }).click();
    await page.getByText('a free, open-source test').click();
    await page.getByRole('link', { name: 'Tools QA', exact: true }).click();
    await page.getByRole('link', { name: 'Playwright Automation Framework: Tutorial BrowserStack https://www.browserstack' }).click();
    await page.getByRole('link', { name: 'Get Started free' }).click();
    await page.goto('https://www.browserstack.com/guide/playwright-tutorial');
});
