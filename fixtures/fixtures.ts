import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddItem } from "../pages/AddItemToCart";

export const test = base.extend<{ loginPage: LoginPage; cartReady: void }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.loginValidUser("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory\.html/);

    await use(loginPage);
  },

  cartReady: async ({ page }, use) => {
    const add = new AddItem(page);
    await add.addItem();
    await add.cartItems();

    await expect(page.locator(".shopping_cart_badge")).toBeVisible();

    await use();
  },
});

export { expect };
