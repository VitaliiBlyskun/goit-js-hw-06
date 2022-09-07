function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const area = document.querySelector(".widget");
const button = document.querySelector(".change-color");

button.addEventListener("click", onClickButton);

function onClickButton() {
  area.style.backgroundColor = getRandomHexColor();
}

