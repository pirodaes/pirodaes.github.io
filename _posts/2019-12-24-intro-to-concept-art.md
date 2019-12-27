---
layout: post
title:  "Syn Studio Term 1: Intro to Concept Art"
date:  24/12/2019
categories: project
post-header: 2019-12-24.jpg
info: "Our first complex project"
gallery:
  - 01.jpg
  - 02.jpg
  - 03.jpg
  - 04.jpg
  - 05.jpg
  - 06.jpg
  - 07.jpg
  - 08.jpg
  - 09.jpg
  - 10.jpg
  - 11.jpg
  - 12.jpg
  - 13.jpg
  - 14.jpg
  - 15.jpg
  - 16.jpg
---

During the Intro to Concept Art class, Boris Andreev guided us through our first complex project. We worked together in small teams: we chose a story and visually developed its characters and environments, trying to keep a coherent style.
<br> <br>
It was challenging, and it often felt like we were jumping into things a bit ahead of time. But tight deadlines and continuous feedback from fellow students helped me stay on track. Boris didn't want to guide us too much especially in the important decisions. This made me feel a little lost sometimes, but I realized later how useful it was. He is a great teacher, his feedback was always on spot and - most important to me - he knew how to motivate and encourage.
<br> <br>
In the end, I was kind of satisfied with my work: it's a good starting point. And having had this bird's eye view on the entire concept art process, from sketches to rendering, helped me realize soon several flaws in my process. I'm sure this will prove very useful in the next months!

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2019-12-24/{{ image }}');">
            <div class="caption">
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
      <img src="{{ site.baseurl }}/img/posts/2019-12-24/{{ image }}" class="image" />
    </div>
    <div class="image-info-post">
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
