       
  
const username = document.getElementById('username');
   const saveScoreBtn = document.getElementById('save-Score');

            let totalTime = localStorage.getItem('totalTime');
             let totalMove = JSON.parse(localStorage.getItem('totalMoves'))
            var highScores = JSON.parse(localStorage.getItem('scores')) || [];
           
            username.addEventListener("keyup", () => {
                saveScoreBtn.disabled = !username.value;
            });
        
            let saveScore = (e) => {
                e.preventDefault();
                const moveandTimeScore = {
                    moveScore: totalMove,
                    timeScore :totalTime,
                    name: username.value,
                }
               
                highScores.push(moveandTimeScore);
                highScores.sort((a, b) => b.moveandTimeScore - a.moveandTimeScore);
            
                localStorage.setItem('scores', JSON.stringify(highScores));
 
                console.log(highScores);
            }; 