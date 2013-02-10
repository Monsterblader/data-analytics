var varPercChart = function () {
  var data = [0.2, 2.3, 4.5, -8.2, -26.9, 24.5, 0, 0.6, 1];

  var margin = {top: 30, right: 10, bottom: 10, left: 10},
      width = 100 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  var x0 = Math.max(-d3.min(data), d3.max(data));

  var x = d3.scale.linear()
      .domain([-x0, x0])
      .range([0, width])
      .nice();

  var y = d3.scale.ordinal()
      .domain(d3.range(data.length))
      .rangeRoundBands([0, height], .2);

  // var xAxis = d3.svg.axis()
  //     .scale(x)
  //     .orient("top");

  var svg = d3.select("#containerLeft").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) { return d < 0 ? "bar negative" : "bar positive"; })
      .attr("x", function(d) { return x(Math.min(0, d)); })
      .attr("y", function(d, i) { return y(i); })
      .attr("width", function(d) { return Math.abs(x(d) - x(0)); })
      .attr("height", y.rangeBand());

  svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(function(d){
        return d + "%";
      })
      .attr("x", function(d) { return x((d >= 0) ? 5 : -35); })
      .attr("y", function(d, i) { return y(i) + y.rangeBand() / 2 + 5; })
      .attr("text-anchor", "center");

  // svg.append("g")
  //     .attr("class", "x axis")
  //     .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
    .append("line")
      .attr("x1", x(0))
      .attr("x2", x(0))
      .attr("y1", 0)
      .attr("y2", height);
}
