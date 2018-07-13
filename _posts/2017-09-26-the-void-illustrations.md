---
layout: post
title:  "The void: Illustrations"
date:  26/09/2017
categories: project
post-header: 2017-09-26.jpg
info: "Narrating through Images"
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
---

These project started long ago, during a 24h Illustration workshop with Alessandro Sanna, at Urbino's Academy.
After five months, in which I worked on it as a side-project, I finally completed the nine illustrations. The result isn't great, especially narration-wise. But most of the work was done in two days, and I'm just glad I completed it.

Most of all, I'll finally have something to send to Bologna's Children Book Fair!

<h2>Theme</h2>
The main idea was to portray what it was like for me to grow up in a big, old house, often empty. I wanted to contradict the common perception of solitude, which is not loneliness. The void is not empty. A single room can become an entire world... and that's not boring at all.

I don't think these illustrations manage to convey this clearly, but still, it was fun trying to suggest it through the overall atmosphere.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2017-09-26/{{ image }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2017-09-26/{{ image }}" class="image" />
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
