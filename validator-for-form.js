const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const form = document.getElementById("form");
const submitButton = document.querySelector(".create-acc");
form.addEventListener("submit", (event) => {
    nameValidation(event);
});
submitButton.addEventListener("click", (event) => {
    nameValidation(event);
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
