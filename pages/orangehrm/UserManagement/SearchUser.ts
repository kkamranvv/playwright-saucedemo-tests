import { Page, Locator } from "@playwright/test";

export class SearchUser {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly searchBtn: Locator;
  readonly resetBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator(
      "div[class='oxd-input-group oxd-input-field-bot/tom-space'] div input[class='oxd-input oxd-input--active']"
    );
    this.searchBtn = page.locator("//button[normalize-space()='Search']");
    this.resetBtn = page.locator("//button[normalize-space()='Reset']");
  }

  async searchByUsername(username: string) {
    await this.usernameInput.fill(username);
    await this.searchBtn.click();
  }

  async getUserRow(username: string): Promise<Locator> {
    return this.page.locator(
      `//div[contains(@class,'oxd-table-card')]//div[contains(normalize-space(), '${username}')]`
    );
  }
}
