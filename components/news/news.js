// Haberleri üretmek için aşağıdaki newsData objesini kullanacağız. Önce inceleyin.
import { newsData } from "./../../resources.js";

const sampleNewsItem = {
  baslik: "örnek başlık",
  tarih: "11 Kasım 2026",
  ilkParagraf: "Örnek paragraf 1",
  ikinciParagraf: "Örnek paragraf 2",
  ucuncuParagraf: "Örnek paragraf 3",
};

/*
Adım 1: NewsBuilder component fonksiyonu yazmak
Yazacağınız NewsBuilder fonksiyonu, yukarıdaki sampleNewsItem yapısındaki bir objeyi parametre olarak almalı ve alttaki yapıya sahip bir içerik oluşturup return etmeli:

<div class="article">
  <h2>{haber başlığı}</h2>
  <p class="date">{haber tarihi}</p>

  {üç ayrı paragraf elementi}

  <button class="expandButton">+</button>
</div>


Adım 2:
Oluşturulan expandButton classına sahip elemana tıklandığında, içinde bulunduğu article classına sahip elemanda isOpen classı yoksa eklemeli, varsa çıkarmalı.


Adım 3:
newsData, sampleNewsItem yapısına benzeyen objelerden oluşan bir array ve sayfada göstermek istediğimiz haberleri içeriyor.
newsData'nın her bir elemanını NewsBuilder ile kullanmak için bir döngü yazın. Döngü her çalıştığında:
- o anki eleman ve NewsBuilder kullanılarak içerik hazırlanmalı,
- hazırlanan içerik, index.html'de bulunan articleList classına sahip elemanın içine yerleştirilmeli.


Not 1: İlk 2 adım NewsBuilder içinde yapılmalı.
Not 2: NewsBuilder fonksiyonunda oluşturduklarınızı return etmeyi unutmayın.
*/

function NewsBuilder(sampleNewsItem){
  const div2 = document.createElement("div");
  div2.classList.add("article");
  
  const h2 = document.createElement("h2");
  h2.textContent = sampleNewsItem.baslik;

  const p = document.createElement("p");
  p.classList.add("date");
  p.textContent = sampleNewsItem.tarih;

  const p1 = document.createElement("p"); p1.textContent = sampleNewsItem.ilkParagraf;
  const p2 = document.createElement("p"); p2.textContent = sampleNewsItem.ikinciParagraf;
  const p3 = document.createElement("p"); p3.textContent = sampleNewsItem.ucuncuParagraf;

  const button = document.createElement("button");
  button.classList.add("expandButton");
  button.textContent = "+";

  div2.append(h2, p, p1, p2, p3, button);

  button.addEventListener("click", () => {
  div2.classList.toggle("isOpen");
});
  return div2;
}
const articleList = document.querySelector(".articleList");
newsData.forEach(haber => {
  const haberKarti = NewsBuilder(haber);
  articleList.appendChild(haberKarti);
});

