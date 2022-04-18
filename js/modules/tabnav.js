export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);  
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index) {
    const tabContentData = this.tabContent[index].getAttribute("data-anime");
    this.tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    this.tabContent[index].classList.add("ativo", tabContentData);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
