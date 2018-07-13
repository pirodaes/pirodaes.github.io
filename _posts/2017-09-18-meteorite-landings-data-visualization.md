---
layout: datavis
title:  "Meteorite Landings Data visualization"
date:  18/09/2017
categories: project
post-header: 2017-09-18.png
info: "First project with d3.js"
---

<div class="text">


  <p class="date"> {{ page.date | date: '%B %d, %Y' }} </p>

  <img src= "{{ "/img/datavis-logo.png" | prepend: site.baseurl }}" class="logo">
  <p>Collision is a data visualization project based on the
  <a href="https://data.nasa.gov/Space-Science/Meteorite-Landings/ak9y-cwf9">data</a>
  of all of the known meteorite landings. <br>
    The project explores these records with two visualizations, analyzing the number of collisions and each meteorites’s mass and composition. <br>
    The visualization is built through code written using the javascript library d3.js.
  <br>
    The data is provided by The Meteoritical Society and distributed through NASA’s Open Data Portal. Its information is updated to 2013.</p>
  <h2>Number x date</h2>
  <p class="caption">This bar chart visualizes the number of landings for each year between 1950 and 2013, when the recordings were more likely to be accurate. A growth in the number of collected data is however noticeable up to the 70s.
    <br>
    The year 2013 shows partial information, since it was still being collected at the time of release.
  <br><br>
  On user interaction, for each year are displayed the total number of landings and the six heaviest meteorites, with their id.
  </p>
</div>
<div id="barChart"></div>
<div class="text">
  <h2>Mass x composition</h2>
  <p class="caption">
    The following bubble chart explores the link between average mass and meteorite composition.
    <br>
    Meteorites can be divided into four groups according to their composition:
  </p>
  <ul>
    <li>Stony (Chondrites and Achondrites, Lunar and Martian meteorites);</li>
    <li>Stony-iron (Pallasites and Mesosiderites);</li>
    <li>Iron (Magmatic and Non-magmatic).</li>
  </ul>
  <p class="caption">
    Relict meteorites are instead thise whose material has been heavily altered by the fall.
    <br>
    The graph enlights how Stony meteorites tend to have a significntly higher mass, on average.
  </p>
</div>
<div id="bubbleChart"></div>
