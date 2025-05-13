import './style.css'

console.log("hi");
// Adding an event listener that listens to whenever the user types something into the search bar
window.addEventListener("load", displayDate);
function displayDate() {
  document.getElementById("hi").innerHTML = Date();
  // Getting the search input
  const searchInput = document.getElementById("search-container input");
  console.log(searchInput);
    // Get the value of the input
  document.getElementById("his").innerHTML = searchInput;
}
