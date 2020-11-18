$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/trendyol.feature");
formatter.feature({
  "name": "Trendyol Search",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@trendyollogin"
    }
  ]
});
formatter.scenario({
  "name": "TC01_kullanici giris yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@trendyollogin"
    },
    {
      "name": "@td"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici web sitesini ziyaret eder",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.LoginSteps.kullanici_web_sitesini_ziyaret_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici web sayfasinin dogru olup olmadigini kontrol eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginSteps.kullanici_web_sayfasinin_dogru_olup_olmadigini_kontrol_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici trendyol login butonuna gider",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginSteps.kullanici_trendyol_login_butonuna_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici email adresini ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.LoginSteps.kullanici_email_adresini_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.LoginSteps.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_kullanici arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@trendyollogin"
    },
    {
      "name": "@trendyolarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici trendyol arama kutusuna gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_trendyol_arama_kutusuna_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici arama kutusuna \"bilgisayar\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_arama_kutusuna_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici urunlerden birisini rastgele secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_urunlerden_birisini_rastgele_secer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici urun adi ve urun tutarini text dosyasina yazdirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_urun_adi_ve_urun_tutarini_text_dosyasina_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "secilen urun sepete eklenir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.secilen_urun_sepete_eklenir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_kullanici sepete attigi urunun sepetteki fiyati ile sayfadaki fiyatini karsilastirir",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@trendyollogin"
    },
    {
      "name": "@trendyolsepet"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici urun sepetine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_urun_sepetine_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici urunun  sepetteki fiyati ile sayfadaki fiyatini karsilastirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_urunun_sepetteki_fiyati_ile_sayfadaki_fiyatini_karsilastirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici adet arttirarak urun adedidin \"2\" oldugunu dogrular",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_adet_arttirarak_urun_adedidin_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici urunu sepetten siler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.kullanici_urunu_sepetten_siler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sepetin bos oldugu kontrol edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.HomePageSteps.sepetin_bos_oldugu_kontrol_edilir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});