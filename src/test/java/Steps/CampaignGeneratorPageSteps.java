package Steps;

import Pages.CampaignGeneratorPage;
import Util.DriverFactory;
import cucumber.api.java.en.And;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class CampaignGeneratorPageSteps extends DriverFactory {

    @And("^they land on the Top Audience Campaign page")
    public void theyLandOnTheTopAudiencePage() throws Throwable {
        new CampaignGeneratorPage(driver).verifyTopAudiencePage();
    }
    @And("^they land on the Property Hotspots Campaign page")
    public void theyLandOnThePropertyHotspotsPage() throws Throwable {
        new CampaignGeneratorPage(driver).verifyPropertyHotspotsPage();
    }
    @And("^they land on the Weeks On Market Campaign page")
    public void theyLandOnTheWeeksOnMarketPage() throws Throwable {
        new CampaignGeneratorPage(driver).verifyWeeksOnMarketPage();
    }
    @And("^they land on the Price Reductions Campaign page")
    public void theyLandOnThePriceReductionsPage() throws Throwable {
        new CampaignGeneratorPage(driver).verifyPriceReductionsPage();
    }
    @And("^they land on the New Instructions Campaign page")
    public void theyLandOnTheNewInstructionsPage() throws Throwable {
        new CampaignGeneratorPage(driver).verifyNewInstructionsPage();
    }
    @And("^they land on the Withdrawn Campaign page")
    public void theyLandOnTheWithdrawnPage() throws Throwable {
        new CampaignGeneratorPage(driver).verifyWithdrawnPage();
    }
    @And("^they land on the Fallen Through Campaign page")
    public void theyLandOnTheFallenThroughPage() throws Throwable {
        new CampaignGeneratorPage(driver).verifyFallenThroughPage();
    }
    @And("^they check the Audience Size$")
    public void checkAudienceSize() throws Throwable {
        Assert.assertTrue(new CampaignGeneratorPage(driver).checkAudienceSize());
        WebElement audienceSize = driver.findElement(By.xpath("/html/body/main/div[1]/div[2]/div/div[2]/div[2]/div[5]"));
        String audience = audienceSize.getText();
        System.out.println("Audience Size = " + audience + "\n");
    }
    @And("^they choose homes with 3-5 bedrooms$")
    public void homesWithOver3Bedrooms() throws Throwable {
        new CampaignGeneratorPage(driver).homesWithOver3Bedrooms();
    }
    @And("^they choose homes with up to 3 bedrooms$")
    public void homesWithUpTo3Bedrooms() throws Throwable {
        new CampaignGeneratorPage(driver).homesWithUpTo3Bedrooms();
    }
    @And("^they update the filter$")
    public void updateFilter() throws Throwable {
        new CampaignGeneratorPage(driver).updateFilter();
    }
    @And("^they set the property type to Bungalows, Flats/Apartments, and Houses$")
    public void selectBungalowsFlatsAndHouses() throws Throwable {
        new CampaignGeneratorPage(driver).filterBungalowsFlatsAndHouses();
    }
    @And("^they set the property type to Bungalows$")
    public void selectBungalows() throws Throwable {
        new CampaignGeneratorPage(driver).filterBungalows();
    }
    @And("^they set the property type to Houses$")
    public void selectHouses() throws Throwable {
        new CampaignGeneratorPage(driver).filterHouses();
    }
    @And("^they switch to list view$")
    public void switchListView() throws Throwable {
        new CampaignGeneratorPage(driver).switchListView();
    }
    @And("^they generate the campaign$")
    public void generateTheCampaign() throws Throwable {
        new CampaignGeneratorPage(driver).generateTheCampaign();
    }
    @And("^they choose to send the campaign$")
    public void sendTheCampaign() throws Throwable {
        new CampaignGeneratorPage(driver).sendTheCampaign();
    }
    @And("^they click done$")
    public void clickDone() throws Throwable {
        new CampaignGeneratorPage(driver).clickDone();
    }
    @And("^they change the number of weeks to ([^\"]*)$")
    public void changeNumberOfWeeks(String onMarketWeeks) throws Throwable {
        new CampaignGeneratorPage(driver).changeNumberOfWeeks(onMarketWeeks);
    }
    @And("^they choose not to purchase names$")
    public void purchaseNames() throws Throwable {
        new CampaignGeneratorPage(driver).purchaseNames();
    }
    @And("^they reduce the estimated value to 90%$")
    public void reduceEstimatedValue90() throws Throwable {
        new CampaignGeneratorPage(driver).reduceEstimatedValue90();
    }
    @And("^they filter the Postcode district to MK1-MK3$")
    public void filterPostcodeDistrictMK1toMK3() throws Throwable {
        new CampaignGeneratorPage(driver).filterPostcodeDistrictMK1toMK3();
    }

}
