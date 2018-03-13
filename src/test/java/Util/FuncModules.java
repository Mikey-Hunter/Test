package Util;

import org.openqa.selenium.By;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class FuncModules {
    public WebDriver driver;

    public FuncModules(WebDriver driver){
        this.driver=driver;
    }

   public void _WaitForLoad(By element) {

    WebDriverWait wait = new WebDriverWait(driver, 60);
    wait.ignoring(StaleElementReferenceException.class).until(ExpectedConditions.visibilityOfElementLocated((By) element));

}


}
