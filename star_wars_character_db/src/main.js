import './style.css'

const dialog = document.getElementById("popup-dialog");
const characterTitle = document.getElementById("character-title");
const dialogContent = document.getElementById("dialog-content");
const closeDialogButton = document.getElementById("close-dialog");

console.log("hi");
// Adding an event listener that listens to whenever the user types something into the search bar
//window.addEventListener("load", displayDate);
//function displayDate() {
  //document.getElementById("hi").innerHTML = Date();
  // Getting the search input
  const searchInput = document.getElementById("hope");
  console.log(searchInput);
  if(searchInput) {
  searchInput.addEventListener("input", (e) => {
    // Get the value of the input
    const input = e.target.value;
    console.log(input);
    document.getElementById("his").innerHTML = input;
    //searchForCharacter(input);
    //debounce(searchForCharacter(input), 2500);
    debouncedCharacterSearch(input);
  });
  
  console.log(searchInput);
    // Get the value of the input
  
  
}

document.addEventListener("DOMContentLoaded", function(){
  fetch(`https://swapi.py4e.com/api/people`).then(resp => resp.json()).then(data => {
//console.log(data)
displayCharacters(data)
  }).catch(e => {
console.log(e);
results.innerText = "The characters you seek are not here";
  })
})


async function searchForCharacter(query) {
	const characterData = await fetch(`https://swapi.py4e.com/api/people?search=${query}`).then(resp => resp.json());

	console.log(characterData);
  
  displayCharacters(characterData)
}

const debouncedCharacterSearch = debounce(searchForCharacter, 500)

function displayCharacters(characters){
  //console.log(characters);
  
  const listOfCharacterNames = characters.results.map(character => {
    return `<li><a href="${character.url}">${character.name}</a></li>`
  }).join(" ");
  /*
  const listOfNames = characters.map(character => {
    return `<li><a data-url="${character.url}">${character.name}</a></li>`
  }).join(" ")*/

  results.innerHTML = `<ul class="characters">${listOfCharacterNames}</ul>`;
}


function debounce(func, wait) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
