$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/1.LogInAndOut.feature");
formatter.feature({
  "name": "Testing the log in function",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Log In Fields",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they refresh the page",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.refreshPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as oahsbdajhbsdjka",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the reset password link",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.resetPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter the email as michael.hunter",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.resetEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the send password reset link button button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.sendPasswordReset()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they refresh the page",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.refreshPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter the email as mikeyvisions@hotmail.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.resetEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the send password reset link button button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.sendPasswordReset()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.resetEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the send password reset link button button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.sendPasswordReset()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they return to the log in page",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.returnToLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they open the user menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyOpenTheUserMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they log out",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyLogOut()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land back on the log in page",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInPageSteps.theyLandBackOnLogInPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/Features/2.OnOffAllOfMarket.feature");
formatter.feature({
  "name": "Test switching between On, Off, and All Market",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test switching between On, Off, and All Market",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only On Market",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyChooseToDisplayOnlyOnMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm that only On Market information is showing on the homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.onlyOnMarketDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only Off Market",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyChooseToDisplayOnlyOffMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm that only Off Market information is showing on the homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.onlyOffMarketDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only All Market",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyChooseToDisplayAllMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm that All Market information is showing on the homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.allMarketDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only On Market",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyChooseToDisplayOnlyOnMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm that only On Market information is showing on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.onlyOnMarketDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only Off Market",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyChooseToDisplayOnlyOffMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm that only Off Market information is showing on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.onlyOffMarketDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only All Market",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyChooseToDisplayAllMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm that All Market information is showing on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.allMarketDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only On Market on the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "CommsPageSteps.theyChooseToDisplayOnlyOnMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display only Off Market on the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "CommsPageSteps.theyChooseToDisplayOnlyOffMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to display All Market on the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "CommsPageSteps.theyChooseToDisplayAllMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the TwentyEA logo",
  "keyword": "And "
});
formatter.match({
  "location": "CommsPageSteps.clickTwentyEALogo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/Features/3.GenerateOffMarketCampaigns.feature");
formatter.feature({
  "name": "Core Journey 1 - Off Market Campaigns",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate a Top Audience Campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they choose to see more information about Top Audience",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreTopAudienceInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a Top Audience campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpTopAudience()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Top Audience Campaign page",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.theyLandOnTheTopAudiencePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they reduce the estimated value to 90%",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.reduceEstimatedValue90()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose homes with up to 3 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.homesWithUpTo3Bedrooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they filter the Postcode district to MK1-MK3",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.filterPostcodeDistrictMK1toMK3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type to Bungalows",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.selectBungalows()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they switch to list view",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.switchListView()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they generate the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.generateTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to send the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.sendTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click done",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.clickDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate a Property Hotspots Campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they choose to see more information about Property Hotspots",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.morePropertyHotspotsInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a Property Hotspots campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpPropertyHotspots()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Property Hotspots Campaign page",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.theyLandOnThePropertyHotspotsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose homes with up to 3 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.homesWithUpTo3Bedrooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they filter the Postcode district to MK1-MK3",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.filterPostcodeDistrictMK1toMK3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type to Houses",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.selectHouses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they switch to list view",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.switchListView()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they generate the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.generateTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to send the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.sendTheCampaign()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[@id\u003d\"campaign-created\"]/div/div/div/div[2]/button (tried for 10 second(s) with 500 MILLISECONDS interval)\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T19:05:32.194Z\u0027\nSystem info: host: \u0027WKS1004\u0027, ip: \u0027172.16.26.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\MICHAE~1.HUN\\AppDa...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.186, webStorageEnabled: true}\nSession ID: f583fb48247190b640b9ccca43489146\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:82)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:231)\r\n\tat Pages.CampaignGeneratorPage.sendTheCampaign(CampaignGeneratorPage.java:155)\r\n\tat Steps.CampaignGeneratorPageSteps.sendTheCampaign(CampaignGeneratorPageSteps.java:81)\r\n\tat ✽.they choose to send the campaign(src/test/java/Features/3.GenerateOffMarketCampaigns.feature:52)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "they click done",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.clickDone()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/Features/4.GenerateOnMarketCampaigns.feature");
formatter.feature({
  "name": "Core Journey 2 - On Market Campaigns",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate a Weeks on Market Campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they choose to see more information about Weeks On Market",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreWeeksOnMarketInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a Weeks On Market campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpWeeksOnMarket()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the number of weeks as 16 weeks",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.selectWeeksOnMarket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they proceed to the campaign generator",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.clickGo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Weeks On Market Campaign page",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.theyLandOnTheWeeksOnMarketPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose homes with up to 3 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.homesWithUpTo3Bedrooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type to Bungalows, Flats/Apartments, and Houses",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.selectBungalowsFlatsAndHouses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they change the number of weeks to 8 weeks",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.changeNumberOfWeeks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they switch to list view",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.switchListView()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they generate the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.generateTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to send the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.sendTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click done",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.clickDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate a Price Reductions Campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they choose to see more information about Price Reductions",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.morePriceReductionsInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a Price Reductions campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpPriceReductions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Price Reductions Campaign page",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.theyLandOnThePriceReductionsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose homes with 3-5 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.homesWithOver3Bedrooms()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type to Bungalows, Flats/Apartments, and Houses",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.selectBungalowsFlatsAndHouses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they switch to list view",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.switchListView()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they generate the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.generateTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to send the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.sendTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click done",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.clickDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate a New Instructions Campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they choose to see more information about New Instructions",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreNewInstructionsInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a New Instructions campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpNewInstructions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the New Instructions Campaign page",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.theyLandOnTheNewInstructionsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they generate the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.generateTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose not to purchase names",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.purchaseNames()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to send the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.sendTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click done",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.clickDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate a Withdrawn Campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they choose to see more information about Withdrawn",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreWithdrawnInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a Withdrawn campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpWithdrawn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Withdrawn Campaign page",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.theyLandOnTheWithdrawnPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type to Bungalows, Flats/Apartments, and Houses",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.selectBungalowsFlatsAndHouses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they switch to list view",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.switchListView()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they generate the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.generateTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to send the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.sendTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click done",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.clickDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Generate a Fallen Through Campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they choose to see more information about Fallen Through",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreFallenThroughInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a Fallen Through campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpFallenThrough()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Fallen Through Campaign page",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.theyLandOnTheFallenThroughPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type to Bungalows, Flats/Apartments, and Houses",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.selectBungalowsFlatsAndHouses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they update the filter",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.updateFilter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they check the Audience Size",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.checkAudienceSize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they switch to list view",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.switchListView()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they generate the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.generateTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to send the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.sendTheCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click done",
  "keyword": "And "
});
formatter.match({
  "location": "CampaignGeneratorPageSteps.clickDone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Comms page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moveToCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Comms page",
  "keyword": "Then "
});
formatter.match({
  "location": "CommsPageSteps.theyLandOnTheCommsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/Features/5.CustomCampaignsBuilder.feature");
formatter.feature({
  "name": "Core Journey 3 - Custom Campaign Builder",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to see more information about custom campaigns",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreCustomCampaignInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a custom campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpCustomCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land in the Campaign Builder",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.verifyCampaignBuilder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Build a custom New Instructions campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they set the market type as On market",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectOnMarket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they select all available postcodes",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectAllPostcodes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 2",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set campaign type as New instructions",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectCampaignType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 3",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the maximum value as £600k",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setMaxValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type as Flats / Apartment",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setPropertyType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 1 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 2 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 3 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 4",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they name their campaign New Instructions Test",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setCampaignName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they submit the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.submitCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the custom New Instructions trigger card is present",
  "keyword": "Then "
});
formatter.match({
  "location": "ExplorePageSteps.customNICampaignDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to see more information about custom campaigns",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreCustomCampaignInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a custom campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpCustomCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land in the Campaign Builder",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.verifyCampaignBuilder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify all the fields",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they try to proceed to Step 2",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they select the postcodes MK1, MK3, MK5",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectMK135()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 2",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they clear their postcode selection",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.clearPostcodeSelection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the market type as On market",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectOnMarket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 2",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they select the postcodes MK2, MK4, MK6",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectMK246()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 2",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 3",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set campaign type as Weeks on market",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectCampaignType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 3",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose a 26 weeks campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.chooseWeeksCampaign(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 3",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 4",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the minimum value as £200k",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setMinValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the maximum value as £600k",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setMaxValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 4",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they select all of the property types",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectAllPropertyTypes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 4",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type as Bungalows",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setPropertyType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they try to proceed to Step 4",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.tryStep4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they close the error message",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.closeErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 4 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 5 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 6+ bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 4",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they name their campaign 26 weeks On Market £200-800k",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setCampaignName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they submit the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.submitCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the custom Weeks on Market trigger card is present",
  "keyword": "Then "
});
formatter.match({
  "location": "ExplorePageSteps.customWoMCampaignDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Log in and move to Explore page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to see more information about custom campaigns",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.moreCustomCampaignInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they choose to set up a custom campaign",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.setUpCustomCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land in the Campaign Builder",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.verifyCampaignBuilder()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Build a custom Off Market campaign",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "they set the market type as Off market",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectOnMarket(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they select all available postcodes",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectAllPostcodes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 2",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep2()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "set campaign type as Top audience",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.selectCampaignType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 3",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep3()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the maximum value as £600k",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setMaxValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they set the property type as Houses",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setPropertyType(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 4 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 5 bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they enter 6+ bedrooms",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setBedroomNumber(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they continue on to Step 4",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.continueOnToStep4()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they name their campaign Custom Top Audience",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.setCampaignName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they submit the campaign",
  "keyword": "And "
});
formatter.match({
  "location": "CustomCampaignBuilderSteps.submitCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the custom Top Audience trigger card is present",
  "keyword": "Then "
});
formatter.match({
  "location": "ExplorePageSteps.customTACampaignDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/Features/7.DeleteCustomCampaignCards.feature");
formatter.feature({
  "name": "Delete the custom campaigns created in Feature 5",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Given that user navigates to TwentyEA",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that user navigates to TwentyEA",
  "keyword": "Given "
});
formatter.match({
  "location": "StartingSteps.testStart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the email as michael.hunter@twentyci.co.uk",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they provide the password as P@ssword1234",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they click the Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LogInPageSteps.clickLogIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.landOnHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they move to the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.moveToExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they land on the Explore page",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.theyLandOnTheExplorePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they delete the Custom New Instructions card",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.deleteCustomNICampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm the deletion",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.confirmDeletion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they delete the Custom Weeks on Market card",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.deleteCustomWoMCampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm the deletion",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.confirmDeletion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they delete the Custom Top Audience card",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.deleteCustomTACampaign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they confirm the deletion",
  "keyword": "And "
});
formatter.match({
  "location": "ExplorePageSteps.confirmDeletion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they open the user menu",
  "keyword": "And "
});
formatter.match({
  "location": "HomepageSteps.theyOpenTheUserMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "they log out",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.theyLogOut()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "status": "passed"
});
});