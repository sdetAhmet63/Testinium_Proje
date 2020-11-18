package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class MyAccount {
    public MyAccount(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "//*[@class='nav-span']")
    public WebElement myBasket;

    @FindBy(xpath = "//*[@class='p-card-img']")
    public WebElement firstRandomItem;

    @FindBy(xpath = "//*[text()='Sepete Ekle']")
    public WebElement addToBasket;

    @FindBy(xpath = "//*[@class='prc-slg']")
    public WebElement itemPrice;
}
