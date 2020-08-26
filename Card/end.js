       
  
const username = document.getElementById('username');
   const saveScoreBtn = document.getElementById('save-Score');

            const totalTime = localStorage.getItem('totalTime');
             const totalMove = localStorage.getItem('totalMoves')
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
                highScores = [];
                highScores.push(moveandTimeScore);
                highScores.sort((a, b) => b.moveandTimeScore - a.moveandTimeScore);
            
                localStorage.setItem('scores', JSON.stringify(highScores));
 
                console.log(highScores);
            }; 