package Steps;

import Pages.CommsPage;
import Util.DriverFactory;
import cucumber.api.java.en.And;

public class CommsPageSteps extends DriverFactory {

    @And("^they land on the Comms page$")
    public void theyLandOnTheCommsPage() throws Throwable {
        new CommsPage(driver).verifyCommsPage();
    }

    @And("^they click the TwentyEA logo$")
    public void clickTwentyEALogo() throws Throwable {
        new CommsPage(driver).clickTwentyEALogo();
    }
    @And("^they choose to display only On Market on the Comms page$")
    public void theyChooseToDisplayOnlyOnMarket() throws Throwable {
        new CommsPage(driver).switchOnMarket();
    }
    @And("^they choose to display only Off Market on the Comms page$")
    public void theyChooseToDisplayOnlyOffMarket() throws Throwable {
        new CommsPage(driver).switchOffMarket();
    }
    @And("^they choose to display All Market on the Comms page$")
    public void theyChooseToDisplayAllMarket() throws Throwable {
        new CommsPage(driver).switchAllMarket();
    }
}
