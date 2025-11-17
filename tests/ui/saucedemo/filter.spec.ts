import { test, expect } from "../../../fixtures/saucedemo/index.js";
import { FilterPrice } from "../../../pages/saucedemo/FilterItems.js";

test.describe("Filter", () => {
  test("Filter price from low to high", async ({
    page,
    loginPage: _loginPage,
  }) => {
    const filter = new FilterPrice(page);
    filter.selectLowToHigh();

    await expect(page.locator(".product_sort_container")).toHaveValue("lohi");

    const prices = await filter.getPrices();

    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test("Filter price from high to low", async ({
    page,
    loginPage: _loginPage,
  }) => {
    const filter = new FilterPrice(page);
    filter.selectHighToLow();

    await expect(page.locator(".product_sort_container")).toHaveValue("hilo");

    const prices = await filter.getPrices();

    const sorted = [...prices].sort((a, b) => a + b);
    expect(prices).toEqual(sorted);
  });

  test("Filter product Name (A to Z)", async ({
    page,
    loginPage: _loginPage,
  }) => {
    const filter = new FilterPrice(page);
    filter.selectNameAtoZ();

    await expect(page.locator(".product_sort_container")).toHaveValue("az");

    const names = await filter.getProductNames();

    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);
  });

  test("Filter product Name (Z to A)", async ({
    page,
    loginPage: _loginPage,
  }) => {
    const filter = new FilterPrice(page);
    filter.selectNameZtoA();

    await expect(page.locator(".product_sort_container")).toHaveValue("za");

    const names = await filter.getProductNames();

    const sorted = [...names].sort((a, b) => b.localeCompare(a));
    expect(names).toEqual(sorted);
  });
});
