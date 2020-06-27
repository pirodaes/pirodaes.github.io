---
layout: post
title:  "The Great Journey: Illustrations"
date:  06/10/2018
categories: project
post-header: 2018-10-06.jpg
info: "A proposal for Bologna Children's Book Fair 2019"
type: art
gallery:
  - 01.jpg
  - 02.jpg
  - 03.jpg
  - 04.jpg
  - 05.jpg
---

The Great Journey is a five-illustration story without words: it narrates the first winter of a young arctic fox and is a small tale of growth and discovery.

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2018-10-06/{{ image }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2018-10-06/{{ image }}" class="image" />
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

Initially, I wanted to use a very materic paint in order to represent the snow, and add a sense of depth by using tracing paper. <br>
I first thought of oil paint, but I didn't have enough time to let different layers dry. I tried to add collage, oil pastels, pencils to the mix, but it just didn't work out. I realized that in order to achieve what I had in mind I should have practiced those techniques a lot more.


So, a bit discouraged, I turned to watercolors. <br>
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-10-06-1.jpg" />
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2018-10-06-2.jpg" />

But even then, the result didn't satisfy me. Since I had used a paper made for acrylic paint, the watercolors didn't even actually look like watercolors. But most of all, it didn't feel like snow. <br> <br>
The deadline was approaching and I was late: I decided to correct them digitally, using <a href="https://krita.org/en/">Krita</a>). <br>
I overlapped photographs and scans in order to keep the light shades but get a good definition. I then ended up painting the illustrations again almost from scratch.

<img class="post-img" src="{{ site.baseurl }}/img/posts/2018-10-06.gif" />

In the end I think the stratification of mistakes and good ideas gave this project a quite unique feel. <br> I was happy I managed to pull this out in time, and I hope you like it!
