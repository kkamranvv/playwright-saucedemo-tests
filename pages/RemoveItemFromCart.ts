import { Page, Locator } from "@playwright/test";

export class RemoveItem {
  readonly page: Page;
  readonly removeBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.removeBtn = page.locator("#remove-sauce-labs-backpack");
  }

  async removeItem() {
    await this.removeBtn.click();
  }
}
