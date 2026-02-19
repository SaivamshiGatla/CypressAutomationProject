/**
 * MyInfo Page Object Model (PIM - Personal Information Management)
 * Contains all locators and methods for my info page interactions
 */
export class MyInfoPage {
  constructor() {
    this.myInfoHeading = '.oxd-topbar-header-breadcrumb h6';
    this.employeeListSubmenu = 'a[href*="viewEmployeeList"]';
    this.addEmployeeSubmenu = 'a[href*="addEmployee"]';
    this.reportSubmenu = 'a[href*="employeeReport"]';
    this.myInfoTab = 'a[href*="/pim/myInfo"]';
    this.personalDetailsTab = 'a:contains("Personal Details")';
    this.contactDetailsTab = 'a:contains("Contact Details")';
    this.emergencyContactsTab = 'a:contains("Emergency Contacts")';
    this.dependentsTab = 'a:contains("Dependents")';
    this.immigrationTab = 'a:contains("Immigration")';
    this.jobTab = 'a:contains("Job"';
    this.salaryTab = 'a:contains("Salary")';
    this.taxTab = 'a:contains("Tax")';
    this.qualificationsTab = 'a:contains("Qualifications")';
    this.workExperienceTab = 'a:contains("Work Experience")';
    this.languagesTab = 'a:contains("Languages")';
    this.licenseTab = 'a:contains("License")';
    this.membershipTab = 'a:contains("Membership")';
    this.reportDetailTable = '.oxd-table-body';
    this.editButton = 'button:contains("Edit")';
    this.saveButton = 'button:contains("Save")';
    this.cancelButton = 'button:contains("Cancel")';
    this.successMessage = '.oxd-alert-content-text';
    this.firstNameInput = 'input[placeholder*="First Name"]';
    this.lastNameInput = 'input[placeholder*="Last Name"]';
    this.emailInput = 'input[type="email"]';
    this.mobileInput = 'input[placeholder*="Mobile"]';
    this.deleteButton = 'button:contains("Delete")';
  }

  /**
   * Verify MyInfo page is displayed
   */
  verifyMyInfoPageDisplayed() {
    cy.url().should('include', '/pim/');
    cy.get(this.myInfoHeading).should('be.visible');
  }

  /**
   * Click on Employee List submenu
   */
  clickEmployeeListSubmenu() {
    cy.get(this.employeeListSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Add Employee submenu
   */
  clickAddEmployeeSubmenu() {
    cy.get(this.addEmployeeSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Report submenu
   */
  clickReportSubmenu() {
    cy.get(this.reportSubmenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on My Info tab
   */
  clickMyInfoTab() {
    cy.get(this.myInfoTab).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Personal Details tab
   */
  clickPersonalDetailsTab() {
    cy.get(this.personalDetailsTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Contact Details tab
   */
  clickContactDetailsTab() {
    cy.get(this.contactDetailsTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Emergency Contacts tab
   */
  clickEmergencyContactsTab() {
    cy.get(this.emergencyContactsTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Dependents tab
   */
  clickDependentsTab() {
    cy.get(this.dependentsTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Immigration tab
   */
  clickImmigrationTab() {
    cy.get(this.immigrationTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Job tab
   */
  clickJobTab() {
    cy.get(this.jobTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Salary tab
   */
  clickSalaryTab() {
    cy.get(this.salaryTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Tax tab
   */
  clickTaxTab() {
    cy.get(this.taxTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Qualifications tab
   */
  clickQualificationsTab() {
    cy.get(this.qualificationsTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Work Experience tab
   */
  clickWorkExperienceTab() {
    cy.get(this.workExperienceTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Languages tab
   */
  clickLanguagesTab() {
    cy.get(this.languagesTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on License tab
   */
  clickLicenseTab() {
    cy.get(this.licenseTab).click({ force: true });
    cy.wait(1500);
  }

  /**
   * Click on Membership tab
   */
  clickMembershipTab() {
    cy.get(this.membershipTab).click({ force: true });
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
   * Click Delete button
   */
  clickDeleteButton() {
    cy.get(this.deleteButton).click({ force: true });
    cy.wait(1000);
  }

  /**
   * Update first name
   * @param {string} firstName - First name
   */
  updateFirstName(firstName) {
    cy.get(this.firstNameInput).clear().type(firstName);
  }

  /**
   * Update last name
   * @param {string} lastName - Last name
   */
  updateLastName(lastName) {
    cy.get(this.lastNameInput).clear().type(lastName);
  }

  /**
   * Update email
   * @param {string} email - Email address
   */
  updateEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  /**
   * Update mobile
   * @param {string} mobile - Mobile number
   */
  updateMobile(mobile) {
    cy.get(this.mobileInput).clear().type(mobile);
  }

  /**
   * Verify employee list is displayed
   */
  verifyEmployeeListDisplayed() {
    cy.get(this.reportDetailTable).should('be.visible');
  }

  /**
   * Verify success message
   */
  verifySuccessMessage() {
    cy.get(this.successMessage).should('be.visible');
  }
}

export default new MyInfoPage();
