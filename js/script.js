console.log("Testing script.js")



window.onload = function() {
    
const gameScreen = document.getElementById("gameScreen");

const newGame = new Game()
const newPlayer = newGame.player
document.addEventListener("keydown", function(event) {
    newPlayer.playerMoves(event.key);
})

setTimeout(() => setInterval(createObstacle, 3000), 3000);

setTimeout(() => setInterval(createReward, 5000), 10000);

setInterval(moveObstacle, 20);

setInterval(moveReward, 20);

scoreCounterFunction(newGame);

// function gameLoop() {

//     if (gameIsOver) {
//         // add some sort of GAME OVER thing.
//     }

//     else {
//         hitByObstacle(obstacle) //WE NEED TO ADD FUNCTION 

//         requestAnimationFrame(gameLoop); //NOT SURE IF I HAVE TO DO ANYTHING ELSE HERE
//     }
// }

function createObstacle() {
    const obstacle = document.createElement("div");
    gameScreen.appendChild(obstacle);
    obstacle.className = "obstacle";
    obstacle.style.top = 0;
    obstacle.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px"; 
    newGame.obstaclesArray.push(obstacle);
}

function moveObstacle() {

    for (let i = 0; i < newGame.obstaclesArray.length; i++) {
        let currentPosition = parseInt(newGame.obstaclesArray[i].style.top);
        newGame.obstaclesArray[i].style.top = (currentPosition + 1) + "px";
        if(newGame.obstaclesArray[i].offsetTop>= 495) {
            newGame.obstaclesArray[i].remove();
            newGame.obstaclesArray.splice(i, 1);
        }
       

    }

}



function createReward() {
    const reward = document.createElement("div");
    gameScreen.appendChild(reward);
    reward.className = "reward";
    reward.style.top = 0;
    reward.style.left = (Math.random() * newGame.gameScreen.offsetWidth) + "px"; 
    newGame.rewardsArray.push(reward);
}

function moveReward() {

    for (let i = 0; i < newGame.rewardsArray.length; i++) {
        let currentPosition = parseInt(newGame.rewardsArray[i].style.top);
        newGame.rewardsArray[i].style.top = (currentPosition + 1) + "px";
        if(newGame.rewardsArray[i].offsetTop>= 495) {
            newGame.rewardsArray[i].remove();
            newGame.rewardsArray.splice(i, 1);
        }
       

    }

}

function scoreCounterFunction(newGame) {
    setInterval(() => {
        const scoreCounter = document.getElementById("scoreCounter");
        scoreCounter.innerHTML = newGame.score++;
        console.log(newGame.score)
    }, 700);
    
    
}

}



