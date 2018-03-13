package Steps;

import Pages.CustomCampaignBuilder;
import Util.DriverFactory;
import cucumber.api.java.bs.A;
import cucumber.api.java.en.And;
import cucumber.api.java.en_scouse.An;

public class CustomCampaignBuilderSteps extends DriverFactory {

    @And("^they land in the Campaign Builder$")
    public void verifyCampaignBuilder() throws Throwable {
        new CustomCampaignBuilder(driver).verifyCampaignBuilder();
    }
    @And("^they set the market type as ([^\"]*)$")
    public void selectOnMarket(String marketType) throws Throwable {
        new CustomCampaignBuilder(driver).selectOnMarket(marketType);
    }
    @And("^they select all available postcodes$")
    public void selectAllPostcodes() throws Throwable {
        new CustomCampaignBuilder(driver).selectAllPostcodes();
    }
    @And("^they select the postcodes MK1, MK3, MK5$")
    public void selectMK135() throws Throwable {
        new CustomCampaignBuilder(driver).selectMK135();
    }
    @And("^they select the postcodes MK2, MK4, MK6$")
    public void selectMK246() throws Throwable {
        new CustomCampaignBuilder(driver).selectMK246();
    }
    @And("^they continue on to Step 2$")
    public void continueOnToStep2() throws Throwable {
        new CustomCampaignBuilder(driver).continueOnToStep2();
    }
    @And("^they continue on to Step 3$")
    public void continueOnToStep3() throws Throwable {
        new CustomCampaignBuilder(driver).continueOnToStep3();
    }
    @And("^they continue on to Step 4$")
    public void continueOnToStep4() throws Throwable {
        new CustomCampaignBuilder(driver).continueOnToStep4();
    }
    @And("^set campaign type as ([^\"]*)$")
    public void selectCampaignType(String campaignType) throws Throwable {
        new CustomCampaignBuilder(driver).selectCampaignType(campaignType);
    }
    @And("^they choose a ([^\"]*) campaign$")
    public void chooseWeeksCampaign(String weeksNumber) throws Throwable {
        new CustomCampaignBuilder(driver).chooseWeeksCampaign(weeksNumber);
    }
    @And("^they set the minimum value as £200k$")
    public void setMinValue() throws Throwable {
        new CustomCampaignBuilder(driver).setMinValue();
    }
    @And("^they set the maximum value as £600k$")
    public void setMaxValue() throws Throwable {
        new CustomCampaignBuilder(driver).setMaxValue();
    }
    @And("^they select all of the property types$")
    public void selectAllPropertyTypes() throws Throwable {
        new CustomCampaignBuilder(driver).selectAllPropertyTypes();
    }
    @And("^they set the property type as ([^\"]*)$")
    public void setPropertyType(String propertyType) throws Throwable {
        new CustomCampaignBuilder(driver).setPropertyType(propertyType);
    }
    @And("^they enter ([^\"]*) bedrooms$")
    public void setBedroomNumber(String bedroomNumber) throws Throwable {
        new CustomCampaignBuilder(driver).setBedroomNumber(bedroomNumber);
    }
    @And("^they name their campaign ([^\"]*)$")
    public void setCampaignName(String campaignName) throws Throwable {
        new CustomCampaignBuilder(driver).setCampaignName(campaignName);
    }
    @And("^they submit the campaign$")
    public void submitCampaign() throws Throwable {
        new CustomCampaignBuilder(driver).submitCampaign();
    }
    @And("^they try to proceed to Step 2$")
    public void tryStep2() throws Throwable {
        new CustomCampaignBuilder(driver).tryStep2();
    }
    @And("^they close the error message$")
    public void closeErrorMessage() throws Throwable {
        new CustomCampaignBuilder(driver).closeErrorMessage();
    }
    @And("^they try to proceed to Step 3$")
    public void tryStep3() throws Throwable {
        new CustomCampaignBuilder(driver).tryStep3();
    }
    @And("^they try to proceed to Step 4$")
    public void tryStep4() throws Throwable {
        new CustomCampaignBuilder(driver).tryStep4();
    }
    @And("^they clear their postcode selection$")
    public void clearPostcodeSelection() throws Throwable {
        new CustomCampaignBuilder(driver).clearPostcodeSelection();
    }

}
