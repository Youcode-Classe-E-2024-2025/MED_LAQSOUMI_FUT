document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const modal = document.querySelector("#modal");
  const playerList = document.querySelector("#playerList");
  let selectedStadiumCard = null; // To keep track of the clicked stadium card
  // Add click event to each stadium player card
  document.querySelectorAll(".player-card").forEach((stadiumCardImg) => {
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
        return response.json();
      })
      .then((players) => {
        players.slice(0, 18).forEach((player) => {
          const playerCard = document.createElement("div");
          playerCard.className = "player-card cursor-pointer";
          playerCard.innerHTML = `
            <div class="bg-[url('./assets/img/emptyCard.png')] bg-contain bg-no-repeat bg-center w-16 h-12 lg:w-24 lg:h-24 cursor-pointer hover:scale-150">
              <img class="w-3 left-[22px] top-[20px] relative shadow-lg" src="${player.logo}" alt="${player.club}" />
              <img class="relative m-auto bottom-2 w-3 border border-white shadow-lg" src="${player.flag}" alt="${player.nationality}" />
              <p class="relative text-white font-semibold left-[22px] text-[10px] top-3">${player.rating}</p>
              <img class="relative w-12 bottom-[22px] left-[24px] object-cover bg-black bg-opacity-10 rounded-full [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_2%,rgba(0,0,0,1)_8%)]" src="${player.photo}" alt="${player.name}" />
              <div class="relative grid grid-cols-3 grid-rows-2 bottom-[26px] left-[20px] text-[8px] text-yellow-200 w-14 rounded-lg bg-black bg-opacity-20 text-center">
                <p class="cols-start-1 row-start-1">DR</p>
                <p class="cols-start-2 row-start-1">SH</p>
                <p class="cols-start-3 row-start-1">PAS</p>
                <p class="cols-start-4 row-start-2">${player.dribbling}</p>
                <p class="cols-start-5 row-start-2">${player.shooting}</p>
                <p class="cols-start-6 row-start-2">${player.passing}</p>
              </div>
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
      });
  }

  // Function to update the stadium card with the selected player's data
  function updateStadiumCard(stadiumCard, player) {
    stadiumCard.innerHTML = `
      <div class="bg-[url('./assets/img/emptyCard.png')] bg-contain bg-no-repeat bg-center w-16 h-12 lg:w-24 lg:h-24 cursor-pointer">
        <img class="w-3 left-[22px] top-[20px] relative shadow-lg" src="${player.logo}" alt="${player.club}" />
        <img class="relative m-auto bottom-2 w-3 border border-white shadow-lg" src="${player.flag}" alt="${player.nationality}" />
        <p class="relative text-white font-semibold left-[22px] text-[10px] top-3">${player.rating}</p>
        <img class="relative w-12 bottom-[22px] left-[24px] object-cover bg-black bg-opacity-10 rounded-full [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_2%,rgba(0,0,0,1)_8%)]" src="${player.photo}" alt="${player.name}" />
        <div class="relative grid grid-cols-3 grid-rows-2 bottom-[26px] left-[20px] text-[8px] text-yellow-200 w-14 rounded-lg bg-black bg-opacity-20 text-center">
          <p class="cols-start-1 row-start-1">DR</p>
          <p class="cols-start-2 row-start-1">SH</p>
          <p class="cols-start-3 row-start-1">PAS</p>
          <p class="cols-start-4 row-start-2">${player.dribbling}</p>
          <p class="cols-start-5 row-start-2">${player.shooting}</p>
          <p class="cols-start-6 row-start-2">${player.passing}</p>
        </div>
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

  // Check if data has already been appended
  if (document.querySelector("#displayData").children.length > 0) {
    return;
  }

  // Get input field elements
  const teamNameInput = document.querySelector("#teamName");
  const teamFormationInput = document.querySelector("#teamFormation");

  // Get trimmed values
  const teamName = teamNameInput.value.trim();
  const teamFormation = teamFormationInput.value.trim();

  // Check if inputs are not empty
  if (teamName !== "" && teamFormation !== "") {
    const nameTeamBloc = document.createElement("div");
    nameTeamBloc.className =
      "flex justify-between items-center flex-col m-auto p-2";
    nameTeamBloc.innerHTML = `
      <p class="text-white text-center font-bold text-[24px]">${teamName}</p>
      <p class="text-white text-center text-[24px]">${teamFormation}</p>
    `;

    document.querySelector("#displayData").append(nameTeamBloc);
    document.querySelector("#playerCardElem").classList.remove("hidden");

    // Clear input fields
    teamNameInput.value = "";
    teamFormationInput.value = "";
  }
});

document.querySelector("#removeTeam").addEventListener("click", () => {
  // Show confirmation alert
  const confirmRemoval = confirm("Are you sure you want to remove the team?");

  if (confirmRemoval) {
    // Clear the team name and formation
    document.querySelector("#playerCardElem").classList.add("hidden");
    document.querySelector("#displayData").innerHTML = "";
    document.querySelectorAll("#playerCardElem div").forEach((card) => {
      card.innerHTML = `<img
            src="./assets/img/emptyCard.png"
            class="w-12 lg:w-16 hover:scale-150 cursor-pointer"
            alt="ST"
          />`;
    });
  }
});
