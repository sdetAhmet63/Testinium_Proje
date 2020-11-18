package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.TrendyolPage;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.List;
import java.util.Random;

public class TrendyolStepDefinitions {

    TrendyolPage trendyolPage = new TrendyolPage();

    @Given("kullanici web sitesini ziyaret eder")
    public void kullanici_web_sitesini_ziyaret_eder() {
        Driver.getDriver().get(ConfigurationReader.getProperty("trendyol_link"));
    }
    @Given("kullanici web sayfasinin dogru olup olmadigini kontrol eder")
    public void kullanici_web_sayfasinin_dogru_olup_olmadigini_kontrol_eder() {

    }


      @Given("kullanici trendyol login butonuna gider")
        public void kullanici_trendyol_login_butonuna_gider ()throws Exception {
        Driver.getDriver().switchTo().frame(0);
         // System.out.println(trendyolPage.popUpMessage.getText());
        //Driver.getDriver().switchTo().alert().dismiss();
         // Driver.getDriver().findElement(By.xpath("/html/body/div[7]/div/div/div/div/div/div/div[2]/a/span[2]")).click();
       Thread.sleep(3000);
       String text =  trendyolPage.popUpMessage.getText();
          System.out.println(text);


        }
        @Given("kullanici email adresini ve sifresini girer")
        public void kullanici_email_adresini_ve_sifresini_girer () {
        trendyolPage.emailButton.sendKeys(ConfigurationReader.getProperty("email"));
        trendyolPage.passwordButton.sendKeys(ConfigurationReader.getProperty("password"));


        }
        @Then("kullanici giris islemini gerceklestirir")
        public void kullanici_giris_islemini_gerceklestirir () {
        trendyolPage.logInSubmit.submit();

        }
        @Given("kullanici trendyol arama kutusuna gider")
        public void kullanici_trendyol_arama_kutusuna_gider () {
        Driver.getDriver().switchTo().frame(0);
        trendyolPage.searchBox.click();

        }
        @Given("kullanici arama kutusuna {string} girer")
        public void kullanici_arama_kutusuna_girer (String string){
        trendyolPage.searchBox.sendKeys(ConfigurationReader.getProperty("trendyol_searh"));

        }
        @Given("kullanici urunlerden birisini rastgele secer")
        public void kullanici_urunlerden_birisini_rastgele_secer () {
            Random random = new Random();
            int idx = random.nextInt(9215)+1;
            List<WebElement> urunListesi = trendyolPage.searchBox.findElements(By.xpath("//*[@class='search-box']"));
            urunListesi.get(idx).click();

        }
        @Given("kullanici urun adi ve urun tutarini text dosyasina yazdirir")
        public void kullanici_urun_adi_ve_urun_tutarini_text_dosyasina_yazdirir () {

        String urununIsmi = trendyolPage.searchBox.findElement(By.xpath("//*[@class='suggestion-result-title']")).getText();
        String urunTutar = trendyolPage.searchBox.findElement(By.xpath("//*[@class='prc-cntnr']")).getText();

        }
        @Then("secilen urun sepete eklenir")
        public void secilen_urun_sepete_eklenir () {

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

