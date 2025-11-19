import { Page, Locator } from "@playwright/test";

export class SearchEmployee {
  readonly page: Page;
  readonly employeeName: Locator;
  readonly employeeId: Locator;
  readonly employmentStatus: Locator;
  readonly errorMessage: Locator;
  readonly include: Locator;
  readonly supervisorName: Locator;
  readonly jobTitle: Locator;
  readonly subUnit: Locator;
  readonly resetBtn: Locator;
  readonly searchBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeeName = page.locator(
      "(//input[@placeholder='Type for hints...'])[1]"
    );
    this.employeeId = page.locator(
      "(//input[@class='oxd-input oxd-input--active'])[2]"
    );
    this.employmentStatus = page.locator(
      "(//div[contains(text(),'-- Select --')])[1]"
    );
    this.include = page.locator("(//div)[55]");
    this.supervisorName = page.locator(
      "(//input[@placeholder='Type for hints...'])[2]"
    );
    this.jobTitle = page.locator("(//div[contains(text(),'-- Select --')])[2]");
    this.subUnit = page.locator("(//div[contains(text(),'-- Select --')])[3]");
    this.errorMessage = page.locator(
      ".oxd-text.oxd-text--p.oxd-alert-content-text"
    );

    this.resetBtn = page.getByRole("button", { name: "Reset" });

    this.searchBtn = page.getByRole("button", { name: "Search" });
  }

  async fillEmployeeName(name: string) {
    await this.employeeName.fill(name);
  }

  async clickSearchBtn() {
    await this.searchBtn.click();
  }

  async enterEmployeeId(employeeId: number) {
    this.employeeId.fill(employeeId.toString());
  }

  async selectEmploymentStatus(option: string) {
    await this.employmentStatus.click();
    await this.page.getByRole("option", { name: option }).click();
  }

  async getErrorText() {
    return this.errorMessage.textContent();
  }
}
