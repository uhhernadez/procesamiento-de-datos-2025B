import {select} from "d3";
const svg = select("#app").append("svg");
svg.attr("width", 400);
svg.attr("height", 400);
  svg.attr("fill", "#0000000E")

const drawCircle = (x, y, r, svg) => {
svg.append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", r)
    .attr("fill", "red")
    .attr("stroke", "#000000")
}

const c = svg.append("circle")
          .attr("cx", 0)
          .attr("cy", 0)
          .attr("r", 20)
          .attr("fill", "#C004F4FF")
          .attr("stroke", "#0FF025FF")
  
svg.on("mousemove",(event)=>{
  c.attr("cx",event.x);
  c.attr("cy",event.y);
});

/*
svg.on("click", (event) => {
  console.log("Ha hecho click",event);
  drawCircle(event.x,event.y, 20, svg);
});

svg.on("mousemove", (event) => {
  drawCircle(event.x,event.y, 10, svg);
});
*/