import {select} from "d3";

const svg = select("#app").append("svg");
svg.attr("width", 100);
svg.attr("height", 100);

const drawCircle = (x, y, r, svg) => {
svg.append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", r)
    .attr("fill", "red")
    .attr("stroke", "#000000")
}
drawCircle(10,10,5,svg);
drawCircle(20,90,15,svg);
drawCircle(50,50,5,svg);
drawCircle(10,15,5,svg);
drawCircle(10,70,5,svg);
drawCircle(90,100,5,svg);