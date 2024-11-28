// Fetch and display player data
fetch("/Data/players.json")
  .then((response) => response.json())
  .then((data) => {
    const playersSection = document.getElementById("players");
    const players = data.players;

    players.forEach((player) => {
      // Create player card
      const playerCard = document.createElement("div");
      playerCard.className = "bg-white rounded-lg shadow-lg overflow-hidden";

      // Card content
      playerCard.innerHTML = `
        <div class="p-4">
          <img src="${player.photo}" alt="${
        player.name
      }" class="w-24 h-24 rounded-full mx-auto">
          <h3 class="text-lg font-bold text-center mt-4">${player.name}</h3>
          <p class="text-center text-sm text-gray-500">${player.position}</p>
          <p class="text-center text-sm text-gray-500">${
            player.nationality
          } <img src="${player.flag}" alt="${
        player.nationality
      }" class="inline-block w-5 h-5"></p>
          <div class="mt-4 text-center">
            <img src="${player.logo}" alt="${
        player.club
      }" class="w-16 h-16 mx-auto">
            <p class="text-sm text-gray-600">${player.club}</p>
          </div>
          <div class="mt-4 text-center">
            <p class="text-gray-700">Rating: <span class="font-semibold">${
              player.rating
            }</span></p>
            <p class="text-gray-700">Pace: ${player.pace}</p>
            <p class="text-gray-700">Shooting: ${player.shooting}</p>
            <p class="text-gray-700">Passing: ${player.passing}</p>
            <p class="text-gray-700">Dribbling: ${player.dribbling}</p>
            <p class="text-gray-700">Defending: ${player.defending || "-"}</p>
            <p class="text-gray-700">Physical: ${player.physical || "-"}</p>
          </div>
        </div>
      `;

      // Append to section
      playersSection.appendChild(playerCard);
    });
  })
  .catch((error) => console.error("Error loading players:", error));
