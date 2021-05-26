const submitButton = document.getElementById("button");

function validateForm(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (!firstName.value) {
    firstName.focus();
    return false;
  }
  if (!lastName.value) {
    lastName.focus();
    return false;
  }
  if (!email.value) {
    email.focus();
    return false;
  }
  if (!password.value) {
    password.focus();
    return false;
  }
  return true;
}

submitButton.addEventListener("click", validateForm);
