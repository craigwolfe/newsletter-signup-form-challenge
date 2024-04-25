const newsEl = document.getElementById("news");
const successEl = document.getElementById("success");
const subscribeBtn = document.getElementById("subscribe-btn");
const emailSignupEl = document.getElementById("email-signup");

const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// function hideContainer() {
//   console.log(newsEl);
//   successEl.classList.remove("success");
//   newsEl.classList.add("hide");
// }


const validateForm = (event) => {
    event.preventDefault();
  //prevents refresh on button press
    // If the input email address is blank or not valid
    if (emailSignupEl.value === '' || !emailIsValid(emailSignupEl.value)) {
        invalidEmailMsg.classList.remove('hidden');
        emailInput.classList.add('invalid-input');
        emailInput.focus();
        return false;
    } else {
        newsletCardEl.classList.add('hidden');
        successCardEl.classList.remove('hidden');
        emailInput.classList.remove('invalid-input');
        userEmailEl.textContent = emailInput.value;
        return true;
    }
}
