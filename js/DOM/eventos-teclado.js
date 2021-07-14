const d = document;
let x = 0, y=0;


export function keyEvent(e, ball, stage) {
  const $ball = d.querySelector(ball),
  $stage = d.querySelector(stage),
  limitsStage = $stage.getBoundingClientRect(),
  limitsBall = $ball.getBoundingClientRect();
  

  switch (e.code) {
    case "ArrowUp":
      e.preventDefault();
      if(limitsStage.top < limitsBall.top){
        e.preventDefault();
        y--;
      }
      break;
    case "ArrowDown":
      e.preventDefault();
      if(limitsStage.bottom > limitsBall.bottom){
        y++;
      }
      break;
    case "ArrowLeft":
      e.preventDefault();
      if(limitsStage.left < limitsBall.left){
        x--;
      }
      break;
    case "ArrowRight":
      e.preventDefault();
      if(limitsStage.right > limitsBall.right){
        x++;
      }
      break;
  }
  $ball.style.transform = `translate(${x*15}px,${y*15}px)`;
  
}

export function shortcut(e) {
    if (e.ctrlKey && e.key === "ñ") alert("Shortcut Activado");
}
