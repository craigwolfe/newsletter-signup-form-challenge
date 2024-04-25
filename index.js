const newsEl = document.getElementById("news");
const successEl = document.getElementById("success");

function hideContainer() {
  console.log(newsEl);
  successEl.classList.remove("success");
  newsEl.classList.add("hide");
}
