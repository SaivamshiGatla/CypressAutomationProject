# Orange HRM Automation Test Suite

A comprehensive E2E automation testing framework for Orange HRM application built with Cypress, BDD/Cucumber, and Page Object Model (POM) architecture.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Page Object Model](#page-object-model)
- [Step Definitions](#step-definitions)
- [Hooks and Fixtures](#hooks-and-fixtures)
- [Report Generation](#report-generation)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This project demonstrates a complete E2E automation testing solution for the Orange HRM application with the following features:

- **Page Object Model (POM) Architecture**: Organized page objects for maintainability
- **BDD/Cucumber Framework**: Gherkin syntax for readable feature files
- **Comprehensive Test Coverage**: Admin, Leave, MyInfo, and Performance modules
- **Report Generation**: Mochawesome reports with charts and screenshots
- **Hooks and Fixtures**: Setup/teardown and test data management
- **Custom Utilities**: Helper functions for common operations
- **Video and Screenshot Capture**: Built-in recording on failures

## 📦 Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher
- Cypress 13.x
- Git (optional)

## 🚀 Installation

1. **Navigate to project directory**:
```bash
cd Cypress_Automation_project
```

2. **Install dependencies**:
```bash
npm install
```

3. **Verify installation**:
```bash
npx cypress --version
```

## 📁 Project Structure

```
Cypress_Automation_project/
├── cypress/
│   ├── e2e/
│   │   ├── features/              # Cucumber feature files
│   │   │   ├── Login.feature
│   │   │   ├── Admin.feature
│   │   │   ├── Leave.feature
│   │   │   ├── MyInfo.feature
│   │   │   └── Performance.feature
│   │   └── stepDefinitions/       # Step definitions
│   │       ├── LoginSteps.js
│   │       ├── AdminSteps.js
│   │       ├── LeaveSteps.js
│   │       ├── MyInfoSteps.js
│   │       └── PerformanceSteps.js
│   ├── pageObjects/               # Page Object Models
│   │   ├── LoginPage.js
│   │   ├── DashboardPage.js
│   │   ├── AdminPage.js
│   │   ├── LeavePage.js
│   │   ├── MyInfoPage.js
│   │   └── PerformancePage.js
│   ├── support/                   # Support files
│   │   ├── e2e.js                # Custom commands
│   │   └── hooks.js              # Cucumber hooks
│   ├── utils/                     # Utility functions
│   │   ├── Utilities.js          # General utilities
│   │   └── TestData.js           # Test data helpers
│   ├── fixtures/                  # Test data files
│   │   └── testData.json
│   └── reports/                   # Test reports
├── scripts/                       # Utility scripts
│   ├── generateReport.js         # Report generation
│   └── cleanReports.js           # Cleanup script
├── cypress.config.js             # Cypress configuration
├── package.json                  # Dependencies and scripts
├── .env                         # Environment variables
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory (already created):

```env
BASE_URL=https://opensource-demo.orangehrmlive.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
BROWSER=chrome
HEADLESS=false
DEFAULT_TIMEOUT=10000
PAGE_LOAD_TIMEOUT=60000
REPORT_DIR=cypress/reports
VIDEO_RECORDING=true
SCREENSHOT_ON_FAILURE=true
```

### Cypress Configuration

Edit `cypress.config.js` to customize:

- **Base URL**: Application URL
- **Viewport**: Screen resolution
- **Timeouts**: Wait durations
- **Reporter**: Report format
- **Video/Screenshot**: Recording options

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests in headless mode
```bash
npm run test:headless
```

### Run tests in specific browser
```bash
npm run test:chrome
npm run test:firefox
```

### Run BDD feature tests
```bash
npm run test:bdd
```

### Open Cypress Test Runner
```bash
npm run test:open
```

### Run with report generation
```bash
npm run test:report
```

### Run specific feature file
```bash
npx cypress run --spec "cypress/e2e/features/Login.feature"
```

### Run specific scenario
```bash
npx cypress run --spec "cypress/e2e/features/Login.feature" --env tags="@smoke"
```

## 📝 Test Scenarios

### Login Module
- Successful login with valid credentials
- Failed login with invalid username
- Failed login with invalid password
- Empty field validation
- Login page elements visibility
- Forgot password functionality

### Admin Module
- Navigate to admin module
- View user management
- Search users
- View user roles
- View organization details
- View job titles
- View employment status

### Leave Module
- Navigate to leave module
- View my leave
- View leave requests
- View leave balance
- View employees leave
- View leave types
- View leave entitlements

### MyInfo (PIM) Module
- Navigate to MyInfo module
- View employee list
- View personal details
- View contact details
- View emergency contacts
- View dependents information
- View job & salary information

### Performance Module
- Navigate to performance module
- View my performance
- View performance reviews
- View KPI list
- View appraisal list
- View goals
- View manager's goals

## 🏗️ Page Object Model

Each page object contains:
- **Locators**: Element selectors as properties
- **Methods**: User actions (click, type, verify)
- **Page Verification**: Methods to confirm page display

### Example Usage

```javascript
import LoginPage from '../../pageObjects/LoginPage';

LoginPage.enterUsername('admin');
LoginPage.enterPassword('admin123');
LoginPage.clickLoginButton();
```

## 📍 Step Definitions

Step definitions map Gherkin steps to Cypress commands:

```gherkin
When User enters username "admin"
```

maps to:

```javascript
When('User enters username {string}', (username) => {
  LoginPage.enterUsername(username);
});
```

## 🪝 Hooks and Fixtures

### Hooks (Cypress/Cucumber Lifecycle)

- **Before Hook**: Runs before each scenario
  - Sets viewport
  - Clears cookies/storage
  - Disables error exceptions

- **After Hook**: Runs after each scenario
  - Takes screenshots on failure
  - Logs scenario status
  - Performs cleanup

### Test Data Fixtures

Test data is stored in `cypress/fixtures/testData.json`:

```json
{
  "loginData": [...],
  "userData": [...],
  "leaveData": [...]
}
```

Access fixture data in tests:

```javascript
cy.fixture('testData').then((data) => {
  cy.login(data.loginData[0].username, data.loginData[0].password);
});
```

## 📊 Report Generation

### Generate Reports

```bash
npm run test:report
```

Reports are generated in: `cypress/reports/mochawesome-report/`

### Report Features

- Test execution summary
- Pass/fail statistics
- Screenshots and videos
- Test duration
- Chart visualization
- Detailed error messages

### Open Report

```bash
open cypress/reports/mochawesome-report/index.html
```

## ✅ Best Practices

### Page Objects
- Keep locators in page objects
- One method per action
- Use descriptive method names
- Add JSDoc comments

### Step Definitions
- Match Gherkin exactly
- Keep steps generic and reusable
- Avoid hard-coded values
- Use parameter tables for data

### Tests
- One assertion per step
- Use page objects consistently
- Clear test names indicating intent
- Proper wait strategies
- Handle dynamic elements

### Code Organization
- Separate concerns (POM, steps, utils)
- Use meaningful file/folder names
- DRY principle (Don't Repeat Yourself)
- Consistent naming conventions
- Add comments for complex logic

## 🐛 Troubleshooting

### Issue: Tests timeout
**Solution**: 
- Increase timeout in `cypress.config.js`
- Check application loading time
- Verify network connectivity

### Issue: Element not found
**Solution**:
- Update selector in page object
- Check if element is dynamically loaded
- Add wait conditions
- Use `cy.get().should('exist')`

### Issue: Tests fail in headless mode
**Solution**:
- Disable video recording temporarily
- Check viewport dimensions
- Verify CSS selector specificity
- Test with UI runner first

### Issue: Report not generated
**Solution**:
- Ensure mochawesome-merge is installed
- Check report directory permissions
- Verify JSON report files exist
- Run cleanup script first

### Issue: Login failing
**Solution**:
- Verify credentials in `.env`
- Check application URL
- Clear browser cache
- Verify element selectors

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber Documentation](https://cucumber.io/docs/cucumber/)
- [Mochawesome Reporter](https://github.com/adamgruber/mochawesome)
- [Orange HRM](https://opensource-demo.orangehrmlive.com/)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/new-scenario`
2. Add tests following POM pattern
3. Ensure all tests pass
4. Submit pull request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

Automation Test Framework for Orange HRM

---

**Last Updated**: February 2026
**Framework Version**: 1.0.0
**Cypress Version**: 13.6.2
#   C y p r e s s A u t o m a t i o n P r o j e c t  
 