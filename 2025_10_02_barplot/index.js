import {select, scaleBand, scaleLinear, axisBottom, axisLeft} from "d3";
const svg = select("#app").append("svg");
svg.attr("width", 400);
svg.attr("height", 400);

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
const x_axis = scaleBand(labels,[0, 300]);
console.log(x_axis.step())

const x_axis_bottom = svg.append("g")
  .attr("transform","translate(50, 200)")  
  .call(axisBottom(x_axis))

  x_axis_bottom.selectAll("text")
    .attr("transform","rotate(30)")
    .style("text-anchor","start");

const y_axis = scaleLinear([0, 20], [200, 0]); 
const y_axis_left = svg.append("g")
  .attr("transform", "translate(50, 0)")
  .call(axisLeft(y_axis));
 console.log("Escala y", y_axis(1)); 
 console.log("Escala y", y_axis(2)); 
 console.log("Escala y", y_axis(3)); 
 console.log("Escala y", y_axis(10)); 
 console.log("Escala y", y_axis(20)); 

labels.forEach((key)=>{
  console.log(x_axis(key));
});

for (let key in series) {
  console.log(key);
  console.log(series[key]);
  console.log(x_axis(key),y_axis(series[key]));
  const x =  x_axis(key) + x_axis.step()
  const y =  y_axis(series[key])
  svg.append("circle")
  .attr("cx",x)
  .attr("cy",y)
  .attr("r",2)
  svg.append("rect")
  .attr("x",x)
  .attr("y",y)
  .attr("width",x_axis.step())
  .attr("height",200-y)
}