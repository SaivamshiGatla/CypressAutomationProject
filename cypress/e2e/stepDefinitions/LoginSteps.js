import LoginPage from '../../pageObjects/LoginPage';
import DashboardPage from '../../pageObjects/DashboardPage';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('User navigates to Orange HRM login page', () => {
  cy.visit('/web/auth/login');
  LoginPage.verifyLoginPageDisplayed();
});

When('User enters username {string}', (username) => {
  LoginPage.enterUsername(username);
});

When('User enters password {string}', (password) => {
  LoginPage.enterPassword(password);
});

When('User clicks the login button', () => {
  LoginPage.clickLoginButton();
});

Then('User should be logged in successfully', () => {
  cy.url().should('include', '/dashboard');
});

Then('Dashboard page should be displayed', () => {
  DashboardPage.verifyDashboardDisplayed();
});

Then('Error message should be displayed', () => {
  cy.get('.oxd-alert-content-text').should('be.visible');
});

When('User leaves username field empty', () => {
  cy.get('input[name="username"]').clear();
});

When('User leaves password field empty', () => {
  cy.get('input[name="password"]').clear();
});

Then('Validation error should be shown for username', () => {
  cy.get('.oxd-form-row').first().find('.oxd-text--span').should('contain', 'Required');
});

Then('Validation error should be shown for password', () => {
  cy.get('.oxd-form-row').last().find('.oxd-text--span').should('contain', 'Required');
});

Then('Login page heading should be visible', () => {
  cy.get('h5').should('contain', 'Login');
});

Then('Username input field should be visible', () => {
  cy.get('input[name="username"]').should('be.visible');
});

Then('Password input field should be visible', () => {
  cy.get('input[name="password"]').should('be.visible');
});

Then('Login button should be visible', () => {
  cy.get('button[type="submit"]').should('be.visible');
});

Then('Forgot password link should be visible', () => {
  cy.get('a[href*="requestPasswordResetCode"]').should('be.visible');
});

Then('Orange HRM logo should be visible', () => {
  cy.get('img[alt="Company Logo"]').should('be.visible');
});

When('User clicks on forgot password link', () => {
  LoginPage.clickForgotPasswordLink();
});

Then('Forgot password page should be displayed', () => {
  cy.url().should('include', '/requestPasswordResetCode');
});
