
let highScoresList = document.getElementById("highScoresList");
let highScores = JSON.parse(localStorage.getItem('movesAndTime')) || [];

highScoresList.innerHTML = highScores
  .map(highScores => {
    return `<li class="high-score"> ${moveandTimeScore.name} - ${moveandTimeScore.moveScore} - ${moveandTimeScore.timeScore}</li>`;
  })
  .join("");