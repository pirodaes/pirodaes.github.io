---
layout: post
title:  "Syn Studio Term 3: Image Integration"
date:  16/05/2020
categories: project
post-header: 2020-05-16.jpg
facebook-img: 2020-05-16/06.jpg
info: "Basically a class about photomontage"
type: art
gallery:
  - path: 01.jpg
    description: "Aged self-portrait"
  - path: 02.jpg
    description: "Integrating myself in a movie shot"
  - path: 03.jpg
    description: "Creating an illusion with myself 1"
  - path: 04.jpg
    description: "Creating an illusion with myself 2"
  - path: 05.jpg
    description: "Mini-me"
  - path: 06.jpg
    description: "Movie poster with a kitchen appliance"
---

Another class on Photoshop magic with Jessy Veilleux!


The hardest part: taking a picture of yourself with correct light and angle, just you, your smartphone and the quarantine.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-05-16/{{ image.path }}');">
            <div class="caption">
              <h2> {{ image.description }} </h2>
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
      <img src="{{ site.baseurl }}/img/posts/2020-05-16/{{ image.path }}" class="image" />
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
