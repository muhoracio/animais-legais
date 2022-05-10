import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(btn, list, events) {
    this.menuButton = document.querySelector(btn);
    this.menuList = document.querySelector(list); 

    this.events = events ?? ['touchstart', 'click'];

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(e) {
    e.preventDefault();
    this.menuList.classList.add("active");
    this.menuButton.classList.add("active");
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove("active");
      this.menuButton.classList.remove("active");
    });
  }

  addMenuButtonEvents() {
    this.events.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu);
    })
  }

  init() {
    if (this.menuButton && this.menuList) this.addMenuButtonEvents();
    return this;
  }
}