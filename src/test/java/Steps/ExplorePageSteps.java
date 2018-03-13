package Steps;

import Pages.ExplorePage;
import Util.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;


public class ExplorePageSteps extends DriverFactory {

    @And("^they land on the Explore page$")
    public void theyLandOnTheExplorePage() throws Throwable {
        new ExplorePage(driver).verifyExplorePage();
    }
    @And("^they confirm that only On Market information is showing on the Explore page$")
    public void onlyOnMarketDisplayed() throws Throwable {
        new ExplorePage(driver).onlyOnMarketDisplayed();
    }
    @And("^they confirm that only Off Market information is showing on the Explore page$")
    public void onlyOffMarketDisplayed() throws Throwable {
        new ExplorePage(driver).onlyOffMarketDisplayed();
    }
    @And("^they confirm that All Market information is showing on the Explore page$")
    public void allMarketDisplayed() throws Throwable {
        new ExplorePage(driver).allMarketDisplayed();
    }
    @And("^they move to the Comms page$")
    public void moveToCommsPage() throws Throwable {
        new ExplorePage(driver).moveToCommsPage();
    }
    @And("^they choose to see more information about custom campaigns$")
    public void moreCustomCampaignInfo() throws Throwable {
        new ExplorePage(driver).moreCustomCampaignInfo();
    }
    @And("^they choose to set up a custom campaign$")
    public void setUpCustomCampaign() throws Throwable {
        new ExplorePage(driver).setUpCustomCampaign();
    }
    @And("^they choose to see more information about Top Audience$")
    public void moreTopAudienceInfo() throws Throwable {
        new ExplorePage(driver).moreTopAudienceInfo();
    }
    @And("^they choose to set up a Top Audience campaign$")
    public void setUpTopAudience() throws Throwable {
        new ExplorePage(driver).setUpTopAudience();
    }
    @And("^they choose to see more information about Property Hotspots$")
    public void morePropertyHotspotsInfo() throws Throwable {
        new ExplorePage(driver).morePropertyHotspotsInfo();
    }
    @And("^they choose to set up a Property Hotspots campaign$")
    public void setUpPropertyHotspots() throws Throwable {
        new ExplorePage(driver).setUpPropertyHotspots();
    }
    @And("^they choose to see more information about Price Reductions$")
    public void morePriceReductionsInfo() throws Throwable {
        new ExplorePage(driver).morePriceReductionsInfo();
    }
    @And("^they choose to set up a Price Reductions campaign$")
    public void setUpPriceReductions() throws Throwable {
        new ExplorePage(driver).setUpPriceReductions();
    }
    @And("^they choose to see more information about Weeks On Market$")
    public void moreWeeksOnMarketInfo() throws Throwable {
        new ExplorePage(driver).moreWeeksOnMarketInfo();
    }
    @And("^they choose to set up a Weeks On Market campaign$")
    public void setUpWeeksOnMarket() throws Throwable {
        new ExplorePage(driver).setUpWeeksOnMarket();
    }
    @And("^they choose to see more information about New Instructions$")
    public void moreNewInstructionsInfo() throws Throwable {
        new ExplorePage(driver).moreNewInstructionsInfo();
    }
    @And("^they choose to set up a New Instructions campaign$")
    public void setUpNewInstructions() throws Throwable {
        new ExplorePage(driver).setUpNewInstructions();
    }
    @And("^they choose to see more information about Withdrawn$")
    public void moreWithdrawnInfo() throws Throwable {
        new ExplorePage(driver).moreWithdrawnInfo();
    }
    @And("^they choose to set up a Withdrawn campaign$")
    public void setUpWithdrawn() throws Throwable {
        new ExplorePage(driver).setUpWithdrawn();
    }
    @And("^they choose to see more information about Fallen Through$")
    public void moreFallenThroughInfo() throws Throwable {
        new ExplorePage(driver).moreFallenThroughInfo();
    }
    @And("^they choose to set up a Fallen Through campaign$")
    public void setUpFallenThrough() throws Throwable {
        new ExplorePage(driver).setUpFallenThrough();
    }
    @And("^they set the number of weeks as ([^\"]*)$")
    public void selectWeeksOnMarket(String onMarketWeeks) throws Throwable {
        new ExplorePage(driver).selectWeeksOnMarket(onMarketWeeks);
    }
    @And("^they proceed to the campaign generator$")
    public void clickGo() throws Throwable {
        new ExplorePage(driver).clickGo();
    }
    @Then("^the custom New Instructions trigger card is present$")
    public void customNICampaignDisplayed() throws Throwable {
        new ExplorePage(driver).customNICampaignDisplayed();
    }
    @Then("^the custom Weeks on Market trigger card is present$")
    public void customWoMCampaignDisplayed() throws Throwable {
        new ExplorePage(driver).customWoMCampaignDisplayed();
    }
    @Then("^the custom Top Audience trigger card is present$")
    public void customTACampaignDisplayed() throws Throwable {
        new ExplorePage(driver).customTACampaignDisplayed();
    }
    @And("^they delete the Custom New Instructions card$")
    public void deleteCustomNICampaign() throws Throwable {
        new ExplorePage(driver).deleteCustomNICampaign();
    }
    @And("^they delete the Custom Weeks on Market card$")
    public void deleteCustomWoMCampaign() throws Throwable {
        new ExplorePage(driver).deleteCustomWoMCampaign();
    }
    @And("^they delete the Custom Top Audience card$")
    public void deleteCustomTACampaign() throws Throwable {
        new ExplorePage(driver).deleteCustomTACampaign();
    }
    @And("^they confirm the deletion$")
    public void confirmDeletion() throws Throwable {
        new ExplorePage(driver).confirmDeletion();
    }
}