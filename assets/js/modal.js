document.addEventListener("DOMContentLoaded", () => {
  // Fetch data from players.json
  fetch("/Data/players.json")
    .then((response) => response.json())
    .then((data) => {
      const players = data.players;

      // Get all player cards
      const playerCards = document.querySelectorAll(".player-card img");

      // Modal element
      const modal = createModal();
      document.body.appendChild(modal);

      // Add click event to each player card
      playerCards.forEach((card, index) => {
        card.addEventListener("click", () => {
          displayPlayerData(players[index]);
          openModal(modal);
        });
      });
    })
    .catch((error) => console.error("Error fetching player data:", error));
});

// Create Modal
function createModal() {
  const modal = document.createElement("div");
  modal.id = "playerModal";
  modal.className =
    "fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center hidden";

  modal.innerHTML = `
      <div class="bg-white rounded-lg p-6 w-[50%]">
        <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700" id="closeModal">
          <i class="fa-solid fa-times"></i>
        </button>
        <h2 class="text-2xl font-bold mb-4" id="modalPlayerName"></h2>
        <img id="modalPlayerImage" class="w-14 h-14 mx-auto mb-4 rounded-full" alt="Player Photo">
        <table class="table-auto w-[50%] text-left text-sm text-gray-600">
          <tbody id="modalPlayerDetails">
            <!-- Player details will be dynamically inserted here -->
          </tbody>
        </table>
      </div>
    `;

  // Close modal event
  modal.querySelector("#closeModal").addEventListener("click", () => {
    closeModal(modal);
  });

  return modal;
}

// Open Modal
function openModal(modal) {
  modal.classList.remove("hidden");
}

// Close Modal
function closeModal(modal) {
  modal.classList.add("hidden");
}

// Display Player Data in Modal
function displayPlayerData(player) {
  const playerName = document.getElementById("modalPlayerName");
  const playerImage = document.getElementById("modalPlayerImage");
  const playerDetails = document.getElementById("modalPlayerDetails");

  // Update modal content
  playerName.textContent = player.name;
  playerImage.src = player.photo;

  // Populate player details table
  playerDetails.innerHTML = `
      <tr><th class="py-2 pr-4">Position:</th><td>${player.position}</td></tr>
      <tr><th class="py-2 pr-4">Nationality:</th><td><img src="${
        player.flag
      }" alt="${player.nationality}" class="inline w-3 h-3 mr-2">${
    player.nationality
  }</td></tr>
      <tr><th class="py-2 pr-4">Club:</th><td><img src="${player.logo}" alt="${
    player.club
  }" class="inline w-3 h-3 mr-2">${player.club}</td></tr>
      <tr><th class="py-2 pr-4">Rating:</th><td>${player.rating}</td></tr>
      <tr><th class="py-2 pr-4">Pace:</th><td>${player.pace || "-"}</td></tr>
      <tr><th class="py-2 pr-4">Shooting:</th><td>${
        player.shooting || "-"
      }</td></tr>
      <tr><th class="py-2 pr-4">Passing:</th><td>${
        player.passing || "-"
      }</td></tr>
      <tr><th class="py-2 pr-4">Dribbling:</th><td>${
        player.dribbling || "-"
      }</td></tr>
      <tr><th class="py-2 pr-4">Defending:</th><td>${
        player.defending || "-"
      }</td></tr>
      <tr><th class="py-2 pr-4">Physical:</th><td>${
        player.physical || "-"
      }</td></tr>
    `;
}
