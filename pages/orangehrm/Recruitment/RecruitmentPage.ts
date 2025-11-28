import { Page, Locator } from "@playwright/test";

export class CandidateAddPage {
  readonly page: Page;
  readonly addBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addBtn = page.locator("//button[normalize-space()='Add']");
  }

  async gotoViewCandidates() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
    );

    await this.page.waitForSelector("//button[normalize-space()='Search']");
  }

  async resetFilters() {
    const resetBtn = this.page.locator("//button[normalize-space()='Reset']");
    if (await resetBtn.isVisible()) {
      await resetBtn.click();
    }
  }

  async clickAddBtn() {
    // Сначала очищаем фильтр
    await this.resetFilters();

    // Теперь нажимаем Add
    await Promise.all([this.page.waitForNavigation(), this.addBtn.click()]);
  }
}
