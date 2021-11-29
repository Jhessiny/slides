const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cards = document.querySelectorAll(".card");
const slide = document.querySelector(".slide");

const cardStyle = cards[0].currentStyle || window.getComputedStyle(cards[0]);
const margins =
  +cardStyle.marginLeft.replace(/\D/g, "") +
  +cardStyle.marginRight.replace(/\D/g, "");
const itemFullWidth = cards[0].clientWidth + margins;

const maxScroll = slide.scrollWidth - slide.clientWidth;

next.addEventListener("click", () => {
  const visibleItems = Math.floor(slide.clientWidth / itemFullWidth);
  const newScroll = slide.scrollLeft + visibleItems * itemFullWidth;
  slide.scrollLeft = newScroll;
  if (newScroll >= maxScroll) {
    next.classList.add("inactive");
  }
  if (newScroll > 0) prev.classList.remove("inactive");
});

prev.addEventListener("click", () => {
  const visibleItems = Math.floor(slide.clientWidth / itemFullWidth);
  const newScroll = slide.scrollLeft - visibleItems * itemFullWidth;
  slide.scrollLeft = newScroll;
  console.log(newScroll);
  if (newScroll <= 0) {
    prev.classList.add("inactive");
  }
  if (newScroll < maxScroll) next.classList.remove("inactive");
});
