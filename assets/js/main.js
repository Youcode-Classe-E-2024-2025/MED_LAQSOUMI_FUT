document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector("#modal");
  const playerList = document.querySelector("#playerList");
  let selectedStadiumCard = null; // To keep track of the clicked stadium card

  // Add click event to each stadium player card
  document.querySelectorAll(".player-card img").forEach((stadiumCardImg) => {
    stadiumCardImg.addEventListener("click", (e) => {
      selectedStadiumCard = e.target.parentElement; // Save the clicked stadium card
      openModal(); // Open the modal to select a player
      fetchPlayerData(); // Load player data into the modal
    });
  });

  // Function to fetch player data and populate the modal
  function fetchPlayerData() {
    // Clear previous player cards in the modal
    playerList.innerHTML = "";

    // Fetch data from the JSON file
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
          const playerCard = document.createElement("div");
          playerCard.className = "player-card cursor-pointer";

          // Set the player card content
          playerCard.innerHTML = `
            <div class="bg-[url('./assets/img/emptyCard.png')] bg-contain bg-no-repeat bg-center w-24 h-32 m-auto gap-2">
              <img class="w-10 p-2" src="${player.logo}" alt="${player.club}" />
              <img class="relative m-auto w-4 h-3 bottom-2 border border-white shadow-lg" src="${player.flag}" alt="${player.nationality}" />
              <p class="relative text-white font-bold bottom-4 left-4">${player.rating}</p>
              <img class="relative w-16 scale-100 bottom-6 left-4 object-cover [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_2%,rgba(0,0,0,1)_8%)]" src="${player.photo}" alt="${player.name}" />
              <p class="text-sm text-white">${player.name}</p>
            </div>
          `;

          // Add click event to select the player and update the stadium card
          playerCard.addEventListener("click", () => {
            updateStadiumCard(selectedStadiumCard, player);
            closeModal(); // Close the modal after selection
          });

          // Append the player card to the modal's player list
          playerList.appendChild(playerCard);
        });
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
      });
  }

  // Function to update the stadium card with the selected player's data
  function updateStadiumCard(stadiumCard, player) {
    stadiumCard.innerHTML = `
      <div class="bg-[url('./assets/img/emptyCard.png')] bg-contain bg-no-repeat bg-center w-14 h-12 lg:w-20 lg:h-20 m-auto gap-2 cursor-pointer">
        <img class="w-4 right-14 m-auto" src="${player.logo}" alt="${player.club}" />
        <img class="relative m-auto w-3 top-1 border border-white shadow-lg " src="${player.flag}" alt="${player.nationality}" />
        <p class="relative text-white font-semibold bottom-4 left-3 text-[12px] shadow-lg p-2">${player.rating}</p>
        <img class="relative w-10 bottom-8 left-5 object-cover [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_2%,rgba(0,0,0,1)_8%)]" src="${player.photo}" alt="${player.name}" />
      </div>
    `;
  }

  // Function to open the modal
  function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("z-50");
  }

  // Function to close the modal
  function closeModal() {
    modal.classList.add("hidden");
  }

  // Close modal functionality
  document.querySelector("#closeModal").addEventListener("click", () => {
    closeModal();
  });
});

document.querySelector("#teamForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const teamName = document.querySelector("#teamName").value.trim();
  const teamFormation = document.querySelector("#teamFormation").value.trim();
  if (teamName != "" && teamFormation != "") {
    const nameTeamBloc = document.createElement("div");
    nameTeamBloc.className =
      "flex justify-between items-center flex-col m-auto p-2";
    nameTeamBloc.innerHTML = `
    <p class="text-white text-center text-[24px]">${teamName}</p>
    <p class="text-white text-center text-[24px]">${teamFormation}</p>
    `;
    document.querySelector("#displayData").append(nameTeamBloc);
  }
});
