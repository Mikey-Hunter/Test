package Pages;



import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogInPage {
    WebDriver driver;

    @FindBy(xpath = "//button[@type=\"submit\"]") private WebElement logInButton;
    @FindBy(xpath = "//*[@id=\"email\"]") private WebElement logInEmail;
    @FindBy(xpath = "//*[@id=\"password\"]") private WebElement logInPassword;
    @FindBy(xpath = "//div[@class=\"text-center\"]/p/a") private WebElement forgotPassword;
    @FindBy(xpath = "//button[@type=\"submit\"]") private WebElement ResetPassword;
    @FindBy(xpath = "//div[@class=\"logo mr-auto\"]/a") private WebElement tweaLogo;
    @FindBy(xpath = "//*[@id=\"navbarDropdownMenuLink\"]") private WebElement usermenu;
    @FindBy(xpath = "//a[@class=\"dropdown-item\"]") private WebElement logOut;

    public LogInPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    public void testStart() throws Throwable {
        driver.get("https://twea.demo.ominor.com/user/login");
        driver.manage().window().maximize();
    }
    public void clickLogIn() throws Throwable {
        logInButton.click();
    }
    public void enterEmail(String email) throws Throwable {
        logInEmail.sendKeys(email);
    }
    public void refreshPage() throws Throwable {
       driver.navigate().refresh();
       Thread.sleep(200);
    }
    public void enterPassword(String password) throws Throwable {
        logInPassword.sendKeys(password);
    }
    public void resetPassword() throws Throwable {
        forgotPassword.click();
    }
    public void sendResetPassword() throws Throwable {
        ResetPassword.click();
    }
    public void resetEmail(String email) throws Throwable {
        logInEmail.sendKeys(email);
    }
    public void returnToLogIn() throws Throwable {
        tweaLogo.click();
    }
    public void verifyLogInPage() throws Throwable {
        String title = driver.getTitle();
        if(title.endsWith("TwentyEA | User - Login"))
            System.out.println("Page Title Matched");
        else
            System.out.println("Page Title Matching Failed");
    }
}
