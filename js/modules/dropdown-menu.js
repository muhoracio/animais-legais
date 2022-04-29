import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.subMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "ativo";
    this.events = (events === undefined) ? ["click", "touchstart"] : events;
    
    this.activeDropdonwMenu = this.activeDropdonwMenu.bind(this);
  }
  
  // Ativa o dropdownMenu
  // e adiciona a função ousideClick
  activeDropdonwMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // Adiciona os eventos ao dropdpwnMenu
  addDropdownMenusEvent() {
    this.subMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdonwMenu);
      });
    });
  }

  init() {
    if (this.subMenus.length) this.addDropdownMenusEvent();
  }
}
