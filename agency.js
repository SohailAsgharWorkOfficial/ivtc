  const slider = document.getElementById("featureSlider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const slideAmount = 320; // card width + gap

  // update arrows based on position
  function updateArrows() {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft <= 0) {
      prevBtn.classList.add("disabled");
    } else {
      prevBtn.classList.remove("disabled");
    }

    if (slider.scrollLeft >= maxScrollLeft - 5) {
      nextBtn.classList.add("disabled");
    } else {
      nextBtn.classList.remove("disabled");
    }
  }

  // move slider right
  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: slideAmount, behavior: "smooth" });
    setTimeout(updateArrows, 400); // wait until scroll ends
  });

  // move slider left
  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -slideAmount, behavior: "smooth" });
    setTimeout(updateArrows, 400);
  });

  // check on page load
  updateArrows();