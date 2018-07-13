var dataset; // global variable

d3.csv("../../../../data/csv-generated.csv", function(error, data) {
    if (error) {  //If error is not null, something went wrong.
          console.log(error);  //Log the error.
    } else {      //If no error, the file loaded correctly.
      data.forEach(function(d) {
            d.mass = +d.mass;
            d.year = +d.year;
            d.reclat = +d.reclat;
            d.reclong = +d.reclong;
          });
      //Log the data.
      console.log(data);

// copy the data to the dataset global variable
  dataset = data;

// order the array chronologically
  dataset.sort(function (a, b) {
        return b.mass - a.mass;
  });


// BAR CHART

  var w = 1000;
  var h = 920;
  var barSvg = d3.select("body").select("#barChart").append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "barSvg");

// nesting original data: grouping identical year values
  var dataByYear = d3.nest()
    .key(function(d) {
          return d.year;
    })
    .sortKeys(d3.ascending) // data will be grouped by year (key: year)
    .entries(dataset) // the original array
    .filter(function (d) {
          var year = +d.key;
          return year > 1949; // filtering years lower than 1950
    });
  console.log(dataByYear);

var barHeight = 8;
var barPadding = 5;

// drawing bars with transition and skew
  var bars = barSvg.selectAll("rect")
    .data(dataByYear)
    .enter()
    .append("rect")
      .attr("class", function(d, i) {
            return "y" + d.key;
      })
      .attr("x", w/2)
      .attr("y", function(d, i) {
            return 10 + i * (barHeight + barPadding);
      })
      .attr("fill", "white")
      .attr("height", barHeight)
      .attr('transform', "skewY(25), translate(0,-231)")
      .attr("x", function(d, i) {
            return w/2;
      });

// drawing labels
  var labels = barSvg.selectAll("text")
    .data(dataByYear)
    .enter()
    .append("text")
      .text(function(d) {
            return d.key;
      })
      .attr("class", function(d, i) {
            return "y" + d.key;
      })
      .attr("x", function(d, i) {
            return w/2 + 15;
      })
      .attr("y", function(d, i) {
            return 20 + i * 13;
      })
      .attr("font-size", "11px")
      .attr("fill", "white")
      .attr("text-anchor", "start")
      .style("cursor", "pointer");

// drawing container for hoverList
var listXPos = w/2 + 100;

  var hoverList = barSvg.selectAll("svg.list")
    .data(dataByYear)
    .enter()
    .append('svg')
      .attr("class", "list")
      .attr("id", function(d) {
            return "list-y" + d.key;
      })
      .attr("y", function(d, i) {
            return i * 13;
          })
      .attr("opacity", "0");

// drawing list title
  hoverList.append("text")
    .attr("class", "listTitle")
    .attr("x", function(d, i) {
          return listXPos;
    })
    .attr("y", 15)
    .attr("font-size", "15px")
    .append("tspan")
      .attr("fill", "white")
      .text(function(d) {
            return "Six heaviest meteorites of ";
      })
    .append("tspan")
      .attr("fill", "#ff2b2a")
      .text(function(d) {
            return d.values.length;
      })
    .append("tspan")
      .attr("fill", "white")
      .text(function(d) {
            return " total";
      });

// drawing lines inside hoverList
  hoverList.append("line")
    .attr("x1", function(d, i) {
          return w/2 + 50;
    })
    .attr("y1", function(d, i) {
          return 20;
    })
    .attr("x2", function(d, i) {
          return w/2 + 350;
        })
    .attr("y2", function(d, i) {
          return 20;
    })
    .attr("stroke-width", 0.5)
    .attr("stroke", "#999999");

// drawing list entries
  hoverList.selectAll("text.listEntry")
      .data(function(d, i){
            return d.values;
      })
      .enter()
      .filter(function (d, i) { return i <= 5;})
      .append("text")
        .attr("class", "listEntry")
        .attr("x", function(d, i) {
              return listXPos;
        })
        .attr("y", function(d, i) {
              return 35 + i * 13;
        })
        .attr("font-size", "11px")
        .attr("fill", "white")
        .attr("text-anchor", "start")
        .append("tspan")
          .attr("class","entryName")
          .text(function(d) {
                return d.name;
          })
        .append("tspan")
          .attr("class","entryData")
          .attr("x", function(d, i) {
                return listXPos + 150;
          })
          .text(function(d) {
                return d.mass + " gr";
          });

// interactivity
  labels.on("mouseover", function() {
          barSvg.selectAll("." + this.getAttribute('class'))
            .transition()
            .duration(50)
            .attr("fill", "#ff2b2a");
          barSvg.select("#list-" + this.getAttribute("class"))
            .transition()
            .duration(100)
            .attr("opacity","1");
  });
  labels.on("mouseout", function() {
          barSvg.selectAll("." + this.getAttribute('class'))
            .transition()
            .duration(50)
            .attr("fill", "white");
          barSvg.select("#list-" + this.getAttribute("class"))
            .transition()
            .duration(100)
            .attr("opacity","0");
  });

// load bar chart
  d3.select('#barChart').on("mouseover", function(){
        barSvg.selectAll("rect")
        .transition()
          .duration(500)
          .delay(function(d, i) {
                return i * 10;
          })
          .attr("width", function(d) {
                return d.values.length/8;
          })
          .attr("x", function(d, i) {
                return w/2 - d.values.length/8;
          });
  });


// BUBBLE CHART

var w2 = 800;
var h2 = 400;

  var bubbleSvg = d3.select("body").select("#bubbleChart").append("svg")
    .attr("width", w2)
    .attr("height", h2)
    .attr("id", "bubbleSvg");

// nest array by rectype
  var dataByType = d3.nest()
    .key(function(d) {
          return d.rectype;
    })
    .rollup(function(d){
          return d3.mean(d, function(leaves) { return leaves.mass});
    })
.entries(dataset); // the original array

// array of colors
  var colors = ["#ff2b2a","#e37a5a","#917157","white"];

// create scale to link radius and mass
  var scaleRadius = d3.scaleLinear()
            .domain([d3.min(dataByType, function(d) { return d.value; }),
                    d3.max(dataByType, function(d) { return d.value; })])
            .range([5,100]);

// create range of colors based on tectype
  var colorCircles = d3.scaleOrdinal(colors);

// draw circles
  var node = bubbleSvg.selectAll("circle")
     .data(dataByType)
     .enter()
     .append("circle")
     .attr("class", function(d){ return d.key })
     .attr('r', 0)
     .attr("fill", function(d) { return colorCircles(d.key)})
     .attr('transform', 'translate(' + [w2/2, h2/2] + ')');

 // call to check the position of each circle
   function ticked(e) {
      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
  };

 // simulate physics
   var simulation = d3.forceSimulation(dataByType)
     .force("charge", d3.forceCollide(function(d) { return scaleRadius(d.value)}))
     .force("x", d3.forceX())
     .force("y", d3.forceY())
     .on("tick", ticked); // updates the position of each circle (from function to DOM)

 // draw legend
   var legend = bubbleSvg.selectAll("text.legend")
     .data(dataByType)
     .enter()
     .append("text")
      .text(function(d){ return d.key })
      .attr("fill", function(d) { return colorCircles(d.key)})
      .attr("x", 5)
      .attr("y", function(d, i) {
            return 20 + 20 * i;
      });

  // tooltips
  tooltips = bubbleSvg.selectAll("text.tooltips")
    .data(dataByType)
    .enter()
    .append("text")
      .attr("class", "tooltips")
      .attr("id", function(d){ return d.key })
      .attr("fill", "white")
      .attr("opacity","0")
      .append("tspan")
        .text("Average mass in grams:")
        .attr("font-size", "15px")
        .attr("x", 600)
        .attr("y", 20)
      .append("tspan")
        .text(function(d){ return d.value })
        .attr("font-size", "11px")
        .attr("x", 600)
        .attr("y", 40);

  // interactivity
    node.on("mouseover", function() {
            bubbleSvg.select("#" + this.getAttribute("class"))
              .transition()
              .duration(100)
              .attr("opacity","1");
    });
    node.on("mouseout", function() {
            bubbleSvg.select("#" + this.getAttribute("class"))
              .transition()
              .duration(100)
              .attr("opacity","0");
    });

// load bubble chart
  d3.select('#bubbleChart').on("mouseover", function(){
        bubbleSvg.selectAll("circle")
        .transition()
          .duration(500)
          .attr('r', function(d) { return scaleRadius(d.value)})
  });


    } // closes else
}); // closes .csv()
