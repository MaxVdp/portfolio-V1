const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    nav.classList.add("nav-hide");
  } else {
    nav.classList.remove("nav-hide");
  }

  lastScrollY = currentScrollY;
});