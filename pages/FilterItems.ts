import { Page, Locator } from "playwright/test";
import { text } from "stream/consumers";

export class FilterPrice {
  readonly page: Page;
  readonly sortSelect: Locator;
  readonly prices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortSelect = page.locator(".product_sort_container");
    this.prices = page.locator(".inventory_item_price");
  }

  async selectLowToHigh() {
    await this.sortSelect.selectOption("lohi");
  }

  async getPrices(): Promise<number[]> {
    const texts = await this.prices.allTextContents();
    console.log(texts);
    return texts.map((a) => parseFloat(a.replace("$", "")));
  }
}
