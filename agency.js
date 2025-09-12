const slider = document.getElementById("featureSlider");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const boxWidth = 320; // match min-width + gap

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({ left: boxWidth, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -boxWidth, behavior: "smooth" });
  });