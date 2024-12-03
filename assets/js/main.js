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

      row.querySelector(".delete-btn").addEventListener("click", () => {
        row.remove();
        players.splice(index, 1);
        const totalPlace = document.querySelector("#totalPlayers");
        totalPlace.textContent = `Total Players: ${players.length}`;
      });

      row.querySelector(".edit-btn").addEventListener("click", () => {
        const editModal = document.getElementById("editModal");
        const editForm = document.getElementById("editForm");

        const nameInput = document.getElementById("editName");
        const positionInput = document.getElementById("editPosition");
        const clubImgInput = document.getElementById("editClubImg");
        const ratingInput = document.getElementById("editRating");
        const paceInput = document.getElementById("editPace");
        const shootingInput = document.getElementById("editShooting");
        const passingInput = document.getElementById("editPassing");
        const dribblingInput = document.getElementById("editDribbling");
        const defendingInput = document.getElementById("editDefending");
        const physicalInput = document.getElementById("editPhysical");

        // Populate inputs with current values
        nameInput.value = row.children[1].textContent.trim();
        positionInput.value = row.children[2].textContent.trim();
        clubImgInput.value = row.children[4].querySelector("img").src;
        ratingInput.value = row.children[5].textContent.trim();
        paceInput.value = row.children[6].textContent.trim();
        shootingInput.value = row.children[7].textContent.trim();
        passingInput.value = row.children[8].textContent.trim();
        dribblingInput.value = row.children[9].textContent.trim();
        defendingInput.value = row.children[10].textContent.trim();
        physicalInput.value = row.children[11].textContent.trim();

        // Show modal
        editModal.classList.remove("hidden");

        // Handle form submission
        editForm.onsubmit = (e) => {
          e.preventDefault();

          // Update the row with new values
          row.children[1].textContent = nameInput.value.trim();
          row.children[2].textContent = positionInput.value.trim();
          row.children[4].querySelector("img").src = clubImgInput.value.trim();
          row.children[5].textContent = ratingInput.value.trim();
          row.children[6].textContent = paceInput.value.trim();
          row.children[7].textContent = shootingInput.value.trim();
          row.children[8].textContent = passingInput.value.trim();
          row.children[9].textContent = dribblingInput.value.trim();
          row.children[10].textContent = defendingInput.value.trim();
          row.children[11].textContent = physicalInput.value.trim();

          // Hide modal
          editModal.classList.add("hidden");
        };

        // Handle cancel button
        document.getElementById("cancelEdit").onclick = () => {
          editModal.classList.add("hidden");
        };
      });
    });
    const totalPlace = document.querySelector("#totalPlayers");
    totalPlace.textContent = `Total Players: ${players.length}`;
    playersSection.appendChild(table);
  });

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  const modal = document.querySelector("#modal");
  const playerList = document.querySelector("#playerList");
  let selectedStadiumCard = null;

  document.querySelectorAll(".player-card img").forEach((imgElement) => {
    imgElement.addEventListener("click", (e) => {
      selectedStadiumCard = e.target.parentElement;
      const playerPosition = e.target.alt;
      openModal();
      fetchPlayerData(playerPosition);
    });
  });

  function fetchPlayerData(position) {
    playerList.innerHTML = "";

    fetch("./Data/players.json")
      .then((response) => {
        return response.json();
      })
      .then((players) => {
        const filteredPlayers = players.filter(
          (player) => player.position === position
        );

        filteredPlayers.forEach((player) => {
          const playerCard = document.createElement("div");
          playerCard.className = "player-card cursor-pointer";

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

          playerCard.addEventListener("click", () => {
            updateStadiumCard(selectedStadiumCard, player);
            closeModal();
          });

          playerList.appendChild(playerCard);
        });
      })
  }

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

  function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("z-50");
  }

  function closeModal() {
    modal.classList.add("hidden");
  }

  document.querySelector("#closeModal").addEventListener("click", () => {
    closeModal();
  });
});

document.querySelector("#teamForm").addEventListener("submit", (e) => {
  e.preventDefault();

  if (document.querySelector("#displayData").children.length > 0) {
    return;
  }

  const teamNameInput = document.querySelector("#teamName");
  const teamFormationInput = document.querySelector("#teamFormation");

  const teamName = teamNameInput.value.trim();
  const teamFormation = teamFormationInput.value.trim();

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

    teamNameInput.value = "";
    teamFormationInput.value = "";
  }
});

document.querySelector("#removeTeam").addEventListener("click", () => {
  const confirmRemoval = confirm("Are you sure you want to remove the team?");

  if (confirmRemoval) {
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

document.querySelector("form").addEventListener("submit", function (event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  let isValid = true;
  let errorMessage = "";

  if (!nameInput.value.trim() || nameInput.value.trim().split(" ").length < 2) {
    isValid = false;
    errorMessage += "Please enter your full name with at least two words.\n";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    isValid = false;
    errorMessage += "Please enter a valid email address.\n";
  }

  if (!isValid) {
    event.preventDefault();
    alert(errorMessage);
  }
});
