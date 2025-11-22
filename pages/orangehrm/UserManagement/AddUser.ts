import { Page, Locator } from "@playwright/test";

export class AddUser {
  readonly page: Page;
  readonly userRole: Locator;
  readonly essRole: Locator;
  readonly employeeName: Locator;
  readonly status: Locator;
  readonly statusEnabled: Locator;
  readonly statusDisabled: Locator;
  readonly username: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly saveBtn: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userRole = page.locator(
      "//label[text()='User Role']/following::div[contains(@class,'oxd-select-text-input')][1]"
    );

    this.essRole = page.locator("//div[@role='option' and text()='ESS']");

    this.employeeName = page.locator(
      "//input[@placeholder='Type for hints...']"
    );

    this.status = page.locator(
      "//label[text()='Status']/following::div[contains(@class,'oxd-select-text-input')][1]"
    );

    this.statusEnabled = page.locator(
      "//div[@role='option' and normalize-space()='Enabled']"
    );
    this.statusDisabled = page.locator(
      "//div[@role='option' and text()='Disabled']"
    );

    this.username = page.locator(
      "//label[text()='Username']/following::input[1]"
    );

    this.password = page.locator("(//input[@type='password'])[1]");
    this.confirmPassword = page.locator("(//input[@type='password'])[2]");

    this.saveBtn = page.locator("//button[normalize-space()='Save']");

    this.errorMessage = page.locator(
      "//span[contains(@class,'oxd-input-field-error-message')]"
    );
  }

  async addUser(username: string, password: string, confirmPassword: string) {
    // USER ROLE
    await this.userRole.click();

    // ждём пока раскроется dropdown
    await this.page.locator("//div[@role='listbox']").waitFor();

    await this.page
      .locator("//div[@role='option' and normalize-space()='ESS']")
      .click();

    // Employee Name
    await this.employeeName.fill("K");

    // ждём появления вариантов
    await this.page.locator("//div[@role='listbox']").waitFor();

    const empOption = this.page.locator(
      "//div[@role='option' and normalize-space()='Ranga Akunuri']"
    );

    await empOption.waitFor();
    await empOption.click();

    // Status
    await this.status.click();

    // ждём пока dropdown появится
    await this.page.locator("//div[@role='listbox']").waitFor();

    // кликаем Enabled
    await this.statusEnabled.click();

    // Username
    await this.username.fill(username);

    // Password
    await this.password.fill(password);

    // Confirm password
    await this.confirmPassword.fill(confirmPassword);
  }

  async clickSaveBtn() {
    await this.saveBtn.click();
  }
}
