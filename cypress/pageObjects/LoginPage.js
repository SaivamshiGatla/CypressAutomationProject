/**
 * Login Page Object Model
 * Contains all locators and methods for login page interactions
 */
export class LoginPage {
  constructor() {
    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.forgotPasswordLink = 'a[href*="requestPasswordResetCode"]';
    this.loginHeading = 'h5';
    this.errorMessage = '.oxd-alert-content-text';
  }

  /**
   * Enter username in username field
   * @param {string} username - Username to enter
   */
  enterUsername(username) {
    cy.get(this.usernameInput).clear().type(username, { delay: 50 });
  }

  /**
   * Enter password in password field
   * @param {string} password - Password to enter
   */
  enterPassword(password) {
    cy.get(this.passwordInput).clear().type(password, { delay: 50 });
  }

  /**
   * Click the login button
   */
  clickLoginButton() {
    cy.get(this.loginButton).click();
    cy.wait(2000);
  }

  /**
   * Perform login with credentials
   * @param {string} username - Username
   * @param {string} password - Password
   */
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLoginButton();
  }

  /**
   * Verify login page is displayed
   */
  verifyLoginPageDisplayed() {
    cy.get(this.loginHeading).should('contain', 'Login');
  }

  /**
   * Verify login error message
   * @param {string} expectedMessage - Expected error message
   */
  verifyErrorMessage(expectedMessage) {
    cy.get(this.errorMessage).should('contain', expectedMessage);
  }

  /**
   * Click forgot password link
   */
  clickForgotPasswordLink() {
    cy.get(this.forgotPasswordLink).click();
  }

  /**
   * Verify orange HRM logo is present
   */
  verifyLogoPresent() {
    cy.get('img[alt="Company Logo"]').should('be.visible');
  }
}

export default new LoginPage();
