const imgBx = document.querySelector(".imgBx");
const slides = imgBx.getElementsByTagName("img");
const contentBxTexts = document.querySelectorAll(".contentBx > div");
console.log(contentBxTexts);

let i = 0;

function nextSlide() {
  slides[i].classList.remove("active");
  contentBxTexts[i].classList.remove("active");
  console.log(slides[i]);
  i = (i + 1) % slides.length;
  slides[i].classList.add("active");
  contentBxTexts[i].classList.add("active");
}

function prevSlide() {
  slides[i].classList.remove("active");
  contentBxTexts[i].classList.remove("active");
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add("active");
  contentBxTexts[i].classList.add("active");
}
