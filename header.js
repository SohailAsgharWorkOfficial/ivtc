document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked ✅"); // test message
    menu.classList.toggle("show");
  });
});
