// document.addEventListener("DOMContentLoaded", () => {
//   // Fetch data from players.json
//   fetch("./Data/players.json")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to load players.json");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const players = data; // Assuming players.json contains an array of player objects

//       // Create the modal
//       const modal = createModal();
//       document.body.appendChild(modal);

//       // Generate player cards dynamically
//       const playerList = document.querySelector("#playerList");
//       players.forEach((player, index) => {
//         const playerCard = createPlayerCard(player, index);
//         playerList.appendChild(playerCard);

//         // Add click event to open modal with player details
//         playerCard.addEventListener("click", () => {
//           displayPlayerData(player);
//           openModal(modal);
//         });
//       });
//     })
//     .catch((error) => console.error("Error fetching player data:", error));
// });

// // Function to create player cards
// function createPlayerCard(player, index) {
//   const card = document.createElement("div");
//   card.className =
//     "player-card p-4 bg-gray-800 rounded-lg text-center cursor-pointer";
//   card.innerHTML = `
//     <img src="${player.photo}" alt="${player.name}" class="w-24 h-24 mx-auto rounded-full">
//     <h3 class="text-white font-semibold mt-2">${player.name}</h3>
//     <p class="text-gray-400 text-sm">${player.position}</p>
//   `;
//   return card;
// }

// // Function to create the modal
// function createModal() {
//   const modal = document.createElement("div");
//   modal.id = "playerModal";
//   modal.className =
//     "fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center hidden";

//   modal.innerHTML = `
//     <div class="bg-white rounded-lg p-6 w-3/4 md:w-1/2 lg:w-1/3 relative">
//       <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" id="closeModal">
//         <i class="fa-solid fa-times"></i>
//       </button>
//       <h2 class="text-2xl font-bold mb-4" id="modalPlayerName"></h2>
//       <img id="modalPlayerImage" class="w-24 h-24 mx-auto mb-4 rounded-full" alt="Player Photo">
//       <table class="table-auto w-full text-left text-sm text-gray-600">
//         <tbody id="modalPlayerDetails">
//           <!-- Player details will be dynamically inserted here -->
//         </tbody>
//       </table>
//     </div>
//   `;

//   // Add close modal functionality
//   modal.querySelector("#closeModal").addEventListener("click", () => {
//     closeModal(modal);
//   });

//   return modal;
// }

// // Function to open the modal
// function openModal(modal) {
//   modal.classList.remove("hidden");
// }

// // Function to close the modal
// function closeModal(modal) {
//   modal.classList.add("hidden");
// }

// // Function to display player data in the modal
// function displayPlayerData(player) {
//   const playerName = document.getElementById("modalPlayerName");
//   const playerImage = document.getElementById("modalPlayerImage");
//   const playerDetails = document.getElementById("modalPlayerDetails");

//   // Update modal content
//   playerName.textContent = player.name;
//   playerImage.src = player.photo;

//   // Populate player details table
//   playerDetails.innerHTML = `
//     <tr><th class="py-2 pr-4">Position:</th><td>${player.position}</td></tr>
//     <tr><th class="py-2 pr-4">Nationality:</th>
//       <td><img src="${player.flag}" alt="${
//     player.nationality
//   }" class="inline w-4 h-4 mr-2">${player.nationality}</td>
//     </tr>
//     <tr><th class="py-2 pr-4">Club:</th>
//       <td><img src="${player.logo}" alt="${
//     player.club
//   }" class="inline w-4 h-4 mr-2">${player.club}</td>
//     </tr>
//     <tr><th class="py-2 pr-4">Rating:</th><td>${player.rating}</td></tr>
//     <tr><th class="py-2 pr-4">Pace:</th><td>${player.pace || "-"}</td></tr>
//     <tr><th class="py-2 pr-4">Shooting:</th><td>${
//       player.shooting || "-"
//     }</td></tr>
//     <tr><th class="py-2 pr-4">Passing:</th><td>${
//       player.passing || "-"
//     }</td></tr>
//     <tr><th class="py-2 pr-4">Dribbling:</th><td>${
//       player.dribbling || "-"
//     }</td></tr>
//     <tr><th class="py-2 pr-4">Defending:</th><td>${
//       player.defending || "-"
//     }</td></tr>
//     <tr><th class="py-2 pr-4">Physical:</th><td>${
//       player.physical || "-"
//     }</td></tr>
//   `;
// }
