let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");

function setColor() {
  body.style.background = `linear-gradient(to left, ${color2.value}, ${color1.value})`;
  h3.innerText = body.style.background;
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
