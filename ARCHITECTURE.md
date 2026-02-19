# Architecture Guide

## Project Architecture Overview

This project follows a modern test automation architecture combining:
- **Page Object Model (POM)** for maintainability
- **BDD/Cucumber** for readability
- **Cypress** for robust E2E testing

```
┌─────────────────────────────────────────┐
│         Feature Files (Gherkin)        │
│  Human-readable test scenarios         │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│       Step Definitions (JavaScript)    │
│  Maps Gherkin steps to code            │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│    Page Object Models (Classes)        │
│  Encapsulates page interactions        │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│       Cypress Commands/Utilities       │
│  Interact with browser and app         │
└─────────────────────────────────────────┘
```

## Component Details

### 1. Feature Files (BDD)

**Location**: `cypress/e2e/features/`

Feature files describe test scenarios in Gherkin syntax:

```gherkin
Feature: User Login Functionality

  Scenario: Successful login with valid credentials
    Given User navigates to login page
    When User enters valid credentials
    Then User should be logged in successfully
```

**Benefits**:
- Non-technical stakeholders can understand tests
- Clear test documentation
- Reusable scenarios across tests
- Easy to maintain and update

### 2. Step Definitions

**Location**: `cypress/e2e/stepDefinitions/`

Maps Gherkin steps to actual test code:

```javascript
Given('User navigates to login page', () => {
  cy.visit('/web/auth/login');
});

When('User enters valid credentials', () => {
  LoginPage.enterUsername('admin');
  LoginPage.enterPassword('admin123');
});

Then('User should be logged in successfully', () => {
  DashboardPage.verifyDashboardDisplayed();
});
```

**Structure**:
- `Given` - Preconditions (setup state)
- `When` - Actions (user interactions)
- `Then` - Assertions (verify outcomes)

### 3. Page Object Models

**Location**: `cypress/pageObjects/`

Encapsulates page interactions and selectors:

```javascript
export class LoginPage {
  constructor() {
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  enterUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }
}
```

**Advantages**:
- ✅ **Maintainability**: Update selectors in one place
- ✅ **Reusability**: Use same methods across tests
- ✅ **Readability**: Clear method names
- ✅ **Scalability**: Easy to add new pages

### 4. Support/Utilities

**Location**: `cypress/support/` and `cypress/utils/`

#### Support Files (e2e.js)
- Custom Cypress commands
- Global configurations
- Error handling
- Before/After hooks

Example:
```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
```

#### Utilities (Utilities.js)
- Helper functions
- Common operations
- Reusable test utilities

Example:
```javascript
export const waitForElementAndClick = (selector) => {
  cy.get(selector).should('be.visible').click();
};
```

### 5. Test Data Management

**Location**: `cypress/fixtures/` and `cypress/utils/TestData.js`

**JSON Fixtures** (`testData.json`):
```json
{
  "loginData": [
    {
      "username": "admin",
      "password": "admin123"
    }
  ]
}
```

**Test Data Generators** (`TestData.js`):
```javascript
export const generateRandomEmail = () => {
  return `test${Date.now()}@example.com`;
};
```

### 6. Hooks

**Location**: `cypress/support/hooks.js`

Cucumber hooks for setup/teardown:

```javascript
Before(function() {
  // Runs before each scenario
  cy.clearCookies();
  cy.clearLocalStorage();
});

After(function(scenario) {
  // Runs after each scenario
  if (scenario.result.status === 'FAILED') {
    cy.screenshot();
  }
});
```

## Data Flow Diagram

```
┌──────────────────┐
│  Feature File    │ (Gherkin)
│  Login.feature   │
└────────┬─────────┘
         │ "When user enters username"
         ▼
┌──────────────────────────┐
│  Step Definition         │
│  When('[a-z ]+, () => {) │
└────────┬────────────────┘
         │ LoginPage.enterUsername()
         ▼
┌──────────────────────────┐
│  Page Object Model       │
│  enterUsername(username) │
└────────┬────────────────┘
         │ cy.get(...).type()
         ▼
┌──────────────────────────┐
│  Cypress Command         │
│  cy.get().type()         │
└────────┬────────────────┘
         │
         ▼
┌──────────────────────────┐
│  Browser Action          │
│  Type in input field     │
└──────────────────────────┘
```

## Layered Test Architecture

```
Layer 1: Business Logic
  ├─ Feature Files
  │  ├─ Login.feature
  │  ├─ Admin.feature
  │  ├─ Leave.feature
  │  ├─ MyInfo.feature
  │  └─ Performance.feature
  └─ Easy to understand

Layer 2: Test Automation
  ├─ Step Definitions
  │  ├─ LoginSteps.js
  │  ├─ AdminSteps.js
  │  ├─ LeaveSteps.js
  │  ├─ MyInfoSteps.js
  │  └─ PerformanceSteps.js
  └─ Glue between features and code

Layer 3: UI Interactions
  ├─ Page Objects
  │  ├─ LoginPage.js
  │  ├─ DashboardPage.js
  │  ├─ AdminPage.js
  │  ├─ LeavePage.js
  │  ├─ MyInfoPage.js
  │  └─ PerformancePage.js
  └─ Encapsulate page elements

Layer 4: Utilities & Helpers
  ├─ Utilities.js
  ├─ TestData.js
  ├─ e2e.js (Custom Commands)
  └─ hooks.js (Setup/Teardown)
  └─ Common functionality

Layer 5: Browser & Application
  └─ Cypress commands interact with app
```

## Module Organization

### Module: Login
```
cypress/e2e/
├── features/
│   └── Login.feature
├── stepDefinitions/
│   └── LoginSteps.js
└── pageObjects/
    └── LoginPage.js
```

### Module: Admin
```
cypress/e2e/
├── features/
│   └── Admin.feature
├── stepDefinitions/
│   └── AdminSteps.js
└── pageObjects/
    └── AdminPage.js
```

Similar structure for Leave, MyInfo, and Performance modules.

## Test Execution Flow

```
1. Cypress reads feature file
   ↓
2. Identifies scenarios
   ↓
3. For each scenario:
   ├─ Run Before hooks
   ├─ Execute Given steps
   ├─ Execute When steps
   ├─ Execute Then steps
   └─ Run After hooks
   ↓
4. Generate report
   ↓
5. Output results
```

## Design Patterns Used

### 1. Page Object Model (POM)
- Separates test logic from page structure
- Changes to UI only require updates in page objects
- Improves test maintainability

### 2. Singleton Pattern
```javascript
// Created once and used everywhere
export default new LoginPage();
```

### 3. Builder Pattern
```javascript
// Fluent API for building test data
testData.withUsername('admin')
       .withPassword('admin123')
       .withEmail('test@example.com')
       .build();
```

### 4. Hook Pattern
```javascript
// Setup before each test
Before(() => { /* setup */ });

// Cleanup after each test
After(() => { /* cleanup */ });
```

## Best Practices Implemented

✅ **Separation of Concerns**
- Features, steps, and pages are separate
- Each component has a single responsibility

✅ **DRY (Don't Repeat Yourself)**
- Reusable page objects
- Shared utilities
- Common test data

✅ **Readability**
- Descriptive method names
- Gherkin readable features
- Clear code comments

✅ **Maintainability**
- Centralized selectors
- Consistent naming conventions
- Well-organized structure

✅ **Scalability**
- Easy to add new tests
- Simple to extend functionality
- Module-based organization

## Configuration Management

### cypress.config.js
```javascript
// Centralized configuration
- Base URL
- Timeouts
- Browser settings
- Reporter options
- Video/Screenshot settings
```

### .env File
```bash
# Environment variables
BASE_URL
ADMIN_USERNAME
ADMIN_PASSWORD
BROWSER
HEADLESS
```

## Report Generation

```
Test Execution
    ↓
Generate JSON Reports (Mochawesome)
    ↓
Merge Reports (mochawesome-merge)
    ↓
Generate HTML Report (mochawesome-report-generator)
    ↓
Output: cypress/reports/mochawesome-report/index.html
```

## Key Files Summary

| File | Purpose |
|------|---------|
| `.feature` | Gherkin test scenarios |
| `*Steps.js` | Maps Gherkin to code |
| `*Page.js` | Page objects |
| `Utilities.js` | Helper functions |
| `TestData.js` | Test data generators |
| `hooks.js` | Setup/teardown |
| `cypress.config.js` | Framework configuration |
| `.env` | Environment variables |

---

This architecture ensures tests are:
- **Easy to write** - Simple Gherkin syntax
- **Easy to read** - Clear test intent
- **Easy to maintain** - Centralized changes
- **Easy to scale** - Add new tests quickly
