import { test, expect } from "../../../fixtures/saucedemo/index.js";

import { AddItem } from "../../../pages/saucedemo/AddItemToCart.js";

import { RemoveItem } from "../../../pages/saucedemo/RemoveItemFromCart.js";

test.describe("Cart Tests", async () => {
  test("Add item to cart", async ({ page, loginPage: _loginPage }) => {
    const add = new AddItem(page);
    await add.addItem();

    await expect(page.locator(".shopping_cart_badge")).toBeVisible();

    await page.waitForTimeout(3000);
  });

  test("Remove item from cart", async ({ page, loginPage: _loginPage }) => {
    const add = new AddItem(page);
    await add.addItem();
    await add.cartItems();

    const remove = new RemoveItem(page);
    await remove.removeItem();

    await expect(page.locator(".shopping_cart_badge")).toBeHidden();

    await page.waitForTimeout(3000);
  });
});
