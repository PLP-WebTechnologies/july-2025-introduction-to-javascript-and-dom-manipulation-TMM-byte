// --------------------
// Part 1: Variables & Conditionals
// --------------------
let petsAvailable = ["Bella", "Max", "Luna", "Charlie"];
let adoptionOpen = true;

if (adoptionOpen) {
  console.log("Adoption center is open!");
} else {
  console.log("Sorry, we're closed today.");
}

// --------------------
// Part 2: Custom Functions
// --------------------
function showAvailablePets() {
  const petList = document.getElementById("petList");
  petList.innerHTML = ""; // Clear previous list

  // Loop through pets and display them
  for (let i = 0; i < petsAvailable.length; i++) {
    let li = document.createElement("li");
    li.textContent = petsAvailable[i];
    petList.appendChild(li);
  }

  displayMessage("Here are the pets available for adoption!");
}

function displayMessage(msg) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = msg;
}

// --------------------
// Part 3: Loop Examples
// --------------------

// Example 1: for loop
for (let i = 0; i < 3; i++) {
  console.log(`Preparing pet profile ${i + 1}`);
}

// Example 2: for...of loop
for (let pet of petsAvailable) {
  console.log(`Pet name: ${pet}`);
}

// --------------------
// Part 4: DOM Interactions
// --------------------

// Interaction 1: Change text content
document.getElementById("intro").textContent = "Adopt a pet and change a life 🐾";

// Interaction 2: Add event listener
document.querySelector("button").addEventListener("mouseover", function() {
  this.style.backgroundColor = "#2ecc71";
});

// Interaction 3: Modify style dynamically
document.getElementById("message").style.fontSize = "18px";