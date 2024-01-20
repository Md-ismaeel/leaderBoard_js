const playersList = [
  {
    name: "Rocky",
    country: "india",
    score: 80,
  },
  {
    name: "ismail",
    country: "india",
    score: 90,
  },
  {
    name: "JackJobs",
    country: "india",
    score: 70,
  },
];

function addPlayer(event) {
  event.preventDefault();

  const playerData = {
    name: `${document.getElementById("first-name").value} ${
      document.getElementById("last-name").value
    }`,
    country: document.getElementById("country").value,
    score: parseInt(document.getElementById("score").value),
  };

  playersList.push(playerData);
  updatePlayerList();
  clear();
}

function updatePlayerList() {
  const playerListElement = document.getElementById("player-list");
  playersList.sort((a, b) => b.score - a.score);

  playerListElement.innerHTML = "";

  playersList.forEach((player, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <p>${player.name}</p>
    <p>${player.country}</p>
    <p>${player.score}</p>
    <button onclick="deleteScoreHandler(${index})"><i class="fa-solid fa-trash"></i></button>
    <button onclick="increaseScoreHandler(${index})">+5</button>
    <button onclick="decreaseScoreHandler(${index})">-5</button>`;

    playerListElement.appendChild(listItem);
  });
}

function clear() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("country").value = "";
  document.getElementById("score").value = "";
}
function deleteScoreHandler(index) {
  playersList[index].score = 0;
  updatePlayerList();
}

function increaseScoreHandler(index) {
  playersList[index].score += 5;
  updatePlayerList();
}

function decreaseScoreHandler(index) {
  if (playersList[index].score <= 0) {
    playersList[index].score = 0;
  } else {
    playersList[index].score -= 5;
    updatePlayerList();
  }
}

window.onload = () => updatePlayerList();
