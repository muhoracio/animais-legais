export default class AnimaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;

    // Bind em método callback para THIS fazer referência à classe
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento com número e incrementa o valor de 0 até o total
  static incrementarNumero(numero) {
    // Armazena o número total em uma const
    const total = +numero.innerText;

    // Cria incremento com base no total 
    // para que a animação ocorra em tempo menor
    const incremento = Math.floor(total / 100);

    // Inicia o timer que realiza o incremento do 0 ao total
    let start = 0;
    const timer = setInterval(() => {
      
      // A cada intervalo é somado o incremento ao valor start
      start += incremento;

      // O elemento recebe o novo valor start
      numero.innerText = start;

      // Verifica se o valor passou do total
      if (start > total) {

        // Se sim, o elemento recebe o valor de total original
        // e se encerra o timer
        numero.innerText = total;
        clearInterval(timer);
      }

      // O timer ocorre a cada 25ms 
      // multiplicados por um número aleatório para fluidez
    }, 25 * Math.random());
  }

  // Inicia o incremento para cada número
  animaNumeros() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));
  }

  // Função de callback do MutationObserver
  handleMutation(mutation) {

    // Verifica-se se o target do MutationObserver recebeu a classe desejada
    if (mutation[0].target.classList.contains(this.observerClass)) {

      // Se o elemento observado recebeu a classe desejada, 
      // o MutationObserver é encerrado 
      // e a função de animar números é iniciada
      this.observer.disconnect();
      this.animaNumeros();

    }
  };

  // Cria o MutationObserver e o coloca para observar o elemento alvo
  //    Esse Observer verifica se a classe desejada foi adicionada ao elemento
  addMutationObserver() {
    // Cria-se o MutationObserver definindo a função de callback
    this.observer = new MutationObserver(this.handleMutation);

    // Define-se o que será observado pelo MutationObserver
    //    1° arg.: Elemento
    //    2° arg.: Objeto indicando que os atributos serão obervados
    this.observer.observe(this.observeTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observeTarget) this.addMutationObserver();
    return this;
  }
}
