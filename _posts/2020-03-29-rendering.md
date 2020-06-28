---
layout: post
title:  "Syn Studio Term 2: Rendering"
date:  29/03/2020
categories: project
post-header: 2020-03-29.jpg
info: "How to paint light, materials, reflections..."
type: art
gallery:
  - path: 01.jpg
    description: "Mighty cube"
  - path: 02.jpg
    description: "Light on a random blob"
  - path: 03.jpg
    description: "Material studies (original ref on the left)"
  - path: 04.jpg
    description: "Painting a flying van"
  - path: 05.jpg
    description: "Stylized study"
  - path: 06.jpg
    description: "Same place, different angle"
  - path: 07.jpg
    description: "Interior study"
  - path: 08.jpg
    description: "A different view of the reference's environment"
  - path: 09.jpg
    description: "Rendering a character"
---

Xin Ran Liu guided us through a super satisfying and fun how-to-render class. I learned and improved a lot!

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2020-03-29/{{ image.path }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2020-03-29/{{ image.path }}" class="image" />
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
