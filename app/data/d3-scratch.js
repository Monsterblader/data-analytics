
// rounded corners - http://bl.ocks.org/3468167
//             http://stackoverflow.com/questions/12115691/svg-d3-js-rounded-corner-on-one-corner-of-a-rectangle


<style>

body {
  font: 10px sans-serif;
}

.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}

.bar {
  fill: #7EC0EE;
  stroke: black;
  stroke-width: .8;
}

.x.axis path {
  display: none;
}

</style>

<script>

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

/* this establishes our x axis scale as being ordinal, or a discreet mapping of the domain to the range */
var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    // .tickFormat(formatYNumbers);

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/monthly-perf-actual.csv", function(error, data) {

  data.forEach(function(d) {
    d.amount = +d.amount;
  });

  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.amount; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.amount); })
      .attr("height", function(d) { return height - y(d.amount); })
      .attr("rx", 11)
      .attr("ry", 11);


});

</script>


op cost ytd


// var text = svg.selectAll(grect)
// .append("text")
//   .text(function (d) {
//     return "test"});

// .attr("x", function(d) { return d.row * w; })
// .attr("y", function(d) { return d.col * h; })



  // .append("text")
  // .text(function (d) {
  //   return "test"});
  // .data(data).enter().append("g");

// var heatMap = svg.selectAll(".heatmap")
//   .data(data, function(d) { return d.col + ':' + d.row; })
// .enter().append("svg:rect")
//   .attr("x", function(d) { return d.row * w; })
//   .attr("y", function(d) { return d.col * h; })
//   .attr("width", function(d) { return w / 1.1; })
//   .attr("height", function(d) { return h / 1.15; })
//   .style("fill", function(d) { return colorScale(d.score); })
//   .append("text")
//   .text(function (d) {
//     return "test"});

// ----------

// d3.csv("operations-cost-2-ytd.csv", function (csv) {
// csv.forEach(function (o) {
// o.row = parseInt(o.row) - 1;
// o.col = parseInt(o.col) - 1;
// o.value = parseFloat(o.value);
// });

// var grect = svg.selectAll("rect.combo")
// .data(csv).enter().append("g");

// var rect = grect.append("rect")
// .attr("class", "combo")
// .attr("width", cellSize)
// .attr("height", cellSize)
// .attr("x",function (d) {
//   return d.col * cellSize;
//   })
// .attr("y", function (d) {
//   return d.row * cellSize;
//   })
// .attr("fill", function (d) {
//   return color(d.value);
//   });

// var txt = grect.append("text").text(function (d) {
// return roundNumber(d.value, 1);
// }).attr("x",function (d) {
// return( d.col * cellSize + cellSize / 2);
// }).attr("y",function (d) {
// return( d.row * cellSize + cellSize / 2);
// }).attr('text-anchor', 'middle')
// .style("fill", "white").style("stroke-width", 1.5);

// });





// d3.csv("operations-cost-2-ytd.csv", function(data) {
//     data.forEach(function(d) {
//     d.score = +d.score;
//     d.row = +d.row;
// d.col = +d.col;
// });

//height of each row in the heatmap
//width of each column in the heatmap



// ----------

// <script>
// d3.csv("sgadata.csv", function(data) {
//     data.forEach(function(d) {
//     d.score = +d.score;
//     d.row = +d.row;
// d.col = +d.col;
// });
// //height of each row in the heatmap
// //width of each column in the heatmap
// var h = gridSize;
// var w = gridSize;
// var rectPadding = 60;

// $('#heatmap-canvas').empty();

// var mySVG = d3.select("#heatmap-canvas")
// .style('top',0)
// .style('left',0);

// var colorScale = d3.scale.linear()
// .domain([-1, 0, 1])
// .range([colorLow, colorMed, colorHigh]);

// rowNest = d3.nest()
// .key(function(d) { return d.row; })
// .key(function(d) { return d.col; });

// dataByRows = rowNest.entries(data);
// mySVG.forEach(function(){
// var heatmapRow = mySVG.selectAll(".heatmap")
//     .data(dataByRows, function(d) { return d.key; })
//     .enter().append("g");

//     //For each row, generate rects based on columns - this is where I get stuck
//     heatmapRow.forEach(function(){
//     var heatmapRects = heatmapRow
//         .selectAll(".rect")
//         .data(function(d) {return d.score;})
//         .enter().append("svg:rect")
//                     .attr('width',w)
//         .attr('height',h)
//         .attr('x', function(d) {return (d.row * w) + rectPadding;})
//         .attr('y', function(d) {return (d.col * h) + rectPadding;})
//         .style('fill',function(d) {
//             if(d.score == NaN){return colorNA;}
//             return colorScale(d.score);
//                  })

// })
// </script>


// ---- works

// var gridSize = 70,
//   h = 38,
//   w = 67,
//   rectPadding = 60;

// var colorLow = 'green', colorMed = 'yellow', colorHigh = 'red';

// var margin = {top: 20, right: 80, bottom: 30, left: 50},
//   width = 640 - margin.left - margin.right,
//   height = 500 - margin.top - margin.bottom;

// var colorScale = d3.scale.linear()
//    .domain([-1, 0, 1])
//    .range([colorLow, colorMed, colorHigh]);

// var svg = d3.select("#heatmap").append("svg")
//   .attr("width", width + margin.left + margin.right)
//   .attr("height", height + margin.top + margin.bottom)
// .append("g")
//   .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// var heatMap = svg.selectAll(".heatmap")
//   .data(data, function(d) { return d.col + ':' + d.row; })
// .enter().append("svg:rect")
//   .attr("x", function(d) { return d.row * w; })
//   .attr("y", function(d) { return d.col * h; })
//   .attr("width", function(d) { return w / 1.1; })
//   .attr("height", function(d) { return h / 1.15; })
//   .style("fill", function(d) { return colorScale(d.score); })
//   .append("text")
//   .text(function (d) {
//     return "test"});
