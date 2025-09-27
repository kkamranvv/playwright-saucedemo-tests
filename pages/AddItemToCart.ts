import { Page, Locator } from "@playwright/test";

export class AddItem {
  readonly page: Page;
  readonly addBackpackButton: Locator;
  readonly cart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cart = page.locator(".shopping_cart_link");
  }

  async addItem() {
    await this.addBackpackButton.click();
  }

  async cartItems() {
    await this.cart.click();
  }
}
