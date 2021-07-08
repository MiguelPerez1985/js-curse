// Look for .hamburger
const $hamburger = document.querySelector(".hamburger"),
$toggleBar = document.querySelector(".toggle-bar-closed"),
$toggleContent = document.querySelector(".toggle-content"),
$toggleMenu = document.querySelector(".toggle-menu"),
$seccionSelect = document.querySelectorAll(".section a");

// On click
$hamburger.addEventListener("click", function() {
    console.log("AAAAAAAAAAAA");
  // Toggle class "is-active"
  $toggleMenu.classList.toggle("toggle-menu-opened");
  $toggleContent.classList.toggle("toggle-content-opened");
  $toggleBar.classList.toggle("toggle-bar-opened");
  $hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});



$seccionSelect.forEach((a)=>{
  a.addEventListener("click", flujoEventos)
})

function flujoEventos(){
    console.log("uwu");
    $toggleBar.classList.remove("toggle-bar-opened");
    $toggleContent.classList.toggle("toggle-content");
    $hamburger.classList.remove("is-active");
}

