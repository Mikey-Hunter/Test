Feature: Core Journey 3 - Custom Campaign Builder


  Background: Log in and move to Explore page
    Given that user navigates to TwentyEA
    And they provide the email as michael.hunter@twentyci.co.uk
    And they provide the password as P@ssword1234
    And they click the Login button
    And they land on the Homepage
    And they move to the Explore page
    And they land on the Explore page
    And they choose to see more information about custom campaigns
    And they choose to set up a custom campaign
    And they land in the Campaign Builder

  Scenario: Build a custom New Instructions campaign
    And they set the market type as On market
    And they select all available postcodes
    And they continue on to Step 2
    And set campaign type as New instructions
    And they continue on to Step 3
    And they set the maximum value as £600k
    And they set the property type as Flats / Apartment
    And they enter 1 bedrooms
    And they enter 2 bedrooms
    And they enter 3 bedrooms
    And they continue on to Step 4
    And they name their campaign New Instructions Test
    And they submit the campaign
    And they land on the Explore page
    Then the custom New Instructions trigger card is present


  Scenario: Verify all the fields
    And they try to proceed to Step 2
    And they close the error message
    And they select the postcodes MK1, MK3, MK5
    And they try to proceed to Step 2
    And they close the error message
    And they clear their postcode selection
    And they set the market type as On market
    And they try to proceed to Step 2
    And they close the error message
    And they select the postcodes MK2, MK4, MK6
    And they continue on to Step 2
    And they try to proceed to Step 3
    And they close the error message
    And set campaign type as Weeks on market
    And they try to proceed to Step 3
    And they close the error message
    And they choose a 26 weeks campaign
    And they continue on to Step 3
    And they try to proceed to Step 4
    And they close the error message
    And they set the minimum value as £200k
    And they set the maximum value as £600k
    And they try to proceed to Step 4
    And they close the error message
    And they select all of the property types
    And they try to proceed to Step 4
    And they close the error message
    And they set the property type as Bungalows
    And they try to proceed to Step 4
    And they close the error message
    And they enter 4 bedrooms
    And they enter 5 bedrooms
    And they enter 6+ bedrooms
    And they continue on to Step 4
    And they name their campaign 26 weeks On Market £200-800k
    And they submit the campaign
    Then the custom Weeks on Market trigger card is present

  Scenario: Build a custom Off Market campaign
    And they set the market type as Off market
    And they select all available postcodes
    And they continue on to Step 2
    And set campaign type as Top audience
    And they continue on to Step 3
    And they set the maximum value as £600k
    And they set the property type as Houses
    And they enter 4 bedrooms
    And they enter 5 bedrooms
    And they enter 6+ bedrooms
    And they continue on to Step 4
    And they name their campaign Custom Top Audience
    And they submit the campaign
    And they land on the Explore page
    Then the custom Top Audience trigger card is present
