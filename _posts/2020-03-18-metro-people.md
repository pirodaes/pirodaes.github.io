---
layout: post
title:  "Metro People"
date:  18/03/2020
categories: project
post-header: 2020-03-18.jpg
info: "Series of stolen portraits done during metro or train trips"
type: art
gallery:
  - path: 01.jpg
  - path: 02.jpg
  - path: 03.jpg
  - path: 04.jpg
  - path: 05.jpg
  - path: 06.jpg
  - path: 07.jpg
  - path: 08.jpg
  - path: 09.jpg
  - path: 10.jpg
  - path: 11.jpg
  - path: 12.jpg
  - path: 13.jpg
  - path: 14.jpg
  - path: 15.jpg
  - path: 16.jpg
  - path: 17.jpg
  - path: 18.jpg
  - path: 19.jpg
  - path: 20.jpg
  - path: 21.jpg
  - path: 22.jpg
  - path: 23.jpg
  - path: 24.jpg
  - path: 25.jpg
  - path: 26.jpg
  - path: 27.jpg
  - path: 28.jpg
  - path: 29.jpg
  - path: 30.jpg
  - path: 31.jpg
  - path: 32.jpg
  - path: 33.jpg
  - path: 34.jpg
  - path: 35.jpg
  - path: 36.jpg
  - path: 37.jpg
  - path: 38.jpg
  - path: 39.jpg
  - path: 40.jpg
  - path: 41.jpg
  - path: 42.jpg
---

Lots of fun!

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-03-18/{{ image.path }}');">
            <div class="caption">
              <h2> {{ loopindex }} </h2>
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
      <img src="{{ site.baseurl }}/img/posts/2020-03-18/{{ image.path }}" class="image" />
    </div>
    <div class="image-info-post">
      <h2> {{ loopindex }} </h2>
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
