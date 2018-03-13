package Pages;

import Util.FuncModules;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import static junit.framework.TestCase.assertTrue;
import static org.openqa.selenium.support.ui.ExpectedConditions.visibilityOf;
import static org.openqa.selenium.support.ui.ExpectedConditions.visibilityOfElementLocated;

public class CampaignGeneratorPage {
    WebDriver driver;

    @FindBy(xpath = "//div[@class=\"total-audience float-left\"]") private WebElement audienceSize;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//button[@title=\"All\"]") private WebElement numberBedrooms;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//input[@value=\"1\"]") private WebElement oneBedroom;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//input[@value=\"2\"]") private WebElement twoBedrooms;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//input[@value=\"3\"]") private WebElement threeBedrooms;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//input[@value=\"4\"]") private WebElement fourBedrooms;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//input[@value=\"5\"]") private WebElement fiveBedrooms;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//input[@value=\"6\"]") private WebElement sixBedrooms;
    @FindBy(xpath = "//*[@id=\"filter-submit\"]/i") private WebElement refineFilter;
    @FindBy(xpath = "//*[@id=\"filter-form\"]/div[1]/div[3]/div/span/div/button") private WebElement propertyType;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//label[contains(.,'Bungalows')]") private WebElement selectBungalows;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//label[contains(.,'Flats / Apartments')]") private WebElement selectFlats;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//label[contains(.,'Houses')]") private WebElement selectHouses;
    @FindBy(xpath = "//*[@title=\"List view\"]") private WebElement listView;
    @FindBy(xpath = "//*[@class=\"col-md-9\"]//a[contains(.,'Generate Campaign')]") private WebElement generateCampaign;
    @FindBy(xpath = "//*[@id=\"send-campaign\"]") private WebElement sendCampaign;
    @FindBy(xpath = "//*[@id=\"campaign-created\"]//button[contains(., 'Done')]") private WebElement doneButton;
    @FindBy(xpath = "//div[@class=\"select-wrapper mdb-select\"]//input[@class=\"select-dropdown\"]") private WebElement selectWeeks;
    @FindBy(xpath = "//*[@id=\"campaign-form-data\"]//label[contains(.,'Names included')]") private WebElement namesIncluded;
    @FindBy(xpath = "//*[@id=\"avm-range\"]/span[2]") private WebElement maxValue;
    @FindBy(xpath = "//*[@id=\"avm-range\"]/div") private WebElement valueSlider;
    @FindBy(xpath = "//*[@id=\"filter-form\"]//button[@class=\"add-postcode\"]") private WebElement openPostcodes;
    @FindBy(xpath = "//*[@id=\"postcodes-tree\"]//li[@data-id=\"MK1\"]//span[@class=\"gj-icon\"]") private WebElement mk1Postcodes;
    @FindBy(xpath = "//*[@id=\"postcodes-tree\"]//li[@data-id=\"MK2\"]//span[@class=\"gj-icon\"]") private WebElement mk2Postcodes;
    @FindBy(xpath = "//*[@id=\"postcodes-tree\"]//li[@data-id=\"MK3\"]//span[@class=\"gj-icon\"]") private WebElement mk3Postcodes;
    @FindBy(xpath = "//*[@id=\"list-postcodes\"]/p/i") private WebElement clearPostcodes;


    public CampaignGeneratorPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void verifyTopAudiencePage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Top audience"))
            System.out.println("Top Audience Campaign page confirmed" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void verifyPropertyHotspotsPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Property hotspots"))
            System.out.println("Property Hotspots Campaign page confirmed" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void verifyWeeksOnMarketPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Weeks on market"))
            System.out.println("Weeks on Market Campaign page confirmed" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void verifyPriceReductionsPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Price reductions"))
            System.out.println("Price Reductions Campaign page confirmed" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void verifyNewInstructionsPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - New instructions"))
            System.out.println("New Instructions Campaign page confirmed" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void verifyWithdrawnPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Withdrawn"))
            System.out.println("Withdrawn Campaign page confirmed" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void verifyFallenThroughPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Fallen through"))
            System.out.println("Fallen Through Campaign page confirmed" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public boolean checkAudienceSize() throws Throwable {
        return audienceSize.isDisplayed();
    }
    public void homesWithOver3Bedrooms() throws Throwable {
        numberBedrooms.click();
        Thread.sleep(1000);
        threeBedrooms.click();
        fourBedrooms.click();
        fiveBedrooms.click();
    }
    public void homesWithUpTo3Bedrooms() throws Throwable {
        numberBedrooms.click();
        Thread.sleep(1000);
        threeBedrooms.click();
        twoBedrooms.click();
    }
    public void updateFilter() throws Throwable {
        refineFilter.click();
    }
    public void filterBungalowsFlatsAndHouses() throws Throwable {
        propertyType.click();
        Thread.sleep(1000);
        selectBungalows.click();
        selectHouses.click();
        selectFlats.click();
    }
    public void filterBungalows() throws Throwable {
        propertyType.click();
        Thread.sleep(1000);
        selectBungalows.click();
    }
    public void filterHouses() throws Throwable {
        propertyType.click();
        Thread.sleep(1000);
        selectHouses.click();
    }
    public void changeNumberOfWeeks(String onMarketWeeks) throws Throwable {
        selectWeeks.click();
        String xpath = "//div[@class='select-wrapper mdb-select']//li[contains(.,'"+ onMarketWeeks+"')]";
        new FuncModules(driver)._WaitForLoad(By.xpath(xpath));
        driver.findElement(By.xpath(xpath)).click();
    }
    public void switchListView() throws Throwable {
        listView.click();
        Thread.sleep(5000);
    }
    public void generateTheCampaign() throws Throwable {
        generateCampaign.click();
        Thread.sleep(10000);
    }
    public void sendTheCampaign() throws Throwable {
        sendCampaign.click();
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement done = wait.until(visibilityOfElementLocated(By.xpath("//*[@id=\"campaign-created\"]/div/div/div/div[2]/button")));
    }
    public void clickDone() throws Throwable {
        doneButton.click();
        Thread.sleep(5000);
    }
    public void purchaseNames() throws Throwable {
        namesIncluded.click();
    }
    public void reduceEstimatedValue90() throws Throwable {
        assertTrue(maxValue.isDisplayed());

        Dimension sliderSize = maxValue.getSize();
        int sliderWidth = sliderSize.getWidth();
        int xCoord = maxValue.getLocation().getX();
        Actions builder = new Actions(driver);
        builder.moveToElement(maxValue)
                .click()
                .dragAndDropBy(maxValue,xCoord+sliderWidth, 90)
                .build()
                .perform();
    }
    public void filterPostcodeDistrictMK1toMK3() throws Throwable {
        openPostcodes.click();
        Thread.sleep(1000);
        mk1Postcodes.click();
        mk2Postcodes.click();
        mk3Postcodes.click();
    }
}
