const PI = 3.1416;
//PI = 90;
console.log(PI);
console.error("Esto es un error")
console.warn("Esto es una advertencia");

let numero;
numero = 10;
console.log(numero);
numero = "diez";
console.log(numero);
const nombre = "Uriel Hernández 🤓 🇲🇽🌮🌯🫔";
console.log(nombre);

let a = 10;
let b = 20;
if (a > b ) {
  console.log("a > b ", a, b);
} else {
  console.log("a < b ", a, b);
}

if ( a === b ) {

}

const dia = "Sabado";

switch (dia) {
  case "Lunes": {
    console.log("Lunes 😩");
  } break;
  case "Martes": {
    console.log("Martes 😒");
  } break;
  case "Miércoles": {
    console.log("Miércoles 🙃");
  } break;
  case "Jueves": {
    console.log("Jueves 🍻");
  } break;
  case "Viernes": {
    console.log("Viernes 🍷");
  } break;
  case "Sábado": {
    console.log("Sábado ❤️‍🔥");
  } break;
  case "Domingo": {
    console.log("Domingo 🦧");
  } break;
  default: {
    console.log("Caso por defecto ");
  } break;
}

const vec = [0, 1, 2, 3, 4, 5];
console.log(vec);
let heterogeneo = ["Juan", 1, "Pedro", 3, vec];
console.log(heterogeneo);

function miFuncion (a,b) {
  return a + b;
}

console.log(miFuncion(3,4));

const miSuma = (a,b) => {
  return a+b;
}

console.log(miSuma(3,4));
// Que realice la suma de todos los elementos del arreglo
vec.forEach( (i) => {
  console.log(i);
})

for (let index = 0; index < vec.length; index++) {
  console.log(vec[index]);
}

let i = 0;
while (i < vec.length) {
  console.log(vec[i])
  i++;
}

