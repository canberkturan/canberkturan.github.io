---
author: canberkturan
layout: post
title: Yapay Sinir Ağları
permalink: /yapay-sinir-aglari
---
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    extensions: [
      "MathMenu.js",
      "MathZoom.js",
      "AssistiveMML.js",
      "a11y/accessibility-menu.js"
    ],
    jax: ["input/TeX", "output/CommonHTML"],
    TeX: {
      extensions: [
        "AMSmath.js",
        "AMSsymbols.js",
        "noErrors.js",
        "noUndefined.js",
      ]
    }
  });
</script>

<h2>Yapay Sinir Ağları(ANN veya YSA) Nedir?</h2>
Yapay sinir ağları, beyinlerdeki sinir ağlarından esinlenilerek ortaya atılan bir yapay zeka modelidir.
Nöron veya perceptron adı verilen temel birimlerden oluşur.
<br><img src="/assets/neural_network.png" style="width: 360px; height: auto"/>
<h4><b>Nöron(Perceptron) Nedir?</b></h4>
Nöronlar, çoklu girişlere, toplam ve aktivasyon fonksiyonuna ve çıkışa sahip olan birimledir.
Girdileri alır, ağırlıkları ile çarpar, sonuçları toplar, bir aktivasyon fonksiyonuna gönderir ve çıktı elde edilir.
<br><img src="/assets/perceptron.jpg" style="width: 360px; height: auto"/>
<br>$$output = f(\sum_{i=1}^N (w_i\cdot x_i+b_i))$$
<h4><b>Yapay Sinir Ağları Nasıl Çalışır?</b></h4>
Girdiler alındıktan sonra her biri ilk katmandaki tüm nöronlara, her bir bağlantı için ayrı olacak şekilde ağırlıkları ile çarpılıp varsa bias değerleri eklenerek gönderilir. Ardından ilk katmandaki nöronlar kendilerine gelen değerleri toplar ve aktivasyon fonksiyonuna sokar. Çıktıyı bir sonraki katmandaki tüm nöronlara gönderir. Son katmandaki nöronlar aktivasyon fonksiyonundan gelen değeri çıktı olarak verir.
İstenilen çıktı ile aradaki fark hesaplanır bu farka göre ağırlık değerleri ve bias güncellenir. Böylelikle yapay sinir ağı problemi öğrenmiş olur.
<h4><b>Örnek Kod</b></h4>
{% highlight python %}
from sklearn.datasets import fetch_mldata
mnist = fetch_mldata('MNIST original')
x, y = mnist["data"], mnist["target"]
x = x/255
y_new = np.zeros(y.shape)
y_new[np.where(y == 0.0)[0]] = 1
y = y_new
m = 60000
m_test = x.shape[0] - m
x_train, x_test = x[:m].T, x[m:].T
y_train, y_test = y[:m].reshape(1,m), y[m:].reshape(1,m_test)
np.random.seed(138)
shuffle_index = np.random.permutation(m)
x_train, y_train = x_train[:,shuffle_index], y_train[:,shuffle_index]
X = x_train
Y = y_train
n_x = X.shape[0]
n_h = 64
learning_rate = 1

W1 = np.random.randn(n_h, n_x)
b1 = np.zeros((n_h, 1))
W2 = np.random.randn(1, n_h)
b2 = np.zeros((1, 1))

for i in range(20):
    Z1 = np.matmul(W1, X) + b1
    A1 = sigmoid(Z1)
    Z2 = np.matmul(W2, A1) + b2
    A2 = sigmoid(Z2)
    cost = compute_loss(Y, A2)
    dZ2 = A2-Y
    dW2 = (1./m) * np.matmul(dZ2, A1.T)
    db2 = (1./m) * np.sum(dZ2, axis=1, keepdims=True)
    dA1 = np.matmul(W2.T, dZ2)
    dZ1 = dA1 * sigmoid(Z1) * (1 - sigmoid(Z1))
    dW1 = (1./m) * np.matmul(dZ1, X.T)
    db1 = (1./m) * np.sum(dZ1, axis=1, keepdims=True)
    W2 = W2 - learning_rate * dW2
    b2 = b2 - learning_rate * db2
    W1 = W1 - learning_rate * dW1
    b1 = b1 - learning_rate * db1
    if i % 5 == 0:
        print("Epoch", i, "cost: ", cost)

print("Final cost:", cost)
{% endhighlight %}
