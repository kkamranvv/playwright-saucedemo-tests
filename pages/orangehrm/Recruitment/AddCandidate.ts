import { Page, Locator } from "@playwright/test";

export class AddCandidate {
  readonly page: Page;
  readonly firstName: Locator;
  readonly middleName: Locator;
  readonly lastName: Locator;
  readonly vacancy: Locator;
  readonly option: Locator;
  readonly email: Locator;
  readonly contactNumber: Locator;
  readonly resume: Locator;
  readonly keywords: Locator;
  readonly dateOfApplication: Locator;
  readonly notes: Locator;
  readonly keepData: Locator;
  readonly cancelBtn: Locator;
  readonly saveBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator("input[placeholder='First Name']");

    this.middleName = page.locator("input[placeholder='Middle Name']");

    this.lastName = page.locator("input[placeholder='Last Name']");

    this.vacancy = page.locator(
      "//label[text()='Vacancy']/following::div[contains(@class,'oxd-select-wrapper')][1]"
    );

    this.option = page.locator(
      "//div[@role='listbox']//span[normalize-space()='Junior Account Assistant']"
    );

    this.email = page.locator("(//input[@placeholder='Type here'])[1]");

    this.contactNumber = page.locator("(//input[@placeholder='Type here'])[2]");

    this.resume = page.locator("//input[@type='file']");

    this.keywords = page.locator(
      "//input[@placeholder='Enter comma seperated words...']"
    );

    this.dateOfApplication = page.locator("//input[@placeholder='yyyy-dd-mm']");

    this.notes = page.locator("//textarea[@placeholder='Type here']");

    this.keepData = page.locator(
      "//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']"
    );

    this.cancelBtn = page.locator("//button[normalize-space()='Cancel']");

    this.saveBtn = page.locator("//button[normalize-space()='Save']");
  }

  // async selectVacancy(vacancyName: string) {
  //   await this.page
  //     .locator(
  //       "//label[text()='Vacancy']/following::div[contains(@class,'oxd-select-wrapper')][1]"
  //     )
  //     .click();

  //   await this.page
  //     .locator(
  //       `//div[@role='listbox']//span[normalize-space()='${vacancyName}']`
  //     )
  //     .click();
  // }

  async fillCandidateInfo(
    firstName: string,
    middleName: string | undefined,
    lastName: string,
    email: string,
    contactNumber: string,
    resume: string,
    keywords: string,
    date: string,
    notes: string
  ) {
    await this.firstName.fill(firstName);
    await this.middleName.fill(middleName ?? "");
    await this.lastName.fill(lastName);

    await this.vacancy.click();

    await this.page.waitForTimeout(3000);

    await this.option.click();

    await this.email.fill(email);

    await this.contactNumber.fill(contactNumber);

    await this.resume.setInputFiles(resume);

    await this.keywords.fill(keywords);

    await this.dateOfApplication.fill(date);

    await this.notes.fill(notes);

    await this.keepData.click();
  }

  async save() {
    await this.saveBtn.click();
  }
}
