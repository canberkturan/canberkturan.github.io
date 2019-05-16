---
author: canberkturan
layout: post
title: Modüler Çarpım Çemberi (Kodlama)

---

<b>Gereksinimler:</b><br>
<li><i>Python 3</i></li>
<li><i>PIL(pillow) Kitaplığı -> pip3 install pillow</i></li><br>
<p>Hazırsanız kodlamaya geçelim...</p>

{% highlight python %}
from PIL import Image, ImageDraw
import math
#Kitaplıkları içe aktarıyoruz...
{% endhighlight %}

<li>İlk önce boş bir resim nesnesi oluşturalım ve değişkenlerimize değer atayalım</li>
{% highlight python %}
x = 200 # nokta sayısı
k = 2 # çarpan değeri
size = 1080 # resim boyutu
pad = 20 # kenar boşluğu
img = Image.new("RGB", (size, size), "white")
{% endhighlight %}
<li>Ardından bir çember çizelim.</li>
{% highlight python %}
draw = ImageDraw.Draw(img) # resmin üzerine çizim yapabilmek için ImageDraw nesnesi oluşturduk.
draw.ellipse((pad,pad,size-pad,size-pad),outline=(0,0,0)) # çember çizdik.
{% endhighlight %}
<li>Noktaların konumlarını hesaplayalım.</li>
{% highlight python %} 
dotTable = [] # noktaları tutacak bir liste nesnesi oluşturduk.
r = size / 2 - pad # yarıçap
angle = (2 * math.pi) / x # ardışık 2 nokta arası açı(radyan)
    
for i in range(x): # her noktanın resimdeki hangi piksele karşılık geldiğini buluyoruz.
    dotX = r*math.cos(angle*i) + size/2 # x değeri
    dotY = r*math.sin(angle*i) + size/2 # y değeri
    dotTable.append((dotX,dotY)) # tabloya (x,y) değeri ekleniyor.
    
{% endhighlight %}
<li>Noktaların arasına çizgileri çizelim</li>
{% highlight python %}
for i in range(len(dotTable)):
    draw.line((*dotTable[i], *dotTable[(i*k)%x]), fill=(0,0,0))
{% endhighlight %}
<li>Resmi kaydedelim.</li>
{% highlight python %}
img.save("modularmultcircle.png")
{% endhighlight %}
<li>Ta daaa..</li>
<img src="/assets/modmultcircle.png"/>
<i>İlgilenenler için github'da nesneye dayalı özelleştirilmiş halini de paylaştım. <a href="https://github.com/canberkturan/PythonProjects/blob/master/ModularMultiplicationCircle.py">Buradan</a> ulaşabilirsiniz</i>
<a href="/2019/05/10/Mod%C3%BCler-%C3%87arp%C4%B1m-%C3%87emberi.html">Önceki Sayfa</a>
