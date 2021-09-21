const link = document.querySelectorAll(".link");
const arrowLink = document.querySelectorAll(".arrow-link");
const arrow = document.querySelectorAll(".arrow");
const burger = document.querySelector(".burger-container");
const list = document.querySelectorAll(".list");
const mobileList = document.querySelector(".mobile-list");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-animation");
  mobileList.classList.toggle("hidden");
  mobileList.classList.toggle("show");
  mobileList.classList.toggle("animation");
});

function showlist(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
      list[i].classList.toggle("show");
      list[i].classList.toggle("hidden");
      list[i].style.animation = "fade .5s linear ";
      arrowLink[i].classList.toggle("rotate");
    });
  }
}

showlist(link);
showlist(arrow);
