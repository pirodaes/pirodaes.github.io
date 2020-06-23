---
layout: post
title:  "Syn Studio Term 1: Sketching for Production"
date:  25/12/2019
categories: project
post-header: 2019-12-25.jpg
info: "Perspective class with Christian"
gallery:
  - path: 01.jpg
    description: "Real life sketch of my room"
  - path: 02.jpg
    description: "Analyzing a real life lego construction"
  - path: 03.jpg
    description: "Transforming the lego construction in a building of given dimensions"
  - path: 04.jpg
    description: "Different view of a building, keeping coherent proportions"
  - path: 05.jpg
    description: "Analyzing a real life appliance (iron)"
  - path: 06.jpg
    description: "Drawing an imaginary object with symmetric sides"
  - path: 07.jpg
    description: "Cast shadows nightmare"
  - path: 08.jpg
    description: "Drawing and lighting an object based on a given shape"
  - path: 09.jpg
    description: "Drawing the same scene from three different points of view - 1"
  - path: 10.jpg
    description: "Drawing the same scene from three different points of view - 2"
  - path: 11.jpg
    description: "Drawing the same scene from three different points of view - 3"
  - path: 12.jpg
    description: "Drawing environments based on given measurements and descriptions"
  - path: 13.jpg
    description: "Figuring out reflections"
---

Christian Robert de Massy was our teacher and I loved him. But this class made me cry blood.


I was completely ignorant in perspective, so every exercise, from cast shadows to reflections, was a huge struggle. It shows through the pretty low quality of my work. I had to start from scratch, again and again, almost each assignment. But I learned a lot and now I finally have a base knowledge that will allow me to improve.
<br>
And maybe someday, when I will start a new drawing, I will even remember to start from defining a horizon line!


We did many other small exercises, but here I will only put the most relevant ones in order to understand the progression of the class (even if I'm really not satisfied with most of them).

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2019-12-25/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2019-12-25/{{ image.path }}" class="image" />
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
