import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const subMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("ativo");
    });
  }

  subMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
