const firstLink = document.getElementById("firstLink");
const englishLink = document.querySelector(".langWrap a[language='english']");

firstLink.style.background = "rgb(6, 221, 6)";

englishLink.addEventListener("click", function () {
  firstLink.style.background = "#000000";
  englishLink.style.background = "rgb(6, 221, 6)";
});

firstLink.addEventListener("click", function () {
  firstLink.style.background = "rgb(6, 221, 6)";
  englishLink.style.background = "#000000";
});