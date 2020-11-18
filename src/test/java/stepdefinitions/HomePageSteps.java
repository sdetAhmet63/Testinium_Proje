package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.Select;
import pages.HomePage;
import pages.MyAccount;
import pojos.Product;
import utilities.ConfigurationReader;
import utilities.Driver;
import utilities.WriteToTxt;

public class HomePageSteps {

    HomePage homePage = new HomePage();

    MyAccount myAccount = new MyAccount();

    Product product = new Product();

    String filePath = "ProductInfo.txt";

    @Given("kullanici trendyol arama kutusuna gider")
    public void kullanici_trendyol_arama_kutusuna_gider () {

        Driver.waitAndClick(homePage.dismissPopUp2,5);

    }
    @Given("kullanici arama kutusuna {string} girer")
    public void kullanici_arama_kutusuna_girer (String string){

        Driver.waitAndSendText(homePage.searchBox, ConfigurationReader.getProperty("trendyol_searh"),5);
        homePage.searchBox.clear();

    }
    @Given("kullanici urunlerden birisini rastgele secer")
    public void kullanici_urunlerden_birisini_rastgele_secer () {

        product.setProductName(Driver.selectARandomItemFromDropdown2(homePage.searchBox));

    }
    @Given("kullanici urun adi ve urun tutarini text dosyasina yazdirir")
    public void kullanici_urun_adi_ve_urun_tutarini_text_dosyasina_yazdirir () {

        Driver.waitAndClick(myAccount.firstRandomItem,5);
        product.setProductPrice(Driver.waitAndGetText(myAccount.itemPrice,5));
        WriteToTxt.saveDataInFile(filePath,product);
    }
    @Then("secilen urun sepete eklenir")
    public void secilen_urun_sepete_eklenir () {
        Driver.waitAndClick(myAccount.addToBasket,5);
    }

    @Given("kullanici urun sepetine gider")
    public void kullanici_urun_sepetine_gider () {

    }
    @Given("kullanici urunun  sepetteki fiyati ile sayfadaki fiyatini karsilastirir")
    public void kullanici_urunun_sepetteki_fiyati_ile_sayfadaki_fiyatini_karsilastirir () {

    }
    @Given("kullanici adet arttirarak urun adedidin {string} oldugunu dogrular")
    public void kullanici_adet_arttirarak_urun_adedidin_oldugunu_dogrular (String string){

    }
    @Given("kullanici urunu sepetten siler")
    public void kullanici_urunu_sepetten_siler () {

    }
    @Then("sepetin bos oldugu kontrol edilir")
    public void sepetin_bos_oldugu_kontrol_edilir () {

    }
}


