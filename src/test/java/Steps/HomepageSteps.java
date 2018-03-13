package Steps;

import Pages.Homepage;
import Util.DriverFactory;
import cucumber.api.java.en.And;

public class HomepageSteps extends DriverFactory{

    @And("^they land on the Homepage$")
    public void landOnHomepage() throws Throwable {
        new Homepage(driver).verifyHomepage();
    }
    @And("^they open the user menu$")
    public void theyOpenTheUserMenu() throws Throwable {
        new Homepage(driver).openUserMenu();
    }
    @And("^they log out$")
    public void theyLogOut() throws Throwable {
        new Homepage(driver).theyLogOut();
    }
    @And("^they choose to display only On Market$")
    public void theyChooseToDisplayOnlyOnMarket() throws Throwable {
        new Homepage(driver).switchOnMarket();
    }
    @And("^they confirm that only On Market information is showing on the homepage$")
    public void onlyOnMarketDisplayed() throws Throwable {
        new Homepage(driver).onlyOnMarketDisplayed();
    }
    @And("^they choose to display only Off Market$")
    public void theyChooseToDisplayOnlyOffMarket() throws Throwable {
        new Homepage(driver).switchOffMarket();
    }
    @And("^they confirm that only Off Market information is showing on the homepage$")
    public void onlyOffMarketDisplayed() throws Throwable {
        new Homepage(driver).onlyOffMarketDisplayed();
    }
    @And("^they choose to display only All Market$")
    public void theyChooseToDisplayAllMarket() throws Throwable {
        new Homepage(driver).switchAllMarket();
    }
    @And("^they confirm that All Market information is showing on the homepage$")
    public void allMarketDisplayed() throws Throwable {
        new Homepage(driver).allMarketDisplayed();
    }
    @And("^they move to the Explore page$")
    public void moveToExplorePage() throws Throwable {
        new Homepage(driver).moveToExplorePage();
    }

}
