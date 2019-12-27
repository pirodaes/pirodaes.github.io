---
layout: post
title:  "Syn Studio Term 1: Visual Reference Library"
date:  26/12/2019
categories: project
post-header: 2019-12-26.jpg
info: "Intro to Blender with Reda Amarti"
gallery:
  - path: 01.jpg
    description: "I chose the Westmount square buildings"
  - path: 02.jpg
    description: "This was a photobashing done to better visualize my concept"
  - path: 03.jpg
    description: "Research sketches"
  - path: 04.jpg
    description: "The buildings recreated in 3D"
  - path: 05.jpg
    description: "What if the mushrooms glow?"
  - path: 06.jpg
    description: "Composition ideas"
  - path: 07.jpg
    description: "Composition ideas"
  - path: 08.jpg
    description: "Final composition idea"
  - path: 09.jpg
    description: "Final 3D render"
  - path: 10.jpg
    description: "Final result after paintover and photobashing"
---

During this class I started learning the new Blender 2.8. For our final assignment we chose an existing place in Montreal and transformed it in some post-apocalyptic fashion. The point of the exercise was to learn how to use a 3D base in our painting workflow.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2019-12-26/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2019-12-26/{{ image.path }}" class="image" />
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
