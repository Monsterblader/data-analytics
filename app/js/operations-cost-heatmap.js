function load() {
 var data = [
{score: 1, row: 0, col: 0}, {score: 0, row: 0, col: 1}, {score: 0, row: 0, col: 2}, {score: 0, row: 0, col: 3}, {score: 0, row: 0, col: 4}, {score: 0, row: 0, col: 5}, {score: 0, row: 0, col: 6}, {score: 0, row: 0, col: 7}, {score: 0, row: 0, col: 8}, {score: 0, row: 0, col: 9},
{score: 1, row: 1, col: 0}, {score: 0, row: 1, col: 1}, {score: 0, row: 1, col: 2}, {score: 0, row: 1, col: 3}, {score: 0, row: 1, col: 4}, {score: 0, row: 1, col: 5}, {score: 0, row: 1, col: 6}, {score: 0, row: 1, col: 7}, {score: 0, row: 1, col: 8}, {score: 0, row: 1, col: 9},
{score: 1, row: 2, col: 0}, {score: 0, row: 2, col: 1}, {score: 0, row: 2, col: 2}, {score: 0, row: 2, col: 3}, {score: 0, row: 2, col: 4}, {score: 0, row: 2, col: 5}, {score: 0, row: 2, col: 6}, {score: 0, row: 2, col: 7}, {score: 0, row: 2, col: 8}, {score: 0, row: 2, col: 9},
{score: 1, row: 3, col: 0}, {score: 0, row: 3, col: 1}, {score: 0, row: 3, col: 2}, {score: 0, row: 3, col: 3}, {score: 0, row: 3, col: 4}, {score: 0, row: 3, col: 5}, {score: 0, row: 3, col: 6}, {score: 0, row: 3, col: 7}, {score: 0, row: 3, col: 8}, {score: 0, row: 3, col: 9},
{score: 1, row: 4, col: 0}, {score: 0, row: 4, col: 1}, {score: 0, row: 4, col: 2}, {score: 0, row: 4, col: 3}, {score: 0, row: 4, col: 4}, {score: 0, row: 4, col: 5}, {score: 0, row: 4, col: 6}, {score: 0, row: 4, col: 7}, {score: 0, row: 4, col: 8}, {score: 0, row: 4, col: 9},
{score: 1, row: 5, col: 0}, {score: 0, row: 5, col: 1}, {score: 0, row: 5, col: 2}, {score: 0, row: 5, col: 3}, {score: 0, row: 5, col: 4}, {score: 0, row: 5, col: 5}, {score: 0, row: 5, col: 6}, {score: 0, row: 5, col: 7}, {score: 0, row: 5, col: 8}, {score: 0, row: 5, col: 9},
{score: 1, row: 6, col: 0}, {score: 0, row: 6, col: 1}, {score: 0, row: 6, col: 2}, {score: 0, row: 6, col: 3}, {score: 0, row: 6, col: 4}, {score: 0, row: 6, col: 5}, {score: 0, row: 6, col: 6}, {score: 0, row: 6, col: 7}, {score: 0, row: 6, col: 8}, {score: 0, row: 6, col: 9},
{score: 1, row: 7, col: 0}, {score: 0, row: 7, col: 1}, {score: 0, row: 7, col: 2}, {score: 0, row: 7, col: 3}, {score: 0, row: 7, col: 4}, {score: 0, row: 7, col: 5}, {score: 0, row: 7, col: 6}, {score: 0, row: 7, col: 7}, {score: 0, row: 7, col: 8}, {score: 0, row: 7, col: 9},
{score: 1, row: 8, col: 0}, {score: 0, row: 8, col: 1}, {score: 0, row: 8, col: 2}, {score: 0, row: 8, col: 3}, {score: 0, row: 8, col: 4}, {score: 0, row: 8, col: 5}, {score: 0, row: 8, col: 6}, {score: 0, row: 8, col: 7}, {score: 0, row: 8, col: 8}, {score: 0, row: 8, col: 9},
];

var data2 = [
{num: 23, num: 45}
]

// d3.csv("operations-cost-2-ytd.csv", function(data) {
//     data.forEach(function(d) { 
//     d.score = +d.score;
//     d.row = +d.row;
// d.col = +d.col;
// });

//height of each row in the heatmap
//width of each column in the heatmap
var gridSize = 70,
  h = 43,
  w = 67,
  rectPadding = 60;

var colorLow = 'green', colorMed = 'yellow', colorHigh = 'red';

var margin = {top: 20, right: 80, bottom: 30, left: 50},
  width = 800 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

var colorScale = d3.scale.linear()
   .domain([-1, 0, 1])
   .range([colorLow, colorMed, colorHigh]);

var svg = d3.select("#heatmap").append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var grect = svg.selectAll(".heatmap")
  .data(data, function(d) { return d.col + ':' + d.row; })
.enter()
.append("g")
  .attr("x", function(d) { return d.row * w; })
  .attr("y", function(d) { return d.col * h; })
  .attr("width", function(d) { return w / 1.05; })
  .attr("height", function(d) { return h / 1.09; })
.append("svg:rect")
  .attr("x", function(d) { return d.row * w; })
  .attr("y", function(d) { return d.col * h; })
  .attr("width", function(d) { return w / 1.05; })
  .attr("height", function(d) { return h / 1.09; })
  .style("fill", function(d) { return colorScale(d.score); })

var text = svg.selectAll("g")

textType = text.append("text")

textType.text("hello")

textType.attr("x", function(d) { return d.row * w; })
.attr("y", function(d) { return d.col * h; })

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




}

window.onload = load;






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