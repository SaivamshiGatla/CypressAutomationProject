/**
 * Dashboard Page Object Model
 * Contains all locators and methods for dashboard page interactions
 */
export class DashboardPage {
  constructor() {
    this.dashboardHeading = '.oxd-topbar';
    this.userDropdown = '.oxd-userdropdown';
    this.logoutButton = 'a[href*="logout"]';
    this.adminMenu = 'a[href*="admin"]';
    this.leaveMenu = 'a[href*="leave"]';
    this.myInfoMenu = 'a[href*="pim"]';
    this.performanceMenu = 'a[href*="performance"]';
    this.sidebarMenu = '.oxd-sidepanel';
    this.welcomeMessage = 'h6';
  }

  /**
   * Verify user is on dashboard
   */
  verifyDashboardDisplayed() {
    cy.url().should('include', '/dashboard');
    cy.get(this.dashboardHeading).should('be.visible');
  }

  /**
   * Verify welcome message with username
   * @param {string} username - Username to verify
   */
  verifyWelcomeMessage(username) {
    cy.get(this.welcomeMessage).should('contain', `Welcome, ${username}`);
  }

  /**
   * Click on Admin menu
   */
  clickAdminMenu() {
    cy.get(this.adminMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Leave menu
   */
  clickLeaveMenu() {
    cy.get(this.leaveMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on My Info menu
   */
  clickMyInfoMenu() {
    cy.get(this.myInfoMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Click on Performance menu
   */
  clickPerformanceMenu() {
    cy.get(this.performanceMenu).click({ force: true });
    cy.wait(2000);
  }

  /**
   * Perform logout
   */
  logout() {
    cy.get(this.userDropdown).first().click({ force: true });
    cy.wait(500);
    cy.get(this.logoutButton).click({ force: true });
    cy.url().should('include', '/auth/login');
  }

  /**
   * Verify sidebar menu is visible
   */
  verifySidebarMenuVisible() {
    cy.get(this.sidebarMenu).should('be.visible');
  }

  /**
   * Check if menu item is visible
   * @param {string} menuName - Menu name to check
   */
  isMenuItemVisible(menuName) {
    cy.get(`a[href*="${menuName}"]`).should('be.visible');
  }
}

export default new DashboardPage();
