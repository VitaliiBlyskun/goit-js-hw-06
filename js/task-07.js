const inputText = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text")

inputText.addEventListener("input", onClickRange);

function onClickRange(event) { 
    spanText.style.fontSize = `${event.currentTarget.value}px`; 
}

