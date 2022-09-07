const inputRef = document.querySelector("#name-input");
const inputContentRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);


function onInputChange(event) {
    if (inputContentRef.textContent = !event.currentTarget.value.trim()) {
    return inputContentRef.textContent = "Anonymous"
    }
    return inputContentRef.textContent = event.currentTarget.value
};







