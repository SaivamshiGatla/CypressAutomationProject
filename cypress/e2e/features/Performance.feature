Feature: Orange HRM Performance Module Functionality

  Background:
    Given User is logged in as admin

  Scenario: Navigate to Performance module
    When User clicks on Performance menu from dashboard
    Then Performance page should be displayed

  Scenario: Verify Performance submenus are visible
    When User navigates to Performance module
    Then My Performance submenu should be visible
    And Performance Review submenu should be visible
    And KPI submenu should be visible
    And Appraisal submenu should be visible
    And Goals submenu should be visible

  Scenario: View My Performance list
    When User navigates to Performance module
    And User clicks on My Performance submenu
    Then My Performance list should be displayed

  Scenario: View Performance Reviews
    When User navigates to Performance module
    And User clicks on Performance Review submenu
    Then Performance Review list should be displayed

  Scenario: View KPI list
    When User navigates to Performance module
    And User clicks on KPI submenu
    Then KPI list should be displayed

  Scenario: View Appraisal list
    When User navigates to Performance module
    And User clicks on Appraisal submenu
    Then Appraisal list should be displayed

  Scenario: View Goals list
    When User navigates to Performance module
    And User clicks on Goals submenu
    Then Goals list should be displayed

  Scenario: View Manager's Goals
    When User navigates to Performance module
    And User clicks on Manager's Goals submenu
    Then Manager's Goals list should be displayed

  Scenario: Verify Performance module sidebar is visible
    When User navigates to Performance module
    Then Performance sidebar menu should be visible
    And All performance menu items should be accessible

  Scenario: Go back to dashboard from Performance module
    When User navigates to Performance module
    And User goes back to dashboard
    Then Dashboard page should be displayed
    And Performance menu should be visible in sidebar

  Scenario: Verify performance page has required elements
    When User navigates to Performance module
    Then Performance module heading should be displayed
    And Performance sidebar navigation should be visible
    And Performance records should be displayed

  Scenario: Verify all performance submenus are navigable
    When User navigates to Performance module
    And User clicks on KPI submenu
    Then KPI list should be displayed
    When User clicks on Appraisal submenu
    Then Appraisal list should be displayed
    When User clicks on Goals submenu
    Then Goals list should be displayed
