const swipeImage = () => {
  const slides = document.querySelectorAll('.single-slide');
  const nextBtn = document.querySelector('.next-btn');
  const backBtn = document.querySelector('.back-btn');

  let activeImage = 1;

  function next() {
    if (activeImage == 4) {
      activeImage == 1;
    } else activeImage++;
  }

  function back() {
    if (activeImage == 1) {
      activeImage == 4;
    } else activeImage--;
  }

  function updateImage(index) {}

  return {
    next,
    back,
  };
};

nextBtn.addEventListener('click', swipeImage.next);
