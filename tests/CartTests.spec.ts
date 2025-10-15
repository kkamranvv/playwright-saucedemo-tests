import { test, expect } from "../fixtures/fixtures";
import { LoginPage } from "../pages/LoginPage";
import { AddItem } from "../pages/AddItemToCart";

import { RemoveItem } from "../pages/RemoveItemFromCart";

test.describe("Cart Tests", async () => {
  test("Add item to cart", async ({ page, loginPage }) => {
    const add = new AddItem(page);
    await add.addItem();

    await expect(page.locator(".shopping_cart_badge")).toBeVisible();

    await page.waitForTimeout(3000);
  });

  test("Remove item from cart", async ({ page, loginPage }) => {
    const add = new AddItem(page);
    await add.addItem();
    await add.cartItems();

    const remove = new RemoveItem(page);
    await remove.removeItem();

    await expect(page.locator(".shopping_cart_badge")).toBeHidden();

    await page.waitForTimeout(3000);
  });
});
