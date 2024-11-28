document.querySelector("#plusBtn").addEventListener("click", () => {
  document.querySelector("#modal").classList.remove("hidden");

  const playerList = document.querySelector("#playerList");

  // Loop to create 6 player cards
  for (let i = 0; i < 9; i++) {
    // Create a new div element for each card
    const newPlayerCard = document.createElement("div");

    // Set the innerHTML of the new div
    newPlayerCard.innerHTML = `
        <img class="w-24" src="./assets/img/emptyCard.png" alt="player-card" />
      `;

    // Append the new div to the playerList
    playerList.appendChild(newPlayerCard);
  }
});

document.querySelector("#closeModal").addEventListener("click", () => {
  document.querySelector("#modal").classList.add("hidden");
});
