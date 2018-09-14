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

// Create likst item when adding a route
const li = document.createElement("li");
li.className = "collection-item";
// Create text node and append to li
li.appendChild(document.createTextNode(routeInput.value));

li.appendChild(link);

storeRouteInLocalStorage(routeInput.value);

function storeRouteInLocalStorage(route) {
  let routes;
  if (localStorage.getItem("routes") === null) {
    routes = [];
  }
  routes.push(route);
  localStorage.getItem("routes", JSON.stringify(routes));
}
