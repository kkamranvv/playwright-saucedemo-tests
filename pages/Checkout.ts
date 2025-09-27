import { Page, Locator } from "@playwright/test";

export class Checkout {
  readonly page: Page;
  readonly checkoutBtn: Locator;
  readonly inputFirstName: Locator;
  readonly inputLastName: Locator;
  readonly postalCode: Locator;
  readonly continueBtn: Locator;
  readonly finishBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.locator("#checkout");
    this.inputFirstName = page.locator("#first-name");
    this.inputLastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");
    this.continueBtn = page.locator("#continue");
    this.finishBtn = page.locator("#finish");
  }

  async clickCheckout() {
    await this.checkoutBtn.click();
  }

  async completeInfo(first: string, last: string, postal: string) {
    await this.inputFirstName.fill(first);
    await this.inputLastName.fill(last);
    await this.postalCode.fill(postal);
  }

  async clickContinue() {
    await this.continueBtn.click();
  }

  async clickFinish() {
    await this.finishBtn.click();
  }
}
