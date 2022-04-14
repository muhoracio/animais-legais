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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAccordion)\n/* harmony export */ });\nfunction initAccordion() {\n  const accordionList = document.querySelectorAll(\n    \"[data-anime='accordion'] dt\"\n  );\n  const activeCLass = \"ativo\";\n\n  function activeAccordion() {\n    this.classList.toggle(activeCLass);\n    this.nextElementSibling.classList.toggle(activeCLass);\n  }\n\n  if (accordionList.length) {\n    accordionList[0].classList.add(activeCLass);\n    accordionList[0].nextElementSibling.classList.add(activeCLass);\n    accordionList.forEach((item) => {\n      item.addEventListener(\"click\", activeAccordion);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll(\"[data-numero]\");\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  const observer = new MutationObserver((mutation) => {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      observer.disconnect();\n      animaNumeros();\n    }\n  });\n  const observeTarget = document.querySelector(\".numeros\");\n  observer.observe(observeTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animacao-scroll.js":
/*!***************************************!*\
  !*** ./js/modules/animacao-scroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimacaoScroll)\n/* harmony export */ });\nfunction initAnimacaoScroll() {\r\n  const sections = document.querySelectorAll(\"[data-anime='scroll']\");\r\n\r\n  function animaScroll() {\r\n    sections.forEach((section) => {\r\n      const windowAltura = window.innerHeight * (60 / 100);\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - windowAltura < 0;\r\n      if (isSectionVisible) {\r\n        section.classList.add(\"ativo\");\r\n      } else if (section.classList.contains(\"ativo\")) {\r\n        section.classList.remove(\"ativo\");\r\n      }\r\n    });\r\n  }\r\n\r\n  if (sections.length) {\r\n    animaScroll();\r\n    window.addEventListener(\"scroll\", animaScroll);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/animacao-scroll.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initDropdownMenu() {\r\n  const subMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.add(\"ativo\");\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\", \"touchstart\"], () => {\r\n      this.classList.remove(\"ativo\");\r\n    });\r\n  }\r\n\r\n  subMenus.forEach((menu) => {\r\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\r\n      menu.addEventListener(userEvent, handleClick);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  function creatAnimal(animal) {\r\n    const div = document.createElement(\"div\");\r\n    div.classList.add(\"numero-animal\");\r\n    div.innerHTML = `\r\n      <h3>${animal.specie}</h3>\r\n      <span data-numero>${animal.total}</span>\r\n    `;\r\n    return div;\r\n  }\r\n\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponde = await fetch(url);\r\n      const animaisJSON = await animaisResponde.json();\r\n      const numerosGrid = document.querySelector(\".numeros-grid\");\r\n      animaisJSON.forEach((animal) => {\r\n        const divAnimal = creatAnimal(animal);\r\n        numerosGrid.appendChild(divAnimal);\r\n      });\r\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    } catch (erro) {\r\n      console.log(Error(erro));\r\n    }\r\n  }\r\n\r\n  fetchAnimais(\"./animaisapi.json\");\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetch-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((r) => r.json())\r\n    .then((json) => {\r\n      const btcPreco = document.querySelector(\".btc-preco\");\r\n      btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);\r\n    })\r\n    .catch((erro) => {\r\n      console.log(Error(erro));\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n\r\n  const diasFuncionamento = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioFuncionamento = funcionamento.dataset.horario\r\n    .split(\",\")\r\n    .map(Number);\r\n\r\n  const dataAgora = new Date();\r\n  const hoje = dataAgora.getDay();\r\n  const horaAtual = dataAgora.getHours();\r\n\r\n  const aberto =\r\n    diasFuncionamento.indexOf(hoje) !== -1 &&\r\n    horaAtual >= horarioFuncionamento[0] &&\r\n    horaAtual < horarioFuncionamento[1];\r\n\r\n  if (aberto) {\r\n    funcionamento.classList.add(\"aberto\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {}\r\n\r\nconst menuButton = document.querySelector(\"[data-menu='button']\");\r\nconst menuList = document.querySelector(\"[data-menu='list']\");\r\nconst eventos = window.matchMedia(\"(max-width: 700px)\").mathes\r\n  ? [\"touchstart\"]\r\n  : [\"click\"];\r\n\r\nfunction openMenu() {\r\n  menuList.classList.add(\"active\");\r\n  menuButton.classList.add(\"active\");\r\n  (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n    menuList.classList.remove(\"active\");\r\n    menuButton.classList.remove(\"active\");\r\n  });\r\n}\r\n\r\neventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector(\"[data-modal='abrir']\");\r\n  const botaoFechar = document.querySelector(\"[data-modal='fechar']\");\r\n  const containerModal = document.querySelector(\"[data-modal='container']\");\r\n\r\n  function toggleModal(event) {\r\n    event.preventDefault();\r\n    containerModal.classList.toggle(\"ativo\");\r\n  }\r\n  function cliqueFora(event) {\r\n    if (event.target === this) toggleModal(event);\r\n  }\r\n\r\n  if (botaoFechar && botaoAbrir && containerModal) {\r\n    botaoAbrir.addEventListener(\"click\", toggleModal);\r\n    botaoFechar.addEventListener(\"click\", toggleModal);\r\n    containerModal.addEventListener(\"click\", cliqueFora);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, eventos, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      eventos.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    eventos.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, \"\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (this.options === undefined) {\r\n      this.options = { behavior: \"smooth\", block: \"start\" };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.target.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.legth) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll(\"[data-tab='menu'] li\");\r\n  const tabContent = document.querySelectorAll(\"[data-tab='content'] section\");\r\n\r\n  function activeTab(index) {\r\n    const tabContentData = tabContent[index].getAttribute(\"data-anime\");\r\n    tabContent.forEach((section) => {\r\n      section.classList.remove(\"ativo\");\r\n    });\r\n    tabContent[index].classList.add(\"ativo\", tabContentData);\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add(\"ativo\");\r\n    tabMenu.forEach((itemMenu, index) => {\r\n      itemMenu.addEventListener(\"click\", () => {\r\n        activeTab(index);\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n    },\r\n  };\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\r\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\r\n    },\r\n  };\r\n\r\n  function criarToolTipBox(element) {\r\n    const tooltipBox = document.createElement(\"div\");\r\n    const text = element.getAttribute(\"aria-label\");\r\n    tooltipBox.classList.add(\"tooltip\");\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    return tooltipBox;\r\n  }\r\n\r\n  function onMouseOver(event) {\r\n    const tooltipBox = criarToolTipBox(this);\r\n    tooltipBox.style.top = `${event.pageY}px`;\r\n    tooltipBox.style.left = `${event.pageX}px`;\r\n\r\n    onMouseMove.tooltipBox = tooltipBox;\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n\r\n    onMouseLeave.tooltipBox = tooltipBox;\r\n    onMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", onMouseLeave);\r\n  }\r\n\r\n  tooltips.forEach((item) => {\r\n    item.addEventListener(\"mouseover\", onMouseOver);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animacao-scroll.js */ \"./js/modules/animacao-scroll.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#menu a[href^='#']\");\r\nscrollSuave.init();\r\n\r\n(0,_modules_animacao_scroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais_projeto/./js/script.js?");

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