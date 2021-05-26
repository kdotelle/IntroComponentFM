const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password = document.getElementById("button");

function validateForm(e) {
  e.preventDefault();

  let valid = true;
  if (!firstName.value) {
    const error = document.getElementById("error");
    firstName.classList.add("invalid");
    error.classList.add("visible");
    error.setAttribute("aria-hidden", false);
    error.setAttribute("aria-invalid", true);
  }

  return valid;
}
