import DashboardPage from '../../pageObjects/DashboardPage';
import LeavePage from '../../pageObjects/LeavePage';

const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('User clicks on Leave menu from dashboard', () => {
  DashboardPage.clickLeaveMenu();
});

Then('Leave page should be displayed', () => {
  LeavePage.verifyLeavePageDisplayed();
});

When('User navigates to Leave module', () => {
  cy.visit('/web/index.php/leave/');
  cy.wait(2000);
});

Then('My Leave submenu should be visible', () => {
  cy.get('a[href*="myLeaveList"]').should('be.visible');
});

Then('Leave Requests submenu should be visible', () => {
  cy.get('a[href*="leaveRequestList"]').should('be.visible');
});

Then('Leave Balance submenu should be visible', () => {
  cy.get('a[href*="viewLeaveBalance"]').should('be.visible');
});

Then('Employees Leave submenu should be visible', () => {
  cy.get('a[href*="employeeLeaveList"]').should('be.visible');
});

Then('Leave Type submenu should be visible', () => {
  cy.get('a[href*="viewLeaveType"]').should('be.visible');
});

Then('Leave Entitlement submenu should be visible', () => {
  cy.get('a[href*="viewLeaveEntitlement"]').should('be.visible');
});

When('User clicks on My Leave submenu', () => {
  LeavePage.clickMyLeaveSubmenu();
});

Then('My Leave list should be displayed', () => {
  LeavePage.verifyLeaveRecordsDisplayed();
});

When('User clicks on Leave Requests submenu', () => {
  LeavePage.clickLeaveRequestsSubmenu();
});

Then('Leave Requests list should be displayed', () => {
  LeavePage.verifyLeaveRecordsDisplayed();
});

When('User clicks on Leave Balance submenu', () => {
  LeavePage.clickLeaveBalanceSubmenu();
});

Then('Leave Balance information should be displayed', () => {
  LeavePage.verifyLeaveBalanceDisplayed();
});

When('User clicks on Employees Leave submenu', () => {
  LeavePage.clickEmployeesLeaveSubmenu();
});

Then('Employees Leave list should be displayed', () => {
  LeavePage.verifyLeaveRecordsDisplayed();
});

When('User clicks on Leave Type submenu', () => {
  LeavePage.clickLeaveTypeSubmenu();
});

Then('Leave Types list should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

When('User clicks on Leave Entitlement submenu', () => {
  LeavePage.clickLeaveEntitlementSubmenu();
});

Then('Leave Entitlements list should be displayed', () => {
  cy.get('.oxd-table').should('be.visible');
});

Then('Leave sidebar menu should be visible', () => {
  cy.get('.oxd-sidepanel').should('be.visible');
});

Then('All leave menu items should be accessible', () => {
  cy.get('a[href*="myLeaveList"]').should('be.visible');
  cy.get('a[href*="leaveRequestList"]').should('be.visible');
  cy.get('a[href*="viewLeaveBalance"]').should('be.visible');
});

Then('Leave menu should be visible in sidebar', () => {
  cy.get('a[href*="leave"]').should('be.visible');
});

Then('Leave module heading should be displayed', () => {
  cy.get('.oxd-topbar-header-breadcrumb h6').should('be.visible');
});

Then('Leave sidebar navigation should be visible', () => {
  cy.get('.oxd-sidepanel').should('be.visible');
});

Then('Leave records should be displayed', () => {
  LeavePage.verifyLeaveRecordsDisplayed();
});
