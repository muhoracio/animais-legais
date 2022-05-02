/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list);\r\n    this.activeCLass = \"ativo\";\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeCLass);\r\n    item.nextElementSibling.classList.toggle(this.activeCLass);\r\n  }\r\n\r\n  // Adiciona o evento ao Accordion\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  // Iniciar Função\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      // Ativar primeiro item\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros, observeTarget, observerClass) {\r\n    this.numeros = document.querySelectorAll(numeros);\r\n    this.observeTarget = document.querySelector(observeTarget);\r\n    this.observerClass = observerClass;\r\n\r\n    // Bind em método callback para THIS fazer referência à classe\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  }\r\n\r\n  // Recebe um elemento com número e incrementa o valor de 0 até o total\r\n  static incrementarNumero(numero) {\r\n    // Armazena o número total em uma const\r\n    const total = +numero.innerText;\r\n\r\n    // Cria incremento com base no total \r\n    // para que a animação ocorra em tempo menor\r\n    const incremento = Math.floor(total / 100);\r\n\r\n    // Inicia o timer que realiza o incremento do 0 ao total\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      \r\n      // A cada intervalo é somado o incremento ao valor start\r\n      start += incremento;\r\n\r\n      // O elemento recebe o novo valor start\r\n      numero.innerText = start;\r\n\r\n      // Verifica se o valor passou do total\r\n      if (start > total) {\r\n\r\n        // Se sim, o elemento recebe o valor de total original\r\n        // e se encerra o timer\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n\r\n      // O timer ocorre a cada 25ms \r\n      // multiplicados por um número aleatório para fluidez\r\n    }, 25 * Math.random());\r\n  }\r\n\r\n  // Inicia o incremento para cada número\r\n  animaNumeros() {\r\n    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero));\r\n  }\r\n\r\n  // Função de callback do MutationObserver\r\n  handleMutation(mutation) {\r\n\r\n    // Verifica-se se o target do MutationObserver recebeu a classe desejada\r\n    if (mutation[0].target.classList.contains(this.observerClass)) {\r\n\r\n      // Se o elemento observado recebeu a classe desejada, \r\n      // o MutationObserver é encerrado \r\n      // e a função de animar números é iniciada\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n\r\n    }\r\n  };\r\n\r\n  // Cria o MutationObserver e o coloca para observar o elemento alvo\r\n  //    Esse Observer verifica se a classe desejada foi adicionada ao elemento\r\n  addMutationObserver() {\r\n    // Cria-se o MutationObserver definindo a função de callback\r\n    this.observer = new MutationObserver(this.handleMutation);\r\n\r\n    // Define-se o que será observado pelo MutationObserver\r\n    //    1° arg.: Elemento\r\n    //    2° arg.: Objeto indicando que os atributos serão obervados\r\n    this.observer.observe(this.observeTarget, { attributes: true });\r\n  }\r\n\r\n  init() {\r\n    if (this.numeros.length && this.observeTarget) this.addMutationObserver();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay = 300) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\n\n//# sourceURL=webpack://animais_projeto/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass DropdownMenu {\r\n  constructor(dropdownMenus, events) {\r\n    this.subMenus = document.querySelectorAll(dropdownMenus);\r\n    this.activeClass = \"ativo\";\r\n    this.events = (events === undefined) ? [\"click\", \"touchstart\"] : events;\r\n    \r\n    this.activeDropdonwMenu = this.activeDropdonwMenu.bind(this);\r\n  }\r\n  \r\n  // Ativa o dropdownMenu\r\n  // e adiciona a função ousideClick\r\n  activeDropdonwMenu(event) {\r\n    event.preventDefault();\r\n    const element = event.currentTarget;\r\n    element.classList.add(this.activeClass);\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, this.events, () => {\r\n      element.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  // Adiciona os eventos ao dropdpwnMenu\r\n  addDropdownMenusEvent() {\r\n    this.subMenus.forEach((menu) => {\r\n      this.events.forEach((userEvent) => {\r\n        menu.addEventListener(userEvent, this.activeDropdonwMenu);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.subMenus.length) this.addDropdownMenusEvent();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n  // Seleciona o elemento alvo para a inserção dos dados\r\n  const tergetElement = document.querySelector(target);\r\n\r\n  // Cria a div contento informações \r\n  function createAnimalDiv(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `\r\n      <h3>${animal.specie}</h3>\r\n      <span data-numero>${animal.total}</span>\r\n    `;\r\n    return div;\r\n  }\r\n\r\n  // Preenche cada animal no elemento target\r\n  function preencherAnimais(animal) {\r\n    const divAnimal = createAnimalDiv(animal);\r\n    tergetElement.appendChild(divAnimal);\r\n  }\r\n\r\n  // Inicia animaNumeros em cada divAnimal\r\n  function initAnimaNumeros() {\r\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", \"ativo\");\r\n    animaNumeros.init();\r\n  }\r\n\r\n  // Puxa os animais de um JSON\r\n  // e cria cada animal usando createAnimalDiv()\r\n  async function criarAnimais() {\r\n    try {\r\n      // Fetch, espera a resposta\r\n      // e transforma em objeto JSON\r\n      const animaisResponde = await fetch(url);\r\n      const animaisJSON = await animaisResponde.json();\r\n\r\n      // Após a transformação em objeto JSON\r\n      // ativa a função de preencherAnimais\r\n      // e initAnimaNumeros\r\n      animaisJSON.forEach(animal => preencherAnimais(animal));\r\n      initAnimaNumeros();\r\n    } catch (erro) {\r\n      console.log(Error(erro));\r\n    }\r\n  }\r\n\r\n  return criarAnimais();\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n  fetch(url)\r\n    .then((r) => r.json())\r\n    .then((json) => {\r\n      const btcPreco = document.querySelector(target);\r\n      btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((erro) => {\r\n      console.log(Error(erro));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\r\n  constructor(funcionamento, activeClass) {\r\n    this.funcionamento = document.querySelector(funcionamento);\r\n    this.activeClass = activeClass;\r\n  }\r\n\r\n  dadosFuncionamento() {\r\n    this.semana = this.funcionamento.dataset.semana.split(\",\").map(Number);\r\n    this.horario = this.funcionamento.dataset.horario.split(\",\").map(Number);\r\n  }\r\n\r\n  dadosAgora() {\r\n    this.dataAgora = new Date();\r\n    this.hoje = this.dataAgora.getDay();\r\n    this.horaAtual = this.dataAgora.getUTCHours() - 3;\r\n  }\r\n\r\n  verifyFuncionamento() { \r\n    return (this.semana.indexOf(this.hoje) !== -1 && this.horaAtual >= this.horario[0] && this.horaAtual < this.horario[1]);\r\n  }\r\n  \r\n  ativaAberto() {\r\n    if (this.verifyFuncionamento()) this.funcionamento.classList.add(this.activeClass);\r\n  }\r\n\r\n  init() {\r\n    if (this.funcionamento) {\r\n      this.dadosFuncionamento();\r\n      this.dadosAgora();\r\n      this.ativaAberto();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nclass MenuMobile {\r\n  constructor(btn, list) {\r\n    this.menuButton = document.querySelector(btn);\r\n    this.menuList = document.querySelector(list); \r\n\r\n    // Seleciona o evento com base no tamanho da tela\r\n    this.event = (window.matchMedia(\"max-width: 700px\").matches) ? \"touchstart\" : \"click\";\r\n    // this.events = (events === undefined) ? ['touchstart', 'click'] : events;\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu() {\r\n    this.menuList.classList.add(\"active\");\r\n    this.menuButton.classList.add(\"active\");\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, [this.event], () => {\r\n      this.menuList.classList.remove(\"active\");\r\n      this.menuButton.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  addMenuButtonEvents() {\r\n    this.menuButton.addEventListener(this.event, this.openMenu);\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) this.addMenuButtonEvents();\r\n    return this;\r\n  }\r\n}\n\n//# sourceURL=webpack://animais_projeto/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, containerModal) {\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    // Bind em métodos para THIS fazer referência para a classe\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n  }\r\n\r\n  // Adiciona/Remove classe ao containerModal\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle(\"ativo\");\r\n  }\r\n  \r\n  // Previne comportamento padrão do evento ao clique e aciona toggleModal \r\n  eventToggleModal(event) {\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n  \r\n  // Aciona toggleModal quando se clica fora da caixaModal\r\n  cliqueForaModal(event) {\r\n    if (event.target === this.containerModal) this.toggleModal();\r\n  }\r\n\r\n  // Adiciona eventos de clique\r\n  addModalEvent() {\r\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\r\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\r\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoFechar && this.botaoAbrir && this.containerModal) this.addModalEvent();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, eventos, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      eventos.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    eventos.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass ScrollAnima {\r\n  constructor(sections) {\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.alturaDeVerificacao = window.innerHeight * (60 / 100);\r\n\r\n    this.checkDistances = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistances.bind(this), 50);\r\n  }\r\n\r\n  // Pega a distância de cada item\r\n  // em relação ao topo do site\r\n  getDistances() {\r\n    this.distances = [...this.sections].map(section => {\r\n      const offsetY = section.offsetTop;\r\n      return {\r\n        element: section,\r\n        offsetY: Math.floor(offsetY - this.alturaDeVerificacao)\r\n      };\r\n    });\r\n  }\r\n\r\n  // Vefifica a distância de cada elemento \r\n  // em relação ao scroll do site\r\n  checkDistances() {\r\n    const pageScroll = window.pageYOffset;\r\n    this.distances.forEach(i => {\r\n      if (pageScroll > i.offsetY) {\r\n        i.element.classList.add(\"ativo\");\r\n      } else if (i.element.classList.contains(\"ativo\")) {\r\n        i.element.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length) {\r\n      this.getDistances();\r\n      this.checkDistances();\r\n      window.addEventListener(\"scroll\", this.checkDistances);\r\n    }\r\n    return this;\r\n  }\r\n\r\n  // Remove o Event de Scroll\r\n  stop() {\r\n    window.removeEventListener(\"scroll\", this.checkDistances);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    \r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.target.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n  \r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n  \r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content) {\r\n    this.tabMenu = document.querySelectorAll(menu);\r\n    this.tabContent = document.querySelectorAll(content);  \r\n  }\r\n\r\n  // Ativa a tab de acordo com o index da mesma\r\n  activeTab(index) {\r\n    const tabContentData = this.tabContent[index].getAttribute(\"data-anime\");\r\n    this.tabContent.forEach((section) => {\r\n      section.classList.remove(\"ativo\");\r\n    });\r\n    this.tabContent[index].classList.add(\"ativo\", tabContentData);\r\n  }\r\n\r\n  // Adiciona os eventos nas tabs\r\n  addTabNavEvent() {\r\n    this.tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => {\r\n        this.activeTab(index);\r\n      });\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      // Ativar primeiro item\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\r\n  constructor(tooltips) {\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n\r\n    // Bind para THIS fazer referência à classe\r\n    this.onMouseOver = this.onMouseOver.bind(this);\r\n    this.onMouseMove = this.onMouseMove.bind(this);\r\n    this.onMouseLeave = this.onMouseLeave.bind(this);\r\n  }\r\n\r\n  // Cria a tooltip box e coloca no body\r\n  criarToolTipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  // Move a ToolTip com base na posição do mouse\r\n  onMouseMove(event) {\r\n    const tooltipBoxWidth = this.tooltipBox.clientWidth;\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + (tooltipBoxWidth + 40) > window.innerWidth) {\r\n      this.tooltipBox.style.left = `${event.pageX - (tooltipBoxWidth + 10)}px`;\r\n    } else {\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    }\r\n  }\r\n\r\n  // Remove a ToolTip e os eventos (mousemove, mouseleave)\r\n  onMouseLeave({currentTarget}) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener(\"mouseleave\", this.onMouseLeave);\r\n    currentTarget.removeEventListener(\"mousemove\", this.onMouseMove);\r\n  }\r\n\r\n  // Cria a Tooltip e adiciona os eventos (mousemove, mouseleave)\r\n  onMouseOver({currentTarget}) {\r\n    this.criarToolTipBox(currentTarget);\r\n    currentTarget.addEventListener(\"mousemove\", this.onMouseMove);\r\n    currentTarget.addEventListener(\"mouseleave\", this.onMouseLeave);\r\n  }\r\n\r\n  // Adiciona o evento de mouseover às tooltips\r\n  addTooltipEvent() {\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener(\"mouseover\", this.onMouseOver);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.tooltips.length) this.addTooltipEvent();\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#menu a[href^='#']\");\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='accordion'] dt\");\r\naccordion.init();\r\n\r\nconst tabnav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-tab='menu'] li\", \"[data-tab='content'] section\");\r\ntabnav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-modal='abrir']\", \"[data-modal='fechar']\", \"[data-modal='container']\");\r\nmodal.init();\r\n\r\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-tooltip]\");\r\ntooltip.init();\r\n\r\nconst scrollanima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"](\"[data-anime='scroll']\");\r\nscrollanima.init();\r\n\r\nconst dropdownmenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](\"[data-dropdown]\");\r\ndropdownmenu.init();\r\n\r\nconst menumobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](\"[data-menu='button']\", \"[data-menu='list']\");\r\nmenumobile.init();\r\n\r\nconst funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-semana]\", \"aberto\");\r\nfuncionamento.init();\r\n\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\"./animaisapi.json\", \".numeros-grid\");\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;