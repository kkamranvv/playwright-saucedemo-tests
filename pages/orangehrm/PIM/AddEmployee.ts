import { Page, Locator } from "@playwright/test";
import { ENV } from "../../../env.js";

export class AddEmployee {
  readonly page: Page;
  readonly employeeFirstName: Locator;
  readonly employeeMiddleName: Locator;
  readonly employeeId: Locator;
  readonly employeeLastName: Locator;
  readonly employeePhotoInput: Locator;
  readonly addEmployeeBtn: Locator;
  readonly toggleLoginDetails: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly statusEnabledRadio: Locator;
  readonly statusDisabledRadio: Locator;
  readonly saveBtn: Locator;
  readonly errorMsg: Locator;
  readonly duplicateEmployeeIdError: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addEmployeeBtn = page.locator("//button[normalize-space()='Add']");

    this.employeeFirstName = page.locator("//input[@placeholder='First Name']");

    this.employeeId = page.locator(
      "(//input[@class='oxd-input oxd-input--active'])[2]"
    );

    this.employeeMiddleName = page.locator(
      "//input[@placeholder='Middle Name']"
    );

    this.employeeLastName = page.locator("//input[@placeholder='Last Name']");

    this.employeePhotoInput = page.locator('input[type="file"]');

    this.toggleLoginDetails = page.locator(
      ".oxd-switch-input.oxd-switch-input--active.--label-right"
    );

    this.usernameInput = page.locator(
      "(//input[@class='oxd-input oxd-input--active'])[3]"
    );

    this.passwordInput = page.locator("(//input[@type='password'])[1]");

    this.confirmPasswordInput = page.locator("(//input[@type='password'])[2]");

    this.statusEnabledRadio = page.locator(
      "//label[normalize-space()='Enabled']"
    );

    this.statusDisabledRadio = page.locator(
      "//label[normalize-space()='Disabled']"
    );

    this.errorMsg = page.locator(".oxd-input-field-error-message");

    this.duplicateEmployeeIdError = page.locator(
      "//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']"
    );

    this.saveBtn = page.locator("//button[normalize-space()='Save']");
  }

  async completeEmployeeInfo(
    firstName: string,
    lastName: string,
    employeeId: number,
    employeePhoto: string,
    middleName?: string
  ) {
    await this.employeeFirstName.fill(firstName);

    if (middleName) {
      await this.employeeMiddleName?.fill(middleName);
    }

    await this.employeePhotoInput.setInputFiles(employeePhoto);

    await this.employeeLastName.fill(lastName);

    await this.employeeId.fill(employeeId.toString());
  }

  // async uploadPhoto(path: string) {
  //   const allowedFormats = ["jpg", "jpeg", "png", "gif"];
  //   const ext = path.split(".").pop()?.toLowerCase();

  //   if (!ext || !allowedFormats.includes(ext)) {
  //     throw new Error(
  //       `Unsupported format: ${ext}. Allowed: ${allowedFormats.join(", ")}`
  //     );
  //   }

  //   await this.employeePhotoInput.setInputFiles(path);
  // }

  async enableLoginDetails() {
    await this.toggleLoginDetails.click();
  }

  async fillLoginDetails(username: string, password: string, enable: true) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);

    if (enable) {
      await this.statusEnabledRadio.click();
    } else {
      await this.statusDisabledRadio.click();
    }
  }

  async save() {
    await this.saveBtn.click();
  }

  async getErrorText() {
    return this.errorMsg.textContent();
  }

  async getDuplicateIdError() {
    return this.duplicateEmployeeIdError.textContent();
  }
}
