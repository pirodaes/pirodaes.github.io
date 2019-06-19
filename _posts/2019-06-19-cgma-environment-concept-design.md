---
layout: post
title:  "Environment Concept Design with Aaron Limonick"
date:  19/06/2019
categories: project
post-header: 2019-06-19.jpg
info: "Works created for a CGMA online course"
gallery:
  - 1.jpg
  - 2.jpg
  - 3.jpg
  - 4.jpg
---

A few months ago I attended a <a href="https://www.cgmasteracademy.com/courses/92-environment-concept-design">CGMA</a> online course. It was my first time being actually taught Concept Art, and it was really exciting. Even more so considering that my teacher was <a href="https://www.artstation.com/limonick">Aaron Limonick</a>! <br>
It was also my first time taking an online class. I must say I liked the format and overall I found it pretty useful, it's a nice way to work more and with a great painter's guidance. <br>
Environment Concept Design focuses on the visual development of an imaginary environment, it starts with sketching concept ideas and ends up with a finished painting.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2019-06-19/{{ image }}');">
            <div class="caption">
              <h2> page {{ loopindex }}</h2>
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
      <img src="{{ site.baseurl }}/img/posts/2019-06-19/{{ image }}" class="image" />
    </div>
    <div class="image-info-post">
      <h2> page {{ loopindex }} </h2>
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

I kept working on the final piece for this course and in the end I decided to split the painting into two. This way the colors may have lost some of their appeal, but narrative and mood are more coherent.
<img class="post-img" src="{{ site.baseurl }}/img/posts/2019-06-19-1.jpg" />
<img class="post-img" src="{{ site.baseurl }}/img/posts/2019-06-19-2.jpg" />
