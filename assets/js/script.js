fetch("../Data/players.json")
  .then((response) => response.json())
  .then((players) => {
    const playersSection = document.getElementById("players");

    // Create a table
    const table = document.createElement("table");
    table.className =
      "table-auto min-w-full border-collapse border border-gray-300 text-sm";

    // Table header
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
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;

    // Append rows for each player
    const tbody = table.querySelector("tbody");
    players.forEach((player) => {
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
      `;
      tbody.appendChild(row);
    });

    // Add table to the section
    playersSection.appendChild(table);

    // Add total players count
    const totalPlace = document.querySelector("#totalPlayers");
    totalPlace.textContent = `Total Players: ${players.length}`;
  })
  .catch((error) => console.error("Error loading players:", error));
