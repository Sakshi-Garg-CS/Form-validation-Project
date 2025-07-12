// Wait until the entire DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get form and input elements by their IDs
  const form = document.getElementById("myForm");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Function to validate Username field
  function validateUsername() {
    const error = document.getElementById("usernameerror");
    if (username.value.length < 5) {
      error.textContent = "Username must be at least 5 characters.";
      username.classList.add("invalid");
      username.classList.remove("valid");
      return false;
    }
    error.textContent = "";
    username.classList.add("valid");
    username.classList.remove("invalid");
    return true;
  }

  // Function to validate Email field using basic regex pattern
  function validateEmail() {
    const error = document.getElementById("emailerror");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Checks for @ and domain format
    if (!email.value.match(emailPattern)) {
      error.textContent = "Enter a valid email.";
      email.classList.add("invalid");
      email.classList.remove("valid");
      return false;
    }
    error.textContent = "";
    email.classList.add("valid");
    email.classList.remove("invalid");
    return true;
  }

  // Function to validate Phone Number field
  function validatePhone() {
    const error = document.getElementById("phoneError");
    const phoneValue = phone.value.trim();
    // Checks if phone number is 10 digits, not "1234567890", and numeric only
    if (phoneValue === "1234567890" || phoneValue.length !== 10 || isNaN(phoneValue)) {
      error.textContent = "Enter a valid 10-digit phone number.";
      phone.classList.add("invalid");
      phone.classList.remove("valid");
      return false;
    }
    error.textContent = "";
    phone.classList.add("valid");
    phone.classList.remove("invalid");
    return true;
  }

  // Function to validate Password field
  function validatePassword() {
    const error = document.getElementById("passworderror");
    if (password.value.length < 8) {
      error.textContent = "Password must be at least 8 characters.";
      password.classList.add("invalid");
      password.classList.remove("valid");
      return false;
    }
    error.textContent = "";
    password.classList.add("valid");
    password.classList.remove("invalid");
    return true;
  }

  // Function to validate Confirm Password field matches Password field
  function validateConfirmPassword() {
    const error = document.getElementById("confirmPassworderror");
    if (password.value !== confirmPassword.value) {
      error.textContent = "Password does not match.";
      confirmPassword.classList.add("invalid");
      confirmPassword.classList.remove("valid");
      return false;
    }
    error.textContent = "";
    confirmPassword.classList.add("valid");
    confirmPassword.classList.remove("invalid");
    return true;
  }

  // Attach real-time validation using input event listeners
  username.addEventListener("input", validateUsername);
  email.addEventListener("input", validateEmail);
  phone.addEventListener("input", validatePhone);
  password.addEventListener("input", validatePassword);
  confirmPassword.addEventListener("input", validateConfirmPassword);

  // Validate all fields when form is submitted
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting if validations fail

    if (
      validateUsername() &&
      validateEmail() &&
      validatePhone() &&
      validatePassword() &&
      validateConfirmPassword()
    ) {
      alert("Form submitted successfully!");
      form.reset(); // Clear form fields after successful submission
    }
  });
});
