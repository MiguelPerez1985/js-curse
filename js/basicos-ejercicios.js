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

/*
const deletePattern = function (text = "", pattern = "") {

    if (!text) return console.warn("The text is Empty"); 
    if (!pattern) return console.warn("The pattern is Empty");
    
    pattern = pattern.split(",").join(`|`).replace(/\s/g, '');
    let regEx = new RegExp(pattern, 'g'); 
    let newText = text.replace(regEx, '');
    console.log(newText);

}

deletePattern("Programa una función que elimine cierto patrón de caracteres de un texto dado", "a, e, i, o, ó, u");
*/

/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const randomNumber = () => console.log((Math.random() * (600-501)+501).toFixed()); 
randomNumber();

10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true.

const isItCapicua = function(number = 0) {
    if(!number) return console.warn("Invalid Number");
    let reversedNumber = parseInt(number.toString().split('').reverse().join(''));
    (reversedNumber === number) 
        ? console.log('It is Capicúa! :)')
        : console.log('It isnt Capicúa :(');
    
}

isItCapicua(4045);

11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
    se define como el producto de todos los números enteros positivos desde 1 hasta n), 
    pe. miFuncion(5) devolverá 120.
*/
/*
const factorial = function (num = 0) {
    if(!num) return console.warn("Invalid number");
    if(num<=0) return console.warn("U must type a number higher than 0");
    let fact = 1;
    for (let i = 1; i <= num; i++) {             
        fact = fact * i;
    }

    return console.log(`El número factorial es ${fact}`); ;
}

factorial(8);
*/

//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

//console.log(Number.isInteger(5/3));

const esPrimo = function (numero = 0) {
  if (!numero) return console.log("No ingresaste un número");
  let count = 0;
  for (let i = 1; i < numero + 1; i++) {
    if (Number.isInteger(numero / i)) count++;
    if (count > 2) return false;
  }
  if (count === 2) return true;
};
/*
//esPrimo();

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.


const esImpar = function (numero = 0) {
    if (!numero) console.warn("No ingresaste un numero");
    (Number.isInteger(numero/2)) 
        ? console.log("Es par")
        : console.log("No es par");     
}

//esImpar();

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
//(0 °C × 9/5) + 32 = 32 °F

//(32 °F − 32) × 5/9 = 0 °C

const weatherConverter = function (num = undefined, scale = "") {
    if (num===undefined || typeof(num)!=='number') return console.warn("No ingresaste un número"); 
    if (!scale) return console.warn("No ingresaste una escala");
    if (scale !== "F" && scale !== "C") return console.warn("Escala desconocida!");
    if (scale === "C") return console.log(`${num} °C --> `+ ((num * 9/5) + 32) + `°F`); 
    if (scale === "F") return console.log(`${num} °F --> `+ ((num - 32) * 5/9) + `°C`); 

}

//weatherConverter();
*/

//15) Programa una función para convertir números de base binaria a decimal y
//viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
/*
 const binADec = function(valor = undefined, sistema = undefined) {
     if((!valor || typeof(valor)!=="number" || Math.sign(valor)===-1)) return console.warn("Escribe un valor válido");
     //if binario -> 1 = decimal
     //if decimal -> 2 = binario
     if((/2|3|4|5|6|7|8|9/.test(valor)) && sistema === 2) return console.warn("El sistema binario solo acepta 1s y 0s");
    
     if((!sistema || typeof(sistema)!=="number" || Math.sign(sistema)===-1) || (sistema!==2 && sistema!==10))  return console.warn("Ingresa un sistema (2,10) válido");
    
    //binario a decimal
    if(sistema === 2){
        console.log(`Binario a Decimal`);
        let valorRev = valor.toString().split('').reverse();
        let dec = 0;
        valorRev.forEach(function (element, index, valorRev) {
            dec = dec + element * Math.pow(2, index);
        });
        return console.log(` ${valor} = ${dec} `);
    } else{
        console.log(`Decimal a Binario`);   
        let residuo = 0;
        const array = [];
        let i = 0;
        let auxValor = valor;
        if(auxValor === 1) return console.log(1);;
        while (auxValor>=2) {
            residuo =Math.trunc(auxValor) % 2;
            array[i] = residuo;
            auxValor =  Math.trunc(auxValor) / 2;
            i++;
            if (auxValor<2) {
                array[i] = Math.trunc(auxValor);
                break;
            }
        }
        return console.log( ` ${Math.trunc(valor)} = `+ array.toString().split(",").reverse().join('') );
    }
     
 }

 binADec(01011, 2)
*/
//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
/*
const descuento = function(monto = undefined, descuento = undefined) {
    if((!monto || typeof(monto)!=="number" || Math.sign(monto)===-1)) return console.warn("Escribe un valor válido");
    if((!descuento || typeof(descuento)!=="number" || Math.sign(descuento)===-1)) return console.warn("Escribe un descuento válido");
    let montoFinal = monto - ((monto * descuento) / 100) 
    console.log(montoFinal);
}
descuento(1000,50)
*/
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
/*
const diffDates = function (date = undefined) {
    if (!date || typeof(date)!=="string") return console.warn("Unvalid input");
    let dateSplitted = date.split('-');
    let actualDate = new Date;
    if(dateSplitted.length > 3 || dateSplitted.length < 3) return console.warn("Invalid date");
    if(dateSplitted[0] > 31) return console.warn("Dia incorrecto");
    if(dateSplitted[1] > 12) return console.warn("Mes incorrecto");
    if(dateSplitted[2] > actualDate.getFullYear()) return console.warn("El año no puede ser mayor al actual");
    let birthDate = new Date (dateSplitted[2], dateSplitted[1]-1, dateSplitted[0]);
    let diff = actualDate.getFullYear() - birthDate.getFullYear();
    birthDate.setFullYear(actualDate.getFullYear());
    (birthDate > actualDate)//si aun no sucedido la fecha de cumpleaños
        ? console.log(`Tu edad es ${diff-1} años`)
        : console.log(`Tu edad es ${diff} años`)

}

diffDates("13-12-2021");*/

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

/*const vocalConsonante = function (text = "") {
  if (!text || typeof text !== "string" || !isNaN(text))
    return console.warn("Unvalid input");
  let array = text.replace(/[0-9]/g, "").split("");
  let vocales = 0,
    consonantes = 0;
  array.forEach((element) => {
    if (/a|e|i|o|u/.test(element)) vocales++;
    else if (/[a-zA-Z]/.test(element)) consonantes++;
  });

  return console.log(`Vocales: ${vocales}, Consonantes: ${consonantes}`);
};/*
//vocalConsonante("Hola Mundo");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

/*const proveName = function (name = "") {
  if (!name || typeof name !== "string" || !isNaN(name))
    return console.warn("Unvalid name");
  if (/^[a-zA-Z]+ [a-zA-Z]+$/.test(name) || /^[a-zA-Z]+$/.test(name))
    return console.log(true);
  else console.log(false);
};/*
//proveName("")

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com")
//devolverá verdadero.

/*const verifyEmail = function (email = "") {
  if (!email || typeof email !== "string" || !isNaN(email))
    return console.warn("Unvalid Email");
  if (
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    )
  )
    return console.log(true);
  else return console.log(false);
};*/
//verifyEmail("")

//21) Programa una función que dado un array numérico devuelve otro array
//con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const arrayAlCuadrado = function (array = undefined) {
  if (!Array.isArray(array)) return console.warn("Unvalid Array");
  if (array.length === 0) return console.warn("Empty Array");

  const noEsNumero = (element) => typeof element !== "number";
  if (array.some(noEsNumero)) return console.warn("Array need to be numeric");
  let array2 = array.map((el) => el * el);
  console.log(`[${array}] = [${array2}]`);
};

//arrayAlCuadrado([1, 4, 5]);

//22) Programa una función que dado un array devuelva el número mas alto y
//el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

const altoBajo = function (array = undefined) {
  if (!Array.isArray(array)) return console.warn("Unvalid Array");
  if (array.length === 0) return console.warn("Empty Array");
  const noEsNumero = (element) => typeof element !== "number";
  if (array.some(noEsNumero)) return console.warn("Array need to be numeric");
  console.log(`Min: ${Math.max(...array)} - Max: ${Math.min(...array)}`);
};

//altoBajo([1, 4, 5, 99, -60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares
//y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares = function (array = undefined) {
  if (!Array.isArray(array)) return console.warn("Unvalid Array");
  if (array.length === 0) return console.warn("Empty Array");
  const noEsNumero = (element) => typeof element !== "number";
  if (array.some(noEsNumero)) return console.warn("Array need to be numeric");

  console.log({
    pares: array.filter((num) => num % 2 === 0),
    impares: array.filter((num) => num % 2 === 1),
  });
};

/*paresImpares([2,4,6,7,1,1]);
paresImpares("hola");
paresImpares([]);
paresImpares([1,"a"]);
paresImpares();

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
//el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
//pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
//pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const ascDescArray = (arr = undefined) => {
  if (!Array.isArray(arr)) return console.warn("Unvalid Array");
  if (arr.length === 0) return console.warn("Empty Array");
  const noEsNumero = (element) => typeof element !== "number";
  if (arr.some(noEsNumero)) return console.warn("Array need to be numeric");

  return console.info({
    arr,
    ascent: arr.map((el) => el).sort(),
    descent: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

//ascDescArray([7,5,7,8,6]);

const deleteDuplicates = (array = undefined) => {
  if (!Array.isArray(array)) return console.warn("Unvalid Array");
  if (array.length < 1) return console.warn("Empty Array");
  if (!array) console.warn("Unvalid array");

  return console.log(new Set(array));
};

//deleteDuplicates([1,2,3,4,4,5,6, {},[],{}, [], true, true, "x","x","a","ab"]);

const promedio = (arr = undefined) => {
  if (!Array.isArray(arr)) return console.warn("Unvalid Array");
  if (arr.length === 0) return console.warn("Empty Array");
  const noEsNumero = (element) => typeof element !== "number";
  if (arr.some(noEsNumero)) return console.warn("Array need to be numeric");
  let promedio = 0;
  /*for (const num of arr) {
      promedio = promedio + num;
  }
  console.log("El promedio es: " + promedio / arr.length);*/
  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `Promedio: ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

//promedio([10,10,7,9])

/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
//, director, añoEstreno, pais, genero, calificacionImdb
//    this.director = director;
/*    this.añoEstreno = añoEstreno;
    this.pais = pais;
    this.genero = genero;
    this.calificacionImdb = calificacionImdb;*/
class Pelicula {

  constructor({ idImdb, titulo, director, anioEstreno, pais, genero, calImdb}) {
    this.idImdb = idImdb;
    this.titulo = titulo;
    this.director = director;
    this.anioEstreno = anioEstreno;
    this.pais = pais;
    this.genero = genero;
    this.calImdb = calImdb;

    this.validacionIdImdb(idImdb);
    this.validacionTitulo(titulo);
    this.validacionDirector(director);
    this.validacionAnioEstreno(anioEstreno);
    this.validacionPais(pais);
    this.validacionGenero(genero);
    this.validacionCalif(calImdb);
    
  }
  static generosAceptados(){
    return this.generosAceptados();
  }
  getGenerosAceptados(){
    return ["Action", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy",
     "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport",
     "Talk-Show", "Thriller", "War", "Western"].map(e => e.toLowerCase());
  }

  validacionCadenas(dato, cadena) {
    if (!cadena) return console.error(`${dato} invalido`);
    if (typeof cadena !== "string") return console.error(`${dato} invalido`);
  }

  validacionIdImdb(idImdb) {
    console.log(`idImdb: ${idImdb}`);
    this.validacionCadenas("IdImdb",idImdb);
    if (/^[a-zA-Z]{2}[0-9]{7}$/.test(idImdb) === false) return console.error(`"${idImdb}" no es una ID válida`);
    return true;
  }

  validacionTitulo(titulo){
    console.log(titulo);
    this.validacionCadenas("titulo",titulo);
    if (/^.{1,100}$/.test(titulo) === false) return console.error(`"${titulo}" no es un título valido`);
    return true;
  }

  validacionDirector(director){
    console.log(director);
    this.validacionCadenas("director",director);
    if (/^.{1,50}$/.test(director) === false) return console.error(`"${director}" no es un director valido`);
    return true;
  }

  validacionAnioEstreno(anioEstreno){
    console.log(anioEstreno);
    if(typeof anioEstreno !== "number" || Number.isInteger(anioEstreno) === false) return console.error(`${anioEstreno} no es un número válido`);
    if(!(anioEstreno.toString().split('').length === 4)) return console.error(`${anioEstreno} no es una fecha válida`);
  }
  
  validacionPais(pais){
    if(!Array.isArray(pais)) return console.error(`"${pais}" no es un arreglo`);
    if(pais.length === 0) return console.error(`"${pais}" es un arreglo vacio`);
  }

  validacionGenero(genero){
    this.validacionCadenas("genero", genero);
    genero = genero.toLowerCase();
    console.log(genero);
    console.log();
    if(this.getGenerosAceptados().includes(genero)===false) return console.error(`"${genero}" no fué encontrado`);

  }
  validacionCalif(calImdb){
    if (typeof calImdb !== "number") console.error(`"${calImdb}" no es un numero valido`); 
    calImdb = calImdb.toFixed(1);
    if (calImdb>10 || calImdb<0) return console.error(`El rango de calificación es de 1 a 10`);
    console.log(calImdb);
  }

  getFichaTecnica(){
    return console.log(
      this.idImdb, this.titulo, this.director, this.anioEstreno, this.pais, this.genero, this.calImdb
    );
  }
}

const instancia = new Pelicula({ idImdb: "AB1234567", titulo: "Terminator 2: Judgement Day", director: "James Cameron", anioEstreno: 1991, pais: ["Mexico"], genero: "horror", calImdb: 8});
instancia.getFichaTecnica();