const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);


function onInputBlur(event) {

    const inputLength = event.currentTarget.value.trim().length;
    const dataNumber = input.dataset.length;

if (String(inputLength) === dataNumber) {
    if (input.classList.contains("invalid")) {
        input.classList.remove("invalid")
    }
    input.classList.add("valid")
    return
}
if (input.classList.contains("valid")) {
    input.classList.remove("valid");
}
   input.classList.add("invalid");
};
