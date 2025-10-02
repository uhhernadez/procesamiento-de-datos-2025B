import {select, scaleBand, scaleLinear, axisBottom, axisLeft} from "d3";

const left = 50;
const right = 50;
const top = 50;
const bottom = 50;

const width = 600;
const height = 400;

const svg = select("#app").append("svg");
svg.attr("width", width);
svg.attr("height", height);

const animes = {
  "Demon Slayer" : 5,
  "Chain Sawman" : 1,
  "One Piece" : 3,
  "Dragon Ball" : 7,
  "Pokemon" : 2
};

const series = {
  "Breaking Bad" : 12,
  "Game of Thrones" : 4,
  "Grace Anatomy" : 4,
  "Fallout " : 4,
  "Dr. House": 7,
  "Gravity Falls": 10,
};

const labels = Object.keys(series);
const x_axis = scaleBand(labels,[0, width-left-right]);
console.log(x_axis.step())

console.log("translate(" + String(left) + ", " + String(height-top) +")")  
const translate = "translate(" + String(left) + ", " + String(height-top) +")"; 

const x_axis_bottom = svg.append("g")
  .attr("transform", translate)  
  .call(axisBottom(x_axis))

x_axis_bottom.selectAll("text")
  .attr("transform","rotate(30)")
  .style("text-anchor","start");

  /*
const y_axis = scaleLinear([0, 20], [200, 0]); 
const y_axis_left = svg.append("g")
  .attr("transform", "translate(50, 0)")
  .call(axisLeft(y_axis));
*/