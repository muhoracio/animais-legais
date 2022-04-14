export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  const activeCLass = "ativo";

  function activeAccordion() {
    this.classList.toggle(activeCLass);
    this.nextElementSibling.classList.toggle(activeCLass);
  }

  if (accordionList.length) {
    accordionList[0].classList.add(activeCLass);
    accordionList[0].nextElementSibling.classList.add(activeCLass);
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
