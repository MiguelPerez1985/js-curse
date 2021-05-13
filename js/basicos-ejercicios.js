/*

1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion
('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

*/

/*

1.-
const countChar = (cadena) =>
console.log(`%c No de caracteres del texto: ${cadena.length}`, "color: red; font-style: italic");   
countChar(prompt("Ingrese Texto"));*/

/*--------------------------------------*/

/*

2.-
let str = prompt("Inserte texto");
let index = prompt("Inserte rango");
textCut(str, index);
function textCut(str, index) {
    console.log(str.slice(0, index));
}

/*--------------------------------------*/

/*

3.-

let text = prompt("Inserte el texto");
let separator = prompt("Inserte el tipo de separación");

separateByArray(text, separator);

function separateByArray(text, separator) {

    let arrayText = text.split(separator);
    console.log(arrayText);
    arrayText.forEach(element => console.log(element));
    
    
}

4.-

let text = prompt("Inserte el texto");
let times = prompt("Inserte el no. de veces que se repetirá el texto");
repeatText(text, times);
function repeatText(text, times) {
    for (let i = 1; i <= times; i++) {
        console.log(text);
    }
}

*/

/*
let str = prompt("Inserte texto");
let index = prompt("Inserte rango");
textCut(str, index);
function textCut(str = "", index = undefined) {
    console.log(index);
    (!str)
    ? console.warn("No ingresaste una cadena")
    :(index === undefined || index === "")
        ?console.warn("No ingresaste un numero o está vacio")
        :console.log(str.slice(0, index))
    
}


    3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion
('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

/*
const cadenaAArreglo = (cadena = "", separador = undefined) => 
    (!cadena) 
        ? console.log("No ingresaste una cadena de texto")
        : (separador === undefined)
            ? console.log("No ingresaste un separador")
            : console.log(cadena.split(separador))  

cadenaAArreglo("aa","");
*/
/*

Buenas prácticas aprendidas: 

1.- Usar funciones expresadas con operadores ternarios para el retorno implícito - (Deja tu código simple, limpio y expresivo)
2.- Usar operadores ternarios concatenados e identados en lugar de if cuando este último no sea necesario - (Al igual que el anterior es más fácil de leer y mantener)
3.- Hacer las validaciones necesarias al comienzo de una función y al último solucionar el problema - (Deja la solución para el final y resuelve los posibles problemas primero con las validaciones)
4.- Definir valores por defecto en los parámetros de una función - (Mantén el control de los parámetros y anticipate a posibles valores vacíos)
5.- Usar el 'return' en condicionales if y alinear en código cuando sea de una sola línea - (evitar las llaves si el código de la condición tiene una sola línea)
6.- Si tu condición if ya tiene un return es redundante añadir un else. Evita anidar varios else if en una condición - (Hazlo simple y mantén el nivel sin utilizar tantos anidamientos en condiciones innecesarias)*/

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
const reverseText = function (text = "") {
    (!text) 
        ? console.warn("No has ingresado una cadena de texto")
        : console.log(text.split(" ").reverse().map(function (word) {return word.split("").reverse().join("")}).join(" "));        
};

reverseText("Programa una función que elimine cierto patrón de caracteres de un texto dadooooooo");
*/

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
/*
const repeatedWord = function (text = "", word = "") {
    if(!text) return console.warn("No ingresaste el texto");
    if(!word) return console.warn("No ingresaste la palabra");
    if (!text.includes(word)) return console.warn("La palabra no se encuentra en el texto");    

    let i = 0;
    text.split(" ").forEach(element => {
        if(element === word) i++ 
    });

    return console.log(`Word: ${word} - Repetitions: ${i}`);
}

repeatedWord("Programa una función para contar el número de veces que se repite una palabra en un texto largo de la función", "challenge");
repeatedWord("Programa una función función para contar el número de veces que se repite una palabra en un texto largo de la función", "función");
repeatedWord();
repeatedWord("", "");
*/

//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


/*
const isItPalindome = function (text = "") {
    if(!text) return console.warn("The text is empty!");

    let depuredText = text.normalize("NFD").replace(/[,\¿\?\¡\!\s\u0300-\u036f]/gi, '').toLowerCase(); 
    let reversedText = depuredText.split(' ').reverse().map(function (word) {return word.split('').reverse().join('')}).join('').toLowerCase();
    console.log(text);
    (depuredText === reversedText) ? console.log(true) : console.warn("this is not a Palindrome!");    
    
}

isItPalindome("Sometamos o matemos");
isItPalindome("No traces en ese cartón");
isItPalindome("¿Será lodo o dólares?")
isItPalindome("Logra Casillas allí sacar gol")
isItPalindome("Yo dono rosas, oro no doy")
isItPalindome("Eva, can I see bees in a cave?")
*/

// 8.- Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


const deletePattern = function (text = "", pattern = "") {

    if (!text) return console.warn("The text is Empty"); 
    if (!pattern) return console.warn("The pattern is Empty");
    
    pattern = pattern.split(",").join(`|`).replace(/\s/g, '');
    let regEx = new RegExp(pattern, 'g'); 
    let newText = text.replace(regEx, '');
    console.log(newText);

}

deletePattern("Programa una función que elimine cierto patrón de caracteres de un texto dado", "a, e, i, o, ó, u");