document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#plusBtn").addEventListener("click", () => {
    document.querySelector("#modal").classList.remove("hidden");
    const playerList = document.querySelector("#playerList");

    // Clear existing cards to prevent duplicates
    playerList.innerHTML = "";

    // Fetch data from JSON file
    fetch("./Data/players.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load player data.");
        }
        return response.json();
      })
      .then((players) => {
        // Limit to a maximum of 9 players
        players.slice(0, 9).forEach((player) => {
          // Create a new card for each player
          const playerCard = document.createElement("div");
          playerCard.className = "player-card";

          // Set the card content
          playerCard.innerHTML = `
              <div class="bg-[url('./assets/img/emptyCard.png')] bg-contain bg-no-repeat bg-center w-24 h-32 m-auto gap-2">
              <img class="w-10 p-2 " src="${player.logo}" alt="${player.club}" />
              <img class="relative m-auto w-4 h-3 bottom-2" src="${player.flag}" alt="${player.nationality}" />
              <p class="relative text-yellow-500 font-bold bottom-4 left-4">${player.rating}</p>
                <img class="relative w-16 scale-100 bottom-7 left-4" src="${player.photo}" alt="${player.name}" />
                <p class="text-sm">${player.name}<p>
              </div>
            `;

          // Append the card to the player list
          playerList.appendChild(playerCard);
        });
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  });

  document.querySelector("#closeModal").addEventListener("click", () => {
    document.querySelector("#modal").classList.add("hidden");
  });
});
