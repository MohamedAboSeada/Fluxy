const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const slideWidth = slides.clientWidth;
let currentSlide = 0;

function slide() {
  slides.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = slides.children.length - 1;
  } else {
    currentSlide--;
  }
  slide();
});

nextBtn.addEventListener("click", () => {
  if (currentSlide === slides.children.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slide();
});
