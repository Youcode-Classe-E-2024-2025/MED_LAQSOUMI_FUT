import data from "./data";

// // DOM Elements
// const playerForm = document.getElementById("playerForm");
// const teamGrid = document.getElementById("teamGrid");
// const formationSelector = document.getElementById("formationSelector");
// const chemistryScore = document.getElementById("chemistryScore");

// // Data
// let players = [];
// let formation = "4-3-3";
// const positions433 = [
//   "GK",
//   "CB",
//   "CB",
//   "LB",
//   "RB",
//   "CM",
//   "CM",
//   "CM",
//   "LW",
//   "RW",
//   "ST",
// ];
// const positions442 = [
//   "GK",
//   "CB",
//   "CB",
//   "LB",
//   "RB",
//   "CM",
//   "CM",
//   "LM",
//   "RM",
//   "ST",
//   "ST",
// ];
// const chemistryBase = 10;

// // Add Player
// playerForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.getElementById("playerName").value;
//   const position = document.getElementById("playerPosition").value;
//   const rating = parseInt(document.getElementById("playerRating").value);

//   if (players.length >= 11) {
//     alert("Team is full!");
//     return;
//   }

//   players.push({ name, position, rating });
//   updateTeamGrid();
//   playerForm.reset();
// });

// // Change Formation
// formationSelector.addEventListener("change", (e) => {
//   formation = e.target.value;
//   updateTeamGrid();
// });

// // Update Team Grid
// function updateTeamGrid() {
//   teamGrid.innerHTML = "";
//   const currentPositions = formation === "4-3-3" ? positions433 : positions442;

//   players.forEach((player, index) => {
//     const card = document.createElement("div");
//     card.className = "bg-gray-700 p-4 rounded shadow-md text-center draggable";
//     card.draggable = true;

//     card.innerHTML = `
//       <h3 class="font-bold text-lg">${player.name}</h3>
//       <p>${player.position}</p>
//       <p>Rating: ${player.rating}</p>
//       <button class="btn mt-2 bg-red-600 hover:bg-red-800" onclick="removePlayer(${index})">Remove</button>
//     `;

//     teamGrid.appendChild(card);
//   });

//   calculateChemistry(currentPositions);
// }

// // Remove Player
// function removePlayer(index) {
//   players.splice(index, 1);
//   updateTeamGrid();
// }

// // Calculate Chemistry
// function calculateChemistry(currentPositions) {
//   let totalChemistry = 0;

//   players.forEach((player) => {
//     const positionScore = currentPositions.includes(player.position)
//       ? chemistryBase
//       : 0;
//     totalChemistry += positionScore; // Add further rules for chemistry here
//   });

//   chemistryScore.textContent = `Chemistry: ${totalChemistry}/100`;
// }

// // Load/Save from LocalStorage
// window.addEventListener("load", () => {
//   const savedPlayers = JSON.parse(localStorage.getItem("players")) || [];
//   players = savedPlayers;
//   updateTeamGrid();
// });

// window.addEventListener("beforeunload", () => {
//   localStorage.setItem("players", JSON.stringify(players));
// });
