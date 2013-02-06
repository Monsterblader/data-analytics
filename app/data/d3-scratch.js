
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



