---
author: canberkturan
layout: post
title: Modüler Çarpım Çemberi
permalink: /moduler-carpim-cemberi
---

Merhaba, bugün sizlere youtube'da [Mathologer][mathologer-link] kanalında izleyip öğrendiğim matematik harikası şekillerden bahsedeceğim. Ardından da birlikte python kodu yazarak bu şekillerin nasıl oluşturulduğunu öğreneceğiz. Eğer hazırsanız başlayalım! 
- İlk önce iki tam sayı seçiyoruz. Ben bunlara x ve k diyeceğim. x nokta sayısına, k ise çarpan değerine karşılık gelecek. Örneğin: x=100 ve k=2
- Sonra bir çember çizip bu çemberin kenarlarına eşit aralıklarla, belirlediğimiz x kadar nokta koyuyoruz.

- Sonra bu noktaları 0'dan başlayarak numaralandırıyoruz. Bu değerlere de i diyelim.
<img src="/assets/sscrop.png" style="width: 360px; height: auto"/>
- Ardından her bir nokta için o noktaya verdiğimiz numara(i) ile k değerini çarpıp çıkan sonucun x'e göre modunu alıyoruz. y=(i\*k)%x
- Her nokta için nokta ile elde ettiğimiz y değerine karşılık gelen noktayı bir çizgi ile birbirine bağlıyoruz. 
- Ve ortaya bu muhteşem sonuç çıkıyor...
<img src="/assets/sscrop2.png" style="width: 360px; height: auto"/>

<p>Şimdi sıra kodlama tarafında</p><a href="/moduler-carpim-cemberi-2">Sonraki Sayfa</a>

[mathologer-link]: https://youtube.com/mathologer
