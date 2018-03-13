Feature: Testing the log in function

  Scenario: Verify Log In Fields
    Given that user navigates to TwentyEA
    When they click the Login button
    And they provide the email as michael.hunter@twentyci.co.uk
    And they click the Login button
    And they refresh the page
    And they provide the password as P@ssword1234
    And they click the Login button
    And they provide the email as michael.hunter@twentyci.co.uk
    And they provide the password as oahsbdajhbsdjka
    And they click the Login button
    And they provide the email as michael.hunter
    And they click the Login button
    And they click the reset password link
    And they enter the email as michael.hunter
    And they click the send password reset link button button
    And they refresh the page
    And they enter the email as mikeyvisions@hotmail.co.uk
    And they click the send password reset link button button
    And they enter the email as michael.hunter@twentyci.co.uk
    And they click the send password reset link button button
    And they return to the log in page
    And they provide the email as michael.hunter@twentyci.co.uk
    And they provide the password as P@ssword1234
    And they click the Login button
    And they land on the Homepage
    And they open the user menu
    And they log out
    Then they land back on the log in page
