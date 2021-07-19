const d = document;
const w = window;
const n = navigator;

export default function status() {
  const isOnline = () => {
    const $div = d.createElement("div");
    let show, close, remove;
    function animation() {
      clearTimeout(show);
      clearTimeout(close);
      clearTimeout(remove);
      show = setTimeout(() => {$div.classList.add("show");}, 1000);
      close = setTimeout(() => {$div.classList.remove("show");}, 4000);
      remove = setTimeout(() => {d.body.removeChild($div);}, 5000);
    }
    if (n.onLine) {
      $div.innerHTML = ` <div class="online__content">
      Conexión Reestablecida
      </div>`;
      $div.classList.add("online");
      animation();
    } else {
      $div.innerHTML = ` <div class="offline__content">
      Conexión Perdida     
      </div>`;
      $div.classList.add("offline");
      animation();
    }
    d.body.insertAdjacentElement("afterbegin", $div);
  };

  w.addEventListener("offline", (e) => isOnline());
  w.addEventListener("online", (e) => isOnline());
}
