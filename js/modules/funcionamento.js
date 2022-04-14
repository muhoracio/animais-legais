export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  const diasFuncionamento = funcionamento.dataset.semana.split(",").map(Number);
  const horarioFuncionamento = funcionamento.dataset.horario
    .split(",")
    .map(Number);

  const dataAgora = new Date();
  const hoje = dataAgora.getDay();
  const horaAtual = dataAgora.getHours();

  const aberto =
    diasFuncionamento.indexOf(hoje) !== -1 &&
    horaAtual >= horarioFuncionamento[0] &&
    horaAtual < horarioFuncionamento[1];

  if (aberto) {
    funcionamento.classList.add("aberto");
  }
}
