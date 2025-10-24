# Playwright SauceDemo Tests

UI and API automation tests for [SauceDemo](https://www.saucedemo.com/) using **Playwright + TypeScript**.  
The project follows the **Page Object Model (POM)** pattern and covers core e-commerce scenarios.

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) (TypeScript)
- Page Object Model (POM)
- Allure Report (planned)
- GitHub Actions (CI/CD)
- [Testomat.io](https://testomat.io/) — test management & living documentation

## Test Documentation

All manual and automated test cases are documented in Testomat.io.
You can explore the full list of test cases and descriptions below 👇

[View Test Cases in Testomat.io](https://app.testomat.io/docs/projects/saucedemo-c35a9)

## 📂 Project Structure

tests/ # Test cases

pages/ # Page Object Model classes

utils/ # Helpers and test data

fixtures/ # Custom Playwright fixtures

reports/ # Reports (Allure)

## 🚀 How to Run Tests

```bash
# Install dependencies
npm install

# Run all tests
npx playwright test

# Run with UI browser
npx playwright test --headed

# Run a specific test file
npx playwright test tests/login.spec.ts
```
