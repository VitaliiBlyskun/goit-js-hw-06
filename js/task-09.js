function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const area = document.querySelector(".widget");
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color")

button.addEventListener("click", onClickButton);

function onClickButton() {
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}

