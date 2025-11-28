import { Page, Locator } from "@playwright/test";
import { ENV } from "../../../env.js";

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("input[placeholder='Username']");
    this.passwordInput = page.locator("input[placeholder='Password']");
    this.loginBtn = page.locator("//button[normalize-space()='Login']");
    this.errorMessage = page.locator(
      ".oxd-text.oxd-text--p.oxd-alert-content-text"
    );
  }

  async goto() {
    await this.page.goto(ENV.uiOrangeHRMUrl);
  }

  // ✅ for successful logins
  async loginValidUser(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);

    await this.loginBtn.click();
  }

  // ✅ for invalid users
  async loginInvalidUser(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();

    await this.errorMessage.waitFor({ state: "visible", timeout: 5000 });
  }

  async getErrorText() {
    return this.errorMessage.textContent();
  }
}
