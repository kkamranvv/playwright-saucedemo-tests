import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { AddItem } from "../pages/AddItemToCart.js";
import { Checkout } from "../pages/Checkout.js";
import { authFixtures } from "./auth.fixtures.js";
import { cartFixtures } from "./cart.fixtures.js";
import { checkoutFixtures } from "./checkout.fixtures.js";
import {
  readyForCheckoutFixtures,
  ReadyForCheckout,
} from "./readyForCheckout.fixtures.js";

export const test = base
  .extend<{
    loginPage: LoginPage;
    cartReady: AddItem;
    checkoutPage: Checkout;
    readyForCheckout: ReadyForCheckout;
  }>({})
  .extend(authFixtures)
  .extend(cartFixtures)
  .extend(checkoutFixtures)
  .extend(readyForCheckoutFixtures);

export { expect };
