const Menubar = document.querySelector(".header-bar-icon");
const headerMenu = document.querySelector(".header-menu");
Menubar.addEventListener("click", () => {
  headerMenu.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const mainImage = document.querySelector(".main-image");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      mainImage.src = this.src;

      thumbnails.forEach((t) => t.classList.remove("active-thumb"));
      this.classList.add("active-thumb");
    });
  });
});
