---
layout: post
title:  "Syn Studio Term 1: Anatomy Study"
date:  27/12/2019
categories: project
post-header: 2019-12-27.jpg
info: "Anatomy class with Eric Mannella"
gallery:
  - path: 01.jpg
    description: "Copy from life, skeleton view 1"
  - path: 02.jpg
    description: "Copy from life, skeleton view 2 and 3"
  - path: 03.jpg
    description: "My first 6-hours long life drawing"
  - path: 04.jpg
    description: "Another long pose"
  - path: 05.jpg
    description: "Reconstructing the skeleton underneath"
  - path: 06.jpg
    description: "First rendering on gray paper"
  - path: 07.jpg
    description: "Reconstructing the muscle groups underneath"
  - path: 08.jpg
    description: "Life drawing with a gesture variation from imagination"
  - path: 09.jpg
    description: "...muscles again"
  - path: 10.jpg
    description: "Life drawing rendered with etching"
  - path: 11.jpg
    description: "Variant of the previous pose, created from imagination"
  - path: 12.jpg
    description: "Life drawing with easel turned in the opposite direction of the model"
  - path: 13.jpg
    description: "Life drawing, reclined pose"
  - path: 14.jpg
    description: "Same pose, fast one from a different angle"
  - path: 15.jpg
    description: "Final assignment part 1: constructing the skeleton"
  - path: 16.jpg
    description: "Final assignment part 2: constructing the muscles"
  - path: 17.jpg
    description: "Final assignment part 3: rendering"
  - path: 18.jpg
    description: "Life drawing with digital painting"
  - path: 19.jpg
    description: "Life drawing with digital painting"
  - path: 20.jpg
    description: "Life drawing with digital painting"
---

I loved this class, and I'm so happy that we are going to have it again next term. We worked on the full figure, with long 6-hours life drawing sessions every week. We learned how to construct a figure analytically, starting with blocks for the pelvis, rib cage and skull.
<br>
Eric was a great teacher, he guided us through bone points and muscle groups, but it wasn't just theory. The point of his assignments was being able to internalize this knowledge and apply it from memory in new situations.
<br>
That's why the final work for this class was the construction of a pose from imagination, that we then had fun rendering.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2019-12-27/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2019-12-27/{{ image.path }}" class="image" />
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

PS I'm sorry for the terrible photo quality, I will update this post with better images as soon as I can!
