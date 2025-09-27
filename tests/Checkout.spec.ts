import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { AddItem } from "../pages/AddItemToCart";

import { Checkout } from "../pages/Checkout";

test.describe("Checkout", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("Successfull checkout", async ({ page }) => {
    const add = new AddItem(page);
    await add.addItem();
    await add.cartItems();

    await expect(page.locator(".shopping_cart_badge")).toBeVisible();

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

  test("Checkout with invalid data", async ({ page }) => {
    const add = new AddItem(page);
    await add.addItem();
    await add.cartItems();

    await expect(page.locator(".shopping_cart_badge")).toBeVisible();

    const checkout = new Checkout(page);

    await checkout.clickCheckout();

    // without filling the data

    await checkout.clickContinue();

    await expect(page.locator(".error-message-container.error")).toBeVisible();

    await expect(page.locator("h3[data-test='error']")).toHaveText(
      "Error: First Name is required"
    );

    await page.waitForTimeout(2000);
  });
});
