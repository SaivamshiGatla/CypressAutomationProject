Feature: Orange HRM Admin Module Functionality

  Background:
    Given User is logged in as admin

  Scenario: Navigate to Admin module
    When User clicks on Admin menu from dashboard
    Then Admin page should be displayed
    And Admin users table should be visible

  Scenario: Verify Admin submenus are visible
    When User navigates to Admin module
    Then User Management submenu should be visible
    And User Roles submenu should be visible
    And Organization submenu should be visible
    And Job Titles submenu should be visible
    And Employment Status submenu should be visible

  Scenario: View all users in User Management
    When User navigates to Admin module
    And User clicks on User Management submenu
    Then Users list should be displayed
    And User table should contain multiple records

  Scenario: Search for user in User Management
    When User navigates to Admin module
    And User clicks on User Management submenu
    And User searches for "admin" user
    Then Search results should be displayed
    And User table should contain search results

  Scenario: View User Roles
    When User navigates to Admin module
    And User clicks on User Roles submenu
    Then User Roles list should be displayed

  Scenario: View Organization Details
    When User navigates to Admin module
    And User clicks on Organization submenu
    Then Organization details should be displayed

  Scenario: View Job Titles
    When User navigates to Admin module
    And User clicks on Job Titles submenu
    Then Job Titles list should be displayed

  Scenario: View Employment Status
    When User navigates to Admin module
    And User clicks on Employment Status submenu
    Then Employment Status list should be displayed

  Scenario: Verify admin page sidebar is visible
    When User navigates to Admin module
    Then Admin sidebar menu should be visible
    And All admin menu items should be accessible

  Scenario: Go back to dashboard from Admin module
    When User navigates to Admin module
    And User goes back to dashboard
    Then Dashboard page should be displayed
    And Admin menu should be visible in sidebar
