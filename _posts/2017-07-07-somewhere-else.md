---
layout: post
title: "Somewhere Else"
date: 07/07/2017
categories: project
post-header: 2017-07-07.jpg
info: "University project on the theme Necessary Utopias"
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
  - 17.jpg
  - 18.jpg
  - 19.jpg
  - 20.jpg
  - 21.jpg
  - 22.jpg
---

This is the biggest project I've ever done for my course of study at Accademia di Urbino. It was the most difficult project to complete and the one I liked less doing, too. <br/>
The assignment was to develop an artistic project based on one of the themes provided: I had about three months to complete a video (3 minutes minimum), a poster, a flyer, a book (60 pages minimum). I chose the theme "Necessary Utopias"... <br/>
I obviously ran out of time before completing everything :D . But I didn't worry about this. I am just happy to have managed to complete the editorial part, which has always been my week spot: that was my real aim. <br/> <br/>
Here are some pictures of the finished work:

<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2017-07-07-02.jpg" />
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2017-07-07-01.jpg" />
<img class="post-img-side" src="{{ site.baseurl }}/img/posts/2017-07-07-03.jpg" />
<img class="post-img" src="{{ site.baseurl }}/img/posts/2017-07-07-04.jpg" />

<h2>Concept</h2>
Somewhere Else is an artistic project that illustrates the interrelation between reality and utopia. <br/>
One of the most distinctive characters of the human being is its constant tension towards the unattainable. <br/>
Beyond the frame of screens, printed ink or voices from the street: utopian non-places multiply, evolve, vanish.
Within the myth lives the key to believe in the present. <br/>
The images presented aim to guide the viewer through a path of suggestions, bringing him to reflect on himself and his conception of "present": where do your eyes lay?

<h2>Somewhere Else: the book</h2>
Here are all the collages found inside the book:

<div class="thumb-grid">
  {% for image in page.gallery %}
  {% assign loopindex = forloop.index %}
        <a href="#id{{ loopindex }}" class= "thumb-link">
          <div class="thumb" style="background-image: url('{{ site.baseurl }}/img/posts/2017-07-07/{{ image }}');">
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
      <img src="{{ site.baseurl }}/img/posts/2017-07-07/{{ image }}" class="image" />
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

<div class="video">
  <h2>Somewhere Else: the animation</h2>
  <p> The final result doesn't quite satisfy me, I think its caotic conception ends up showing through... but still, it's a finished project. <br/>
Video and audio are composed by me, with the contribution of Mitch Martinez's free stock footage and the sounds from the freesound.org community.
<br/> <br/>
Video made with After Effects <br/>
Audio made with Reaper</p>
  <iframe src="//www.youtube.com/embed/PCPyiK2gtaY" frameborder="0" allowfullscreen></iframe>
</div>
