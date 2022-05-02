export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.semana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horario = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.hoje = this.dataAgora.getDay();
    this.horaAtual = this.dataAgora.getUTCHours() - 3;
  }

  verifyFuncionamento() { 
    return (this.semana.indexOf(this.hoje) !== -1 && this.horaAtual >= this.horario[0] && this.horaAtual < this.horario[1]);
  }
  
  ativaAberto() {
    if (this.verifyFuncionamento()) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
