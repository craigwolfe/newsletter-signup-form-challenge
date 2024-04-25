const newsEl = document.getElementById("news");
const successEl = document.getElementById("success");
const subscribeBtn = document.getElementById("subscribe-btn");
const emailSignupEl = document.getElementById("email-signup");
const validationEl=document.getElementById("validation");
const subscriberEmailEl = document.getElementById("subscriber-email");

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
      //adds .invalid-input class that adds red ascent validation error
        emailSignupEl.classList.add('invalid-input');
        emailSignupEl.focus();
        return false;
    } else {
        //removes the hide class from the main content so it displays
        newsEl.classList.add('hide');
        //removes the success element
        successEl.classList.remove('hide');
        //removes the red ascent error indicators
        emailSignupEl.classList.remove('invalid-input');
        //adds the text from th email address input to the text in the success element
        subscriberEmailEl.textContent = emailSignupEl.value;
        return true;
    }
}

//executes validateForm function above
subcribeBtn.addEventListener('click', validateForm);

dismissBtnEl.addEventListener('click', (event) => {
    event.preventDefault();
    newsletFormEl.reset();

    newsEl.classList.remove('hidden');
    validationEl.classList.add('hide');

    successEl.classList.add('hide');
});
