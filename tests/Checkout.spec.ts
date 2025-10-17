import { test, expect } from "../fixtures/fixtures";

import { AddItem } from "../pages/AddItemToCart";

import { Checkout } from "../pages/Checkout";

test.describe("Checkout", () => {
  test("Successfull checkout", async ({ page, loginPage, cartReady }) => {
    const checkout = new Checkout(page);

    await checkout.clickCheckout();
    await checkout.completeInfo("Kamran", "Musadirli", "12345");
    await checkout.clickContinue();
    await page.waitForTimeout(2000);

    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );

    await checkout.clickFinish();

    await expect(page.locator(".complete-header")).toHaveText(
      "Thank you for your order!"
    );
  });

  test.describe("Checkout with invalid data", () => {
    test("Checkout with no data", async ({ page, loginPage, cartReady }) => {
      const checkout = new Checkout(page);

      await checkout.clickCheckout();

      // without filling the data

      await checkout.clickContinue();

      await expect(
        page.locator(".error-message-container.error")
      ).toBeVisible();

      await expect(page.locator("h3[data-test='error']")).toHaveText(
        "Error: First Name is required"
      );

      await page.waitForTimeout(2000);
    });

    test("Checkout without Last Name And Zip Code", async ({
      page,
      loginPage,
      cartReady,
    }) => {
      const checkout = new Checkout(page);

      await checkout.clickCheckout();

      await checkout.completeInfo("Kamran");

      await checkout.clickContinue();

      await expect(
        page.locator(".error-message-container.error")
      ).toBeVisible();

      await expect(page.locator("h3[data-test='error']")).toHaveText(
        "Error: Last Name is required"
      );

      await page.waitForTimeout(2000);
    });

    test("Checkout without Zip Code", async ({
      page,
      loginPage,
      cartReady,
    }) => {
      const checkout = new Checkout(page);

      await checkout.clickCheckout();

      await checkout.completeInfo("Kamran", "Musadirli");

      await checkout.clickContinue();

      await expect(
        page.locator(".error-message-container.error")
      ).toBeVisible();

      await expect(page.locator("h3[data-test='error']")).toHaveText(
        "Error: Postal Code is required"
      );

      await page.waitForTimeout(2000);
    });
  });
});
