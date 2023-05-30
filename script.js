const submit = document.querySelector(".submit");
// const error = document.querySelector(".errorIcon");
const errorMsg = document.querySelector(".errorMessage");
const form = document.querySelector("form");
const input = document.querySelector("input");
const label = document.querySelector("label");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const inputValue = input.value.trim();

    if (inputValue === "") {
        errorMsg.style.display = "block";
        label.style.display = "block";

    } else if (!isEmail(inputValue)) {
        errorMsg.style.display = "block";
        label.style.display = "block";

    } else {
        errorMsg.style.display = "none";
        label.style.display = "none";
        form.reset();
    }
}

function isEmail(input) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input)

}



