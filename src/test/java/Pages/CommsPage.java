package Pages;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static junit.framework.Assert.fail;

public class CommsPage {
    WebDriver driver;

    @FindBy(xpath = "//div[@class=\"logo mr-auto\"]/a") private WebElement twentyEALogo;
    @FindBy(xpath = "//div[@class=\"container-fluid\"]//label[@for=\"on\"]") private WebElement onMarketSwitch;
    @FindBy(xpath = "//div[@class=\"container-fluid\"]//label[@for=\"off\"]") private WebElement offMarketSwitch;
    @FindBy(xpath = "//div[@class=\"container-fluid\"]//label[@for=\"all\"]") private WebElement allMarketSwitch;

    public CommsPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void verifyCommsPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Campaign Schedule"))
            System.out.println("Comms Page Verified" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void clickTwentyEALogo() throws Throwable {
        twentyEALogo.click();
    }
    public void switchOnMarket() throws Throwable {
        onMarketSwitch.click();
    }
    public void switchOffMarket() throws Throwable {
        offMarketSwitch.click();
    }

    public void switchAllMarket() throws Throwable {
        allMarketSwitch.click();
    }

}
