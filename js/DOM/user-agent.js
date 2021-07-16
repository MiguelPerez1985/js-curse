
const d = document;
const n = navigator;
const ua = navigator.userAgent;


export default function devicesDetection(div) {
    const $div = d.querySelector(div),
    isMobile = {
     android:() => ua.match(/android/i),
     ios:() => ua.match(/iphone|ipad|ipod/i),
     windows:() => ua.match(/windows phone/i),
     any:function() {
         return this.android() || this.ios() || this.windows();
     }
    },
    isDesktop = {
     linux:()=> ua.match(/linux/i),
     mac:()=> ua.match(/mac os/i),
     windows: ()=> ua.match(/windows nt/i),   
     any:function() {
        return this.linux() || this.mac() || this.windows();
    }
    }, 
    isBrowser = {
      chrome: ()=> ua.match(/chrome/i),
      safari: ()=> ua.match(/safari/i),
      firefox: ()=> ua.match(/firefox/i),
      opera: ()=> ua.match(/opera|opera mini|mini/i),
      ie: ()=> ua.match(/msie|iemobile/i),
      edge: ()=> ua.match(/edge/i),
      any:function() {
        return this.chrome() ||this.safari() || this.firefox() || this.opera() || this.ie() || this.edge();
    }
    };
    
    $div.innerHTML = `
    <ul>
      <li>User Agent: <strong>${ua}</strong></li>
      <li>Plataforma: <strong>${isMobile.any() ? isMobile.any() : isDesktop.any()}</strong></li>
      <li>Navegador: <strong>${isBrowser.any()}</strong> </li>
    </ul>`;

    if (isBrowser.chrome()) {
        $div.innerHTML += `<p><mark>Esto solo se muestra en Google Chrome</mark></p>`
    }
    if(isDesktop.windows()){
        $div.innerHTML += `<p><mark>Descarga nuestro sistema para windows</mark></p>`
    }
    if (isMobile.android()) {
        $div.innerHTML += `<p><mark>PAGINA EXCLUSIVA PARA ANDROID</mark></p>`
    }

}