import { test, expect } from "../fixtures/index.js";

test.describe("Checkout", () => {
  test("Successfull checkout", async ({ readyForCheckout }) => {
    const { page, checkoutPage } = readyForCheckout;

    await checkoutPage.completeInfo("Kamran", "Musadirli", "12345");
    await checkoutPage.clickContinue();
    await page.waitForTimeout(2000);

    await expect(page).toHaveURL(
      "https://www.saucedemo.com/checkout-step-two.html"
    );

    await checkoutPage.clickFinish();

    await expect(page.locator(".complete-header")).toHaveText(
      "Thank you for your order!"
    );
  });

  test.describe("Checkout with invalid data", () => {
    test("Checkout with no data", async ({ readyForCheckout }) => {
      const { page, checkoutPage } = readyForCheckout;

      await checkoutPage.clickContinue();

      await expect(
        page.locator(".error-message-container.error")
      ).toBeVisible();

      await expect(page.locator("h3[data-test='error']")).toHaveText(
        "Error: First Name is required"
      );

      await page.waitForTimeout(2000);
    });

    test("Checkout without Last Name And Zip Code", async ({
      readyForCheckout,
    }) => {
      const { page, checkoutPage } = readyForCheckout;

      await checkoutPage.completeInfo("Kamran");

      await checkoutPage.clickContinue();

      await expect(
        page.locator(".error-message-container.error")
      ).toBeVisible();

      await expect(page.locator("h3[data-test='error']")).toHaveText(
        "Error: Last Name is required"
      );

      await page.waitForTimeout(2000);
    });

    test("Checkout without Zip Code", async ({ readyForCheckout }) => {
      const { page, checkoutPage } = readyForCheckout;

      await checkoutPage.completeInfo("Kamran", "Musadirli");

      await checkoutPage.clickContinue();

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
