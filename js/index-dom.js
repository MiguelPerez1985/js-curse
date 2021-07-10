import hamburgerMenu from "./DOM/menu-hamburguesa-2.js";
import {clock, alarm} from "./DOM/reloj-digital.js";
import {keyEvent, shortcut} from "./DOM/eventos-teclado.js";
const d = document;
d.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    clock(".clock","#btnPlay","#btnStop");
    alarm("#alarm","#btnAlarm", "#btnStopAlarm");
    keyEvent(".circleEvent");
    shortcut();
})
