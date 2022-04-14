export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    "[data-anime='menu'] a[href^='#']"
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.target.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
