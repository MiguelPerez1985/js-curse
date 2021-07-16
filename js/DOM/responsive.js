const d = document,
w = window;
let storage = window.localStorage;

export default function responsiveMedia(id, mq, mobileContent, desktopContent){
let breakpoint = w.matchMedia(mq);

const responsive = e=>{
 if (e.matches) {
     d.getElementById(id).innerHTML = desktopContent;
     //console.log(e);
 }else{
     //console.log(e);
    d.getElementById(id).innerHTML = mobileContent;
 }
 //console.log(e.matches);
}
breakpoint.addEventListener("change", responsive)
responsive(breakpoint);


}


/*
export default function responsiveJs() {
    const $selectors = d.querySelectorAll("[responsive]");
    if (window.matchMedia("(max-width: 400px)").matches) {
        // La pantalla tiene al menos 400 píxeles de ancho 
      } else {
        // La pantalla tiene menos de 400 píxeles de ancho 
      }
    w.addEventListener('resize',e=>{
        console.log(window.innerWidth +" px");
        if(window.innerWidth <= 400){
            
            $selectors.forEach(node => {
                let src = node.getAttribute("src"); 
                let a = document.createElement("a");
                console.log(src);
                if(src.includes("www.youtube.com")) a.innerHTML = "Ver Video";
                if(src.includes("www.google.com/maps")) a.innerHTML = "Ver Mapa";
                
                a.target = "_blank"
                a.setAttribute("href", src);
                node.parentNode.replaceChild(a, node);
            });
                  
        }else{

            $selectors.forEach(node => {
                let a = document.createElement("a");
                console.log(src);
                if(src.includes("www.youtube.com")) a.innerHTML = "Ver Video";
                if(src.includes("www.google.com/maps")) a.innerHTML = "Ver Mapa";

                a.target = "_blank"
                a.setAttribute("href", src);
                node.parentNode.replaceChild(a, node);
            });

        }
    }); 
}
*/