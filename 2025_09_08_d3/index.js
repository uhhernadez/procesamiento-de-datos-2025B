import {select} from "d3";
const svg = select("#app").append("svg");

svg.attr("width", 520);
svg.attr("height", 520);

const rect = svg.append("rect");
rect.attr("x", 20);
rect.attr("y", 20)
rect.attr("width", 200)
rect.attr("height", 100)
rect.attr("fill", "black")