import "allure-playwright";
import { defineConfig, devices } from "@playwright/test";
import { ENV } from "./env.js";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  reporter: [
    ["list"],
    ["allure-playwright", { outputFolder: "reports/allure-results" }],
  ],
  projects: [
    {
      name: "ui-tests",
      testDir: "./tests/ui/saucedemo",
      use: {
        baseURL: ENV.uiSaucedemoUrl,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "ui-tests",
      testDir: "./tests/ui/orangehrm",
      use: {
        ignoreHTTPSErrors: true,
        baseURL: ENV.uiOrangeHRMUrl,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "api-tests-reqres",
      testDir: "./tests/api/reqres",
      use: {
        baseURL: ENV.apiReqresUrl,
        extraHTTPHeaders: {
          "x-api-key": "reqres-free-v1",
          "Content-Type": "application/json",
        },
      },
    },
    {
      name: "api-tests-jsonplaceholder",
      testDir: "./tests/api/jsonplaceholder",
      use: {
        baseURL: ENV.apiJsonPlaceHolderUrl,
        extraHTTPHeaders: {
          "Content-type": "application/json; charset=UTF-8",
          "User-Agent": "Playwright Test Runner",
        },
      },
    },
    {
      name: "ui-tests-realworld",
      testDir: "./tests/ui/realworld",
      use: {
        baseURL: "http://localhost:3000",
        ...devices["Desktop Chrome"],
      },
    },
  ],
});
