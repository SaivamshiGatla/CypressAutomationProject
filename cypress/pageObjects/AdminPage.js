/**
 * Admin Page Object Model
 * Contains all locators and methods for admin page interactions
 */
export class AdminPage {
  constructor() {
    this.adminHeading = '.oxd-topbar-header-breadcrumb h6';
    this.searchInput = 'input[placeholder*="Search"]';
    this.userTable = '.oxd-table-body';
    this.addButton = 'button:contains("Add")';
    this.editButton = '.oxd-icon-button[title="Edit"]';
    this.deleteButton = '.oxd-icon-button[title="Delete"]';
    this.saveButton = 'button[type="submit"]:contains("Save")';
    this.cancelButton = 'button:contains("Cancel")';
    this.userManagementMenu = 'a[href*="viewSystemUsers"]';
    this.userRoleMenu = 'a[href*="viewUserRoles"]';
    this.organizationMenu = 'a[href*="viewOrganizationGeneral"]';
    this.jobTitlesMenu = 'a[href*="viewJobTitles"]';
    this.employmentStatusMenu = 'a[href*="viewEmploymentStatus"]';
    this.successMessage = '.oxd-alert-content-text:contains("Success")';
    this.usernameLabelFromTable = 'tr td:nth-child(2)';
  }

  /**
   * Verify admin page is displayed
   */
  verifyAdminPageDisplayed() {
    cy.url().should('include', '/admin/viewSystemUsers');
    cy.get(this.adminHeading).should('be.visible');
  }

  /**
   * Click on User Management menu
   */
  clickUserManagementMenu() {
    cy.get(this.userManagementMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on User Roles menu
   */
  clickUserRolesMenu() {
    cy.get(this.userRoleMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Organization menu
   */
  clickOrganizationMenu() {
    cy.get(this.organizationMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Job Titles menu
   */
  clickJobTitlesMenu() {
    cy.get(this.jobTitlesMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Employment Status menu
   */
  clickEmploymentStatusMenu() {
    cy.get(this.employmentStatusMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Search for user in the table
   * @param {string} searchValue - Value to search
   */
  searchUser(searchValue) {
    cy.get(this.searchInput).first().type(searchValue);
    cy.wait(1000);
    cy.get('button[type="submit"]:contains("Search")').click();
    cy.wait(1500);
  }

  /**
   * Verify search results
   */
  verifySearchResults() {
    cy.get(this.userTable).should('be.visible');
  }

  /**
   * Click Add button
   */
  clickAddButton() {
    cy.get(this.addButton).click();
    cy.wait(1500);
  }

  /**
   * Click Edit button for first record
   */
  clickEditButton() {
    cy.get(this.editButton).first().click();
    cy.wait(1500);
  }

  /**
   * Click Delete button
   */
  clickDeleteButton() {
    cy.get(this.deleteButton).first().click();
    cy.wait(1000);
  }

  /**
   * Verify delete confirmation dialog
   */
  verifyDeleteConfirmation() {
    cy.get('.orangehrm-modal-header').should('contain', 'Delete');
  }

  /**
   * Click Save button
   */
  clickSaveButton() {
    cy.get(this.saveButton).click();
    cy.wait(1500);
  }

  /**
   * Click Cancel button
   */
  clickCancelButton() {
    cy.get(this.cancelButton).click();
    cy.wait(1000);
  }

  /**
   * Verify success message
   * @param {string} message - Expected message
   */
  verifySuccessMessage(message) {
    cy.get(this.successMessage).should('be.visible');
  }

  /**
   * Verify admin users exist in table
   */
  verifyUsersDisplayed() {
    cy.get(this.userTable).find('tr').should('have.length.greaterThan', 0);
  }
}

export default new AdminPage();
