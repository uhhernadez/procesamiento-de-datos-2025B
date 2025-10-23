import {select, scaleBand, scaleLinear, axisBottom, axisLeft, csv} from "d3";

const left = 50;
const right = 50;
const top = 50;
const bottom = 50;

const width = 600;
const height = 400;

const svg = select("#app").append("svg");
svg.attr("width", width);
svg.attr("height", height);
svg.attr("class", "graph")

const tooltip = select("#app")
  .append("div")
  .style("opacity", 1)
  .style("class", "tooltip")
  .style("background-color", "white")
  .style("border","solid")
  .style("border-width", "1px")
  .style("border-radius", "5px")
  .style("position", "absolute")
  .style("padding", "5px")
  .style("font-family", "sans-serif")
  .style("font-size","10px")

tooltip.html("Esto es el tooltip")
.style("left", "10px")
.style("top", "10px")

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR5HdCdLYSmenxp-jkGhGjv-3kkRXjF9qo7npD2oVasAYsSxxGr_r6JT723BVFOBY9r5nisgZEFJ1oL/pub?gid=0&single=true&output=csv";
// CSV Command Separated Value
const data = await csv(url);

const states = data.map((element)=>{
  return element.entidad
})
console.log(states);

const deads = data.map((element)=>{
  return element["2024"]
})
console.log(deads);
//const labels = Object.keys(series);
const labels = states;
const x_axis = scaleBand(labels,[0, width-left-right]);
console.log(x_axis.step())

function strTranslate(x,y) {
  return "translate(" + String(x) + ", " + String(y) +")"; 
}

const x_axis_bottom = svg.append("g")
  .attr("transform", strTranslate(left, height-top))  
  .call(axisBottom(x_axis))

x_axis_bottom.selectAll("text")
  .attr("transform","rotate(30)")
  .style("text-anchor","start");

const y_axis = scaleLinear([0, 3000], [height-top-bottom, 0]); 
const y_axis_left = svg.append("g")
  .attr("transform", strTranslate(left,top))
  .call(axisLeft(y_axis));

const bars = svg.append("g")
                .attr("transform",strTranslate(left,top))
let i = 0;
for (let key in states) {
  console.log(states[i], x_axis(states[i]),y_axis(deads[i]));
  const x =  x_axis(states[i])+ x_axis.step()/4;
  const y =  y_axis(deads[i]);
  const dead = deads[i];
  i++;
  bars.append("rect")
  .attr("x",x)
  .attr("y",y)
  .attr("width",x_axis.step()/2)
  .attr("height",height-top-bottom-y)
  .attr("class","bar")
  .on("mouseenter",(event) => {
    tooltip.style("opacity", 1)
    console.log("enter");
  })
  .on("mousemove", (event) => {
    console.log("over");
    tooltip.html(dead+ " muertes")
          .style("left", (event.x + 10) + "px")
          .style("top", (event.y + 10) + "px")
  })
  .on("mouseleave", (event) => {
    tooltip.style("opacity", 0)
  })
}


