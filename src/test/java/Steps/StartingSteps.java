package Steps;

import Util.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.IOException;
import java.net.URISyntaxException;

public class StartingSteps extends DriverFactory {


    public WebDriver driver;

    @Before
    public void beforeScenario(Scenario scenario) {
        System.out.println("\n");
        System.out.println("========(^.^) Execute "+ scenario.getName() + " (^.^)========");
        System.out.println("\n");
        driver = new DriverFactory().getDriver();
    }

    @After
    public void afterScenario(Scenario result) throws URISyntaxException, IOException {
        final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
        result.embed(screenshot, "image/png");
        System.out.println("\n");
        System.out.println("******* Execute scenario " + result.getName() + " done as: " + result.getStatus() + " ********");
        System.out.println("\n");
        new DriverFactory().destroyDriver();
    }


    @Given("^that user navigates to TwentyEA$")
    public void testStart() throws Throwable {
        driver.get("https://twea.demo.ominor.com/user/login");
        driver.manage().window().maximize();
    }
}
