const d = document;
let myStorage = window.localStorage;

export default function darkLight(botonDarkLight, classDark) {
  const $themeBtn = d.querySelector(botonDarkLight);
  const $selectors = d.querySelectorAll("[data-dark]");
  let moon = "🌙",
    sun = "☀️";
  

  if (myStorage.getItem("theme") == "dark") {
    $selectors.forEach((el) => {
      el.classList.add(classDark);
      $themeBtn.textContent = sun;
    });
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(botonDarkLight)) {
      if ($themeBtn.textContent.trim() === moon) {
        $selectors.forEach((el) => {
          el.classList.add(classDark);
          $themeBtn.textContent = sun;
          //Dark Mode
          myStorage.setItem("theme", "dark");
        });
      } else {
        $selectors.forEach((el) => {
          el.classList.remove(classDark);
          $themeBtn.textContent = moon;
          //Light Mode
          myStorage.setItem("theme", "light");
        });
      }
    }
  });
}
