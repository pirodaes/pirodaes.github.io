---
layout: post
title:  "Syn Studio Term 3: Illustration"
date:  16/06/2020
categories: project
post-header: 2020-06-16.jpg
facebook-img: 2020-06-16/05.jpg
info: "Redesigning an old comic book cover"
type: art
gallery:
  - path: 01.jpg
    description: "The original book cover"
  - path: 02.jpg
    description: "First composition ideas"
  - path: 03.jpg
    description: "Value sketches"
  - path: 04.jpg
    description: "Color exploration"
  - path: 05.jpg
    description: "Final"
  - path: 06.jpg
    description: "Final with title"
---

Pierre Raveneau gave us golden advice while guiding us through the redesign of an old comic book cover. Very interesting exercise!

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-06-16/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2020-06-16/{{ image.path }}" class="image" />
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
