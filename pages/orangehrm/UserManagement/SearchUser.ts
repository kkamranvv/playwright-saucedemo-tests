import { Page, Locator } from "@playwright/test";

export class SearchUser {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly searchBtn: Locator;
  readonly resetBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator(
      "//label[text()='Username']/following::input[1]"
    );
    this.searchBtn = page.locator("//button[normalize-space()='Search']");
    this.resetBtn = page.locator("//button[normalize-space()='Reset']");
  }

  async goto() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
  }

  async searchByUsername(username: string) {
    await this.usernameInput.fill(username);
    await this.searchBtn.click();
  }

  getUserRow(username: string): Locator {
    return this.page.locator(
      `//div[contains(@class,'oxd-table-card')]//div[contains(normalize-space(), '${username}')]`
    );
  }

  async reset() {
    await this.resetBtn.click();
  }
}
