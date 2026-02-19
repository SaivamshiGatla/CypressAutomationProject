# Contributing Guide

## How to Add New Test Scenarios

This guide explains how to add new tests to the Orange HRM automation framework.

## Process Overview

```
1. Create Feature File (.feature)
   ↓
2. Write Step Definitions (.js)
   ↓
3. Create/Update Page Objects (.js)
   ↓
4. Add Test Data (fixtures/testData.js)
   ↓
5. Run and Verify Tests
   ↓
6. Generate Reports
```

## Step-by-Step Guide

### Step 1: Create Feature File

**File**: `cypress/e2e/features/YourFeature.feature`

```gherkin
Feature: Feature Name

  Background:
    Given User is logged in as admin

  Scenario: Clear scenario description
    When User performs action
    And User performs another action
    Then Expected result should occur

  Scenario: Another test scenario
    When User does something
    Then Something should happen
```

**Gherkin Best Practices**:
- ✅ Use present tense
- ✅ Be descriptive and specific
- ✅ One assertion per "Then" clause
- ✅ Use "And" for related steps
- ✅ Avoid technical implementation details

### Step 2: Write Step Definitions

**File**: `cypress/e2e/stepDefinitions/YourFeatureSteps.js`

```javascript
import YourPage from '../../pageObjects/YourPage';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('User is on your page', () => {
  cy.visit('/your/page/path');
  YourPage.verifyPageDisplayed();
});

When('User performs action {string}', (actionName) => {
  YourPage.performAction(actionName);
});

Then('Expected result {string} occurs', (expectedResult) => {
  YourPage.verifyResult(expectedResult);
});
```

**Step Definition Best Practices**:
- ✅ Match Gherkin text exactly
- ✅ Use single responsibility principle
- ✅ Extract parameters using `{string}`, `{int}`, etc.
- ✅ Always use page objects
- ✅ Add JSDoc comments

### Step 3: Create Page Object

**File**: `cypress/pageObjects/YourPage.js`

```javascript
/**
 * Your Page Object Model
 * Contains all locators and methods for page interactions
 */
export class YourPage {
  constructor() {
    // Define locators
    this.heading = 'h1.page-title';
    this.submitButton = 'button[type="submit"]';
    this.successMessage = '.success-alert';
  }

  /**
   * Verify page is displayed
   */
  verifyPageDisplayed() {
    cy.get(this.heading).should('be.visible');
  }

  /**
   * Perform action
   * @param {string} actionName - Name of action
   */
  performAction(actionName) {
    cy.contains(actionName).click();
    cy.wait(1000);
  }

  /**
   * Verify result
   * @param {string} expectedResult - Expected result message
   */
  verifyResult(expectedResult) {
    cy.get(this.successMessage).should('contain', expectedResult);
  }
}

export default new YourPage();
```

**Page Object Best Practices**:
- ✅ One page object per page
- ✅ Locators as class properties
- ✅ One method per action
- ✅ Descriptive method names
- ✅ Export singleton instance
- ✅ Add comprehensive JSDoc comments

### Step 4: Add Test Data

**File**: `cypress/fixtures/testData.json`

```json
{
  "yourFeatureData": [
    {
      "inputField": "value1",
      "expectedOutput": "result1"
    }
  ]
}
```

Or use **File**: `cypress/utils/TestData.js`

```javascript
export const yourTestData = {
  field1: 'value1',
  field2: 'value2',
};
```

### Step 5: Run Tests

```bash
# Run specific feature
npx cypress run --spec "cypress/e2e/features/YourFeature.feature"

# Run in interactive mode
npm run test:open

# Run with reporting
npm run test:report
```

## Code Examples

### Example 1: Simple Login Test

**1. Feature File** (`Login.feature`):
```gherkin
Scenario: Successful login
  Given User navigates to login page
  When User enters username "admin"
  And User enters password "admin123"
  And User clicks login button
  Then Dashboard should be displayed
```

**2. Step Definitions** (`LoginSteps.js`):
```javascript
Given('User navigates to login page', () => {
  cy.visit('/web/auth/login');
});

When('User enters username {string}', (username) => {
  cy.get('input[name="username"]').type(username);
});
```

**3. Page Object** (`LoginPage.js`):
```javascript
enterUsername(username) {
  cy.get('input[name="username"]').type(username);
}
```

### Example 2: Table Data Test

**1. Feature File**:
```gherkin
Scenario Outline: Search for users
  When User searches for "<searchTerm>"
  Then "<expectedCount>" results should be displayed

  Examples:
    | searchTerm | expectedCount |
    | admin      | 1             |
    | user       | 5             |
```

**2. Step Definitions**:
```javascript
When('User searches for {string}', (searchTerm) => {
  cy.get('input[type="search"]').type(searchTerm);
  cy.get('button[type="submit"]').click();
});

Then('{int} results should be displayed', (count) => {
  cy.get('table tbody tr').should('have.length', count);
});
```

### Example 3: Data-Driven Test

**1. Test Data** (`testData.json`):
```json
{
  "employees": [
    {
      "name": "John Doe",
      "department": "Engineering"
    }
  ]
}
```

**2. Step Definition**:
```javascript
Given('Employee data exists', function() {
  cy.fixture('testData').then((data) => {
    this.testData = data;
  });
});

When('User adds employee', function() {
  const employee = this.testData.employees[0];
  EmployeePage.addEmployee(employee.name, employee.department);
});
```

## Common Patterns

### Pattern 1: Checkbox Interaction

```javascript
selectCheckbox(label) {
  cy.contains('label', label)
    .siblings('input[type="checkbox"]')
    .check();
}
```

### Pattern 2: Dropdown Selection

```javascript
selectFromDropdown(dropdownLabel, value) {
  cy.contains('label', dropdownLabel)
    .parent()
    .find('.oxd-select-text')
    .click();
  cy.contains('.oxd-option', value).click();
}
```

### Pattern 3: Date Input

```javascript
enterDate(dateString) {
  cy.get('input[type="date"]')
    .invoke('val', dateString)
    .trigger('change');
}
```

### Pattern 4: Verify Table Row

```javascript
verifyTableRow(rowText) {
  cy.get('table tbody')
    .contains('tr', rowText)
    .should('be.visible');
}
```

## Testing Guidelines

### ✅ DO's

- ✅ Use descriptive test names
- ✅ Test one feature per scenario
- ✅ Use page objects for all interactions
- ✅ Add wait conditions for async operations
- ✅ Clean up test data after execution
- ✅ Use meaningful assertions
- ✅ Follow DRY principle
- ✅ Add comments for complex logic

### ❌ DON'Ts

- ❌ Hard-code values - use fixtures or utilities
- ❌ Test implementation details - test behavior
- ❌ Use generic variable names (el, x, y)
- ❌ Add unnecessary waits
- ❌ Mix multiple concerns in one step
- ❌ Ignore accessibility - test semantic HTML
- ❌ Write tests that depend on each other
- ❌ Use sleep() instead of cy.wait()

## Naming Conventions

### Feature Files
```
YourModule.feature
LoginModule.feature
AdminSection.feature
```

### Step Definition Files
```
YourModuleSteps.js
LoginSteps.js
AdminSteps.js
```

### Page Objects
```
YourModulePage.js
LoginPage.js
AdminPage.js
```

### Methods
```
clickButton()
enterUsername()
verifyError()
selectDropdown()
fillForm()
```

### Locators
```
this.submitButton = '...'
this.usernameInput = '...'
this.errorMessage = '...'
```

## Scenario Tagging (Optional)

Add tags for better test organization:

```gherkin
@smoke
Scenario: Critical path test
  ...

@regression
Scenario: Extended functionality test
  ...

@slow
Scenario: Long-running test
  ...
```

Run by tag:
```bash
npx cypress run --env tags="@smoke"
```

## Debugging Tests

### Use Cypress Debugger
```javascript
cy.pause(); // Pauses execution
cy.debug(); // Logs element to console
```

### Use Browser DevTools
```bash
npm run test:open
# Then use F12 in Cypress runner
```

### Check Cypress Logs
- View detailed command logs in Cypress UI
- Inspect network requests
- Check console errors

## Performance Considerations

### Optimize Tests
- ✅ Reuse login session when possible
- ✅ Use efficient selectors
- ✅ Minimize unnecessary waits
- ✅ Parallel execution for speed
- ✅ Clean up test data efficiently

### Selector Performance
```javascript
// ✅ Good - Specific locator
cy.get('#submit-button')

// ❌ Bad - Too generic
cy.get('button')

// ✅ Good - Use data attributes
cy.get('[data-testid="submit"]')

// ❌ Bad - Complex XPath
cy.get('body > div > div > button')
```

## Code Review Checklist

Before submitting new tests:

- [ ] Feature file written in Gherkin
- [ ] Step definitions follow naming conventions
- [ ] Page objects created/updated
- [ ] Test data added to fixtures
- [ ] All tests pass locally
- [ ] Report generated successfully
- [ ] No hard-coded values
- [ ] Selectors are stable/reliable
- [ ] Code follows best practices
- [ ] Documentation updated

## Testing on Different Browsers

```bash
# Chrome (default)
npm run test:chrome

# Firefox
npm run test:firefox

# Edge
npx cypress run --browser edge

# Headless
npm run test:headless
```

## Continuous Integration

Tests can be integrated with CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Run tests
  run: npm test

- name: Generate report
  run: npm run test:report

- name: Upload artifacts
  uses: actions/upload-artifact@v2
  with:
    name: cypress-reports
    path: cypress/reports/
```

## Support

For help:
1. Check [README.md](README.md)
2. Review [ARCHITECTURE.md](ARCHITECTURE.md)
3. Check existing test examples
4. Review Cypress documentation

---

**Happy Testing! 🎉**

For questions or suggestions, refer to the main README.md.
