import DashboardPage from '../../pageObjects/DashboardPage';
import PerformancePage from '../../pageObjects/PerformancePage';

const { When, Then } = require('@badeball/cypress-cucumber-preprocessor');

When('User clicks on Performance menu from dashboard', () => {
  DashboardPage.clickPerformanceMenu();
});

Then('Performance page should be displayed', () => {
  PerformancePage.verifyPerformancePageDisplayed();
});

When('User navigates to Performance module', () => {
  cy.visit('/web/index.php/performance/');
  cy.wait(2000);
});

Then('My Performance submenu should be visible', () => {
  cy.get('a[href*="myPerformanceList"]').should('be.visible');
});

Then('Performance Review submenu should be visible', () => {
  cy.get('a[href*="performanceReviewList"]').should('be.visible');
});

Then('KPI submenu should be visible', () => {
  cy.get('a[href*="viewKpis"]').should('be.visible');
});

Then('Appraisal submenu should be visible', () => {
  cy.get('a[href*="viewAppraisals"]').should('be.visible');
});

Then('Goals submenu should be visible', () => {
  cy.get('a[href*="viewGoals"]').should('be.visible');
});

When('User clicks on My Performance submenu', () => {
  PerformancePage.clickMyPerformanceSubmenu();
});

Then('My Performance list should be displayed', () => {
  PerformancePage.verifyPerformanceRecordsDisplayed();
});

When('User clicks on Performance Review submenu', () => {
  PerformancePage.clickPerformanceReviewSubmenu();
});

Then('Performance Review list should be displayed', () => {
  PerformancePage.verifyPerformanceRecordsDisplayed();
});

When('User clicks on KPI submenu', () => {
  PerformancePage.clickKpiSubmenu();
});

Then('KPI list should be displayed', () => {
  PerformancePage.verifyKpiListDisplayed();
});

When('User clicks on Appraisal submenu', () => {
  PerformancePage.clickAppraisalSubmenu();
});

Then('Appraisal list should be displayed', () => {
  PerformancePage.verifyAppraisalListDisplayed();
});

When('User clicks on Goals submenu', () => {
  PerformancePage.clickGoalsSubmenu();
});

Then('Goals list should be displayed', () => {
  PerformancePage.verifyGoalsListDisplayed();
});

When('User clicks on Manager\'s Goals submenu', () => {
  cy.get('a[href*="managerGoalList"]').click({ force: true });
  cy.wait(2000);
});

Then('Manager\'s Goals list should be displayed', () => {
  PerformancePage.verifyPerformanceRecordsDisplayed();
});

Then('Performance sidebar menu should be visible', () => {
  cy.get('.oxd-sidepanel').should('be.visible');
});

Then('All performance menu items should be accessible', () => {
  cy.get('a[href*="myPerformanceList"]').should('be.visible');
  cy.get('a[href*="performanceReviewList"]').should('be.visible');
  cy.get('a[href*="viewKpis"]').should('be.visible');
  cy.get('a[href*="viewAppraisals"]').should('be.visible');
  cy.get('a[href*="viewGoals"]').should('be.visible');
});

Then('Performance menu should be visible in sidebar', () => {
  cy.get('a[href*="performance"]').should('be.visible');
});

Then('Performance module heading should be displayed', () => {
  cy.get('.oxd-topbar-header-breadcrumb h6').should('be.visible');
});

Then('Performance sidebar navigation should be visible', () => {
  cy.get('.oxd-sidepanel').should('be.visible');
});

Then('Performance records should be displayed', () => {
  PerformancePage.verifyPerformanceRecordsDisplayed();
});
