import { Page, Locator } from "playwright/test";
import { text } from "stream/consumers";

export class FilterPrice {
  readonly page: Page;
  readonly sortSelect: Locator;
  readonly prices: Locator;
  readonly productNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortSelect = page.locator(".product_sort_container");
    this.prices = page.locator(".inventory_item_price");
    this.productNames = page.locator(".inventory_item_name");
  }

  async selectLowToHigh() {
    await this.sortSelect.selectOption("lohi");
  }

  async selectHighToLow() {
    await this.sortSelect.selectOption("hilo");
  }

  async selectNameAtoZ() {
    await this.sortSelect.selectOption("az");
  }

  async selectNameZtoA() {
    await this.sortSelect.selectOption("za");
  }

  async getPrices(): Promise<number[]> {
    const texts = await this.prices.allTextContents();
    console.log(texts);
    return texts.map((a) => parseFloat(a.replace("$", "")));
  }

  async getProductNames(): Promise<string[]> {
    const texts = await this.productNames.allTextContents();
    console.log(texts);
    return texts.map((t) => t.trim());
  }
}
