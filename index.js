const newsEl = document.getElementById("news");
const successEl = document.getElementById("success");

function hideContainer() {
  console.log(newsEl);
  newsEl.classList.add("hide");
  successEl.classList.remove("success");
}
