const form = document.querySelector("#form");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const formControls = document.querySelectorAll(".form_control")


form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
    let countForm = 0;
    for (let formControl of formControls) {
        if (formControl.className === "form_control success") {
            countForm += 1;
        }
    } if (countForm === 4) {
        setTimeout(function () { alert("you have successfully registered"); }, 1000);
    }

})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (firstNameValue === "") {
        setErrorFor(firstName, "First Name can't be empty");
    } else {
        setSuccessFor(firstName)
    }

    if (lastNameValue === "") {
        setErrorFor(lastName, "Last Name can't be empty");
    } else {
        setSuccessFor(lastName)
    }

    if (emailValue === "") {
        setErrorFor(email, "Email can't be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email")
    }
    else {
        setSuccessFor(email)
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password can't be empty");
    } else {
        setSuccessFor(password)
    }

}
function isEmail(input) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);

}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small")

    formControl.className = "form_control error"
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form_control success"
}