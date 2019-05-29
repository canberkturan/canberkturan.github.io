---
author: canberkturan
layout: post
title: Modüler Çarpım Çemberi
permalink: /moduler-carpim-cemberi
---

<p>Merhaba, bugün sizlere youtube'da mathologger kanalında izleyip öğrendiğim matematik harikası şekillerden bahsedeceğim. Ardından da birlikte python kodu yazarak bu şekillerin nasıl oluşturulduğunu öğreneceğiz. Eğer hazırsanız başlayalım!</p>
 
<li>İlk önce iki tam sayı seçiyoruz. Ben bunlara x ve k diyeceğim. x nokta sayısına, k ise çarpan değerine karşılık gelecek. Örneğin: x=100 ve k=2</li>
<li>Sonra bir çember çizip bu çemberin kenarlarına eşit aralıklarla, belirlediğimiz x kadar nokta koyuyoruz.</li>

<li>Sonra bu noktaları 0'dan başlayarak numaralandırıyoruz. Bu değerlere de i diyelim</li>
<img src="/assets/sscrop.png" style="width: 360px; height:360px"/>
<li>Ardından her bir nokta için o noktaya verdiğimiz numara(i) ile k değerini çarpıp çıkan sonucun x'e göre modunu alıyoruz. y=(i*k)%x
<li>Her nokta için nokta ile elde ettiğimiz y değerine karşılık gelen noktayı bir çizgi ile birbirine bağlıyoruz. 
<li>Ve ortaya bu muhteşem sonuç çıkıyor...</li>
<img src="/assets/sscrop2.png" style="width: 360px; height:360px"/>

<p>Şimdi sıra kodlama tarafında</p><a href="/moduler-carpim-cemberi">Sonraki Sayfa</a>
