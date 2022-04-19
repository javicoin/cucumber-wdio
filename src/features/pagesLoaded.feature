Feature: AwesomeApp - Dashboard & Settings

  @android @ios
  Scenario: Validate Dashboard tab load
    Given I launch the app
    When I open Dashboard tab
    Then I verify Dashboard page loaded

  @android @ios
  Scenario: Validate Settings tab load
    Given I launch the app
    When I open Settings tab
    Then I verify Settings page loaded

  @android @ios
  Scenario: Dummy test failure
    Given I launch the app
    Then I verify Settings page loaded


