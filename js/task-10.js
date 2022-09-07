function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");


const boxes = document.querySelector("#boxes");


createBtn.addEventListener("click", onClickcreateBtn)

function onClickcreateBtn() {
  const arr = [];
  for (let i = 1; i <= Number(input.value); i += 1) {
    const wrapper = document.createElement("div")
    wrapper.style.height = wrapper.style.width = `${30 + i * 10}px`
    wrapper.style.backgroundColor = getRandomHexColor();
    arr.push(wrapper);
  }
  boxes.append(...arr)
}



destroyBtn.addEventListener("click", onClickDestroyBtn);
function onClickDestroyBtn() {
  boxes.innerHTML = "";
  input.value = "";  
}