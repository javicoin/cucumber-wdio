Feature: AwesomeApp - Side menu & Alert

  @android @ios
  Scenario: Validate native alert
    Given I launch the app
    When I slide out user menu
    And I go to the ultimate answer
    Then I verify an alert with title "42" is shown
