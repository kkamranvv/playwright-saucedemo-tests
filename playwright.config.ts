import "allure-playwright";
import { defineConfig, devices } from "@playwright/test";
import { ENV } from "./utils/env.js";

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
      testDir: "./tests/ui",
      use: {
        baseURL: ENV.uiBaseUrl,
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "api-tests-reqres",
      testDir: "./tests/api/reqres",
      use: {
        baseURL: ENV.apiBaseUrlReqres,
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
        baseURL: ENV.apiBaseUrlJsonPlaceHolder,
        extraHTTPHeaders: {
          "Content-type": "application/json; charset=UTF-8",
          "User-Agent": "Playwright Test Runner",
        },
      },
    },
  ],
});
