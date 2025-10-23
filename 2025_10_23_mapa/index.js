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

  const labelsX = ["Seguridad e inseguridad", "Salud y medicamentos",
    "Economía y finanzas", "Servicios básico", "Servicios básicos",
    "Corrupción y política", 
  ]