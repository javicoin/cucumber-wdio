#TestCase ID
@TEST_QAATR-1283 @android @ios
Feature: Verify the user can create a new wallet

  Scenario: Verify the user can create a new wallet
    Given I open the RSK wallet for the first time
    When I create a new wallet
 #   And I input the valid words (master key) previously generated
 #   Then I verify a new wallet is created
 #   And I verify I am able to set a valid PIN


