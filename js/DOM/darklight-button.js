const d = document;

export default function darkLight(botonDarkLight, classDark) {
  const $themeBtn = d.querySelector(botonDarkLight);
  const $selectors = d.querySelectorAll("[data-dark]");
  let moon = "🌙",
    sun = "☀️";
  let myStorage = window.localStorage;

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
          myStorage.setItem("theme", "dark");
        });
      } else {
        $selectors.forEach((el) => {
          el.classList.remove(classDark);
          $themeBtn.textContent = moon;
          myStorage.setItem("theme", "light");
        });
      }
    }
  });
}
