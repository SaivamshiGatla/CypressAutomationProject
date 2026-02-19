/**
 * Cucumber Hooks
 * Before and After hooks for test execution
 */

const { Before, After } = require('@badeball/cypress-cucumber-preprocessor');

/**
 * Before Hook - Runs before each scenario
 */
Before(function() {
  // Set viewport size
  cy.viewport(1280, 720);
  
  // Disable uncaught error exceptions
  cy.on('uncaught:exception', () => {
    return false;
  });
  
  // Clear cookies and local storage
  cy.clearCookies();
  cy.clearLocalStorage();
  
  // Log scenario start
  cy.log('**Starting scenario**');
});

/**
 * After Hook - Runs after each scenario
 */
After(function(scenario) {
  // Log scenario status
  if (scenario.result.status === 'FAILED') {
    cy.log('**Scenario Failed**');
    // Take screenshot on failure
    cy.screenshot(`${scenario.pickle.name.replace(/\s+/g, '_')}_failed`);
  } else {
    cy.log('**Scenario Passed**');
  }
});

/**
 * After Hook - Cleanup after each scenario
 */
After(function() {
  // Logout if logged in
  cy.url().then((url) => {
    if (!url.includes('/login')) {
      cy.request({
        method: 'GET',
        url: '/web/index.php/auth/logout',
        failOnStatusCode: false,
      });
    }
  });
});
