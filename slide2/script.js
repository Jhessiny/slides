const carouselSlide = document.querySelector(".carousel-slide")
const carouselImgs = document.querySelectorAll(".carousel-slide img")

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")

let counter = 1;
const size = carouselImgs[0].clientWidth;

carouselSlide.style.transform = `translateX(${-size * counter}px)`

function changeSlide(prev = false){
    if(counter <= 0 || counter >= carouselImgs.length -1) return;
    prev ? counter-- : counter++;
    carouselSlide.classList.add("slide-transition");
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
}

nextBtn.addEventListener("click", ()=> {
    changeSlide();
})

prevBtn.addEventListener("click", ()=> {
    changeSlide(true);
})

carouselSlide.addEventListener("transitionend", ()=> {

   if(carouselImgs[counter].id === "first-clone"){
       carouselSlide.classList.remove("slide-transition");
       counter = carouselImgs.length - counter; 
       carouselSlide.style.transform = `translateX(${-size * counter}px)`
   } 
   else if(carouselImgs[counter].id === "last-clone"){
    carouselSlide.classList.remove("slide-transition");
    counter = carouselImgs.length - 2; 
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
}
})