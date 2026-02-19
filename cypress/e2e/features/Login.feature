Feature: Orange HRM Login Functionality

  Background:
    Given User navigates to Orange HRM login page

  Scenario: Successful login with valid credentials
    When User enters username "admin"
    And User enters password "admin123"
    And User clicks the login button
    Then User should be logged in successfully
    And Dashboard page should be displayed

  Scenario: Failed login with invalid username
    When User enters username "invaliduser"
    And User enters password "admin123"
    And User clicks the login button
    Then Error message should be displayed

  Scenario: Failed login with invalid password
    When User enters username "admin"
    And User enters password "invalidpass"
    And User clicks the login button
    Then Error message should be displayed

  Scenario: Failed login with empty username field
    When User leaves username field empty
    And User enters password "admin123"
    And User clicks the login button
    Then Validation error should be shown for username

  Scenario: Failed login with empty password field
    When User enters username "admin"
    And User leaves password field empty
    And User clicks the login button
    Then Validation error should be shown for password

  Scenario: Verify login page elements are visible
    Then Login page heading should be visible
    And Username input field should be visible
    And Password input field should be visible
    And Login button should be visible
    And Forgot password link should be visible
    And Orange HRM logo should be visible

  Scenario: Verify forgot password functionality
    When User clicks on forgot password link
    Then Forgot password page should be displayed
