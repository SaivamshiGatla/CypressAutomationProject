# Installation Guide

## Prerequisites Check

### 1. Verify Node.js Installation
```bash
node --version
# Should return v14.0.0 or higher
```

If not installed, download from [nodejs.org](https://nodejs.org/)

### 2. Verify npm Installation
```bash
npm --version
# Should return 6.0.0 or higher
```

## Installation Steps

### Step 1: Navigate to Project Directory
```bash
cd Cypress_Automation_project
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install:
- ✅ Cypress 13.6.2
- ✅ Cucumber preprocessor for BDD
- ✅ Mochawesome reporter
- ✅ ESBuild bundler
- ✅ Other required packages

**Installation time**: ~5-10 minutes (depends on internet speed)

### Step 3: Verify Installation
```bash
npx cypress verify
```

You should see:
```
✔ Verified Cypress!
```

### Step 4: Create Environment File
The `.env` file is already created with default values. Verify:

```bash
cat .env
```

Or on Windows:
```bash
type .env
```

## Troubleshooting Installation

### Issue: npm ERR! ERESOLVE unable to resolve dependency tree

**Solution**:
```bash
npm install --legacy-peer-deps
```

### Issue: Module not found errors after installation

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Cypress installation fails

**Solution**:
```bash
# Clear Cypress cache
rm -rf ~/.cypress
# Reinstall
npm install cypress
```

### Issue: Cannot find module '@badeball/cypress-cucumber-preprocessor'

**Solution**:
```bash
npm install @badeball/cypress-cucumber-preprocessor@latest
npm install @bahmutov/cypress-esbuild-preprocessor@latest
```

## Verify Complete Installation

Run this to verify everything is set up correctly:

```bash
npm run test:open
```

This will:
1. Launch Cypress Test Runner
2. Show all feature files
3. Confirm all page objects are accessible
4. Verify all dependencies are loaded

## Post-Installation Setup

### 1. Configure IDE (Optional but Recommended)

**VS Code Extensions**:
- Install "Cypress Helper"
- Install "Gherkin (Cucumber) Full Support"
- Install "Feature File Support"

### 2. Update Application URL (if needed)

Edit `.env`:
```bash
BASE_URL=https://your-app-url.com
```

Or edit `cypress.config.js`:
```javascript
baseUrl: 'https://your-app-url.com'
```

### 3. Update Credentials (if different)

Edit `.env`:
```bash
ADMIN_USERNAME=your_username
ADMIN_PASSWORD=your_password
```

## First Run

### Run tests:
```bash
npm test
```

Expected output:
```
Running: Login.feature
✓ Successful login with valid credentials (5.23s)
✓ Failed login with invalid username (3.45s)
...

Passing (XX)
Failing (0)
```

### View reports:
```bash
open cypress/reports/mochawesome-report/index.html
```

## System Requirements Summary

| Component | Minimum | Recommended |
|-----------|---------|-------------|
| Node.js | 14.x | 18.x or higher |
| npm | 6.x | 8.x or higher |
| RAM | 4GB | 8GB or higher |
| Disk Space | 2GB | 5GB or higher |
| OS | Windows/Mac/Linux | Any modern OS |

## Network Requirements

- Internet connection required for:
  - Application access: `opensource-demo.orangehrmlive.com`
  - npm package downloads
  - Report generation resources

## Support

If you encounter issues:

1. Check [Installation Troubleshooting](#troubleshooting-installation)
2. Review [README.md](README.md)
3. Check [QUICKSTART.md](QUICKSTART.md)
4. Review Cypress logs in test runner

## Next Steps

After successful installation:

1. Read [QUICKSTART.md](QUICKSTART.md)
2. Run your first test: `npm test`
3. Explore feature files in `cypress/e2e/features/`
4. Review page objects in `cypress/pageObjects/`
5. Check test data in `cypress/fixtures/testData.json`

---

**Installation Complete! 🎉**

You're ready to run tests. Start with:
```bash
npm run test:open
```
