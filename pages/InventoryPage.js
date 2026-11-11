class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.productList = page.locator('[data-test="inventory-list"]');
  }

  async isLoaded() {
    try {
      await this.page.waitForURL(/inventory\.html/);
      await this.title.waitFor({ state: 'visible' });
      await this.productList.waitFor({ state: 'visible' });
      return true;
    } catch {
      return false;
    }
  }
}

module.exports = { InventoryPage };
