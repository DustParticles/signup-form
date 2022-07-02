const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const email = document.querySelector("#email");
const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById("form");
const submitButton = document.querySelector(".create-acc");

form.addEventListener("submit", (event) => {
    nameValidation(event);
    emailValidation(event);
    passwordValidation(event);
});
submitButton.addEventListener("click", (event) => {
    nameValidation(event);
    emailValidation(event);
    passwordValidation(event);
});

/* makes sure that first and last name is not empty */
function nameValidation(event) {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();

    if (firstNameValue === "") {
        firstName.classList.add("error");

        event.preventDefault();
    }

    if (lastNameValue === "") {
        lastName.classList.add("error");
        event.preventDefault();
    }
}

function emailValidation(event) {
    const emailValue = email.value.trim();

    // make sure email is not empty
    if (emailValue === "") {
        email.classList.add("error");
        event.preventDefault();
    }

    // then check if email is a valid format
    else if (!emailRegex.test(emailValue)) {
        email.classList.add("error", "invalidEmailAddress");
        event.preventDefault();
    }
}

function errorCssStyling() {
    const requiredInputs = document.querySelectorAll("input[required='true']");
    requiredInputs.forEach((input) => {
        input.classList.add("error");
    });
}
