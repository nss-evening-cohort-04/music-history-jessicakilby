console.log("addview");
var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");
  hideNav.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});