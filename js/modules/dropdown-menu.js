import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.subMenus = document.querySelectorAll(dropdownMenus);
    this.subMenusAttributeName = dropdownMenus.replace(/[.#[\]]/g, "");
    this.activeClass = "ativo";
    this.events = (events === undefined) ? ["click", "touchstart"] : events;
    
    this.activeDropdonwMenu = this.activeDropdonwMenu.bind(this);
  }
  
  // Ativa o dropdownMenu
  // e adiciona a função ousideClick
  activeDropdonwMenu(event) {
    // Verifica se o click foi no link principal
    // ou do item do dropdown. Se o click for no link
    // principal, se previne o padrão do evento
    if (event.target.parentElement.hasAttribute(this.subMenusAttributeName)) event.preventDefault();

    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, (e) => {
      // Verfica se a tela é mobile
      if (window.matchMedia("(max-width: 700px)").matches) {
        // Verifica se o clique foi em um link
        // Se não fecha o dropdpwn
        if (!e.target.hasAttribute("href")) element.classList.remove(this.activeClass);
      } else {
        element.classList.remove(this.activeClass);
      }
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
    return this;
  }
}
