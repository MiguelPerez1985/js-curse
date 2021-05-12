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