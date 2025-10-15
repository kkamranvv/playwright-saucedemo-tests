import { Page, Locator, expect } from "@playwright/test";

export class AddItem {
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackButton = page.locator("#add-to-cart-sauce-labs-backpack");
    this.cart = page.locator(".shopping_cart_link");
  }

  async addItem() {
    await expect(this.page).toHaveURL(/inventory\.html/, { timeout: 10000 });
    await this.addBackpackButton.waitFor({ state: "visible", timeout: 10000 });
    await expect(this.addBackpackButton).toBeEnabled();
    await this.addBackpackButton.scrollIntoViewIfNeeded();
    await this.addBackpackButton.click();
  }

  async cartItems() {
    await this.cart.click();
  }
}
