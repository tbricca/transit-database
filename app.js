/// DEFINE UI VARIABLES
const form = document.querySelector("#route-form");
const routeInput = document.querySelector("#route");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addRoute);
}

function addRoute(e) {
  if (routeInput.value === "") {
    alert("Add a Route");
  }
}
