const swipeImage = (() => {
  const slides = document.querySelectorAll('.single-slide');

  let activeImage = 0;

  function next() {
    if (activeImage == slides.length) {
      activeImage == 0;
    } else activeImage++;
    updateImage(activeImage);
  }

  function back() {
    if (activeImage == 0) {
      activeImage == slides.length;
    } else activeImage--;
    updateImage(activeImage);
  }

  function updateImage(index) {
    hideAll();
    slides[index].classList.toggle('visible');
  }

  function hideAll() {
    slides.forEach((slide) => slide.classList.remove('visible'));
  }

  return {
    next,
    back,
  };
})();

const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');

nextBtn.addEventListener('click', swipeImage.next);
