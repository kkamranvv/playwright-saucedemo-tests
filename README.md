# Playwright Automation Tests

Comprehensive **UI** and **API** automation testing framework built with **Playwright + TypeScript**.  
This project combines:
- 🧭 **UI testing** for [SauceDemo](https://www.saucedemo.com/) using the **Page Object Model (POM)** pattern  
- 🔗 **API testing** for [Reqres](https://reqres.in/) — a fake REST API for practicing and demonstrating CRUD operations  

## 🛠 Tech Stack

- [Playwright](https://playwright.dev/) (TypeScript)
- Page Object Model (POM)
- [Testomat.io](https://testomat.io/) — test management & living documentation
- GitHub Actions — CI/CD pipeline
- ESLint + Husky — code quality & pre-commit checks
- Allure Report *(planned)*

## 🧪 Test Documentation

All manual and automated test cases are documented in Testomat.io.
You can explore the full list of test cases and descriptions below 👇

[View Test Cases in Testomat.io](https://app.testomat.io/docs/projects/saucedemo-c35a9)

## 🌐 API Reference

API tests are based on the [Reqres API](https://reqres.in/api-docs/) — a fake REST API for testing and prototyping.  
It’s used to demonstrate CRUD operations (GET, POST, PUT, DELETE) in the `tests/api/reqres/` folder.

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
