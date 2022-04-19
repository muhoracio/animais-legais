export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // Bind em métodos para THIS fazer referência para a classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Adiciona/Remove classe ao containerModal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }
  
  // Previne comportamento padrão do evento ao clique e aciona toggleModal 
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  
  // Aciona toggleModal quando se clica fora da caixaModal
  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }

  // Adiciona eventos de clique
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoFechar && this.botaoAbrir && this.containerModal) this.addModalEvent();
    return this;
  }
}
