const prev = document.getElementById("prev");
const next = document.getElementById("next");

const slide = document.querySelector(".slide");
const products = document.querySelectorAll(".product");

const productStyle =
  products[0].currentStyle || window.getComputedStyle(products[0]);
const margins =
  +productStyle.marginLeft.replace(/\px/g, "") +
  +productStyle.marginRight.replace(/\px/g, "");

const itemFullWidth = products[0].clientWidth + margins;
const maxScroll = slide.scrollWidth - slide.clientWidth;

next.addEventListener("click", () => {
  const visibleItems = Math.round(slide.clientWidth / itemFullWidth);
  const newScroll = slide.scrollLeft + visibleItems * itemFullWidth;
  slide.scrollLeft = newScroll;
  if (newScroll >= maxScroll) {
    next.classList.add("inactive");
  }
  if (newScroll > 0) prev.classList.remove("inactive");
});

prev.addEventListener("click", () => {
  const visibleItems = Math.round(slide.clientWidth / itemFullWidth);
  const newScroll = slide.scrollLeft - visibleItems * itemFullWidth;
  slide.scrollLeft = newScroll;
  if (newScroll <= 0) {
    prev.classList.add("inactive");
  }
  if (newScroll < maxScroll) next.classList.remove("inactive");
});
