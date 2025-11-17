import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { Checkout } from "../../pages/saucedemo/Checkout.js";

export const checkoutFixtures = {
  checkoutPage: async (
    { page }: { page: Page },
    use: (checkout: Checkout) => Promise<void>
  ) => {
    const checkout = new Checkout(page);
    await checkout.clickCheckout();
    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-one.html"
    );
    await use(checkout);
  },
};
