(()=>{"use strict";function t(t,e,s){const i=document.documentElement,o="data-outside";function n(a){t.contains(a.target)||(t.removeAttribute(o),e.forEach((t=>{i.removeEventListener(t,n)})),s())}t.hasAttribute(o)||(e.forEach((t=>{setTimeout((()=>i.addEventListener(t,n)))})),t.setAttribute(o,""))}class e{constructor(t,e,s){this.numeros=document.querySelectorAll(t),this.observeTarget=document.querySelector(e),this.observerClass=s,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,s=Math.floor(e/100);let i=0;const o=setInterval((()=>{i+=s,t.innerText=i,i>e&&(t.innerText=e,clearInterval(o))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observeTarget,{attributes:!0})}init(){return this.numeros.length&&this.observeTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),void 0===this.options?this.options={behavior:"smooth",block:"start"}:this.options=e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.legth&&this.addLinkEvent(),this}}("#menu a[href^='#']").init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeCLass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeCLass),t.nextElementSibling.classList.toggle(this.activeCLass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}("[data-anime='accordion'] dt").init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e)}activeTab(t){const e=this.tabContent[t].getAttribute("data-anime");this.tabContent.forEach((t=>{t.classList.remove("ativo")})),this.tabContent[t].classList.add("ativo",e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.activeTab(e)}))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}("[data-tab='menu'] li","[data-tab='content'] section").init(),new class{constructor(t,e,s){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(s),this.eventToggleModal=this.eventToggleModal.bind(this),this.cliqueForaModal=this.cliqueForaModal.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}cliqueForaModal(t){t.target===this.containerModal&&this.toggleModal()}addModalEvent(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.cliqueForaModal)}init(){return this.botaoFechar&&this.botaoAbrir&&this.containerModal&&this.addModalEvent(),this}}("[data-modal='abrir']","[data-modal='fechar']","[data-modal='container']").init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this)}criarToolTipBox(t){const e=document.createElement("div"),s=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=s,document.body.appendChild(e),this.tooltipBox=e}onMouseMove(t){const e=this.tooltipBox.clientWidth;this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+(e+40)>window.innerWidth?this.tooltipBox.style.left=t.pageX-(e+10)+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}onMouseOver({currentTarget:t}){this.criarToolTipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipEvent(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipEvent(),this}}("[data-tooltip]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.alturaDeVerificacao=.6*window.innerHeight,this.checkDistances=function(t,e=300){let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{t(...i),s=null}),e)}}(this.checkDistances.bind(this),50)}getDistances(){this.distances=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offsetY:Math.floor(e-this.alturaDeVerificacao)}}))}checkDistances(){const t=window.pageYOffset;this.distances.forEach((e=>{t>e.offsetY?e.element.classList.add("ativo"):e.element.classList.contains("ativo")&&e.element.classList.remove("ativo")}))}init(){this.sections.length&&(this.getDistances(),this.checkDistances(),window.addEventListener("scroll",this.checkDistances))}stop(){window.removeEventListener("scroll",this.checkDistances)}}("[data-anime='scroll']").init(),new class{constructor(t,e){this.subMenus=document.querySelectorAll(t),this.activeClass="ativo",this.events=void 0===e?["click","touchstart"]:e,this.activeDropdonwMenu=this.activeDropdonwMenu.bind(this)}activeDropdonwMenu(e){e.preventDefault();const s=e.currentTarget;s.classList.add(this.activeClass),t(s,this.events,(()=>{s.classList.remove(this.activeClass)}))}addDropdownMenusEvent(){this.subMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdonwMenu)}))}))}init(){this.subMenus.length&&this.addDropdownMenusEvent()}}("[data-dropdown]").init(),new class{constructor(t,e){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.event=window.matchMedia("max-width: 700px").matches?"touchstart":"click",this.openMenu=this.openMenu.bind(this)}openMenu(){this.menuList.classList.add("active"),this.menuButton.classList.add("active"),t(this.menuList,[this.event],(()=>{this.menuList.classList.remove("active"),this.menuButton.classList.remove("active")}))}addMenuButtonEvents(){this.menuButton.addEventListener(this.event,this.openMenu)}init(){this.menuButton&&this.menuList&&this.addMenuButtonEvents()}}("[data-menu='button']","[data-menu='list']").init(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),s=t.dataset.horario.split(",").map(Number),i=new Date,o=i.getDay(),n=i.getHours();-1!==e.indexOf(o)&&n>=s[0]&&n<s[1]&&t.classList.add("aberto")}(),function(t,s){const i=document.querySelector(".numeros-grid");!async function(){try{const t=await fetch("../animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`\n      <h3>${t.specie}</h3>\n      <span data-numero>${t.total}</span>\n    `,e}(t);i.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(Error(t))}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(100/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(Error(t))}))})();