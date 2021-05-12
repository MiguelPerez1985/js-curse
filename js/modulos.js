import hello, {Hello, PI, usuario} from "./constantes.js";
import {aritmetica as art} from "./aritmetica.js";
console.log("Archivo modulos.js");

console.log(art.sumar(30,10));
console.log(art.restar(30,20));
hello();
console.log(PI, usuario);

let saludo = new Hello("Miguel");
