const { test, expect } = require('@playwright/test')
test('login test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[placeholder = "Username"]').fill("sivaram")
});
