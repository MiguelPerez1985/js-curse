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
??ste prov??e una representaci??n estructural del documento, permitiendo modificar su contenido y presentaci??n visual mediante c??digo JS.
</p>
<p>
    <mark> El DOM no es parte de la especificaci??n de JavaScript, es una API para los navegadores.</mark>
</p>
`;

$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
*/

// 67. DOM Traversing: Recorriendo el DOM

// DOM Traversing: est?? enfocado a los Elementos, es decir a las etiquetas HTML

/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); // los hijos de "cards" "elementos"
console.log($cards.children[2]); // hijo 3
console.log($cards.parentElement); // retorna el elemento "body"
console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy ??til.
console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
console.log($cards.lastElementChild); // obtiene el ??ltimo "Elemento" hijo
console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
console.log($cards.closest("div")); // es un m??todo que busca el ancestro, el padre m??s cercano
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n??3
*/

// 68. DOM: Creando Elementos y Fragmentos

// Crear elementos (etiquetas HTML) din??mica a trav??s de JS


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

  document.write("<h3> Meses del a??o </h3>");
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
        title: "Tecnolog??a",
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

// Nuevo m??todos para insertar
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

/*
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


*/
/*
const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkEventos = document.querySelector(".eventos-flujo a");
console.log($divsEventos);

function flujoEventos(e) {
    //console.log(e);
    console.log("Hola te saluda " + this.className + " El click lo origin?? " + e.target.className);
    e.stopPropagation();
}
$divsEventos.forEach((div)=>{
    //fase burbuja
    div.addEventListener("click", flujoEventos)
    //fase captura;
    //div.addEventListener("click", flujoEventos, false);

    // otras formas: burbuja
    //div.addEventListener("click", flujoEventos, {
    //    capture:false
    //});
    // otras formas: captura
    //div.addEventListener("click", flujoEventos, {
    //    capture:true,
        //para que se ejecute solo una2
    //    once:true
    //});
})

$linkEventos.addEventListener("click", e=>{
    alert("hola");
    e.preventDefault();
    e.stopPropagation();
})
 
*/

/*
//Delegacion de eventos (al Document)
function flujoEventos(e) {
    //console.log(e);
    console.log("Hola te saluda " + this + " El click lo origin?? " + e.target.className);
    e.stopPropagation();
}
document.addEventListener("click",(e)=>{
    console.log(`Click en ${e.target}`);
    if(e.target.matches(".eventos-flujo a")){
        alert("AAAAAAAAAAAAAAAAAAAAAAAA");
        e.preventDefault();
    }
    if (e.target.matches(".eventos-flujo div")) {
        flujoEventos(e);
    }
})
*/
/*
window.addEventListener("resize", (e)=>{
    console.clear();
    console.log("Evento Resize");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console. log(window.outerWidth);
    console.log(window.outerHeight);  
    
});

window.addEventListener("scroll", e=>{
    console.clear();
    console.log("Evento Scroll");
    console.log(window.scrollX);
    console.log(window.scrollY);

})
*/
/*
window.addEventListener("load",e=>{

    console.log("Evento load");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})

document.addEventListener("DOMContentLoaded", e=>{
    console.log("DOMContentLoaded");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})
*/
/*
//BOM METODOS

const $btnAbrir = document.getElementById('abrir-ventana'),
$btnCerrar = document.getElementById('cerrar-ventana'),
$btnImprimir = document.getElementById('imprimir-ventana');

let ventana;
$btnAbrir.addEventListener("click", (e)=>{
    ventana = window.open("https://soundcloud.com/paintedskiesdnb")
})

$btnCerrar.addEventListener("click", (e)=>{
    window.close()
})

$btnImprimir.addEventListener("click", (e)=>{
    window.print();
})
*/

//OBJETOS DE BOM
/*
console.log("Objeto URL (location)");
console.log(location);
console.log(location.hostname);*/

//console.log("Objeto History");
//console.log(history);
//history.back(1);
//history.forward(1);
//history.forward.go(-1)

console.log("Objeto Navigator");
console.log(navigator);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
