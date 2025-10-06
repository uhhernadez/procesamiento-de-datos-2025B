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

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR5HdCdLYSmenxp-jkGhGjv-3kkRXjF9qo7npD2oVasAYsSxxGr_r6JT723BVFOBY9r5nisgZEFJ1oL/pub?gid=0&single=true&output=csv";
// CSV Command Separated Value
const data = await csv(url);

const states = data.map((element)=>{
  return element.entidad
})
console.log(states);

const labels = Object.keys(series);
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

const y_axis = scaleLinear([0, 20], [height-top-bottom, 0]); 
const y_axis_left = svg.append("g")
  .attr("transform", strTranslate(left,top))
  .call(axisLeft(y_axis));

const bars = svg.append("g")
                .attr("transform",strTranslate(left,top))

for (let key in series) {
  console.log(x_axis(key),y_axis(series[key]));
  const x =  x_axis(key)+ x_axis.step()/4
  const y =  y_axis(series[key])
  bars.append("circle")
  .attr("cx",x)
  .attr("cy",y)
  .attr("r",2)
  bars.append("rect")
  .attr("x",x)
  .attr("y",y)
  .attr("width",x_axis.step()/2)
  .attr("height",height-top-bottom-y)
  .attr("fill","pink")
}


