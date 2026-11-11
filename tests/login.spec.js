const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const users = require('../data/users.json');

test.describe('Sauce Demo login — data-driven', () => {
  for (const user of users) {
    test(`login as ${user.username} with password "${user.password}" → ${user.expected}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      await loginPage.open();
      await loginPage.login(user.username, user.password);

      if (user.expected === 'success') {
        expect(await inventoryPage.isLoaded()).toBe(true);
        await expect(page).toHaveURL(/inventory\.html/);
      } else {
        const errorText = await loginPage.getErrorMessage();
        expect(errorText.length).toBeGreaterThan(0);
        await expect(page).toHaveURL(/saucedemo\.com\/?$/);
      }
    });
  }
});
