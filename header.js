  window.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const hero = document.querySelector("#hero-slider");

    if (header && hero) {
      hero.style.paddingTop = header.offsetHeight + "px";
    }
  });
  function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
  }