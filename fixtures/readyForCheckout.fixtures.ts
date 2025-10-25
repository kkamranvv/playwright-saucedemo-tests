import type { Page } from "@playwright/test";
import { Checkout } from "../pages/Checkout.js";
import { LoginPage } from "../pages/LoginPage.js";
import { AddItem } from "../pages/AddItemToCart.js";

export interface ReadyForCheckout {
  page: Page;
  checkoutPage: Checkout;
}

export const readyForCheckoutFixtures = {
  readyForCheckout: async (
    {
      page,
      loginPage,
      cartReady,
      checkoutPage,
    }: {
      page: Page;
      loginPage: LoginPage;
      cartReady: AddItem;
      checkoutPage: Checkout;
    },
    use: (data: ReadyForCheckout) => Promise<void>
  ) => {
    void loginPage;
    void cartReady;
    await use({ page, checkoutPage });
  },
};
