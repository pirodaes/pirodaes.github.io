---
layout: post
title:  "Syn Studio Term 2: Visual Communication"
date:  23/03/2020
categories: project
post-header: 2020-03-23.jpg
info: "Expressing emotion through images"
type: art
gallery:
  - path: 01.jpg
    description: "Model of my main building"
  - path: 02.jpg
    description: "Alienation"
  - path: 03.jpg
    description: "Hate"
  - path: 04.jpg
    description: "Playful innocence"
  - path: 05.jpg
    description: "Strength and freedom"
  - path: 06.jpg
    description: "Here are some of the sketches"
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
---

This class, taught by Boris Andreev, unfolded into two parallel paths: one was creating four illustrations set in one imaginary town, expressing four different emotions. And the other was delivering 30 fast sketches each week, done from life, out in the cold Montreal.

I especially loved this second part. Not only it made my sketching skills visibly improve in a few weeks: it also taught me how to look at common things in a fresh and curious way.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-03-23/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2020-03-23/{{ image.path }}" class="image" />
    </div>
    <div class="image-info-post">
      <h2> {% if image.description %} {{image.description}} {%endif%} </h2>
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
