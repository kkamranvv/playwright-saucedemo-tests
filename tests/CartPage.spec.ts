import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";

test.describe("Cart Tests", async () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("Add item to cart", async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addItem();

    await expect(page.locator(".shopping_cart_badge")).toBeVisible();

    await page.waitForTimeout(6000);
  });
});
