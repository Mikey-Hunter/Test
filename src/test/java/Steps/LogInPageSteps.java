package Steps;

import Pages.LogInPage;
import Util.DriverFactory;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class LogInPageSteps extends DriverFactory{

    @When("^they click the Login button$")
    public void clickLogIn() throws Throwable {
        new LogInPage(driver).clickLogIn();
    }
    @And("^they provide the email as ([^\"]*)$")
    public void enterEmail(String email) throws Throwable {
        new LogInPage(driver).enterEmail(email);
    }
    @And("^they refresh the page$")
    public void refreshPage() throws Throwable {
        new LogInPage(driver).refreshPage();
    }
    @And("^they provide the password as ([^\"]*)$")
    public void enterPassword(String email) throws Throwable {
        new LogInPage(driver).enterPassword(email);
    }
    @And("^they click the reset password link$")
    public void resetPassword() throws Throwable {
        new LogInPage(driver).resetPassword();
    }
    @And("^they click the send password reset link button button$")
    public void sendPasswordReset() throws Throwable {
        new LogInPage(driver).sendResetPassword();
    }
    @And("^they enter the email as ([^\"]*)$")
    public void resetEmail(String email) throws Throwable {
        new LogInPage(driver).resetEmail(email);
    }
    @And("^they return to the log in page$")
    public void returnToLogIn() throws Throwable {
        new LogInPage(driver).returnToLogIn();
    }
    @Then("^they land back on the log in page$")
    public void theyLandBackOnLogInPage() throws Throwable {
        new LogInPage(driver).verifyLogInPage();
    }
}
