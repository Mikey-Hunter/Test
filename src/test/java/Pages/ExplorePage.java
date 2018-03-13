package Pages;


import Util.FuncModules;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;


import static junit.framework.Assert.fail;
import static org.openqa.selenium.support.ui.ExpectedConditions.visibilityOf;


public class ExplorePage {
    WebDriver driver;

    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Create a new audience\")]") private WebElement campaignBuilder;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Show my top 10\")]") private WebElement topTenPercent;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Property hot-spots\")]") private WebElement propertyHotspots;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Price reductions\")]") private WebElement priceReductions;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Weeks on market\")]") private WebElement weeksOnMarket;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"New instructions\")]") private WebElement newInstructions;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Withdrawn\")]") private WebElement withdrawn;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Fallen through\")]") private WebElement fallenThrough;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"New Instructions Test\")]") private WebElement customNICampaign;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"26 weeks On Market £200-800k\")]") private WebElement customWoMCampaign;
    @FindBy(xpath = "//div[@class=\"col-md-3\" and contains(.,\"Custom Top Audience\")]") private WebElement customTACampaign;
    @FindBy(xpath = "/html/body/header/nav/div[3]/ul/li[3]/a") private WebElement commsPageLink;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[1]/div/a[2]/i") private WebElement moreinfoCustomCampaign;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[2]/div/a[2]/i") private WebElement moreinfoTopAudience;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[3]/div/a[2]/i") private WebElement moreinfoPropertyHotspots;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[4]/div/a[2]/i") private WebElement moreInfoReductions;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[5]/div/a[2]/i") private WebElement moreInfoWeeksOnMarket;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[6]/div/a[2]/i") private WebElement moreInfoNewInstructions;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[7]/div/a[2]/i") private WebElement moreInfoWithdrawn;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[8]/div/a[2]/i") private WebElement moreInfoFallenThrough;
    @FindBy(xpath = "/html/body/main/div[1]/div[3]/div/div[2]/form/div/input") private WebElement selectWeeks;
    @FindBy(xpath = "//*[@id=\"go\"]") private WebElement goButton;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[9]/div/ul/li[1]/a/i") private WebElement deleteCustom;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[10]/div/ul/li[1]/a/i") private WebElement deleteCustomWoM;
    @FindBy(xpath = "/html/body/main/div[1]/div[4]/div[11]/div/ul/li[1]/a/i") private WebElement deleteCustomTA;
    @FindBy(xpath = "//*[@class=\"btn btn-danger btn-ok waves-effect waves-light\"]") private WebElement confirmDelete;


    public ExplorePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void verifyExplorePage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Explore"))
            System.out.println("Explore Page Verified" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void onlyOnMarketDisplayed() throws Throwable {
        try {
            topTenPercent.isDisplayed();
            fail("Element should not have been displayed but it was!");
        }
        catch (NoSuchElementException e) {}
    }
    public void onlyOffMarketDisplayed() throws Throwable {
        try {
            priceReductions.isDisplayed();
            fail("Element should not have been displayed but it was!");
        }
        catch (NoSuchElementException e) {}
    }
    public void allMarketDisplayed() throws Throwable {
        topTenPercent.isDisplayed();
        priceReductions.isDisplayed();
    }
    public void moveToCommsPage() throws Throwable {
        Thread.sleep(3000);
        commsPageLink.click();
    }
    public void moreCustomCampaignInfo() throws Throwable {
        moreinfoCustomCampaign.click();
    }
    public void setUpCustomCampaign() throws Throwable {
        campaignBuilder.click();
    }
    public void moreTopAudienceInfo() throws Throwable {
        moreinfoTopAudience.click();
    }
    public void setUpTopAudience() throws Throwable {
        topTenPercent.click();
    }
    public void morePropertyHotspotsInfo() throws Throwable {
        moreinfoPropertyHotspots.click();
    }
    public void setUpPropertyHotspots() throws Throwable {
        propertyHotspots.click();
    }
    public void morePriceReductionsInfo() throws Throwable {
        moreInfoReductions.click();
    }
    public void setUpPriceReductions() throws Throwable {
        priceReductions.click();
    }
    public void moreWeeksOnMarketInfo() throws Throwable {
        moreInfoWeeksOnMarket.click();
    }
    public void setUpWeeksOnMarket() throws Throwable {
        weeksOnMarket.click();
    }
    public void moreNewInstructionsInfo() throws Throwable {
        moreInfoNewInstructions.click();
    }
    public void setUpNewInstructions() throws Throwable {
        newInstructions.click();
    }
    public void moreWithdrawnInfo() throws Throwable {
        moreInfoWithdrawn.click();
    }
    public void setUpWithdrawn() throws Throwable {
        withdrawn.click();
    }
    public void moreFallenThroughInfo() throws Throwable {
        moreInfoFallenThrough.click();
    }
    public void setUpFallenThrough() throws Throwable {
        fallenThrough.click();
    }
    public void selectWeeksOnMarket(String onMarketWeeks) throws Throwable {
        selectWeeks.click();
        String xpath = "//div[@class='select-wrapper mdb-select']//li[contains(.,'"+ onMarketWeeks+"')]";
        new FuncModules(driver)._WaitForLoad(By.xpath(xpath));
        driver.findElement(By.xpath(xpath)).click();
    }
    public void clickGo() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement go = wait.until(visibilityOf(goButton));
        goButton.click();
    }
    public void customNICampaignDisplayed() throws Throwable {
        Thread.sleep(1000);
        customNICampaign.isDisplayed();
    }
    public void customWoMCampaignDisplayed() throws Throwable {
        Thread.sleep(1000);
        customWoMCampaign.isDisplayed();
    }
    public void customTACampaignDisplayed() throws Throwable {
        Thread.sleep(1000);
        customTACampaign.isDisplayed();
    }
    public void deleteCustomNICampaign() throws Throwable {
        deleteCustom.click();
    }
    public void deleteCustomWoMCampaign() throws Throwable {
        deleteCustom.click();
    }
    public void deleteCustomTACampaign() throws Throwable {
        deleteCustom.click();
    }
    public void confirmDeletion() throws Throwable {
        driver.switchTo().activeElement();
        Thread.sleep(1000);
        confirmDelete.click();
    }
}
