const images = document.querySelectorAll(".carousel__item");
const progressBars = document.querySelectorAll(".carousel__inner-progress");

let currentSlide = 0;
let mainTimer;
let progressTimer;

function changeSlide() {
  images[currentSlide].classList.remove("carousel__item--visible");
  currentSlide >= images.length - 1 ? (currentSlide = 0) : currentSlide++;
  images[currentSlide].classList.add("carousel__item--visible");
}

function updateProgress() {
  clearInterval(progressTimer);
  const currentProgress = progressBars[currentSlide];
  currentProgress.style.width = "0px";
  let progressWith = 0;

  progressTimer = setInterval(() => {
    progressWith += 2.5;
    currentProgress.style.width = progressWith + "px";
    if (progressWith >= 120) clearInterval(progressTimer);
  }, 50);
}

function verifyProgressBar() {
  console.log("oi");
  [...progressBars].forEach((bar, index) => {
    if (index > currentSlide) {
      bar.style.width = "0%";
    } else if (index < currentSlide) {
      bar.style.width = "100%";
    }
  });
}

function start() {
  clearInterval(mainTimer);
  updateProgress();
  mainTimer = setInterval(() => {
    updateProgress();
    verifyProgressBar();
    changeSlide();
  }, 2500);
}

document
  .querySelector(".carousel__button--prev")
  .addEventListener("click", () => {
    images[currentSlide].classList.remove("carousel__item--visible");
    currentSlide <= 0 ? (currentSlide = 0) : currentSlide--;
    verifyProgressBar();
    images[currentSlide].classList.add("carousel__item--visible");
    start();
  });

document
  .querySelector(".carousel__button--next")
  .addEventListener("click", () => {
    images[currentSlide].classList.remove("carousel__item--visible");
    currentSlide >= images.length - 1 ? (currentSlide = 0) : currentSlide++;
    verifyProgressBar();
    images[currentSlide].classList.add("carousel__item--visible");
    start();
  });

start();
