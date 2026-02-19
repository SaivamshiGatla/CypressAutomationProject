import DashboardPage from '../../pageObjects/DashboardPage';
import AdminPage from '../../pageObjects/AdminPage';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('User is logged in as admin', () => {
  cy.visit('/web/auth/login');
  cy.get('input[name="username"]').type('admin');
  cy.get('input[name="password"]').type('admin123');
  cy.get('button[type="submit"]').click();
  cy.wait(2000);
  cy.url().should('include', '/dashboard');
});

When('User clicks on Admin menu from dashboard', () => {
  DashboardPage.clickAdminMenu();
});

Then('Admin page should be displayed', () => {
  AdminPage.verifyAdminPageDisplayed();
});

Then('Admin users table should be visible', () => {
  AdminPage.verifyUsersDisplayed();
});

When('User navigates to Admin module', () => {
  cy.visit('/web/index.php/admin/viewSystemUsers');
  cy.wait(2000);
  AdminPage.verifyAdminPageDisplayed();
});

Then('User Management submenu should be visible', () => {
  cy.get('a[href*="viewSystemUsers"]').should('be.visible');
});

Then('User Roles submenu should be visible', () => {
  cy.get('a[href*="viewUserRoles"]').should('be.visible');
});

Then('Organization submenu should be visible', () => {
  cy.get('a[href*="viewOrganizationGeneral"]').should('be.visible');
});

Then('Job Titles submenu should be visible', () => {
  cy.get('a[href*="viewJobTitles"]').should('be.visible');
});

Then('Employment Status submenu should be visible', () => {
  cy.get('a[href*="viewEmploymentStatus"]').should('be.visible');
});

When('User clicks on User Management submenu', () => {
  AdminPage.clickUserManagementMenu();
});

Then('Users list should be displayed', () => {
  AdminPage.verifyUsersDisplayed();
});

Then('User table should contain multiple records', () => {
  cy.get('.oxd-table-body tr').should('have.length.greaterThan', 0);
});

When('User searches for {string} user', (searchValue) => {
  AdminPage.searchUser(searchValue);
});

Then('Search results should be displayed', () => {
  AdminPage.verifySearchResults();
});

Then('User table should contain search results', () => {
  cy.get('.oxd-table-body').should('be.visible');
});

When('User clicks on User Roles submenu', () => {
  AdminPage.clickUserRolesMenu();
});

Then('User Roles list should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

When('User clicks on Organization submenu', () => {
  AdminPage.clickOrganizationMenu();
});

Then('Organization details should be displayed', () => {
  cy.get('.oxd-form').should('be.visible');
});

When('User clicks on Job Titles submenu', () => {
  AdminPage.clickJobTitlesMenu();
});

Then('Job Titles list should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

When('User clicks on Employment Status submenu', () => {
  AdminPage.clickEmploymentStatusMenu();
});

Then('Employment Status list should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

Then('Admin sidebar menu should be visible', () => {
  cy.get('.oxd-sidepanel').should('be.visible');
});

Then('All admin menu items should be accessible', () => {
  cy.get('a[href*="viewSystemUsers"]').should('be.visible');
  cy.get('a[href*="viewUserRoles"]').should('be.visible');
  cy.get('a[href*="viewOrganizationGeneral"]').should('be.visible');
});

When('User goes back to dashboard', () => {
  cy.get('.oxd-brand').click();
  cy.wait(2000);
});

Then('Dashboard page should be displayed', () => {
  cy.url().should('include', '/dashboard');
});

Then('Admin menu should be visible in sidebar', () => {
  cy.get('a[href*="admin"]').should('be.visible');
});
