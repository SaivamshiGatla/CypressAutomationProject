import DashboardPage from '../../pageObjects/DashboardPage';
import MyInfoPage from '../../pageObjects/MyInfoPage';

const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('User clicks on MyInfo menu from dashboard', () => {
  DashboardPage.clickMyInfoMenu();
});

Then('MyInfo page should be displayed', () => {
  MyInfoPage.verifyMyInfoPageDisplayed();
});

When('User navigates to MyInfo module', () => {
  cy.visit('/web/index.php/pim/');
  cy.wait(2000);
});

Then('Employee List submenu should be visible', () => {
  cy.get('a[href*="viewEmployeeList"]').should('be.visible');
});

Then('Add Employee submenu should be visible', () => {
  cy.get('a[href*="addEmployee"]').should('be.visible');
});

When('User clicks on Employee List submenu', () => {
  MyInfoPage.clickEmployeeListSubmenu();
});

Then('Employee list should be displayed', () => {
  MyInfoPage.verifyEmployeeListDisplayed();
});

Then('Employee table should contain records', () => {
  cy.get('.oxd-table-body tr').should('have.length.greaterThan', 0);
});

When('User clicks on My Info tab', () => {
  MyInfoPage.clickMyInfoTab();
});

Then('Personal Details tab should be visible', () => {
  cy.contains('Personal Details').should('be.visible');
});

Then('Contact Details tab should be visible', () => {
  cy.contains('Contact Details').should('be.visible');
});

Then('Emergency Contacts tab should be visible', () => {
  cy.contains('Emergency Contacts').should('be.visible');
});

Then('Dependents tab should be visible', () => {
  cy.contains('Dependents').should('be.visible');
});

Then('Immigration tab should be visible', () => {
  cy.contains('Immigration').should('be.visible');
});

When('User clicks on Personal Details tab', () => {
  MyInfoPage.clickPersonalDetailsTab();
});

Then('Personal Details information should be displayed', () => {
  cy.get('.oxd-form').should('be.visible');
});

When('User clicks on Contact Details tab', () => {
  MyInfoPage.clickContactDetailsTab();
});

Then('Contact Details information should be displayed', () => {
  cy.get('.oxd-form').should('be.visible');
});

When('User clicks on Emergency Contacts tab', () => {
  MyInfoPage.clickEmergencyContactsTab();
});

Then('Emergency Contacts information should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

When('User clicks on Dependents tab', () => {
  MyInfoPage.clickDependentsTab();
});

Then('Dependents information should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

When('User clicks on Immigration tab', () => {
  MyInfoPage.clickImmigrationTab();
});

Then('Immigration information should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

When('User clicks on Job tab', () => {
  MyInfoPage.clickJobTab();
});

Then('Job information should be displayed', () => {
  cy.get('.oxd-form').should('be.visible');
});

When('User clicks on Salary tab', () => {
  MyInfoPage.clickSalaryTab();
});

Then('Salary information should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

Then('MyInfo sidebar menu should be visible', () => {
  cy.get('.oxd-sidepanel').should('be.visible');
});

Then('All MyInfo menu items should be accessible', () => {
  cy.get('a[href*="viewEmployeeList"]').should('be.visible');
  cy.get('a[href*="addEmployee"]').should('be.visible');
});

Then('MyInfo menu should be visible in sidebar', () => {
  cy.get('a[href*="pim"]').should('be.visible');
});
