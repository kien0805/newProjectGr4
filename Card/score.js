
const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem('moveandTimes')) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score"> ${moveandTimeScore.name} - ${moveandTimeScore.moveScore} - ${moveandTimeScore.timeScore}</li>`;
  })
  .join("");