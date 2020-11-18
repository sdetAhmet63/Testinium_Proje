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
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_web_sitesini_ziyaret_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici web sayfasinin dogru olup olmadigini kontrol eder",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_web_sayfasinin_dogru_olup_olmadigini_kontrol_eder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici trendyol login butonuna gider",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_trendyol_login_butonuna_gider()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@class\u003d\u0027homepage-popup-img\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VAMO0RC\u0027, ip: \u0027192.168.1.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59334}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 58b050a74675f717fd36acb64e4faa4f\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027homepage-popup-img\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat stepdefinitions.TrendyolStepDefinitions.kullanici_trendyol_login_butonuna_gider(TrendyolStepDefinitions.java:36)\r\n\tat ✽.kullanici trendyol login butonuna gider(file:///C:/Users/HP/IdeaProjects/Testinium_Project/src/test/resources/features/trendyol.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici email adresini ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_email_adresini_ve_sifresini_girer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
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
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_trendyol_arama_kutusuna_gider()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput class\u003d\"search-box\" type\u003d\"text\" tabindex\u003d\"1\" placeholder\u003d\"Aradığınız ürün, kategori veya markayı yazınız\" maxlength\u003d\"50\" autocomplete\u003d\"off\" value\u003d\"\"\u003e is not clickable at point (674, 62). Other element would receive the click: \u003cdiv class\u003d\"fancybox-overlay fancybox-overlay-fixed\" data-dr-hide\u003d\"\" style\u003d\"width: auto; height: auto; display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d86.0.4240.193)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-VAMO0RC\u0027, ip: \u0027192.168.1.109\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.7\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59334}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 58b050a74675f717fd36acb64e4faa4f\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat stepdefinitions.TrendyolStepDefinitions.kullanici_trendyol_arama_kutusuna_gider(TrendyolStepDefinitions.java:56)\r\n\tat ✽.kullanici trendyol arama kutusuna gider(file:///C:/Users/HP/IdeaProjects/Testinium_Project/src/test/resources/features/trendyol.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "kullanici arama kutusuna \"bilgisayar\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_arama_kutusuna_girer(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici urunlerden birisini rastgele secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_urunlerden_birisini_rastgele_secer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "kullanici urun adi ve urun tutarini text dosyasina yazdirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_urun_adi_ve_urun_tutarini_text_dosyasina_yazdirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "secilen urun sepete eklenir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.secilen_urun_sepete_eklenir()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
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
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_urun_sepetine_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici urunun  sepetteki fiyati ile sayfadaki fiyatini karsilastirir",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_urunun_sepetteki_fiyati_ile_sayfadaki_fiyatini_karsilastirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici adet arttirarak urun adedidin \"2\" oldugunu dogrular",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_adet_arttirarak_urun_adedidin_oldugunu_dogrular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici urunu sepetten siler",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.kullanici_urunu_sepetten_siler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sepetin bos oldugu kontrol edilir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.TrendyolStepDefinitions.sepetin_bos_oldugu_kontrol_edilir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});