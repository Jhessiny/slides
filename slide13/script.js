class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`);
    this.active = 0;
    this.init();
  }
  changeSlide(index) {
    this.items[this.active].classList.remove("active");
    this.progressItems[this.active].classList.remove("active");

    this.active = index;

    this.items[index].classList.add("active");
    this.progressItems[index].classList.add("active");
    this.autoSlide();
  }

  nextSlide() {
    if (this.active < this.items.length - 1) {
      this.changeSlide(this.active + 1);
    } else {
      this.changeSlide(0);
    }
  }

  prevSlide() {
    if (this.active > 0) {
      this.changeSlide(this.active - 1);
    } else {
      this.changeSlide(this.items.length - 1);
    }
  }

  autoSlide() {
    clearInterval(this.timer);
    this.timer = setInterval(this.nextSlide, 2000);
  }

  addNavigation() {
    const nextBtn = this.slide.querySelector(".slide-next");
    const prevBtn = this.slide.querySelector(".slide-prev");
    nextBtn.addEventListener("click", this.nextSlide);
    prevBtn.addEventListener("click", this.prevSlide);
  }

  addProgressItems() {
    this.items.forEach(() =>
      this.progress.insertAdjacentHTML("beforeend", "<span></span>")
    );
    this.progressItems = Array.from(this.progress.children);
  }

  init() {
    this.items = this.slide.querySelectorAll(".slide-items > *");
    this.progress = this.slide.querySelector(".slide-progress");
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.addNavigation();
    this.addProgressItems();
    this.changeSlide(0);
    this.autoSlide();
  }
}

new SlideStories("slide");
