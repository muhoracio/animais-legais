import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Seleciona o elemento alvo para a inserção dos dados
  const tergetElement = document.querySelector(target);

  // Cria a div contento informações 
  function createAnimalDiv(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  // Preenche cada animal no elemento target
  function preencherAnimais(animal) {
    const divAnimal = createAnimalDiv(animal);
    tergetElement.appendChild(divAnimal);
  }

  // Inicia animaNumeros em cada divAnimal
  function initAnimaNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Puxa os animais de um JSON
  // e cria cada animal usando createAnimalDiv()
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta
      // e transforma em objeto JSON
      const animaisResponde = await fetch(url);
      const animaisJSON = await animaisResponde.json();

      // Após a transformação em objeto JSON
      // ativa a função de preencherAnimais
      // e initAnimaNumeros
      animaisJSON.forEach(animal => preencherAnimais(animal));
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
