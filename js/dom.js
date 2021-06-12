/*setTimeout(() => {
    console.log(document.getSelection().toString());    
}, 5000);*/

/*
console.log(document.getElementsByName("nombre"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.setAttribute("lang","en");



const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://soundcloud.com/paintedskiesdnb")
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");

//Data-Attributes
$linkDOM.setAttribute('data-description',"DOM")
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
*/

//const colors = ["red", "white", "black", "yellow", "purple"];
/*
for (let i = 0; i < colors.length; i++) {

    setInterval(() => {
        colors.sort(()=> Math.random() - 0.5);

        console.log(colors[i]);
        $linkDOM.setAttribute("style", `background-color: ${colors[i]}`);
      }, 1000);
    
}
  

console.log($linkDOM.style.backgroundColor);
*/
/*
const $linkDOM = document.querySelector(".link-dom");
console.log("s");
console.log(window.getComputedStyle($linkDOM));
$linkDOM.style.setProperty("set-decoration","none");
$linkDOM.style.width = "50%";
$linkDOM.style.padding = "20px";

//Variable CSS - Custom properties CSS

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
console.log(varDarkColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = "yellow"
*/
/*
const $card = document.querySelector(".card");
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
//$card.classList.remove("rotate-45");
//$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135")
$card.classList.add("sepia", "opacity-80 ");
*/
/*
const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`;

$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
*/

// 67. DOM Traversing: Recorriendo el DOM

// DOM Traversing: está enfocado a los Elementos, es decir a las etiquetas HTML

/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); // los hijos de "cards" "elementos"
console.log($cards.children[2]); // hijo 3
console.log($cards.parentElement); // retorna el elemento "body"
console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.
console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
console.log($cards.lastElementChild); // obtiene el último "Elemento" hijo
console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3
*/

// 68. DOM: Creando Elementos y Fragmentos

// Crear elementos (etiquetas HTML) dinámica a través de JS


/*
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"), 
  $figcaptionText = document.createTextNode("Arq"), // nodo de texto dentro del nodo "figcaption"
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

  
  $img.setAttribute("src","https://placeimg.com/200/200/arq");
  $img.setAttribute("alt","Arq");
  $figure.classList.add("card");

  $figcaption.appendChild($figcaptionText);
  $figure.appendChild($img);
  $figure.appendChild($figcaption);
  $cards.appendChild($figure)


  $figure.innerHTML = `
  <img src="https://placeimg.com/200/200/people" alt="People">
  <figcaption>People</figcaption>
  `
  $figure2.classList.add("card");
  $cards.appendChild($figure2)


  const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio", "Julio", "Agosto","Septiembre","Octubre", "Noviembre", "Diciembre"];

  document.write("<h3> Meses del año </h3>");
  $ul = document.createElement("ul");
  $fragment = document.createDocumentFragment();

  meses.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent= element;
    $fragment.appendChild($li)
  });
    
  
  $ul.appendChild($fragment)
  document.body.appendChild($ul);
*/
/*
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnología",
        img:"https://placeimg.com/200/200/tech"
    },
    {
        title: "Animales",
        img:"https://placeimg.com/200/200/animals"
    },
    {
        title: "Arquitectura",
        img:"https://placeimg.com/200/200/arch"
    },
    {
        title: "Gente",
        img:"https://placeimg.com/200/200/people"
    },
    {
        title: "Naturaleza",
        img:"https://placeimg.com/200/200/nature"
    },
    {
        title: "Autos",
        img:"https://placeimg.com/200/200/cars"
    }
]

cardContent.forEach(el =>{
 $template.querySelector("img").setAttribute("src",el.img);
 $template.querySelector("img").setAttribute("alt",el.title);
 $template.querySelector("figcaption").textContent = el.title;
 
 let $clone = document.importNode($template, true);
 $fragment.appendChild($clone);

});

$cards.appendChild($fragment);
*/

// 71. DOM: Modificando Elementos (Cool Style)

// Nuevo métodos para insertar
// jQuery no tiene sentido usando VanillaJs puro

/* 
.insertAdjacent... // Insertar de mandera adyacente
    .insertAdjacentElement(position,el) // Es como el ".appendChild"
    .insertAdjacentHTML(position,html) // Es como el ".innerHTML" agrega contenido HTML
    .insertAdjacentText(position,text) // Es como el ".textContent" contenido textual

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
  // $cloneCards = $cards.cloneNode(true); // Clonar todo el contenido del nodo "true"

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
 $cards.insertAdjacentElement("afterbegin", $newCard); // comentar esto si quiero ejecutar los de abajo

// $cards.prepend($newCard); // hijo primero (agrega)
// $cards.append($newCard); // hermano anterior (antes)
// $cards.before($newCard); // ultimo hijo
// $cards.after($newCard); // hermano posterior (de la section card)


function holaMundo() {
    alert("HolaMundo");
    console.log(event);
}
function saludar(nombre="Desconocid@") {
    alert(`hola ${nombre}`);
}

function removerEvento() {
    alert(`Removiendo evento ${event.type}`);
    $eventoRemover.removeEventListener("dblclick", removerEvento);
    $eventoRemover.disabled = true;
}
const $eventoSemantico = document.getElementById('evento-semantico'),
$eventoMultiple = document.getElementById('evento-multiple');
$eventoRemover = document.getElementById('evento-remover');

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e) {
    //alert("Hola mundo Manejador de eventos semanticos");
    console.log(e);
    console.log(event);
}

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e)=>{
    alert("Manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(event.target);
});

$eventoMultiple.addEventListener("click", ()=> saludar("Jon"));
$eventoRemover.addEventListener("dblclick", removerEvento);




 

