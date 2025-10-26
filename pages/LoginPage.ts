import { Page, Locator } from "@playwright/test";
import { ENV } from "../utils/env.js";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#user-name");
    this.passwordInput = page.locator("#password");
    this.loginBtn = page.locator("#login-button");
    this.errorMessage = page.locator("h3[data-test='error']");
  }

  async goto() {
    await this.page.goto(ENV.baseUrl);
  }

  // ✅ for successful logins
  async loginValidUser(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await Promise.all([
      this.page.waitForURL(/inventory\.html/, { timeout: 10000 }),
      this.loginBtn.click(),
    ]);
  }

  // ✅ for invalid/locked-out users
  async loginInvalidUser(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    // Wait for error message instead of URL change
    await this.errorMessage.waitFor({ state: "visible", timeout: 5000 });
  }

  async getErrorText() {
    return this.errorMessage.textContent();
  }
}
