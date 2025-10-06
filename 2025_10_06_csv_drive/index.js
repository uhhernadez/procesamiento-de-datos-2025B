import {csv} from "d3";

const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR5HdCdLYSmenxp-jkGhGjv-3kkRXjF9qo7npD2oVasAYsSxxGr_r6JT723BVFOBY9r5nisgZEFJ1oL/pub?gid=0&single=true&output=csv";
// CSV Command Separated Value
const data = await csv(url);
console.log(data);
data.forEach((element)=>{
  console.log(element)
});