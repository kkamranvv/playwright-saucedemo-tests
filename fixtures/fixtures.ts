import { Page, test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddItem } from "../pages/AddItemToCart";
import { Checkout } from "../pages/Checkout";

interface ReadyForCheckout {
  page: Page;
  checkoutPage: Checkout;
}

export const test = base.extend<{
  loginPage: LoginPage;
  cartReady: void;
  checkoutPage: Checkout;
  readyForCheckout: ReadyForCheckout;
}>({
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

  checkoutPage: async ({ page }, use) => {
    const checkout = new Checkout(page);

    await checkout.clickCheckout();

    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );

    await use(checkout);
  },

  readyForCheckout: async (
    { page, loginPage, cartReady, checkoutPage },
    use
  ) => {
    await use({ page, checkoutPage });
  },
});

export { expect };
