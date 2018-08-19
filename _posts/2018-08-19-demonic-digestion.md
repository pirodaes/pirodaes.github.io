---
layout: post
title:  "Demonic Digestion: an arcade little game"
date:  22/07/2018
categories: project
post-header: "2018-08-19.png"
info: "Our entry for Ludum Dare 42, based on the theme 'running out of space'"
facebook-img: "posts/2018-08-19-2.png"
gallery:
  - path: 2018-08-19-1.jpg
  - path: 2018-08-19-2.jpg
  - path: 2018-08-19-3.jpg

---

What’s the best place for a demon to be, other than a bullet hell? <br/>
Demonic Digestion is the new game by Flaming Moka, the duo I form together with Davide Cortellucci, created in 72 hours for the Ludum Dare 42.

<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-08-19-2.png" />

It's a japanese-themed 2d arcade game, where you can play as a yokai and survive as long as you can to the dangerous consequences of your hunger! Defeat the bigger demons and gather resources, unlock items, customize your appearance.

<a href="https://ldjam.com/events/ludum-dare/42/demonic-digestion">Here</a> you can find the submission page on the Ludum Dare website, while <a href="https://flaming-moka.itch.io/demonic-digestion">on itch</a> you can download it for Windows, Mac and Linux.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/{{ image.path }}" class="image" />
    </div>
    <div class="image-info-post">
      <h2> {{ image.description }} </h2>
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

<h2>Inside Demonic Digestion's art style</h2>

<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-08-19.gif" />

The idea of a japanese-themed style for Demonic Digestion came suddenly, and I ended up sticking with it not knowing exactly why. <br/>
Being an anime & manga nerd and a karateka, I’ve always been passionate about Japan and its culture. Because of this, I didn’t have to dig into deep research before being able to pull out a convincing style, that gave the game a distinctive feel.
Also, there are already some well-known games that heavily reference a traditional japanese style, and I was especially influenced by Okami and Zelda the Wind Waker.

Here are the first concepts for our game:

<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-08-19-4.jpg" />
<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-08-19-5.jpg" />
<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-08-19-6.jpg" />

But for me it wasn’t simply a strategic move. I had a lot of fun quoting Japan’s traditional symbolism and its repertory of colorful demons, called yokai. <br/>
I tried referencing existing yokai as much as I could. For example, the boss from our game explicitly (and very roughly) quotes the gashadokuro demon as it was depicted by Utagawa Kuniyoshi:

<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-08-19-1.png" />

I hope you enjoyed this small behind the scenes of Demonic Digestion, also I hope I tickled your curiosity towards some aspects of Japan’s tradition. And remember to see all this in action by checking out Demonic Digestion!
