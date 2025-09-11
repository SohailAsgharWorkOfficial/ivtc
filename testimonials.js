
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.arrow.left1');
  const nextBtn = document.querySelector('.arrow.right1');

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  nextBtn.addEventListener('click', () => {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  });

  prevBtn.addEventListener('click', () => {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
