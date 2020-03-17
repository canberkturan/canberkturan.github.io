---
author: canberkturan
layout: post
title: Modüler Çarpım Çemberi (Kodlama)
permalink: /moduler-carpim-cemberi-2
---
**Gereksinimler:**<br>
- _Python 3_
- _PIL(pillow) Kitaplığı -> pip3 install pillow_
Hazırsanız kodlamaya geçelim...

{% highlight python %}
from PIL import Image, ImageDraw
import math
#Kitaplıkları içe aktarıyoruz...
{% endhighlight %}

- İlk önce boş bir resim nesnesi oluşturalım ve değişkenlerimize değer atayalım
{% highlight python %}
x = 200 # nokta sayısı
k = 2 # çarpan değeri
size = 1080 # resim boyutu
pad = 20 # kenar boşluğu
img = Image.new("RGB", (size, size), "white")
{% endhighlight %}
- Ardından bir çember çizelim.
{% highlight python %}
draw = ImageDraw.Draw(img) # resmin üzerine çizim yapabilmek için ImageDraw nesnesi oluşturduk.
draw.ellipse((pad,pad,size-pad,size-pad),outline=(0,0,0)) # çember çizdik.
{% endhighlight %}
- Noktaların konumlarını hesaplayalım.
{% highlight python %} 
dotTable = [] # noktaları tutacak bir liste nesnesi oluşturduk.
r = size / 2 - pad # yarıçap
angle = (2 * math.pi) / x # ardışık 2 nokta arası açı(radyan)
    
for i in range(x): # her noktanın resimdeki hangi piksele karşılık geldiğini buluyoruz.
    dotX = r*math.cos(angle*i) + size/2 # x değeri
    dotY = r*math.sin(angle*i) + size/2 # y değeri
    dotTable.append((dotX,dotY)) # tabloya (x,y) değeri ekleniyor.
    
{% endhighlight %}
- Noktaların arasına çizgileri çizelim
{% highlight python %}
for i in range(len(dotTable)):
    draw.line((*dotTable[i], *dotTable[(i*k)%x]), fill=(0,0,0))
{% endhighlight %}
- Resmi kaydedelim.
{% highlight python %}
img.save("modularmultcircle.png")
{% endhighlight %}
- Ta daaa..
<img src="/assets/modmultcircle.png"/>
_İlgilenenler için github'da nesneye dayalı özelleştirilmiş halini de paylaştım. <a href="https://github.com/canberkturan/PythonProjects/blob/master/ModularMultiplicationCircle.py">Buradan</a> ulaşabilirsiniz_
<a href="/moduler-carpim-cemberi">Önceki Sayfa</a>
