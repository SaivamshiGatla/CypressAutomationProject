import 'cypress-mochawesome-reporter/register';
require('@badeball/cypress-cucumber-preprocessor').default;

// Custom command to login
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/web/auth/login');
  cy.get('input[name="username"]').type(username, { delay: 50 });
  cy.get('input[name="password"]').type(password, { delay: 50 });
  cy.get('button[type="submit"]').click();
  cy.wait(2000);
  cy.url().should('include', '/dashboard');
});

// Custom command to logout
Cypress.Commands.add('logout', () => {
  cy.get('[class*="userdropdown"]').first().click({ force: true });
  cy.wait(500);
  cy.contains('Logout').click({ force: true });
  cy.url().should('include', '/auth/login');
});

// Custom command to navigate to menu
Cypress.Commands.add('navigateToMenu', (menuName) => {
  cy.get(`a[href*="${menuName}"]`).click({ force: true });
  cy.wait(2000);
});

// Custom command for checking element visibility
Cypress.Commands.add('shouldBeVisible', { prevSubject: true }, (subject) => {
  cy.wrap(subject).should('be.visible');
  return subject;
});

// Error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// Before each test
beforeEach(() => {
  cy.window().then((win) => {
    win.fetch = undefined;
  });
});

// After each test
afterEach(() => {
  cy.screenshot({ capture: 'runner' });
});
