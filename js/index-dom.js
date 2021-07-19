import hamburgerMenu from "./DOM/menu-hamburguesa-2.js";
import { clock, alarm } from "./DOM/reloj-digital.js";
import { keyEvent, shortcut } from "./DOM/eventos-teclado.js";
import countDown from "./DOM/cuenta-regresiva.js";
import scrollTop from "./DOM/auto-scroll.js";
import darkLight from "./DOM/darklight-button.js";
//import responsiveMedia from "./DOM/responsive.js";
import responsiveTest from "./DOM/responsive-tester.js";
import devicesDetection from "./DOM/user-agent.js";
import status from "./DOM/conecction-status.js";
import detectionWebCam from "./DOM/deteccion-webcam.js";


const d = document;



d.addEventListener("DOMContentLoaded", (e) => {   
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  clock(".clock", "#btnPlay", "#btnStop");
  alarm("#alarm", "#btnAlarm", "#btnStopAlarm");
  countDown(
    "June 29, 2022, 00:00:00",
    ".countDownContainer",
    "Mily's Birthday 🎂",
    "¡Feliz Cumple!🎂 🎉🎊"
  );
  scrollTop(".autoScroll-btn");
  darkLight(".darkLight-btn", "dark-mode");
  devicesDetection("#userAgent");
  /*responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=G98jFDyKYbc" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315"
     src="https://www.youtube.com/embed/G98jFDyKYbc" title="YouTube video player" frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
     gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/ddQq8gninwVjxZJL8" target="_blank" rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2742566.9828648698!2d-2.
    643129276252961!3d51.96679807933933!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sgt!4v1626297313896!5m2!1ses!2sgt" 
    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );*/
  responsiveTest("responsiveTester");
  detectionWebCam(".webCam");
  
});

d.addEventListener("keydown", (e) => {
  keyEvent(e, ".ball", ".stage");
  shortcut(e);
});
status(".online",".offline");
