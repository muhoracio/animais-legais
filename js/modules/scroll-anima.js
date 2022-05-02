import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.alturaDeVerificacao = window.innerHeight * (60 / 100);

    this.checkDistances = debounce(this.checkDistances.bind(this), 50);
  }

  // Pega a distância de cada item
  // em relação ao topo do site
  getDistances() {
    this.distances = [...this.sections].map(section => {
      const offsetY = section.offsetTop;
      return {
        element: section,
        offsetY: Math.floor(offsetY - this.alturaDeVerificacao)
      };
    });
  }

  // Vefifica a distância de cada elemento 
  // em relação ao scroll do site
  checkDistances() {
    const pageScroll = window.pageYOffset;
    this.distances.forEach(i => {
      if (pageScroll > i.offsetY) {
        i.element.classList.add("ativo");
      } else if (i.element.classList.contains("ativo")) {
        i.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistances();
      this.checkDistances();
      window.addEventListener("scroll", this.checkDistances);
    }
    return this;
  }

  // Remove o Event de Scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistances);
  }
}
