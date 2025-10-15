import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { FilterPrice } from "../pages/FilterItems";

test.describe("Filter", () => {
  test("Filter price from low to high", async ({ page }) => {
    const filter = new FilterPrice(page);
    filter.selectLowToHigh();

    await expect(page.locator(".product_sort_container")).toHaveValue("lohi");

    const prices = await filter.getPrices();

    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });
});
