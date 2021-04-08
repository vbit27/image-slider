const nextBtn = document.querySelector('.next-btn');
const backBtn = document.querySelector('.back-btn');
const slideDots = document.querySelectorAll('.dot');

const swipeImage = (() => {
  const slides = document.querySelectorAll('.single-image');

  let activeImage = 0;

  function next() {
    if (activeImage === slides.length - 1) {
      activeImage = 0;
    } else {
      activeImage++;
    }
    updateImage(activeImage);
    updateDot(activeImage);
  }

  function back() {
    if (activeImage == 0) {
      activeImage = slides.length - 1;
    } else {
      activeImage--;
    }
    updateImage(activeImage);
    updateDot(activeImage);
  }

  // find the index of the selected dot
  function selectDot() {
    let index = Array.from(slideDots).indexOf(this);
    activeImage = index;
    updateImage(index);
    updateDot(index);
  }

  //update images and dot style
  function updateImage(index) {
    clearImageClass();
    slides[index].classList.toggle('visible');
  }

  function updateDot(index) {
    clearDotClass();
    slideDots[index].classList.toggle('active');
  }

  function clearDotClass() {
    slideDots.forEach((dot) => dot.classList.remove('active'));
  }

  function clearImageClass() {
    slides.forEach((slide) => slide.classList.remove('visible'));
  }

  return {
    next,
    back,
    selectDot,
  };
})();

nextBtn.addEventListener('click', swipeImage.next);
backBtn.addEventListener('click', swipeImage.back);
slideDots.forEach((dot) => dot.addEventListener('click', swipeImage.selectDot));
