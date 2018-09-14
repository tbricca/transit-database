/// DEFINE UI VARIABLES
const form = document.querySelector("#route-form");
const routeInput = document.querySelector("#route");
const filter = document.querySelector("#filter");
const taskList = document.querySelector(".collection");

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
// breaking here
li.appendChild(document.createTextNode(routeInput.value));

const link = document.createElement("a");

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

// filter Tasks
function filterTasks(e) {
  // put to lowercase so we can match it correctly
  const text = e.target.value.toLowerCase();

  console.log(text);

  document.querySelectorAll(".collection-item").forEach()(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
