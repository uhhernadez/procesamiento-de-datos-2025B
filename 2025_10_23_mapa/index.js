import {select, scaleBand, axisBottom, axisLeft, interpolateInferno, scaleSequential} from "d3";

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
    "Economía y finanzas", "Servicios básicos",  "Corrupción y política", 
    "Medio ambiente y desastres", "Migración y turismo" 
  ];

  const labelsY = [ "Jóvenes (18-35)", "Adultos medios (36-55)", 
    "Adultos mayores (56+)", "Clase baja", "Clase media", "Rurales",
    "Indígenas"
  ];

  const data = [
    {x:0, y:0, z:8 },
    {x:0, y:1, z:9 },
    {x:0, y:2, z:7 },
    {x:0, y:3, z:10},
    {x:0, y:4, z:8 },
    {x:0, y:5, z:9 },
    {x:0, y:6, z:9 },
//    
    {x:1, y:0, z:6 },
    {x:1, y:1, z:7 },
    {x:1, y:2, z:9 },
    {x:1, y:3, z:8},
    {x:1, y:4, z:7 },
    {x:1, y:5, z:8 },
    {x:1, y:6, z:9 },
// 
    {x:2, y:0, z:9 },
    {x:2, y:1, z:8 },
    {x:2, y:2, z:6 },
    {x:2, y:3, z:9 },
    {x:2, y:4, z:9 },
    {x:2, y:5, z:7 },
    {x:2, y:6, z:7 },
// 
    {x:3, y:0, z:7 },
    {x:3, y:1, z:8 },
    {x:3, y:2, z:8 },
    {x:3, y:3, z:9 },
    {x:3, y:4, z:8 },
    {x:3, y:5, z:10},
    {x:3, y:6, z:9 },
//
    {x:4, y:0, z:7 },
    {x:4, y:1, z:8 },
    {x:4, y:2, z:7 },
    {x:4, y:3, z:8 },
    {x:4, y:4, z:8 },
    {x:4, y:5, z:7 },
    {x:4, y:6, z:8 },
//
    {x:5, y:0, z:5 },
    {x:5, y:1, z:6 },
    {x:5, y:2, z:5 },
    {x:5, y:3, z:7 },
    {x:5, y:4, z:6 },
    {x:5, y:5, z:8 },
    {x:5, y:6, z:9 },
//
    {x:6, y:0, z:6 },
    {x:6, y:1, z:5 },
    {x:6, y:2, z:4 },
    {x:6, y:3, z:7 },
    {x:6, y:4, z:5 },
    {x:6, y:5, z:6 },
    {x:6, y:6, z:7 },
  ];
  
const xLabels = scaleBand(labelsX, [0, 400]);
const gxAxis =svg.append("g")
              .attr("transform", "translate(100,300)" )
              .call(axisBottom(xLabels));
gxAxis.selectAll("text")
  .attr("transform", "rotate(85)")
  .style("text-anchor","start")         

const yLabels = scaleBand(labelsY, [300, 0]);
const gyAxis = svg.append("g")
              .attr("transform", "translate(100, 0)")
              .call(axisLeft(yLabels))

const colorScale = scaleSequential()
                  .interpolator(interpolateInferno)
                  .domain([0, 10])

data.forEach( (row) => {
  const z = row.z;
  const width = xLabels.bandwidth();
  const height = yLabels.bandwidth();

  const x = row.x * width + 100;
  const y = row.y * height;
  svg.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("width", width)
    .attr("height", height)
    .attr("fill", colorScale(z))
});              