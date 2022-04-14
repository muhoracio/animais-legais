import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function creatAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisResponde = await fetch(url);
      const animaisJSON = await animaisResponde.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJSON.forEach((animal) => {
        const divAnimal = creatAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchAnimais("./animaisapi.json");
}
