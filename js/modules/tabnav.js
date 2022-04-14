export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    const tabContentData = tabContent[index].getAttribute("data-anime");
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo", tabContentData);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}