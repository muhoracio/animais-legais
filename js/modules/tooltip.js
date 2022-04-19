export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // Bind para THIS fazer referência à classe
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  // Cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Move a ToolTip com base na posição do mouse
  onMouseMove(event) {
    const tooltipBoxWidth = this.tooltipBox.clientWidth;
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + (tooltipBoxWidth + 40) > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - (tooltipBoxWidth + 10)}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a ToolTip e os eventos (mousemove, mouseleave)
  onMouseLeave({currentTarget}) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a Tooltip e adiciona os eventos (mousemove, mouseleave)
  onMouseOver({currentTarget}) {
    this.criarToolTipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // Adiciona o evento de mouseover às tooltips
  addTooltipEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) this.addTooltipEvent();
    return this;
  }
}
