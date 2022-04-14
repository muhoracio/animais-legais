import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {}

const menuButton = document.querySelector("[data-menu='button']");
const menuList = document.querySelector("[data-menu='list']");
const eventos = window.matchMedia("(max-width: 700px)").mathes
  ? ["touchstart"]
  : ["click"];

function openMenu() {
  menuList.classList.add("active");
  menuButton.classList.add("active");
  outsideClick(menuList, eventos, () => {
    menuList.classList.remove("active");
    menuButton.classList.remove("active");
  });
}

eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
