const d = document;

export function keyEvent(circle) {
  const $circle = d.querySelector(circle);
  d.addEventListener("keydown", (e) => {   
    e.preventDefault();
        switch (e.code) {
            case "ArrowUp":
              $circle.style.transform += 'translateY( -3px )';
              break;
            case "ArrowDown":
              $circle.style.transform += 'translateY( 3px )';           
              break;
            case "ArrowLeft":
              $circle.style.transform += 'translateX( -3px )';  
              break;
            case "ArrowRight":
              $circle.style.transform += 'translateX(  3px )';
              break;
            default:
              break;
          }               
  });
}

export function shortcut() {
  d.addEventListener("keydown", (e)=>{
    if(e.ctrlKey && e.key =="4") alert("Shortcut Activado")  
  })
}
