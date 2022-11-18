Feature: Verify the user can create a new wallet

	@TEST_QAATR-1283 @For_Automation @android @ios
	Scenario: Verify the user can create a new wallet
		Given I open the RSK wallet for the first time
		When I create a new wallet
