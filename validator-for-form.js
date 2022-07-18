const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const email = document.querySelector("#email");
const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById("form");
const submitButton = document.querySelector(".create-acc");

let truthy_or_falsy_like_a_parsly = [];

// for when user submits data to server
// --------------------------------------------------------------
/* form.addEventListener("submit", (event) => {
        truthy_or_falsy_like_a_parsly = true;
        nameValidation(event);
        emailValidation(event);
        passwordValidation(event);

    }); */
// --------------------------------------------------------------

// top addeventlistener will not work if this one is active
// for when user clicks on button
submitButton.addEventListener("click", (event) => {
    nameValidation(event);
    emailValidation(event);
    passwordValidation(event);
    secretStuff(truthy_or_falsy_like_a_parsly, event);
});

/* makes sure that first and last name is not empty */
function nameValidation(event) {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();

    if (firstNameValue === "") {
        errorCssStyling();
        event.preventDefault();
        truthy_or_falsy_like_a_parsly.push(false);
    }

    if (lastNameValue === "") {
        errorCssStyling();
        event.preventDefault();
        truthy_or_falsy_like_a_parsly.push(false);
    }
}

function emailValidation(event) {
    const emailValue = email.value.trim();

    // make sure email is not empty
    if (emailValue === "") {
        errorCssStyling();
        event.preventDefault();
        truthy_or_falsy_like_a_parsly.push(false);
    }

    // then check if email is a valid format
    else if (!emailRegex.test(emailValue)) {
        errorCssStyling();
        email.classList.add("error", "invalidEmailAddress");
        event.preventDefault();
        truthy_or_falsy_like_a_parsly.push(false);
        truthy_or_falsy_like_a_parsly = [];
    }
}

function passwordValidation(event) {
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    // make sure passwords are not empty
    if (passwordValue === "") {
        errorCssStyling();
        event.preventDefault();
        truthy_or_falsy_like_a_parsly.push(false);
        return;
    }

    if (confirmPasswordValue === "") {
        errorCssStyling();
        confirmPassword.classList.add("error", "matchingPasswordsFalse");
        event.preventDefault();
        truthy_or_falsy_like_a_parsly.push(false);
        return;
    }

    // if passwords do not match error
    if (passwordValue !== confirmPasswordValue) {
        errorCssStyling();
        confirmPassword.classList.add("error", "matchingPasswordsFalse");
        event.preventDefault();
        truthy_or_falsy_like_a_parsly.push(false);
        return;
    }

    confirmPassword.classList.remove("matchingPasswordsFalse");
}

// Phone number validation do this thing bruh https://github.com/googlei18n/libphonenumber

function errorCssStyling() {
    const requiredInputs = document.querySelectorAll("input[required='true']");
    requiredInputs.forEach((input) => {
        input.classList.add("error");
    });
}

function secretStuff(lawlDud, event) {
    console.log("deeznuttzs");

    if (!lawlDud.includes(false)) {
        event.preventDefault();
        location.replace("https://youtu.be/T14DQkV0fEQ");

        /*  window.location.replace("https://youtu.be/T14DQkV0fEQ");

        window.location.href = "https://youtu.be/T14DQkV0fEQ"; */
    }
    truthy_or_falsy_like_a_parsly = [];
    console.log("the end");
}
