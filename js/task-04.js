const decrButton = document.querySelector('[data-action="decrement"]');
const incrButton = document.querySelector('[data-action="increment"]');

const counterValueEl = document.querySelector("#value");

let counterValue = 0;


decrButton.addEventListener("click", onClickDecrement)

function onClickDecrement() {
    counterValue -= 1;
    return counterValueEl.textContent = counterValue
}

incrButton.addEventListener("click", onClickIncrement);

function onClickIncrement(){
    counterValue += 1;
    return counterValueEl.textContent = counterValue
}









