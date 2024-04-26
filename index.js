const newsEl = document.getElementById("news");
const successEl = document.getElementById("success");
const subscribeBtn = document.getElementById("subscribe-btn");
const emailSignupEl = document.getElementById("email-signup");
const validationEl = document.getElementById("validation");
const formEl = document.getElementById("newsletter-form");
const subscriberEmailEl = document.getElementById("subscriber-email");
const dismissBtn = document.getElementById("dismiss-btn");
//this clears the input field when page is refreshed
window.addEventListener("load", function () {
  document.getElementById("email-signup").value = "";
});

// Function to check if email is valid
const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Function to handle form validation and submission
const handleFormSubmission = (event) => {
  event.preventDefault(); // Prevent default form submission

  // If email is invalid
  if (emailSignupEl.value === "" || !emailIsValid(emailSignupEl.value)) {
    validationEl.classList.remove("hide"); // Show validation message
    emailSignupEl.classList.add("invalid-input"); // Add styling for invalid input
  } else {
    // If email is valid
    validationEl.classList.add("hide"); // Hide validation message
    emailSignupEl.classList.remove("invalid-input"); // Remove styling for invalid input

    // Hide newsletter section
    newsEl.classList.add("hide");

    // Show success message section
    successEl.classList.remove("success");

    // Update subscriber email in success message
    subscriberEmailEl.textContent = emailSignupEl.value;
  }
};

// Event listener for form submission
formEl.addEventListener("submit", handleFormSubmission);

// Event listener for dismiss button
dismissBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default button action
  formEl.reset(); // Reset form
  newsEl.classList.remove("hide"); // Show newsletter section
  validationEl.classList.add("hide"); // Hide validation message
  successEl.classList.add("success"); // Hide success message
});

// Event listener for email input blur event
emailSignupEl.addEventListener("blur", () => {
  if (emailSignupEl.value !== "") {
    // If email input is not empty, validate it
    handleFormSubmission(event);
  }
});
