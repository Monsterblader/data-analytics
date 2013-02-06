
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

BU Breakdown YTD,R&WO,WS,CrOp,S&OP,C/S,GP,Fraud,Other,YTD Total
CMU 1,-5177204,6053246,7324421,848662,6185788,175483,4437194,-5901323,-7196342.0


CMU 2,-3078878,"£79,813","£1,200,202","-£1,544,313","-£5,291,301","-£1,495,406","£2,853,590","£7,751,900","£17,074,488.0"
CMU 3,-6663317,"£466,469","£5,380,679","-£2,538,474","-£1,864,961","£2,185,401","-£3,424,598","£7,668,049","£5,358,390.0"
CMU 4,3052221,"-£2,402,248","£3,077,265","-£138,791","-£2,997,250","-£6,876,752","£4,536,282","-£4,815,914","-£19,520,929.0"
CMU 5,-4568966,"£672,232","£2,013,017","£5,950,261","£3,432,369","-£218,781","£7,663,167","-£5,891,058","-£6,464,361.0"
CMU 6,-6710873,"£7,865,603","-£4,741,101","£21,837","£3,510,269","-£6,686,917","£5,108,147","-£7,619,006","£14,020,104.0"
CMU 7,-7700024,"£742,627","-£7,498,896","£1,703,092","-£4,833,602","-£844,290","£4,124,656","£4,209,420","-£3,946,551.0"
CMU 8,-4151496,"-£1,413,538","£818,267","£5,847,434","-£1,679,860","-£5,988,175","£7,964,900","-£649,104","£7,452,443.0"
Total,-34998537,"£12,064,204","£7,573,854","£10,149,708","-£3,538,548","-£19,749,437","£33,263,338","-£5,247,036","£21,814,161"
