---
layout: post
title:  "At Sundown: Illustrations"
date:  24/03/2018
categories: project
post-header: 2018-03-24.jpg
info: "A proposal for Bologna Children's Book Fair 2018"
gallery:
  - 01.jpg
  - 02.jpg
  - 03.jpg
  - 04.jpg
  - 05.jpg
---

These five illustrations narrate the journey of a child in a desolated land, while the day turns into night. The mysterious encounters along the way do not weaver the child's determination: a final monster awaits at the end of the road...


<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2018-03-24/{{ image }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2018-03-24/{{ image }}" class="image" />
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

This work is an experiment: a mix between illustration and comics. It has been realized with a mixed technique: while the drawing happened on paper, the coloring was fully digital (with my beloved open source painting software <a href="https://krita.org/en/">Krita</a>). <br>
The separation of these two moments brought me back to a time in which I didn't use to paint this often. Then, I hated adding color. Oil/digital painting helped me overcome my dislike (and poor skill) for coloring. Today I'm happy to see that I managed to balance these two elements way better than how I used to - not without struggle, though, as you can see below...

<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-03-24/1.gif" />
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-03-24/2.gif" />
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-03-24/3.gif" />
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-03-24/4.gif" />
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-03-24/5.gif" />

<p style="clear:both;">This work will be part of the illustration portfolio I prepared for Bologna Children Book Fair 2018!</p>
