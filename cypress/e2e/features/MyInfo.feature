Feature: Orange HRM MyInfo (PIM) Module Functionality

  Background:
    Given User is logged in as admin

  Scenario: Navigate to MyInfo module
    When User clicks on MyInfo menu from dashboard
    Then MyInfo page should be displayed

  Scenario: Verify MyInfo submenus are visible
    When User navigates to MyInfo module
    Then Employee List submenu should be visible
    And Add Employee submenu should be visible

  Scenario: View Employee List
    When User navigates to MyInfo module
    And User clicks on Employee List submenu
    Then Employee list should be displayed
    And Employee table should contain records

  Scenario: Verify MyInfo tabs are visible
    When User navigates to MyInfo module
    And User clicks on My Info tab
    Then Personal Details tab should be visible
    And Contact Details tab should be visible
    And Emergency Contacts tab should be visible
    And Dependents tab should be visible
    And Immigration tab should be visible

  Scenario: View Personal Details tab
    When User navigates to MyInfo module
    And User clicks on My Info tab
    And User clicks on Personal Details tab
    Then Personal Details information should be displayed

  Scenario: View Contact Details tab
    When User navigates to MyInfo module
    And User clicks on My Info tab
    And User clicks on Contact Details tab
    Then Contact Details information should be displayed

  Scenario: View Emergency Contacts tab
    When User navigates to MyInfo module
    And User clicks on My Info tab
    And User clicks on Emergency Contacts tab
    Then Emergency Contacts information should be displayed

  Scenario: View Dependents tab
    When User navigates to MyInfo module
    And User clicks on My Info tab
    And User clicks on Dependents tab
    Then Dependents information should be displayed

  Scenario: View Immigration tab
    When User navigates to MyInfo module
    And User clicks on My Info tab
    And User clicks on Immigration tab
    Then Immigration information should be displayed

  Scenario: View Job tab
    When User navigates to MyInfo module
    And User clicks on My Info tab
    And User clicks on Job tab
    Then Job information should be displayed

  Scenario: View Salary tab
    When User navigates to MyInfo module
    And User clicks on My Info tab
    And User clicks on Salary tab
    Then Salary information should be displayed

  Scenario: Verify MyInfo module sidebar is visible
    When User navigates to MyInfo module
    Then MyInfo sidebar menu should be visible
    And All MyInfo menu items should be accessible

  Scenario: Go back to dashboard from MyInfo module
    When User navigates to MyInfo module
    And User goes back to dashboard
    Then Dashboard page should be displayed
    And MyInfo menu should be visible in sidebar
