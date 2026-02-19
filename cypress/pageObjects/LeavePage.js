/**
 * Leave Page Object Model
 * Contains all locators and methods for leave page interactions
 */
export class LeavePage {
  constructor() {
    this.leaveHeading = '.oxd-topbar-header-breadcrumb h6';
    this.myLeaveSubmenu = 'a[href*="myLeaveList"]';
    this.leaveRequestsSubmenu = 'a[href*="leaveRequestList"]';
    this.leaveBalanceSubmenu = 'a[href*="viewLeaveBalance"]';
    this.employeesLeaveSubmenu = 'a[href*="employeeLeaveList"]';
    this.leaveTypeSubmenu = 'a[href*="viewLeaveType"]';
    this.leaveEntitlementSubmenu = 'a[href*="viewLeaveEntitlement"]';
    this.leaveTable = '.oxd-table-body';
    this.applyButton = 'button:contains("Apply")';
    this.approvButton = 'button:contains("Approve")';
    this.rejectButton = 'button:contains("Reject")';
    this.cancelButton = 'button:contains("Cancel")';
    this.dateInput = 'input[type="date"]';
    this.selectDropdown = '.oxd-select-text';
    this.successMessage = '.oxd-alert-content-text:contains("Success")';
  }

  /**
   * Verify leave page is displayed
   */
  verifyLeavePageDisplayed() {
    cy.url().should('include', '/leave/');
    cy.get(this.leaveHeading).should('be.visible');
  }

  /**
   * Click on My Leave submenu
   */
  clickMyLeaveSubmenu() {
    cy.get(this.myLeaveSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Leave Requests submenu
   */
  clickLeaveRequestsSubmenu() {
    cy.get(this.leaveRequestsSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Leave Balance submenu
   */
  clickLeaveBalanceSubmenu() {
    cy.get(this.leaveBalanceSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Employees Leave submenu
   */
  clickEmployeesLeaveSubmenu() {
    cy.get(this.employeesLeaveSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Leave Type submenu
   */
  clickLeaveTypeSubmenu() {
    cy.get(this.leaveTypeSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Leave Entitlement submenu
   */
  clickLeaveEntitlementSubmenu() {
    cy.get(this.leaveEntitlementSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click Apply button
   */
  clickApplyButton() {
    cy.get(this.applyButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click Approve button
   */
  clickApproveButton() {
    cy.get(this.approvButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click Reject button
   */
  clickRejectButton() {
    cy.get(this.rejectButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click Cancel button
   */
  clickCancelButton() {
    cy.get(this.cancelButton).click({ force: true });
    cy.wait(1000);
  }

  /**
   * Select date range
   * @param {string} fromDate - From date (YYYY-MM-DD)
   * @param {string} toDate - To date (YYYY-MM-DD)
   */
  selectDateRange(fromDate, toDate) {
    cy.get(this.dateInput).first().type(fromDate);
    cy.get(this.dateInput).last().type(toDate);
  }

  /**
   * Verify leave records are displayed
   */
  verifyLeaveRecordsDisplayed() {
    cy.get(this.leaveTable).should('be.visible');
  }

  /**
   * Select leave type from dropdown
   * @param {string} leaveType - Leave type to select
   */
  selectLeaveType(leaveType) {
    cy.get(this.selectDropdown).first().click();
    cy.wait(500);
    cy.contains(leaveType).click();
  }

  /**
   * Verify success message
   */
  verifySuccessMessage() {
    cy.get(this.successMessage).should('be.visible');
  }

  /**
   * Verify leave balance is displayed
   */
  verifyLeaveBalanceDisplayed() {
    cy.get('.oxd-table').should('be.visible');
  }
}

export default new LeavePage();
