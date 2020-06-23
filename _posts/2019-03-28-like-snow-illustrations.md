---
layout: post
title:  "Like Snow: Silent Book"
date:  28/03/2019
categories: project
post-header: 2019-03-28.jpg
info: "My first published book of illustrations!"
gallery:
  - 1.jpg
  - 2.jpg
  - 3.jpg
  - 4.jpg
  - 5.jpg
  - 6.jpg
  - 7.jpg
  - 8.jpg
---

<section class="text-eng">
It was four months ago. I met with Fabrizio Calzia, head of <a href="http://www.galataedizioni.it/">Galata</a>, a small publishing house in Genova. He kindly accepted to take a look at my illustrations and took a liking to my last series, <a href="https://www.leonieaonzo.com/project/2018/10/06/the-great-journey-illustrations.html">"The Great Journey"</a>. He asked me to present to him an enlarged version of the same project, and me being me I decided to start it all over (this time using digital paint only). <br/>
That was the beginning of a new adventure, which kept me busy for the last few months: an eighteen-pages silent book.
</section>

<section class="text-ita">
Tutto è iniziato quattro mesi fa. Ho incontrato Fabrizio Calzia, responsabile di <a href="http://www.galataedizioni.it/"> Galata Edizioni</a>, una piccola casa editrice genovese. Fabrizio ha gentilmente accettato di dare un'occhiata alle mie illustrazioni e ha preso in simpatia la mia ultima serie, <a href="https://www.leonieaonzo.com/project/2018/10/06/the-great-journey-illustrations.html">"The Great Journey"</a>. Mi ha chiesto di elaborare una versione ampliata dello stesso progetto, ma trattandosi di me ho deciso di ricominciarlo da zero (stavolta ricorrendo solo alla pittura digitale). <br/>
Così è iniziata una nuova avventura: diciotto illustrazioni per un libro senza parole, cui ho dedicato questi ultimi mesi.
</section>

<h2 class="text-ita">Di cosa si tratta</h2>
<h2 class="text-eng">Overview</h2>

<section class="text-eng">
During the short arctic summer the fox cubs chase each other and play, under the watchful eye of their parents. When the cold northern winds bring the first snow over the tundra, a great journey begins: "Like Snow" is the story of a small arctic fox and the first winter of its life, of a crossing in vast and silent lands, until the rise of a new spring.
</section>

<section class="text-ita">
Nella breve estate artica i cuccioli di volpe si rincorrono e giocano, sotto lo sguardo attento dei genitori. Quando la prima neve ammanta la tundra, portata dai freddi venti del nord, un grande viaggio ha inizio: "Come la Neve" è la storia di una piccola volpe artica e del primo inverno della sua vita, di una traversata in terre vaste e silenziose, fino al nuovo sorgere della primavera.
</section>

<h2 class="text-ita">Ecco alcune delle illustrazioni nel libro...</h2>
<h2 class="text-eng">Here are some of the illustrations inside the book...</h2>

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2019-03-28/{{ image }}');">
            <div class="caption">
              <h2> page {{ loopindex }}</h2>
            </div>
          </div>
        </a>
  {% endfor %}
</div>

{% for image in page.gallery %}
{% assign loopindex = forloop.index %}
  <div id="id{{ loopindex }}" class="popup" >
    <a href="#" >
      <img src="{{ site.baseurl }}/img/closebtn.png" class="closebtn" />
    </a>
    <div class="gallery" >
      <img src="{{ site.baseurl }}/img/posts/2019-03-28/{{ image }}" class="image" />
    </div>
    <div class="image-info-post">
      <h2> page {{ loopindex }} </h2>
        {% if loopindex == 1 %}
          <a href="#" >
        {% else %}
          <a href="#id{{ loopindex | minus: 1 }}" >
        {% endif %}
        <img src="{{ site.baseurl }}/img/backbtn.png" class="backbtn" >
      </a>
      <a href="#id{{ loopindex | plus: 1 }}" >
        <img src="{{ site.baseurl }}/img/nextbtn.png" class="nextbtn" />
      </a>
    </div>
  </div>
{% endfor %}

<h2 class="text-ita">Il cuore del progetto</h2>
<h2 class="text-eng">The project's core</h2>

<section class="text-eng">
A nose, two bright eyes: they hop as if they float in the perfect white. In winter, the fur of the arctic fox becomes white as snow: this characteristic was the first to hit me. Their fur, the warmest in the whole animal kingdom, adapts to the surrounding world. So when, in summer, the tundra is inflamed with colors, the animals that inhabit the Arctic areas abandon their thick white fur, just to grow it back a few months later.


In the vastness of these extreme and still wild lands, the rhythm of the seasons resonates strongly. And precisely the cyclical nature of life is what "Like Snow" is about. My wish is that this little story of growth will encourage, especially in the little ones, the desire to listen to the wordless voice of nature. Finally, "Like Snow" is a tribute to the great white of the Arctic, to the hard struggle for survival, to the cruelty and the poignant beauty of the world of which we are part.
</section>

<section class="text-ita">
Un naso, due occhi vivaci: si muovono a balzelli, e sembrano fluttuare nel bianco perfetto. Ha il candore della neve il manto che caratterizza le volpi artiche durante l’inverno: questa loro caratteristica è stata la prima a colpirmi. La loro pelliccia, la più calda in tutto il regno animale, si adatta al mondo circostante. Così quando, in estate, la tundra s’infiamma di colori, gli animali che abitano le zone artiche abbandonano il loro folto pelo bianco, per poi tornare a ricoprirsene pochi mesi più tardi.


Nella vastità di queste terre estreme, ancora selvagge, risuona con forza il ritmo delle stagioni. E proprio il passaggio del tempo e la ciclicità della vita sono ciò che "Come la Neve" racconta. Il mio augurio è che questa piccola storia di crescita sappia incoraggiare, soprattutto nei più piccoli, il desiderio di ascoltare la voce senza parole della natura. È, infine, un omaggio al grande bianco dell’artico, alla dura lotta per la sopravvivenza, alla crudeltà e alla bellezza struggente del mondo di cui siamo parte.
</section>

<h2 class="text-ita">La pubblicazione</h2>
<h2 class="text-eng">The published work</h2>

<section class="text-eng">
The finished book will soon be available in Genova's book shops and <a href="https://www.amazon.it/dp/8895369211">on Amazon.</a>
</section>

<section class="text-ita">
Il libro sarà presto disponibile nelle librerie a Genova e <a href="https://www.amazon.it/dp/8895369211">su Amazon.</a>
</section>

<div class="video">
  <iframe src="https://www.youtube.com/embed/K9i3OG59Q-s" frameborder="0" allowfullscreen></iframe>
</div>
