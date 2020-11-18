package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class HomePage {

    public HomePage (){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(className = "search-box")
    public WebElement searchBox;

    @FindBy (xpath = "//*[@title='Kapat']")
    public WebElement dismissPopUp2;

    @FindBys({@FindBy(xpath = "//*[text()='Bilgisayar']")})
    public List<WebElement> allItemsOfDropdown;



}
