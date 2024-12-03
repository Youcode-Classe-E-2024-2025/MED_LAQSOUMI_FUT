fetch("../Data/players.json")
  .then((response) => response.json())
  .then((players) => {
    const playersSection = document.getElementById("players");

    const table = document.createElement("table");
    table.className =
      "table-auto min-w-full border-collapse border border-gray-300 text-sm";

    table.innerHTML = `
      <thead>
        <tr class="bg-gray-200 text-gray-700">
          <th class="border border-gray-300 px-2 md:px-4 py-2">Photo</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Name</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Position</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Nationality</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Club</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Rating</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Pace</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Shooting</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Passing</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Dribbling</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Defending</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2">Physical</th>
          <th class="border border-gray-300 px-2 md:px-4 py-2 w-28">Actions</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;

    const tbody = table.querySelector("tbody");
    players.forEach((player, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td class="border border-gray-300 px-2 py-2 text-center">
          <img src="${player.photo}" alt="${
        player.name
      }" class="w-10 h-10 rounded-full mx-auto">
        </td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.name
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.position
        }</td>
        <td class="border border-gray-300 px-2 py-2">
          <img class="w-5 mx-auto" src="${player.flag}" alt="${
        player.nationality
      }">
        </td>
        <td class="border border-gray-300 px-2 py-2 text-center">
          <img class="w-8 mx-auto" src="${player.logo}" alt="${player.club}">
        </td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.rating
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.pace
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.shooting
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.passing
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.dribbling
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.defending || "-"
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center">${
          player.physical || "-"
        }</td>
        <td class="border border-gray-300 px-2 py-2 text-center flex flex-row justify-around">
          <button class="edit-btn fa-solid fa-pen-to-square p-3 rounded-md bg-yellow-600 hover:bg-yellow-400 transition-all text-white hover:scale-110" data-index="${index}"></button>
          <button class="delete-btn fa-solid fa-trash p-3 rounded-md bg-red-600 hover:bg-red-400 transition-all text-white hover:scale-110" data-index="${index}"></button>
        </td>
      `;
      tbody.appendChild(row);

      // Add event listener for the delete button
      row.querySelector(".delete-btn").addEventListener("click", () => {
        row.remove(); // Remove the row from the DOM
        players.splice(index, 1); // Optionally remove it from the data source
        const totalPlace = document.querySelector("#totalPlayers");
        totalPlace.textContent = `Total Players: ${players.length}`;
      });

      // Add event listener for the edit button
      row.querySelector(".edit-btn").addEventListener("click", () => {
        const nameCell = row.children[1];
        const positionCell = row.children[2];
        const clubCell = row.children[4];
        const rateCell = row.children[5];
        const paceCell = row.children[6];
        const shootCell = row.children[7];
        const passCell = row.children[8];
        const driblCell = row.children[9];
        const defendCell = row.children[10];
        const physicCell = row.children[11];
        const newName = prompt("Enter new name:", nameCell.textContent);
        const newPosition = prompt(
          "Enter new position:",
          positionCell.textContent
        );
        const clubImg = prompt(
          "Enter the player club img:",
          clubCell.textContent
        );
        const ratingNumber = prompt(
          "Enter the rating number:",
          rateCell.textContent
        );
        const Pace = prompt("Enter the Pace number:", paceCell.textContent);
        const Shooting = prompt(
          "Enter the Shooting number:",
          shootCell.textContent
        );
        const Passing = prompt(
          "Enter the Passing number:",
          passCell.textContent
        );
        const Dribbling = prompt(
          "Enter the Dribbling number:",
          driblCell.textContent
        );
        const Defending = prompt(
          "Enter the Defending number:",
          defendCell.textContent
        );
        const physical = prompt(
          "Enter the physical number:",
          physicCell.textContent
        );
        if (newName) nameCell.textContent = newName;
        if (newPosition) positionCell.textContent = newPosition;
        if (clubImg) clubCell.textContent = clubImg;
        if (ratingNumber) rateCell.textContent = ratingNumber;
        if (Pace) paceCell.textContent = Pace;
        if (Shooting) shootCell.textContent = Shooting;
        if (Passing) passCell.textContent = Passing;
        if (Dribbling) driblCell.textContent = Dribbling;
        if (Defending) defendCell.textContent = Defending;
        if (physical) physicCell.textContent = physical;
      });
    });
    const totalPlace = document.querySelector("#totalPlayers");
    totalPlace.textContent = `Total Players: ${players.length}`;
    playersSection.appendChild(table);
  });

// =====================================================

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const modal = document.querySelector("#modal");
  const playerList = document.querySelector("#playerList");
  let selectedStadiumCard = null; // To keep track of the clicked stadium card

  // Add click event to each stadium player card
  document.querySelectorAll(".player-card").forEach((imgElement) => {
    imgElement.addEventListener("click", (e) => {
      selectedStadiumCard = e.target.parentElement; // Save the clicked stadium card
      const playerPosition = e.target.alt; // Get position from img alt attribute
      openModal(); // Open the modal to select a player
      fetchPlayerData(playerPosition); // Load player data into the modal based on the position
    });
  });

  // Function to fetch player data and populate the modal based on position
  function fetchPlayerData(position) {
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
        // Filter players by position
        const filteredPlayers = players.filter(
          (player) => player.position === position
        );

        // Limit to a maximum of 18 players, adjust as necessary
        filteredPlayers.forEach((player) => {
          const playerCard = document.createElement("div");
          playerCard.className = "player-card cursor-pointer";

          // Set the player card content
          playerCard.innerHTML = `
            <div class="bg-[url('./assets/img/emptyCard.png')] bg-contain bg-no-repeat bg-center w-12 lg:w-24 lg:h-24 cursor-pointer">
              <img class="w-[12px] left-[2px] top-[12px] lg:w-3 lg:left-[22px] lg:top-[20px] relative shadow-lg" src="${player.logo}" alt="${player.club}" />
              <img class="relative m-auto lg:bottom-2 bottom-1 w-3 border border-white shadow-lg" src="${player.flag}" alt="${player.nationality}" />
              <p class="relative text-white font-semibold left-[6px] text-[7px] top-1 lg:left-[22px] lg:text-[10px] lg:top-3">${player.rating}</p>
              <img class="relative w-8 bottom-[14px] left-[8px] lg:w-12 lg:bottom-[18px] lg:left-[24px] object-cover bg-black bg-opacity-10 rounded-full [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_2%,rgba(0,0,0,1)_8%)]" src="${player.photo}" alt="${player.name}" />
              <div class="relative grid grid-cols-3 grid-rows-2 bottom-[15px] lg:bottom-[24px] left-[8px] lg:left-[20px] text-[6px] lg:text-[8px] text-yellow-200 w-8 lg:w-14 rounded-lg bg-black bg-opacity-20 text-center">
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
      })
      .catch((error) => {
        console.error("Error loading players: ", error);
      });
  }

  // Function to update the stadium card with the selected player's data
  function updateStadiumCard(stadiumCard, player) {
    stadiumCard.innerHTML = `
      <div class="bg-[url('./assets/img/emptyCard.png')] bg-contain bg-no-repeat bg-center w-12 lg:w-24 lg:h-24 cursor-pointer">
        <img class="w-[12px] left-[2px] top-[12px] lg:w-3 lg:left-[22px] lg:top-[20px] relative shadow-lg" src="${player.logo}" alt="${player.club}" />
        <img class="relative m-auto lg:bottom-2 bottom-1 w-3 border border-white shadow-lg" src="${player.flag}" alt="${player.nationality}" />
        <p class="relative text-white font-semibold left-[6px] text-[7px] top-1 lg:left-[22px] lg:text-[10px] lg:top-3">${player.rating}</p>
        <img class="relative w-8 bottom-[14px] left-[8px] lg:w-12 lg:bottom-[18px] lg:left-[24px] object-cover bg-black bg-opacity-10 rounded-full [mask-image:linear-gradient(to_top,rgba(0,0,0,0)_2%,rgba(0,0,0,1)_8%)]" src="${player.photo}" alt="${player.name}" />
        <div class="relative grid grid-cols-3 grid-rows-2 bottom-[15px] lg:bottom-[24px] left-[8px] lg:left-[20px] text-[6px] lg:text-[8px] text-yellow-200 w-8 lg:w-14 rounded-lg bg-black bg-opacity-20 text-center">
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
