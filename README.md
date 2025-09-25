# Playwright SauceDemo Tests

UI and API automation tests for [SauceDemo](https://www.saucedemo.com/) using **Playwright + TypeScript**.  
The project follows the **Page Object Model (POM)** pattern and covers core e-commerce scenarios.

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) (TypeScript)
- Page Object Model (POM)
- Allure Report (planned)
- GitHub Actions (CI/CD)

## 📂 Project Structure

tests/ # Test cases
pages/ # Page Object Model classes
utils/ # Helpers and test data
fixtures/ # Custom Playwright fixtures
reports/ # Reports (e.g., Allure)

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
