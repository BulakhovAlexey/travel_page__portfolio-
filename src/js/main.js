// стартовый блок
let introTitle = document.querySelector(".intro__title");
let introSubTitle = document.querySelector(".intro__subtitle");
window.onload = () => {
  introTitle.classList.add("show");
  setTimeout(() => {
    introSubTitle.classList.add("show");
  }, 1000);
};
// показать элементы
function showEl(element) {
  let elToShow = document.querySelectorAll(element);
  setTimeout(() => {
    elToShow.forEach((element) => {
      element.classList.add("show");
    });
  }, 300);
}
// появление BG color у хедера  и анимация при скроле
(function () {
  const header = document.querySelector("header");
  let headerElHeight = header.clientHeight;
  let toursBlock = document.querySelector(".tours");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
      if (
        window.pageYOffset +
          toursBlock.getBoundingClientRect().top -
          headerElHeight <
        window.pageYOffset
      ) {
        showEl(".tour__item");
      }
    } else {
      header.classList.remove("header_active");
    }
  };
})();
// бургер меню
const body = document.querySelector("body");
const header = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const headerLink = document.querySelectorAll(".header_link");
header.addEventListener("click", () => {
  header.classList.toggle("header__burger_active");
  headerNav.classList.toggle("header__nav_active");
});
headerLink.forEach((element) => {
  element.addEventListener("click", () => {
    header.classList.toggle("header__burger_active");
    headerNav.classList.toggle("header__nav_active");
  });
});
// скрол к ссылкам
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".header").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };
  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();
