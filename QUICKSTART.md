# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Tests
```bash
npm test
```

### Step 3: View Reports
Open the generated HTML report:
```bash
Cyprus will automatically generate reports after test execution
```

## 📊 Command Reference

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in headless mode |
| `npm run test:open` | Open Cypress UI runner |
| `npm run test:headless` | Run in headless mode |
| `npm run test:bdd` | Run feature files |
| `npm run test:chrome` | Run in Chrome browser |
| `npm run test:firefox` | Run in Firefox browser |
| `npm run test:report` | Run tests and generate report |

## 🧪 Login Credentials

```
Username: admin
Password: admin123
URL: https://opensource-demo.orangehrmlive.com
```

## 📁 Key Files

- **Feature Files**: `cypress/e2e/features/`
- **Step Definitions**: `cypress/e2e/stepDefinitions/`
- **Page Objects**: `cypress/pageObjects/`
- **Test Data**: `cypress/fixtures/testData.json`
- **Configuration**: `cypress.config.js`

## 🎯 Test Scenarios

The project includes E2E tests for:

✅ **Login** - Authentication and validation  
✅ **Admin** - User management and system configuration  
✅ **Leave** - Leave requests and balance management  
✅ **MyInfo** - Employee information and records  
✅ **Performance** - Performance reviews and goals  

## 📝 Writing New Tests

### 1. Create Feature File
```gherkin
Feature: New Feature Name
  Scenario: Test description
    Given Setup step
    When Action step
    Then Assertion step
```

### 2. Create Step Definitions
```javascript
When('User performs action {string}', (action) => {
  // Implementation
});
```

### 3. Use Page Objects
```javascript
import NewPage from '../../pageObjects/NewPage';
NewPage.performAction();
```

## 🐛 Common Issues

**Tests won't run?**
- Ensure Node.js is installed: `node --version`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check internet connectivity to access the application

**Report not generating?**
- Run: `node scripts/cleanReports.js`
- Then: `npm run test:report`

**Element not found?**
- Open Cypress UI: `npm run test:open`
- Inspect element in browser DevTools
- Update selector in page object

## 📚 Documentation

See [README.md](README.md) for detailed documentation.

## 💡 Tips

- Use `cy.pause()` to pause execution for debugging
- Check Cypress logs in the runner for detailed output
- Use page objects to keep tests maintainable
- Write descriptive step names for clarity

---

**Happy Testing! 🎉**
