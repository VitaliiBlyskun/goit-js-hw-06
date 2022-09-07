const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);


function onInputBlur(event) {

    const inputLength = event.currentTarget.value.trim().length;
    const dataNumber = input.dataset.length;


 if (String(inputLength) === dataNumber) {
     input.classList.remove("invalid");
     input.classList.add("valid")
     return
 }
    input.classList.add("invalid");
};

