export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeCLass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeCLass);
    item.nextElementSibling.classList.toggle(this.activeCLass);
  }

  // Adiciona o evento ao Accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // Iniciar Função
  init() {
    if (this.accordionList.length) {
      // Ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
