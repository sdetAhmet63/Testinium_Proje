package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {


        public LoginPage(){

            PageFactory.initElements(Driver.getDriver(), this);
        }

        @FindBy(id = "accountBtn")
        public WebElement loginButton;

        @FindBy(id = "login-email")
        public WebElement emailButton;

        @FindBy(id = "login-password-input")
        public WebElement passwordButton;

        @FindBy(xpath = "//*[@type='submit']")
        public WebElement logInSubmit;

        @FindBy (xpath = "//*[@class='dscrptn']")
        public WebElement sonucSayisi;

        @FindBy (xpath = "//*[@class='fancybox-item fancybox-close']")
        public WebElement dismissPopUp;






    }
