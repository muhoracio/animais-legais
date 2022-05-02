import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(btn, list) {
    this.menuButton = document.querySelector(btn);
    this.menuList = document.querySelector(list); 

    // Seleciona o evento com base no tamanho da tela
    this.event = (window.matchMedia("max-width: 700px").matches) ? "touchstart" : "click";
    // this.events = (events === undefined) ? ['touchstart', 'click'] : events;

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add("active");
    this.menuButton.classList.add("active");
    outsideClick(this.menuList, [this.event], () => {
      this.menuList.classList.remove("active");
      this.menuButton.classList.remove("active");
    });
  }

  addMenuButtonEvents() {
    this.menuButton.addEventListener(this.event, this.openMenu);
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuButtonEvents();
  }
}