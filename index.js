const newsEl = document.getElementById("news");
const successEl = document.getElementById("success");
const subscribeBtn = document.getElementById("subscribe-btn");
const emailSignupEl = document.getElementById("email-signup");
const validationEl=document.getElementById("validation");

const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function hideContainer() {
//   console.log(newsEl);
//   successEl.classList.remove("success");
//   newsEl.classList.add("hide");
//}

const validateForm = (event) => {
    event.preventDefault();
  //prevents refresh on button press
    // If the input email address is blank or not valid
    if (emailSignupEl.value === '' || !emailIsValid(emailSignupEl.value)) {
  //remove class hide  #validation paragraph
        validationEl.classList.remove('hide');
      //  emailSignupEl.classList.add('invalid-input');
        emailSignupEl.focus();
        return false;
    } else {
        newsEl.classList.add('hide');
        successEl.classList.remove('hide');
        emailSignupEl.classList.remove('invalid-input');
        userEmailEl.textContent = emailInput.value;
        return true;
    }
}
