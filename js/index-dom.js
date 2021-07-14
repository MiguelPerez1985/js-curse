import hamburgerMenu from "./DOM/menu-hamburguesa-2.js";
import {clock, alarm} from "./DOM/reloj-digital.js";
import {keyEvent, shortcut} from "./DOM/eventos-teclado.js";
import countDown from "./DOM/cuenta-regresiva.js";
import scrollTop from "./DOM/auto-scroll.js";
import darkLight from "./DOM/darklight-button.js";

const d = document;
d.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    clock(".clock","#btnPlay","#btnStop");
    alarm("#alarm","#btnAlarm", "#btnStopAlarm"); 
    countDown("June 29, 2022, 00:00:00", ".countDownContainer", "Mily's Birthday 🎂","¡Feliz Cumple!🎂 🎉🎊");
    scrollTop(".autoScroll-btn");
    darkLight(".darkLight-btn", "dark-mode");
});

d.addEventListener("keydown", e=>{
    keyEvent(e,".ball", ".stage");
    shortcut(e);
});

