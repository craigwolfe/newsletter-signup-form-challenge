const newsEl = document.getElementById("news");
const successEl = document.getElementById("success");

const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hideContainer() {
  console.log(newsEl);
  successEl.classList.remove("success");
  newsEl.classList.add("hide");
}
