package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.HomePage;
import pages.LoginPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class LoginSteps {

    LoginPage login = new LoginPage();


    @Given("kullanici web sitesini ziyaret eder")
    public void kullanici_web_sitesini_ziyaret_eder() {
        Driver.getDriver().get(ConfigurationReader.getProperty("trendyol_link"));
    }
    @Given("kullanici web sayfasinin dogru olup olmadigini kontrol eder")
    public void kullanici_web_sayfasinin_dogru_olup_olmadigini_kontrol_eder() {

      Assert.assertTrue("PopUp message has been displayed",login.dismissPopUp.isDisplayed());
      Driver.waitAndClick(login.dismissPopUp,5);
      String currentTitle = Driver.getDriver().getTitle();

//      Assert.assertEquals("We are on the login page!",ConfigurationReader.getProperty("expectedTitle"),currentTitle);
    }


      @Given("kullanici trendyol login butonuna gider")
        public void kullanici_trendyol_login_butonuna_gider ()throws Exception {

          Driver.waitAndClick(login.loginButton,5);

        }
        @Given("kullanici email adresini ve sifresini girer")
        public void kullanici_email_adresini_ve_sifresini_girer () {

        Driver.waitAndSendText(login.emailButton,ConfigurationReader.getProperty("email"),5);
        Driver.waitAndSendText(login.passwordButton,ConfigurationReader.getProperty("password"),5);



        }
        @Then("kullanici giris islemini gerceklestirir")
        public void kullanici_giris_islemini_gerceklestirir () {

        Driver.waitAndClick(login.logInSubmit,5);

        }


    }

