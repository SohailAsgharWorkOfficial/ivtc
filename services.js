document.addEventListener('DOMContentLoaded', () => {
  // find elements only after DOM is ready
  const services = document.getElementById("servicesSlider");
  const wrapper = document.querySelector(".services-wrapper");
  const cards = document.querySelectorAll(".service-card");
  const btnLeft = document.querySelector(".arrow1.left");
  const btnRight = document.querySelector(".arrow1.right");

  if (!services) {
    console.error("Slider element with id #servicesSlider not found.");
    return;
  }
  if (!wrapper) {
    console.error(".services-wrapper not found.");
    return;
  }
  if (!cards || cards.length === 0) {
    console.error("No .service-card elements found.");
    return;
  }
  if (!btnLeft || !btnRight) {
    console.warn("Arrow buttons not found. Inline onclick may still work.");
  }

  const totalCards = cards.length;
  const visibleCards = 3;
  let currentIndex = 0;

  // get card width (use bounding rect for precision)
  function getCardWidth() {
    return Math.round(cards[0].getBoundingClientRect().width);
  }

  // apply transform
  function updateSlider() {
    const cardWidth = getCardWidth();
    const maxShift = Math.max(0, (totalCards - visibleCards) * cardWidth);
    // guard: don't shift more than max
    const shift = Math.min(currentIndex * cardWidth, maxShift);
    services.style.transform = `translateX(-${shift}px)`;
  }

  // expose globals so inline onclick="slideLeft()" still works
  window.slideRight = function () {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0; // loop to start
    }
    updateSlider();
  };

  window.slideLeft = function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = Math.max(0, totalCards - visibleCards); // go to last block
    }
    updateSlider();
  };

  // also attach click listeners (in case you remove inline onclick later)
  if (btnRight) btnRight.addEventListener("click", window.slideRight);
  if (btnLeft)  btnLeft.addEventListener("click", window.slideLeft);

  // ensure correct position after all images have loaded (so widths are right)
  window.addEventListener("load", () => {
    updateSlider();
  });

  // update on resize
  window.addEventListener("resize", () => {
    updateSlider();
  });

  // Prevent accidental horizontal scroll (optional)
  wrapper.addEventListener("wheel", (e) => {
    // If user scrolls horizontally via wheel, ignore default to avoid jumping
    if (Math.abs(e.deltaX) > 0 || Math.abs(e.deltaY) > 0) {
      e.preventDefault();
    }
  }, { passive: false });

  // initial call (in case script is loaded after images)
  updateSlider();
});