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


document.querySelector('#aboutmeLink').addEventListener('click', (event) => {
  event.preventDefault();
  let aboutme = document.querySelector('#aboutme');
  window.scroll({
    top: aboutme.offsetTop - (window.innerHeight / 2) + (aboutme.offsetHeight / 2),
    behavior: 'smooth'
  });
});



