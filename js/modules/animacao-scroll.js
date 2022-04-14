export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  function animaScroll() {
    sections.forEach((section) => {
      const windowAltura = window.innerHeight * (60 / 100);
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowAltura < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
