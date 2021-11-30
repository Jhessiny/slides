const api_key = "ccca55c7f72fda4d16f7282937766219";
const base_url = "https://api.themoviedb.org/3";
const sliders = document.querySelector(".carouselbox");
let scrollPerClick;
let imagePadding = 20;
let scrollAmount = 0;

async function showMovieData() {
  const {
    data: { results: movies },
  } = await axios.get(
    base_url + "/discover/movie?api_key=" + api_key + "&sort_by=popularity.desc"
  );

  movies.map((movie, index) => {
    sliders.insertAdjacentHTML(
      "beforeend",
      `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${movie.poster_path}" />`
    );
  });

  scrollPerClick = document.querySelector(".img-1").clientWidth + imagePadding;
}

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount < sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}

showMovieData();
