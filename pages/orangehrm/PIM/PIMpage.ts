import { Page, Locator } from "@playwright/test";

export class PIMPage {
  readonly page: Page;
  readonly addBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBtn = page.locator(
      "//i[@class='oxd-icon bi-plus oxd-button-icon']"
    );
  }

  async goto() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
    );
  }

  async clickAddBtn() {
    await this.addBtn.click();
  }
}
