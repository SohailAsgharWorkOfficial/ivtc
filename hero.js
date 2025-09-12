  const slides = document.querySelectorAll('.hero-slide');
  const prevArrow = document.querySelector('.arrow.left');
  const nextArrow = document.querySelector('.arrow.right');

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  nextArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });