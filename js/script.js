console.log("Testing script.js")



window.onload = function() {
    
const gameScreen = document.getElementById("gameScreen");

const newGame = new Game()
const newPlayer = newGame.player
document.addEventListener("keydown", function(event) {
    newPlayer.playerMoves(event.key);
})

setTimeout(() => setInterval(createObstacle, 3000), 3000);

setInterval(obstacleMoves, 20);



function gameLoop() {

    if (gameIsOver) {
        // add some sort of GAME OVER thing.
    }

    else {
        hitByObstacle() //WE NEED TO ADD FUNCTION 

        requestAnimationFrame(gameLoop); //NOT SURE IF I HAVE TO DO ANYTHING ELSE HERE
    }
}

function createObstacle() {
    const obstacle = document.createElement("div");
    gameScreen.appendChild(obstacle);
    obstacle.className = "obstacle";
    obstacle.style.top = 0;
    obstacle.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px"; 
    newGame.obstaclesArray.push(obstacle);
}

function obstacleMoves() {

    for (let i = 0; i < newGame.obstaclesArray.length; i++) {
        let currentPosition = parseInt(newGame.obstaclesArray[i].style.top);
        newGame.obstaclesArray[i].style.top = (currentPosition + 1) + "px";
    } 

    }

}



