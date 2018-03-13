package Pages;

import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static junit.framework.Assert.fail;

public class Homepage {
    WebDriver driver;

    @FindBy(xpath = "//*[@id=\"navbarDropdownMenuLink\"]") private WebElement usermenu;
    @FindBy(xpath = "//a[@class=\"dropdown-item\"]") private WebElement logOut;
    @FindBy(xpath = "//div[@class=\"container-fluid\"]//label[@data-original-title=\"Display On Market details only\"]") private WebElement onMarketSwitch;
    @FindBy(xpath = "//div[@class=\"container-fluid\"]//label[@data-original-title=\"Display Off Market details only\"]") private WebElement offMarketSwitch;
    @FindBy(xpath = "//div[@class=\"container-fluid\"]//label[@data-original-title=\"Display all available lead types\"]") private WebElement allMarketSwitch;
    @FindBy(xpath = "//div[@title=\"Potential Off-Market Count\"]") private WebElement propertyCount;
    @FindBy(xpath = "//*[@id=\"off-market\"]") private WebElement offMarketConversions;
    @FindBy(xpath = "//*[@id=\"om-stats\"]") private WebElement onMarketStatsAll;
    @FindBy(xpath = "//div[@class=\"width-40\"]//span[contains(.,'EXPLORE')]") private WebElement explorePageLink;


    public Homepage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void verifyHomepage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Homepage"))
            System.out.println("Homepage Verified" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void openUserMenu() throws Throwable {
        usermenu.click();
    }
    public void theyLogOut() throws Throwable {
        logOut.click();
    }
    public void switchOnMarket() throws Throwable {
        onMarketSwitch.click();
    }
    public void onlyOnMarketDisplayed() throws Throwable {
        try {
            propertyCount.isDisplayed();
            fail("Element should not have been displayed but it was!");
        }
        catch (NoSuchElementException e) {}
    }
    public void switchOffMarket() throws Throwable {
        offMarketSwitch.click();
    }
    public void onlyOffMarketDisplayed() throws Throwable {
        propertyCount.isDisplayed();
    }
    public void switchAllMarket() throws Throwable {
        allMarketSwitch.click();
    }
    public void allMarketDisplayed() throws Throwable {
        offMarketConversions.isDisplayed();
        onMarketStatsAll.isDisplayed();
    }
    public void moveToExplorePage() throws Throwable {
        explorePageLink.click();
    }
}
