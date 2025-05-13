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

const results = document.getElementById("results");
document.addEventListener("DOMContentLoaded", function(){
  fetch(`https://swapi.py4e.com/api/people`).then(resp => resp.json()).then(data => {
console.log(data)
const listOfCharacterNames = data.results.map(character => {
   return `<li>${character.name}</li>`
});
results.innerHTML = results.innerHTML = `<ul class="characters">${listOfCharacterNames}</ul>`;
  }).catch(e => {
console.log(e);
results.innerText = "The characters you seek are not here";
  })
})
