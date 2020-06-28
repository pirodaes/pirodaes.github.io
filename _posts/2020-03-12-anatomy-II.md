---
layout: post
title:  "Syn Studio Term 2: Anatomy II"
date:  12/03/2020
categories: project
post-header: 2020-03-12.jpg
info: "Studying posture, fat deposits, joints, age"
type: art
gallery:
  - path: 01.jpg
    description: "Posture study from life"
  - path: 02.jpg
    description: "Study of the back"
  - path: 03.jpg
    description: "The scapula"
  - path: 04.jpg
    description: "The scapula"
  - path: 05.jpg
    description: "Top of the ribcage"
  - path: 06.jpg
    description: "Feet"
  - path: 07.jpg
    description: "Age study from life"
  - path: 08.jpg
    description: "Hands from life, quick poses"
  - path: 09.jpg
    description: "Hands from life, quick poses"
  - path: 10.jpg
    description: "Hands from life, quick poses"
  - path: 11.jpg
    description: "From life"
  - path: 12.jpg
    description: "From imagination"
  - path: 13.jpg
    description: "From imagination"
  - path: 14.jpg
    description: "From life"
  - path: 15.jpg
    description: "Final: contrasting body types from imagination"
  - path: 16.jpg
    description: "Final: contrasting body types from imagination"
  - path: 17.jpg
    description: "Final: contrasting body types from imagination"
---

We had another life drawing class with Eric Mannella, unfortunately this term only 3 and 1/2 hours weekly. But we got faster!

PS: from now on, because of the amount of work produced for the school, I will not post everything but only a selection of the assignments for each class.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-03-12/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2020-03-12/{{ image.path }}" class="image" />
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
