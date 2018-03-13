Feature: Delete the custom campaigns created in Feature 5
  Scenario: Given that user navigates to TwentyEA
    Given that user navigates to TwentyEA
    And they provide the email as michael.hunter@twentyci.co.uk
    And they provide the password as P@ssword1234
    And they click the Login button
    And they land on the Homepage
    And they move to the Explore page
    And they land on the Explore page
    And they delete the Custom New Instructions card
    And they confirm the deletion
    And they delete the Custom Weeks on Market card
    And they confirm the deletion
    And they delete the Custom Top Audience card
    And they confirm the deletion
    And they open the user menu
    Then they log out