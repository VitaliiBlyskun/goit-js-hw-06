const form = document.querySelector(".login-form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === "" ||
        event.currentTarget.elements.password.value === "") {
        return alert("Всі поля повинні бути заповнені!")
    }
    const formData = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value, 
    };
    console.log(formData);
    form.reset();
};


