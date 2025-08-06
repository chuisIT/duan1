const sliderItem = document.querySelectorAll(".slider-img");
const sliderItems = document.querySelector(".slider-imgs");
const arrowRight = document.querySelector(".ri-arrow-right-fill");
const arrowLeft = document.querySelector(".ri-arrow-left-fill");
let i = 0;
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + "%";
}
function sliderMove(i) {
  sliderItems.style.left = -i * 100 + "%";
}
arrowRight.addEventListener("click", () => {
  if (i < sliderItem.length - 1) {
    i++;
    sliderMove(i);
  } else return false;
});
arrowLeft.addEventListener("click", () => {
  if (i <= 0) {
    return false;
  }
  {
    i--;
    sliderMove(i);
  }
});
function autoSlider() {
  if (i < sliderItem.length - 1) {
    i++;
  } else {
    i = 0;
  }
  sliderMove(i);
}
setInterval(autoSlider, 4000);

// menubar responsive
const Menubar = document.querySelector(".header-bar-icon");
const headerMenu = document.querySelector(".header-menu");
Menubar.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    header.classList.add("scroll-active");
  } else {
    header.classList.remove("scroll-active");
  }
});
