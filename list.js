var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");
var hideNav = document.getElementById("hide-nav");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
  hideNav.classList.add("visible");
  hideNav.classList.remove("hidden");
});