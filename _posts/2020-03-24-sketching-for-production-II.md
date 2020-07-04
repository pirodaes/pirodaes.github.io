---
layout: post
title:  "Syn Studio Term 2: Sketching for production II"
date:  24/03/2020
categories: project
post-header: 2020-03-24.jpg
info: "Working fluidly with idea generation and rough concepts"
type: art
gallery:
  - path: 01.jpg
    description: "Greco-roman sci-fi gate"
  - path: 02.jpg
    description: "Greco-roman sci-fi gate"
  - path: 03.jpg
    description: "Greco-roman sci-fi gate"
  - path: 04.jpg
    description: "Greco-roman sci-fi gate"
  - path: 05.jpg
    description: "Greco-roman sci-fi gate"
  - path: 06.jpg
    description: "Greco-roman sci-fi gate"
  - path: 07.jpg
    description: "A church built around that gate"
  - path: 08.jpg
    description: "A church built around that gate"
  - path: 09.jpg
    description: "A church built around that gate"
  - path: 10.jpg
    description: "But a spatiotemporal gap appears..."
  - path: 11.jpg
    description: "Story moments"
  - path: 12.jpg
    description: "Evolution during the story"
  - path: 13.jpg
    description: "Camera positioning practice"
  - path: 14.jpg
    description: "Character silhouettes"
  - path: 15.jpg
    description: "The priest's headdress"
  - path: 16.jpg
    description: "Priest design: first pass"
  - path: 17.jpg
    description: "Final priest design"
  - path: 18.jpg
    description: "Corrupted priest"
  - path: 19.jpg
    description: "An off-topic mech"
---

This class was a lot of sketching sketching sketching! Véronique Meignaud taught us how to work fast with a flow of ideas, without falling in love with them.

The design work was all done for a project that spanned several weeks, constantly evolving.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-03-24/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2020-03-24/{{ image.path }}" class="image" />
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
