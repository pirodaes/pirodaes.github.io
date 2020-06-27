---
layout: post
title:  "Feed Me: our first game!"
date:  30/04/2018
categories: project
post-header: 2018-04-30.jpg
info: "Post mortem of a horror / pet simulator videogame created during the 41st Ludum Dare"
type: gamedev
facebook-img: "posts/2018-04-30-05.png"
---

<section class="text-eng">
The <a href="https://ldjam.com/">Ludum Dare</a> is an online competition, a jam consisting in creating a videogame in 48 hours (for one-man-teams) or 72 hours (for bigger teams). It happens every four months, and this 41st edition was the first one I joined.
</section>

<section class="text-ita">
Il <a href="https://ldjam.com/">Ludum Dare</a> è una competizione online, una jam che consiste nel creare un videogioco in 48 ore (per i singoli) o 72 ore (per i gruppi). Ricorre ogni quattro mesi, e questa quarantunesima edizione è stata la prima cui ho partecipato.
</section>

<section class="text-eng">
The first one we joined, actually. There were two of us, in fact: my brother in arms was Davide Cortellucci, whom I've been collaborating with on a bigger game for some time.
<br/><br/>
And that's how it started, the first Ludum Dare under the name Flaming Moka (that's how we called our duo, more or less temporarily).
</section>

<section class="text-ita">
Cui abbiamo partecipato, in realtà. Eravamo due, infatti: mi faceva compagnia Davide Cortellucci, con cui sto sviluppando ormai da tempo un gioco più ampio.
<br/><br/>
Ed ecco, così, l'inizio del primo Ludum Dare sotto il nome di Flaming Moka (così è stato battezzato questo duo, più o meno provvisoriamente).
</section>

<h2 class="text-ita">Il Tema</h2>
<h2 class="text-eng">The Theme</h2>

<section class="text-eng">
"Combine two incompatible genres": this was the 41st LD's theme. From a racing-fps in space, where firing with a gun is the only way to move, to a rhythm horror on the notes of a music box, to a not well defined idle-action adventure, we gradually discarded unpromising ideas. We ended up with two options: a management-racing-platform, in which the player has to build different types of platforms to avoid the protagonist from falling; vs a Tamagotchi-ish pet simulator with a horror developement.
<br/><br/>
Unable to evaluate which of the two was the best compromise between novelty and ease of developement, we chose the horror-pet idea: it was easier to downsize, in case time ran out.
</section>

<section class="text-ita">
"Conciliare due generi incompatibili": questo è stato il tema del quarantunesimo LD. Dal racing-fps ambientato nello spazio, in cui i colpi di arma da fuoco sono l'unico modo per spostarsi, ad un rhythm game horror sulle note di un carillon, per arrivare ad un idle-action adventure non troppo specificato, abbiamo man mano scartato le idee poco convincenti. Alla fine siamo rimasti con due opzioni: un racing-platform manageriale, in cui bisogna costruire o comprare vari tipi di piattaforme per permettere al personaggio di non cadere nel vuoto, vs un pet simulator in stile Tamagotchi con derive horror.
<br/><br/>
Senza saper stimare quale possibilità fosse il miglior compromesso tra originalità e facilità di realizzazione, abbiamo scelto la via dell'horror-pet in quanto più facile da ridimensionare in caso di emergenza.
</section>

<h2 class="text-ita">Evolvendo l'Idea</h2>
<h2 class="text-eng">Bringing the Idea Forward</h2>

<section class="text-eng">
We soon encountered the first obstacle our choice laid: balancing the <a href="https://en.wikipedia.org/wiki/Nintendogs">Nintendogs</a>-like mechanics and the horror narrative. After half a day spent thoroughly designing a scientific setting, we suddenly came to our senses (eating helps). We needed a narrative contest in which our alien egg would not need that many explanations. Just like in <a href="https://en.wikipedia.org/wiki/Doki_Doki_Literature_Club!">Doki Doki: Literature Club</a>, we needed to convince the player of the game's innocence, before we could pull a plot twist. And so the protagonist of our game became a child.
</section>

<section class="text-ita">
Abbiamo ben presto incontrato il primo ostacolo derivante dalla nostra scelta: bilanciare in giusta misura le meccaniche da <a href="https://en.wikipedia.org/wiki/Nintendogs">Nintendogs</a> e la narrazione horror. Dopo mezza giornata sprecata ad immaginare nel dettaglio un'ambientazione scientifica, siamo improvvisamente rinsaviti (mangiare aiuta). Ci serviva un contesto narrativo in cui un uovo alieno non avesse bisogno di troppe giustificazioni. Come in <a href="https://en.wikipedia.org/wiki/Doki_Doki_Literature_Club!">Doki Doki: Literature Club</a>, prima di poter creare un colpo di scena era necessario convincere dell'innocenza del gioco. Ed ecco così il nostro nuovo protagonista: un bambino.
</section>

<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-04-30-03.jpg" />

<h2>Rush: start!</h2>

<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-04-30-02.jpg" />

<section class="text-eng">
The first day ended with discouragement: vague game design, sound design and graphics not progressing, even getting the UI right seemed like an invincible obstacle (even if, actually, in our experience UIs are always been one of the toughest obstacles). The next day, finally, our work got off to a good start. But each software malfunctioning, each bug, each doubt about the concept made us loose hope to finish in time (it's inevitable to have all your trusted tools break in the time of need).


The third day the assets had multiplied (all thanks to the speedpainting practice) and SFX were starting to appear. Nonetheless, we still had to implement everything, and, unfortunately, it was monday. Relying too much on Davide for programming is what prevented me from contributing enough to the game, while he was attending university. In every indie team it's of great importance that all members, even artists, have a rough idea of how code works. Expecially during a jam, in which the greatest work usually is programming. Had I known how to insert the assets on my own, we would have ended up with a much more complete game. Instead, during our rush to 4:30 AM, we didn't make it time to add a lot of already completed material.


And there it was, our game, exposed to the public without any playtesting. Too scared at the thought of some game-breaking bug, we abandoned it as it was and went to sleep.
</section>

<section class="text-ita">
La prima giornata è terminata nello sconforto: game design vago, grafica e sound design fermi, problemi già solo nella creazione dell'interfaccia (anche se in effetti nel nostro caso le interfacce si sono sempre dimostrate uno degli ostacoli peggiori). Il giorno dopo il lavoro è finalmente partito, anche se per ogni malfunzionamento dei software, per ogni blocco nel codice, per ogni incertezza sul concept tornavamo a disperare (è inevitabile che tutti i fidati strumenti si rompano proprio nel momento del bisogno).


Il terzo giorno gli asset si erano moltiplicati (devo ringraziare l'esercizio degli speedpainting!) e già iniziavano a prendere forma i SFX. Tuttavia, restava da implementare tutto e, sfortunatamente, era un lunedì. Dipendere così tanto da Davide per la gestione del codice mi ha impedito di portare avanti il lavoro mentre lui era a lezione. In ogni team indipendente è fondamentale che tutti abbiano un'infarinatura di programmazione, anche gli artisti. Soprattutto in una jam, in cui il peso maggiore grava sulla programmazione. Se avessi saputo inserire gli asset in modo indipendente, avremmo avuto un risultato finale nettamente più completo. Invece, nella corsa durata fino alle 4:30 AM, non siamo riusciti ad inserire buona parte del materiale già pronto.


Alla fine ecco il nostro gioco, esposto al pubblico prima di qualsiasi playtesting. Troppo spaventati dall'idea di incontrare qualche game-breaking bug, l'abbiamo abbandonato al suo destino e siamo andati a dormire.
</section>


<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-04-30-04.gif" />

<h2>Feed Me!</h2>

<section class="text-eng">
The game doesn't break! Some production errors aside, we verified, incredulous, that it was possible to play it from start to end without it crashing. Even the parameters we decided without calibrating them didn't completely sabotage the gameplay.


The first concept included different evolutions for the monster, other characters, naming the monster and multiple endings. All things we had to give up to because of time. We tried our chance, giving the player an illusory freedom, which we didn't manage to actually offer. And it worked! Only a few players, for example, noticed that a game over didn't exist.


While we were still only able to see the faults of our work, the other participants started to enlight some of its qualities. Not only did we finish in time: the game was also being received positively! We couldn't believe that someone, somewhere in the world, was exploring the little world we created. And yet, slowly, the number of players kept growing.


If you, too, want to try Feed Me, we published it for free <a href="https://pyrodaes.itch.io/feed-me">on itch.io</a>. There you'll find the executables for Windows, OSX e Linux. Meanwhile, here's the trailer and some screenshot!
</section>

<section class="text-ita">
Il gioco non si rompe! Nonostante alcuni errori di realizzazione, abbiamo constatato increduli che era possibile giocarlo dall'inizio alla fine senza crash. Perfino i parametri stabiliti a occhio sembravano non sabotare del tutto il gameplay.


L'idea iniziale prevedeva evoluzioni diverse di un mostro componibile, altri personaggi, la possibilità di dare un nome al mostro e finali multipli. A tutto questo abbiamo dovuto rinunciare. Abbiamo giocato il tutto per tutto, dando all'utente l'illusione di una libertà che non abbiamo fatto in tempo a fornirgli. Ed ha funzionato! Sono stati in pochi, ad esempio, a scoprire che non esisteva un game over.


Mentre ancora vedevamo solo i difetti del nostro lavoro, sono stati gli altri partecipanti a metterne per primi in luce i pregi. Non solo avevamo creato il nostro primo gioco: stava anche piacendo! Non riuscivamo a credere che qualcuno da qualche parte nel mondo stesse esplorando un piccolo mondo creato da noi. Pian piano, invece, il numero di giocatori saliva.


Se anche voi volete provare Feed Me, l'abbiamo distribuito gratuitamente <a href="https://pyrodaes.itch.io/feed-me">su itch.io</a>. Troverete eseguibili per Windows, OSX e Linux. Nel frattempo, ecco il trailer e qualche screenshot!
</section>

<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-04-30-05.jpg" />
<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-04-30-06.jpg" />

<a href="https://pyrodaes.itch.io/feed-me">DOWNLOAD</a> <br/>
<a href="https://ldjam.com/events/ludum-dare/41/feed-me-1/">LUDUM DARE PAGE</a>

<div class="video">
  <iframe src="//www.youtube.com/embed/Xe0zV2Mrpqw" frameborder="0" allowfullscreen></iframe>
</div>

<h2 class="text-ita">Conclusioni</h2>
<h2 class="text-eng">Conclusions</h2>

<section class="text-eng">
Jams truly are important opportunities to grow. They help breaking many restraints, like that of perfectionism, the create an urgency and they give a rough idea of all the developement steps: from concept to PR. This is invaluable when you're dealing with bigger projets.


However, it's important to get the timing right. Throwing yourself in a jam too unprepared does not bring any result, rather, it can be damaging, <a href="http://leonieaonzo.com/blog-post/2017/01/25/GGJ.html"> the way the Global Game Jam has been for us</a>.
And, by the way, we wouldn't be ready for it now either. The Ludum Dare, with its already formed teams, the more benevolent deadlines and its work at a safe distance, was the baptism we needed.


Now, we have our first game.
</section>

<section class="text-ita">
Le jam sanno davvero fornire preziose occasioni di crescita. Superano freni come quello del perfezionismo, creano un'urgenza e danno una prima infarinatura di tutte le fasi di produzione: dal concept alle pubbliche relazioni. Questo è fondamentale quando ci si ritrova a prendere le misure con progetti più ampi.


Tuttavia, è importante trovare il momento giusto. Catapultarsi in una jam troppo impreparati non ne fa cogliere i frutti, anzi può essere dannoso,<a href="http://leonieaonzo.com/blog-post/2017/01/25/GGJ.html">come è stato per noi il Global Game Jam</a>. E, per inciso, non saremmo pronti neppure adesso. Il Ludum Dare, con i suoi gruppi già formati, le scadenze più generose e il lavoro da casa è stato il battesimo di cui avevamo bisogno.


E adesso, abbiamo il nostro primo gioco.
</section>

<h2 class="text-ita">PS: i risultati della votazione</h2>
<h2 class="text-eng">PS: how we ranked</h2>

<section class="text-eng">
In the 28 days following the submission, the developers tried and voted each other's games. Among 3048 entries (2018 of which belonging to the jam category), this is how we ranked:


Overall: 220th<br/>
Fun: 537th<br/>
Innovation: 626th<br/>
Theme: 658th<br/>
Graphics: 100th<br/>
Audio: 138th<br/>
Humor: 699th<br/>
Mood: 41st


We are very satisfied!
</section>

<section class="text-ita">
Nei 28 giorni che hanno seguito la consegna, gli sviluppatori hanno provato e votato i giochi gli uni degli altri. All'interno dei 3048 progetti caricati sul sito (di cui 2018 erano jam), ecco la nostra posizione:


Generale: 220°<br/>
Divertimento: 537°<br/>
Innovazione: 626°<br/>
Tema: 658°<br/>
Grafica: 100°<br/>
Audio: 138°<br/>
Humor: 699°<br/>
Atmosfera: 41°


Possiamo ritenerci decisamente soddisfatti!
</section>
