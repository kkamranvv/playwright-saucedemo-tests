import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { AddItem } from "../pages/AddItemToCart.js";

export const cartFixtures = {
  cartReady: async (
    { page }: { page: Page },
    use: (addItem: AddItem) => Promise<void>
  ) => {
    const add = new AddItem(page);
    await add.addItem();
    await add.cartItems();
    await expect(page.locator(".shopping_cart_badge")).toBeVisible();
    await use(add);
  },
};
