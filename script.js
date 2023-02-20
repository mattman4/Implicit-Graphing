var graph = document.getElementById("graph");
var equation = document.getElementById("eqn");
var ctx = graph.getContext("2d");

const size = 101;
// canvas width 101 means 0 to 100.
const midPoint = (size-1)/2;

function init() {
  graph.width = size;
  graph.height = size;
  plotAxis()
}

function createPoint(x, y) {
  ctx.fillRect(x, y, 1 ,1);
}

function clearGraph() {
  ctx.clearRect(0, 0, graph.width, graph.height);
}

function plotAxis() {
  // x axis
  ctx.beginPath();
  ctx.moveTo(0, midPoint);
  ctx.lineTo(size, midPoint);
  ctx.stroke();
  // y axis
  ctx.beginPath();
  ctx.moveTo(midPoint, 0);
  ctx.lineTo(midPoint, size);
  ctx.stroke();
}

function plot() {
  var eqn = equation.value;
  if(!eqn.includes("=")) return;
  clearGraph();
  plotAxis();
  for(var x=0; x < size; x += 1) {
    for(var y=0; y < size; y += 1) {
      var converted_x = -1 * (midPoint - x)
      var converted_y = midPoint - y
      var tempEqn = eqn;
      tempEqn = tempEqn.replaceAll("x", "(" + converted_x + ")")
      tempEqn = tempEqn.replaceAll("y", "(" + converted_y + ")")
      tempEqn = tempEqn.split("=")
      var equal = math.equal(math.evaluate(tempEqn[0]), math.evaluate(tempEqn[1]))
      if(equal) createPoint(x,y);
    }
  }
  
}

init()