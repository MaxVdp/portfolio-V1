const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let interval = null;

function animateText(target) {
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return target.dataset.value[index];
          }
  
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
  
      if(iteration >= target.dataset.value.length){ 
        clearInterval(interval);
      }
  
      iteration += 1 / 3;
    }, 30);
}

document.querySelector("h1").onmouseover = event => {  
  animateText(event.target);
}

window.addEventListener('load', () => {
  animateText(document.querySelector("h1"));
});