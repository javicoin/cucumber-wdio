Feature: Verify the user can import an existing wallet

	@US-402 @android @ios
	Scenario: Verify the user can import an existing wallet
		Given I proceed to import an existing wallet
		When I input the master key of an existing wallet
		Then I verify I am able to recover the existing wallet