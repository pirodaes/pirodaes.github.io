---
layout: post
title:  "Syn Studio Term 2: Digital Image Manipulation"
date:  12/03/2020
categories: project
post-header: 2020-03-21.jpg
info: "Learning some Photoshop magic with Jessy Veilleux"
type: art
gallery:
  - path: 01.jpg
    description: "Experimenting with magic"
  - path: 02.jpg
    description: "Further exploration"
  - path: 03.jpg
    description: "Let's destroy this!"
  - path: 04.jpg
    description: "Overlapping apocalypses"
  - path: 05.jpg
    description: "My chosen disaster"
  - path: 06.jpg
    description: "An alien planet"
---

Hours of pure gold with one of the coolest matte painters in Montreal! <br>
We learned how to work with layers, masks, brushes and textures in the most efficient way possible. Matte painting is not exactly concept art: its purpose is to appear directly in the final production, be it a movie or a videogame cover. Because of this, it tries to achieve photorealism as much as possible.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-03-21/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2020-03-21/{{ image.path }}" class="image" />
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
