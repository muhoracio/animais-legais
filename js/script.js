import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import Modal from "./modules/modal.js";
import ToolTip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";
import ScrollAnima from "./modules/scroll-anima.js";
import SlideNav from "./modules/slidenav";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave("#menu a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav("[data-tab='menu'] li", "[data-tab='content'] section");
tabnav.init();

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']", "[data-modal='container']");
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

const scrollanima = new ScrollAnima("[data-anime='scroll']");
scrollanima.init();

const dropdownmenu = new DropdownMenu("[data-dropdown]");
dropdownmenu.init();

const menumobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menumobile.init();

const funcionamento = new Funcionamento("[data-semana]", "aberto");
funcionamento.init();

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init().addControl(".custom-control");

fetchAnimais("./animaisapi.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
