@trendyollogin
Feature: Trendyol Search

  Scenario: TC01_kullanici giris yapar
    Given kullanici web sitesini ziyaret eder
    And kullanici web sayfasinin dogru olup olmadigini kontrol eder
    And kullanici trendyol login butonuna gider
    And kullanici email adresini ve sifresini girer
    Then kullanici giris islemini gerceklestirir
  @trendyolarama
  Scenario: TC02_kullanici arama yapar
    Given kullanici trendyol arama kutusuna gider
    And kullanici arama kutusuna "bilgisayar" girer
    And kullanici urunlerden birisini rastgele secer
    And kullanici urun adi ve urun tutarini text dosyasina yazdirir
    Then secilen urun sepete eklenir
  @trendyolsepet
  Scenario: TC03_kullanici sepete attigi urunun sepetteki fiyati ile sayfadaki fiyatini karsilastirir
    Given kullanici urun sepetine gider
    And kullanici urunun  sepetteki fiyati ile sayfadaki fiyatini karsilastirir
    And kullanici adet arttirarak urun adedidin "2" oldugunu dogrular
    And kullanici urunu sepetten siler
    Then sepetin bos oldugu kontrol edilir