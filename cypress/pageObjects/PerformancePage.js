/**
 * Performance Page Object Model
 * Contains all locators and methods for performance page interactions
 */
export class PerformancePage {
  constructor() {
    this.performanceHeading = '.oxd-topbar-header-breadcrumb h6';
    this.myPerformanceSubmenu = 'a[href*="myPerformanceList"]';
    this.performanceReviewSubmenu = 'a[href*="performanceReviewList"]';
    this.kpiSubmenu = 'a[href*="viewKpis"]';
    this.appraisalSubmenu = 'a[href*="viewAppraisals"]';
    this.goalsSubmenu = 'a[href*="viewGoals"]';
    this.managersGoalsSubmenu = 'a[href*="managerGoalList"]';
    this.performanceTable = '.oxd-table-body';
    this.addButton = 'button:contains("Add")';
    this.editButton = 'button:contains("Edit")';
    this.deleteButton = 'button:contains("Delete")';
    this.saveButton = 'button:contains("Save")';
    this.cancelButton = 'button:contains("Cancel")';
    this.submitButton = 'button:contains("Submit")';
    this.completeButton = 'button:contains("Complete")';
    this.ratingDropdown = '.oxd-select-text';
    this.commentTextarea = 'textarea';
    this.successMessage = '.oxd-alert-content-text';
    this.statusLabel = '.oxd-label:contains("Status")';
  }

  /**
   * Verify performance page is displayed
   */
  verifyPerformancePageDisplayed() {
    cy.url().should('include', '/performance/');
    cy.get(this.performanceHeading).should('be.visible');
  }

  /**
   * Click on My Performance submenu
   */
  clickMyPerformanceSubmenu() {
    cy.get(this.myPerformanceSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Performance Review submenu
   */
  clickPerformanceReviewSubmenu() {
    cy.get(this.performanceReviewSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on KPI submenu
   */
  clickKpiSubmenu() {
    cy.get(this.kpiSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Appraisal submenu
   */
  clickAppraisalSubmenu() {
    cy.get(this.appraisalSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Goals submenu
   */
  clickGoalsSubmenu() {
    cy.get(this.goalsSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Manager's Goals submenu
   */
  clickManagersGoalsSubmenu() {
    cy.get(this.managersGoalsSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click Add button
   */
  clickAddButton() {
    cy.get(this.addButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click Edit button
   */
  clickEditButton() {
    cy.get(this.editButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click Delete button
   */
  clickDeleteButton() {
    cy.get(this.deleteButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click Save button
   */
  clickSaveButton() {
    cy.get(this.saveButton).click({ force: true });
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
   * Click Submit button
   */
  clickSubmitButton() {
    cy.get(this.submitButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click Complete button
   */
  clickCompleteButton() {
    cy.get(this.completeButton).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Select rating from dropdown
   * @param {string} rating - Rating value to select
   */
  selectRating(rating) {
    cy.get(this.ratingDropdown).first().click();
    cy.wait(500);
    cy.contains(rating).click();
  }

  /**
   * Add comment in textarea
   * @param {string} comment - Comment text
   */
  addComment(comment) {
    cy.get(this.commentTextarea).type(comment);
  }

  /**
   * Verify performance records are displayed
   */
  verifyPerformanceRecordsDisplayed() {
    cy.get(this.performanceTable).should('be.visible');
  }

  /**
   * Verify success message
   */
  verifySuccessMessage() {
    cy.get(this.successMessage).should('be.visible');
  }

  /**
   * Verify KPI list is displayed
   */
  verifyKpiListDisplayed() {
    cy.get(this.performanceTable).should('be.visible');
  }

  /**
   * Verify appraisal list is displayed
   */
  verifyAppraisalListDisplayed() {
    cy.get(this.performanceTable).should('be.visible');
  }

  /**
   * Verify goals list is displayed
   */
  verifyGoalsListDisplayed() {
    cy.get(this.performanceTable).should('be.visible');
  }
}

export default new PerformancePage();
