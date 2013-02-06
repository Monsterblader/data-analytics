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

// BU Breakdown YTD,R&WO,WS,CrOp,S&OP,C/S,GP,Fraud,Other,YTD Total
// CMU 1,-5177204,6053246,7324421,848662,6185788,175483,4437194,-5901323,-7196342.0
// CMU 2,-3078878,"£79,813","£1,200,202","-£1,544,313","-£5,291,301","-£1,495,406","£2,853,590","£7,751,900","£17,074,488.0"
// CMU 3,-6663317,"£466,469","£5,380,679","-£2,538,474","-£1,864,961","£2,185,401","-£3,424,598","£7,668,049","£5,358,390.0"
// CMU 4,3052221,"-£2,402,248","£3,077,265","-£138,791","-£2,997,250","-£6,876,752","£4,536,282","-£4,815,914","-£19,520,929.0"
// CMU 5,-4568966,"£672,232","£2,013,017","£5,950,261","£3,432,369","-£218,781","£7,663,167","-£5,891,058","-£6,464,361.0"
// CMU 6,-6710873,"£7,865,603","-£4,741,101","£21,837","£3,510,269","-£6,686,917","£5,108,147","-£7,619,006","£14,020,104.0"
// CMU 7,-7700024,"£742,627","-£7,498,896","£1,703,092","-£4,833,602","-£844,290","£4,124,656","£4,209,420","-£3,946,551.0"
// CMU 8,-4151496,"-£1,413,538","£818,267","£5,847,434","-£1,679,860","-£5,988,175","£7,964,900","-£649,104","£7,452,443.0"
// Total,-34998537,"£12,064,204","£7,573,854","£10,149,708","-£3,538,548","-£19,749,437","£33,263,338","-£5,247,036","£21,814,161"

}

window.onload = load;


