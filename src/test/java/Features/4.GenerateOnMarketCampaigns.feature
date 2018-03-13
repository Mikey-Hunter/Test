Feature: Core Journey 2 - On Market Campaigns

  Background: Log in and move to Explore page
    Given that user navigates to TwentyEA
    And they provide the email as michael.hunter@twentyci.co.uk
    And they provide the password as P@ssword1234
    And they click the Login button
    And they land on the Homepage
    And they move to the Explore page
    And they land on the Explore page

  Scenario: Generate a Weeks on Market Campaign
    And they choose to see more information about Weeks On Market
    And they choose to set up a Weeks On Market campaign
    And they set the number of weeks as 16 weeks
    And they proceed to the campaign generator
    And they land on the Weeks On Market Campaign page
    And they check the Audience Size
    And they choose homes with up to 3 bedrooms
    And they update the filter
    And they check the Audience Size
    And they set the property type to Bungalows, Flats/Apartments, and Houses
    And they update the filter
    And they check the Audience Size
    And they change the number of weeks to 8 weeks
    And they check the Audience Size
    And they switch to list view
    And they generate the campaign
    And they choose to send the campaign
    And they click done
    And they move to the Comms page
    Then they land on the Comms page

  Scenario: Generate a Price Reductions Campaign
    And they choose to see more information about Price Reductions
    And they choose to set up a Price Reductions campaign
    And they land on the Price Reductions Campaign page
    And they check the Audience Size
    And they choose homes with 3-5 bedrooms
    And they update the filter
    And they check the Audience Size
    And they set the property type to Bungalows, Flats/Apartments, and Houses
    And they update the filter
    And they check the Audience Size
    And they switch to list view
    And they generate the campaign
    And they choose to send the campaign
    And they click done
    And they move to the Comms page
    Then they land on the Comms page

  Scenario: Generate a New Instructions Campaign
    And they choose to see more information about New Instructions
    And they choose to set up a New Instructions campaign
    And they land on the New Instructions Campaign page
    And they check the Audience Size
    And they generate the campaign
    And they choose not to purchase names
    And they choose to send the campaign
    And they click done
    And they move to the Comms page
    Then they land on the Comms page

  Scenario: Generate a Withdrawn Campaign
    And they choose to see more information about Withdrawn
    And they choose to set up a Withdrawn campaign
    And they land on the Withdrawn Campaign page
    And they check the Audience Size
    And they set the property type to Bungalows, Flats/Apartments, and Houses
    And they update the filter
    And they check the Audience Size
    And they switch to list view
    And they generate the campaign
    And they choose to send the campaign
    And they click done
    And they move to the Comms page
    Then they land on the Comms page

  Scenario: Generate a Fallen Through Campaign
    And they choose to see more information about Fallen Through
    And they choose to set up a Fallen Through campaign
    And they land on the Fallen Through Campaign page
    And they check the Audience Size
    And they set the property type to Bungalows, Flats/Apartments, and Houses
    And they update the filter
    And they check the Audience Size
    And they switch to list view
    And they generate the campaign
    And they choose to send the campaign
    And they click done
    And they move to the Comms page
    Then they land on the Comms page