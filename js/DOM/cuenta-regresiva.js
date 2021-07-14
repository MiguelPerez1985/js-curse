const d = document;
let now = new Date();
let ds = 0,
  h = 0,
  m = 0,
  s = 0,
  diffTime = 0;
  
export default function countDown(dateTarget, container, reason, finalMessage) {
  
  const $cont = d.querySelector(container);

  //Insercción de la razón de la cuenta regresiva
  $cont.insertAdjacentHTML("beforeBegin", `<h1 class="reason">${reason}</h1>`);
  dateTarget = new Date(dateTarget);
  
  //Intervalo que actualiza cada segundo los elementos de tiempo (dia, hora, min, seg)
  const i = setInterval(function () {
    now = new Date();
    diffTime = dateTarget.getTime() - now.getTime();
    
    //Si la fecha expira/caduca, incializa el tiempo en ceros 
    if (diffTime<0) {
        $cont.childNodes[1].childNodes[0].nodeValue = "0";
        $cont.childNodes[3].childNodes[0].nodeValue = "00";
        $cont.childNodes[5].childNodes[0].nodeValue = "00";
        $cont.childNodes[7].childNodes[0].nodeValue = "00";
        $cont.insertAdjacentHTML("afterend", `<h1 class="finalMessage">${finalMessage}</h1>`);
        clearInterval(i);
        return 0;
      }

    /* Cálculo de tiempo apartir de la diferencia en milisegundos 
    + concatenación de 0s en números menores que 10 */
    ds = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    h = ("0" + Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).substr(-2);
    m = ("0" + Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60))).substr(-2);
    s = ("0" + Math.floor((diffTime % (1000 * 60)) / 1000)).substr(-2);

    //Insercción del tiempo en el DOM
    $cont.childNodes[1].childNodes[0].nodeValue = ds;
    $cont.childNodes[3].childNodes[0].nodeValue = h;
    $cont.childNodes[5].childNodes[0].nodeValue = m;
    $cont.childNodes[7].childNodes[0].nodeValue = s;    
  }, 1000);
}


