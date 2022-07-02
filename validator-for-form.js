const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const email = document.querySelector("#email");

const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById("form");
const submitButton = document.querySelector(".create-acc");
form.addEventListener("submit", (event) => {
    nameValidation(event);
    emailValidation(event);
});
submitButton.addEventListener("click", (event) => {
    nameValidation(event);
    emailValidation(event);
});

/* check first and last name is not empty */
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
