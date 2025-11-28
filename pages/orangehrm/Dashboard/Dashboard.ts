import { Page } from "@playwright/test";

export class DashboardPage {
  readonly dashboardHeader;
  readonly adminMenu;
  readonly pimMenu;
  readonly leaveMenu;
  readonly timeMenu;
  readonly recruitmentMenu;
  readonly userProfileMenu;
  readonly logoutButton;

  constructor(public page: Page) {
    this.dashboardHeader = page.locator(
      "h6.oxd-text--h6.oxd-topbar-header-breadcrumb-module"
    );

    this.adminMenu = page.locator('//span[text()="Admin"]');
    this.pimMenu = page.locator('//span[text()="PIM"]');
    this.leaveMenu = page.locator('//span[text()="Leave"]');
    this.timeMenu = page.locator('//span[text()="Time"]');
    this.recruitmentMenu = page.locator('//span[text()="Recruitment"]');

    this.userProfileMenu = page.locator(".oxd-userdropdown-name");
    this.logoutButton = page.locator('a[href="/web/index.php/auth/logout"]');
  }

  async goToPIM() {
    await this.pimMenu.click();
  }

  async goToAdmin() {
    await this.adminMenu.click();
  }

  async logout() {
    await this.userProfileMenu.click();
    await this.logoutButton.click();
  }
}
