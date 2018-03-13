Feature: Core Journey 1 - Off Market Campaigns

  Background: Log in and move to Explore page
    Given that user navigates to TwentyEA
    And they provide the email as michael.hunter@twentyci.co.uk
    And they provide the password as P@ssword1234
    And they click the Login button
    And they land on the Homepage
    And they move to the Explore page
    And they land on the Explore page

  Scenario: Generate a Top Audience Campaign
    And they choose to see more information about Top Audience
    And they choose to set up a Top Audience campaign
    And they land on the Top Audience Campaign page
    And they check the Audience Size
    And they reduce the estimated value to 90%
    And they update the filter
    And they check the Audience Size
    And they choose homes with up to 3 bedrooms
    And they update the filter
    And they check the Audience Size
    And they filter the Postcode district to MK1-MK3
    And they update the filter
    And they check the Audience Size
    And they set the property type to Bungalows
    And they update the filter
    And they check the Audience Size
    And they switch to list view
    And they generate the campaign
    And they choose to send the campaign
    And they click done
    And they move to the Comms page
    Then they land on the Comms page

  Scenario: Generate a Property Hotspots Campaign
    And they choose to see more information about Property Hotspots
    And they choose to set up a Property Hotspots campaign
    And they land on the Property Hotspots Campaign page
    And they check the Audience Size
    And they choose homes with up to 3 bedrooms
    And they update the filter
    And they check the Audience Size
    And they filter the Postcode district to MK1-MK3
    And they update the filter
    And they check the Audience Size
    And they set the property type to Houses
    And they update the filter
    And they check the Audience Size
    And they switch to list view
    And they generate the campaign
    And they choose to send the campaign
    And they click done
    And they move to the Comms page
    Then they land on the Comms page