

const d = document;
const w = window;

export default function scrollTop(scrollButton) {
  const $b = d.querySelector(scrollButton);
  
  w.addEventListener("scroll",()=>{
    if (d.documentElement.scrollTop>= 450) $b.classList.remove('hidden')    
    if (d.documentElement.scrollTop <= 450) $b.classList.add('hidden')
  });

  d.addEventListener("click",(e)=>{
    if(e.target.matches(`${scrollButton}`)) d.documentElement.scrollTop = 0;
  });
}