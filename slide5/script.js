const images = document.querySelectorAll(".carousel__item");

let currentSlide = 0;

function changeSlide(prev = false) {
  images[currentSlide].classList.remove("carousel__item--visible");

  if (prev) {
    if (currentSlide === 0) {
      currentSlide = images.length - 1;
    } else {
      currentSlide--;
    }
  } else {
    if (currentSlide === images.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
  }
  images[currentSlide].classList.add("carousel__item--visible");
}

document
  .getElementById("carousel__button--next")
  .addEventListener("click", () => {
    changeSlide();
  });

document
  .getElementById("carousel__button--prev")
  .addEventListener("click", () => {
    changeSlide(true);
  });
