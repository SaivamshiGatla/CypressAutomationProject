Feature: Orange HRM Leave Module Functionality

  Background:
    Given User is logged in as admin

  Scenario: Navigate to Leave module
    When User clicks on Leave menu from dashboard
    Then Leave page should be displayed

  Scenario: Verify Leave submenus are visible
    When User navigates to Leave module
    Then My Leave submenu should be visible
    And Leave Requests submenu should be visible
    And Leave Balance submenu should be visible
    And Employees Leave submenu should be visible
    And Leave Type submenu should be visible
    And Leave Entitlement submenu should be visible

  Scenario: View My Leave list
    When User navigates to Leave module
    And User clicks on My Leave submenu
    Then My Leave list should be displayed

  Scenario: View Leave Requests
    When User navigates to Leave module
    And User clicks on Leave Requests submenu
    Then Leave Requests list should be displayed

  Scenario: View Leave Balance
    When User navigates to Leave module
    And User clicks on Leave Balance submenu
    Then Leave Balance information should be displayed

  Scenario: View Employees Leave
    When User navigates to Leave module
    And User clicks on Employees Leave submenu
    Then Employees Leave list should be displayed

  Scenario: View Leave Types
    When User navigates to Leave module
    And User clicks on Leave Type submenu
    Then Leave Types list should be displayed

  Scenario: View Leave Entitlements
    When User navigates to Leave module
    And User clicks on Leave Entitlement submenu
    Then Leave Entitlements list should be displayed

  Scenario: Verify leave module sidebar is visible
    When User navigates to Leave module
    Then Leave sidebar menu should be visible
    And All leave menu items should be accessible

  Scenario: Go back to dashboard from Leave module
    When User navigates to Leave module
    And User goes back to dashboard
    Then Dashboard page should be displayed
    And Leave menu should be visible in sidebar

  Scenario: Verify leave page has required elements
    When User navigates to Leave module
    Then Leave module heading should be displayed
    And Leave sidebar navigation should be visible
    And Leave records should be displayed
