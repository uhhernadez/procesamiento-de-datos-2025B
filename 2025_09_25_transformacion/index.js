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
const g1 = svg.append("g");
g1.attr("transform","translate(50 50) rotate(-40 50 50) scale(2 2)" );
drawCircle(0, 0, 10, g1);

const g2 = svg.append("g");
g2.attr("transform", "skewX(40)");
drawCircle(20, 20, 10, g2);

svg.append("path").attr("d","M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" )