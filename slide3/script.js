const time = 2000,
    images = document.querySelectorAll("#slider img"),
    max = images.length;

let currentImgIndex = 0;

function changeSlide(){
    images[currentImgIndex].classList.remove("selected")

    currentImgIndex++;
    if(currentImgIndex >= max) currentImgIndex = 0;

    images[currentImgIndex].classList.add("selected")
}

function start() {
    setInterval(()=> {
        changeSlide();
    }, time)
}

window.addEventListener("load", start)