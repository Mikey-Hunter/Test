package Pages;

import Util.FuncModules;
import net.bytebuddy.asm.Advice;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import static junit.framework.TestCase.assertTrue;


public class CustomCampaignBuilder {
    WebDriver driver;

    @FindBy(xpath = "//div[@class=\"select-wrapper mdb-select\"]") private WebElement marketTypeDropdown;
    @FindBy(xpath = "//*[@id=\"step-1\"]/div/div[2]/button/i") private WebElement expandPostcodes;
    @FindBy(xpath = "//li[@data-id='MK1']//span[@data-role='checkbox']") private WebElement postcodeMK1;
    @FindBy(xpath = "//li[@data-id='MK2']//span[@data-role='checkbox']") private WebElement postcodeMK2;
    @FindBy(xpath = "//li[@data-id='MK3']//span[@data-role='checkbox']") private WebElement postcodeMK3;
    @FindBy(xpath = "//li[@data-id='MK4']//span[@data-role='checkbox']") private WebElement postcodeMK4;
    @FindBy(xpath = "//li[@data-id='MK5']//span[@data-role='checkbox']") private WebElement postcodeMK5;
    @FindBy(xpath = "//li[@data-id='MK6']//span[@data-role='checkbox']") private WebElement postcodeMK6;
    @FindBy(xpath = "//li[@data-id='MK7']//span[@data-role='checkbox']") private WebElement postcodeMK7;
    @FindBy(xpath = "//li[@data-id='MK8']//span[@data-role='checkbox']") private WebElement postcodeMK8;
    @FindBy(xpath = "//li[@data-id='MK9']//span[@data-role='checkbox']") private WebElement postcodeMK9;
    @FindBy(xpath = "//li[@data-id='MK10']//span[@data-role='checkbox']") private WebElement postcodeMK10;
    @FindBy(xpath = "/html/body/main/div[1]/div[2]/div/div/div[2]/p") private WebElement clickOffPostcodes;
    @FindBy(xpath = "//*[@id=\"step-1\"]/div/button") private WebElement goToStep2;
    @FindBy(xpath = "//div[@class='steps-step' and contains(.,'Step 2')]/a") private WebElement movetoStep2;
    @FindBy(xpath = "//*[@id=\"step-2\"]/div/button[2]") private WebElement goToStep3;
    @FindBy(xpath = "//div[@class='steps-step' and contains(.,'Step 3')]/a") private WebElement movetoStep3;
    @FindBy(xpath = "//*[@id=\"step-3\"]/div/button[2]") private WebElement goToStep4;
    @FindBy(xpath = "//div[@class='steps-step' and contains(.,'Step 4')]/a") private WebElement movetoStep4;
    @FindBy(xpath = "//*[@id=\"step-2\"]/div/div[1]/div") private WebElement customCampaignType;
    @FindBy(xpath = "//*[@id=\"weeks-select\"]/div") private WebElement numberOfWeeks;
    @FindBy(xpath = "//*[@id=\"avm-range\"]/span[1]") private WebElement minValue;
    @FindBy(xpath = "//*[@id=\"avm-range\"]/span[2]") private WebElement maxValue;
    @FindBy(xpath = "//*[@id=\"step-3\"]/div/div[2]/span/span[1]/span/ul/li/input") private WebElement propertyTypeField;
    @FindBy(xpath = "//*[@id=\"step-3\"]/div/div[3]/span/span[1]/span/ul/li/input") private WebElement numberOfBedrooms;
    @FindBy(xpath = "//*[@id=\"name\"]") private WebElement nameYourCampaign;
    @FindBy(xpath = "//*[@id=\"step-4\"]/div/button[2]") private WebElement submitCampaign;
    @FindBy(xpath = "//*[@id=\"list-postcodes\"]/p/i") private WebElement clearPostcodes;

    public CustomCampaignBuilder(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void verifyCampaignBuilder() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Custom Audience Builder"))
            System.out.println("Explore Page Verified" + "\n");
        else
            System.out.println("Page Title Matching Failed" + "\n");
    }
    public void selectOnMarket(String marketType) throws Throwable {
        marketTypeDropdown.click();
        String xpath = "//div[@class=\"select-wrapper mdb-select\"]//li[contains(.,'"+ marketType+"')]";
        new FuncModules(driver)._WaitForLoad(By.xpath(xpath));
        driver.findElement(By.xpath(xpath)).click();
    }
    public void selectAllPostcodes() throws Throwable {
        Thread.sleep(1000);
        expandPostcodes.click();
        postcodeMK1.click();
        postcodeMK2.click();
        postcodeMK3.click();
        postcodeMK4.click();
        postcodeMK5.click();
        postcodeMK6.click();
        postcodeMK7.click();
        postcodeMK8.click();
        postcodeMK9.click();
        postcodeMK10.click();
        clickOffPostcodes.click();
    }
    public void selectMK135() throws Throwable {
        expandPostcodes.click();
        postcodeMK1.click();
        postcodeMK3.click();
        postcodeMK5.click();
        clickOffPostcodes.click();
    }
    public void continueOnToStep2() throws Throwable {
        goToStep2.click();
    }
    public void continueOnToStep3() throws Throwable {
        goToStep3.click();
    }
    public void continueOnToStep4() throws Throwable {
        goToStep4.click();
    }
    public void selectCampaignType(String campaignType) throws Throwable {
        customCampaignType.click();
        String xpath = "//div[@class='select-wrapper mdb-select']//li[contains(.,'"+ campaignType+"')]";
        new FuncModules(driver)._WaitForLoad(By.xpath(xpath));
        driver.findElement(By.xpath(xpath)).click();
        Thread.sleep(1000);
    }
    public void chooseWeeksCampaign(String weeksNumber) throws Throwable {
        numberOfWeeks.click();
        String xpath = "//div[@class='select-wrapper mdb-select']//li[contains(.,'"+ weeksNumber+"')]";
        new FuncModules(driver)._WaitForLoad(By.xpath(xpath));
        driver.findElement(By.xpath(xpath)).click();
    }
    public void setMinValue() throws Throwable {
        assertTrue(minValue.isDisplayed());
        Dimension sliderSize = minValue.getSize();
        int sliderWidth = sliderSize.getWidth();
        int xCoord = minValue.getLocation().getX();
        Actions builder = new Actions(driver);
        builder.moveToElement(minValue)
                .click()
                .dragAndDropBy(minValue,xCoord+sliderWidth, 90)
                .build()
                .perform();
    }
    public void setMaxValue() throws Throwable {
        assertTrue(maxValue.isDisplayed());
        Dimension sliderSize = maxValue.getSize();
        int sliderWidth = sliderSize.getWidth();
        int xCoord = maxValue.getLocation().getX();
        Actions builder = new Actions(driver);
        builder.moveToElement(maxValue)
                .click()
                .dragAndDropBy(maxValue,xCoord+sliderWidth, 60)
                .build()
                .perform();
    }
    public void selectAllPropertyTypes() throws Throwable {
        Actions actions = new Actions(driver);
        actions.moveToElement(propertyTypeField);
        actions.click();
        actions.sendKeys("Bungalows");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Character Property");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Flats / Apartments");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Garage / Parking");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("House / Flat Share");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Houses");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Land");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Mobile / Park Homes");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Not Specified");
        actions.sendKeys(Keys.RETURN);
        actions.sendKeys("Retirement Property");
        actions.build().perform();
    }
    public void setPropertyType(String propertyType) throws Throwable {
        Actions actions = new Actions(driver);
        actions.moveToElement(propertyTypeField);
        actions.click();
        actions.sendKeys(propertyType);
        actions.sendKeys(Keys.RETURN);
        actions.build().perform();
    }
    public void setBedroomNumber(String bedroomNumber) throws Throwable {
        Actions actions = new Actions(driver);
        actions.moveToElement(numberOfBedrooms);
        actions.click();
        actions.sendKeys(bedroomNumber);
        actions.sendKeys(Keys.RETURN);
        actions.build().perform();
    }
    public void setCampaignName(String campaignName) throws Throwable {
        nameYourCampaign.sendKeys(campaignName);
    }
    public void submitCampaign() throws Throwable {
        submitCampaign.click();
    }
    public void tryStep2() throws Throwable {
        movetoStep2.click();
    }
    public void tryStep3() throws Throwable {
        movetoStep3.click();
    }
    public void tryStep4() throws Throwable {
        movetoStep4.click();
    }
    public void closeErrorMessage() throws Throwable {
        Alert alert=driver.switchTo().alert();
        System.out.println(alert.getText() + "\n");
        alert.accept();
    }
    public void clearPostcodeSelection() throws Throwable {
        clearPostcodes.click();
    }
    public void selectMK246() throws Throwable {
        Thread.sleep(1000);
        expandPostcodes.click();
        postcodeMK2.click();
        postcodeMK4.click();
        postcodeMK6.click();
        clickOffPostcodes.click();
    }

}