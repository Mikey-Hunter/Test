Feature: Test switching between On, Off, and All Market

  Scenario: Test switching between On, Off, and All Market
    Given that user navigates to TwentyEA
    And they provide the email as michael.hunter@twentyci.co.uk
    And they provide the password as P@ssword1234
    And they click the Login button
    And they land on the Homepage
    And they choose to display only On Market
    And they confirm that only On Market information is showing on the homepage
    And they choose to display only Off Market
    And they confirm that only Off Market information is showing on the homepage
    And they choose to display only All Market
    And they confirm that All Market information is showing on the homepage
    And they move to the Explore page
    And they land on the Explore page
    And they choose to display only On Market
    And they confirm that only On Market information is showing on the Explore page
    And they choose to display only Off Market
    And they confirm that only Off Market information is showing on the Explore page
    And they choose to display only All Market
    And they confirm that All Market information is showing on the Explore page
    And they move to the Comms page
    And they land on the Comms page
    And they choose to display only On Market on the Comms page
    And they choose to display only Off Market on the Comms page
    And they choose to display All Market on the Comms page
    And they click the TwentyEA logo
    Then they land on the Homepage

